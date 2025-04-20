#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');
const process = require('process');

const libraryListFile = 'library-list.txt';
const sourceJsonDir = 'source_json';
const archiveDir = path.join(sourceJsonDir, 'archive'); // Archive directory
const kbScript = 'create_kb_from_json.js';
const token = '91405'; // Assuming this token is reusable or needs updating
const maxLibrariesToTest = -1; // Set to -1 to process all, or a positive number to limit for testing

// --- Configuration for Splitting Large Files ---
const fileSizeThresholdMB = 10; // Split files larger than 10 MB
const snippetsPerChunk = 10000; // Target number of snippets per chunk file
// --- End Configuration ---

// Delay range in milliseconds
const minDelayMs = 30 * 1000; // 30 seconds
const maxDelayMs = 180 * 1000; // 180 seconds

// Helper function for sleep
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to extract library name and construct download URL
function parseLibraryUrl(url) {
  try {
    const urlObject = new URL(url);
    const pathParts = urlObject.pathname.split('/').filter(Boolean);
    let libraryName = 'unknown';
    if (pathParts.length >= 2) {
      libraryName = `${pathParts[0]}-${pathParts[1]}`
                      .replace(/[^a-zA-Z0-9_-]/g, '_')
                      .replace(/_+/g, '_');
    } else if (pathParts.length === 1) {
       libraryName = pathParts[0].replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_');
    }
    const downloadUrl = `${url.replace(/\/$/, '')}/llms.json?tokens=${token}`;
    return { libraryName, downloadUrl };
  } catch (e) {
    console.error(`Error parsing URL "${url}": ${e.message}`);
  }
  return null;
}

// Function to split a large JSON file and archive the original
function splitJsonFile(filePath, libraryName) {
    console.log(`File ${filePath} exceeds threshold (${fileSizeThresholdMB}MB). Splitting...`);
    const chunkFilePaths = [];
    const archivePath = path.join(archiveDir, path.basename(filePath)); // Path for original file archive
    try {
        // Ensure archive directory exists
        if (!fs.existsSync(archiveDir)) {
            fs.mkdirSync(archiveDir, { recursive: true });
        }

        const rawData = fs.readFileSync(filePath, 'utf-8');
        const allSnippets = JSON.parse(rawData);

        if (!Array.isArray(allSnippets)) {
            console.error(`Error: Expected an array in ${filePath}, but got ${typeof allSnippets}. Cannot split.`);
            // Attempt to archive the problematic file anyway
            try { fs.renameSync(filePath, archivePath); console.log(`Archived problematic file: ${archivePath}`); } catch (e) { console.error(`Failed to archive problematic file ${filePath}: ${e.message}`);}
            return null; // Indicate failure
        }

        const totalSnippets = allSnippets.length;
        const numChunks = Math.ceil(totalSnippets / snippetsPerChunk);
        console.log(`Splitting ${totalSnippets} snippets into ${numChunks} chunks of ~${snippetsPerChunk}...`);

        for (let i = 0; i < numChunks; i++) {
            const chunkStart = i * snippetsPerChunk;
            const chunkEnd = chunkStart + snippetsPerChunk;
            const chunkData = allSnippets.slice(chunkStart, chunkEnd);
            const chunkFileName = `${libraryName}_llms_part_${i + 1}.json`;
            const chunkFilePath = path.join(sourceJsonDir, chunkFileName);

            fs.writeFileSync(chunkFilePath, JSON.stringify(chunkData));
            chunkFilePaths.push(chunkFilePath);
            console.log(` - Created chunk: ${chunkFilePath} (${chunkData.length} snippets)`);
        }

        // Archive original large file instead of deleting
        fs.renameSync(filePath, archivePath);
        console.log(`Archived original large file to: ${archivePath}`);
        return chunkFilePaths;

    } catch (error) {
        console.error(`Error splitting file ${filePath}: ${error.message}`);
        // Attempt to archive the problematic file if it still exists
        if (fs.existsSync(filePath)) {
             try { fs.renameSync(filePath, archivePath); console.log(`Archived problematic file after error: ${archivePath}`); } catch (e) { console.error(`Failed to archive problematic file ${filePath} after error: ${e.message}`);}
        }
        return null; // Indicate failure
    }
}

// Function to run a command synchronously with error handling
function runCommandSync(command, description) {
    try {
        console.log(`Executing: ${command}`);
        execSync(command, { stdio: 'inherit' });
        console.log(`Successfully executed: ${description}`);
        return true;
    } catch (error) {
        console.error(`Error executing ${description}. Command exited with code: ${error.status}.`);
        console.error(`Command was: ${command}`);
        return false;
    }
}

// Function to move a file to the archive
function archiveFile(filePath) {
    if (!fs.existsSync(filePath)) return; // File doesn't exist
    const archivePath = path.join(archiveDir, path.basename(filePath));
    try {
        // Ensure archive directory exists
        if (!fs.existsSync(archiveDir)) {
            fs.mkdirSync(archiveDir, { recursive: true });
        }
        fs.renameSync(filePath, archivePath);
        console.log(`Archived processed file: ${archivePath}`);
    } catch (error) {
        console.error(`Failed to archive file ${filePath}: ${error.message}`);
    }
}


// Function to determine which refinement instructions to use
// ... (getRefinementInstructionsPath remains the same) ...
function getRefinementInstructionsPath(libraryName) {
    const specificInstructions = `kb_refinement_instructions_${libraryName}.md`;
    if (fs.existsSync(specificInstructions)) {
        return specificInstructions;
    }
    console.warn(`Specific instructions not found for ${libraryName}, using generic.`);
    return 'kb_refinement_instructions_generic.md'; // Fallback
}

// Function to trigger AI refinement task (DOES NOT WAIT)
// ... (triggerAiRefinement remains the same) ...
function triggerAiRefinement(libraryName) {
    const kbPath = path.join('kb', libraryName);
    const instructionPath = getRefinementInstructionsPath(libraryName);

    if (!fs.existsSync(instructionPath)) {
        console.error(`Error: Cannot trigger refinement. Instruction file not found: ${instructionPath}`);
        return false;
    }

    console.log(`Triggering AI Content Refinement for "${libraryName}" using instructions: ${instructionPath}`);
    const messageContent = `
**Goal:** Refine ${libraryName} Knowledge Base Files for AI Consumption.
**Context:** The initial KB structure has been generated in \`${kbPath}/\`. Now, refine the markdown files within its subdirectories.
**Specific Instructions:** Follow the detailed instructions outlined in the file: \`${instructionPath}\`.
**Files to Process:** Process *all* \`.md\` files located within the \`${kbPath}/\` directory and its subdirectories (api, guide, misc, etc.).
**Key Tasks (Summarized from Instructions File):**
1. Read each markdown file.
2. Replace the existing basic summary line with a new, abstract semantic summary.
3. Add a YAML frontmatter block at the top containing \`title\`, \`category\`, and relevant \`tags\`.
4. Ensure consistent markdown formatting.
5. Enhance snippet descriptions for clarity.
6. (Optional/Low Priority) Add cross-references if highly confident.
7. Overwrite the original file with the refined content.
**Acceptance Criteria:** All specified markdown files in the \`${kbPath}/\` subdirectories are updated in place with YAML frontmatter, abstract summaries, enhanced descriptions, and consistent formatting.
    `.trim();

    const escapedMessage = JSON.stringify(messageContent);
    const newTaskCommand = `<new_task><mode>technical-writer</mode><message>${escapedMessage}</message></new_task>`;

    console.log("--- AI REFINEMENT TASK ---");
    console.log("If <new_task> were a CLI tool, would execute something like:");
    console.log(newTaskCommand);
    console.log("--- (Task Triggered - Runs Asynchronously) ---");
    return true;
}


async function processLibraries() {
  console.log(`Reading library list from: ${libraryListFile}`);
  // Basic checks
  if (!fs.existsSync(libraryListFile)) { console.error(`Error: Library list file not found at ${libraryListFile}`); process.exit(1); }
  if (!fs.existsSync(kbScript)) { console.error(`Error: KB generation script not found at ${kbScript}`); process.exit(1); }
  if (!fs.existsSync(sourceJsonDir)) { fs.mkdirSync(sourceJsonDir, { recursive: true }); }
  if (!fs.existsSync(archiveDir)) { fs.mkdirSync(archiveDir, { recursive: true }); } // Ensure archive dir exists

  const allUrls = fs.readFileSync(libraryListFile, 'utf-8').split('\n').filter(line => line.trim() !== '');
  const urlsToProcess = maxLibrariesToTest > 0 ? allUrls.slice(0, maxLibrariesToTest) : allUrls;
  const totalToProcess = urlsToProcess.length;
  console.log(`Found ${allUrls.length} total URLs. Processing ${totalToProcess} libraries.`);

  for (let i = 0; i < totalToProcess; i++) {
    const url = urlsToProcess[i].trim();
    const parsed = parseLibraryUrl(url);

    if (!parsed) { console.warn(`Skipping invalid URL: ${url}`); continue; }

    const { libraryName, downloadUrl } = parsed;
    const outputJsonPath = path.join(sourceJsonDir, `${libraryName}_llms.json`);
    let filesToProcess = []; // Holds paths of file(s) or chunk(s) to process
    let originalFilePath = outputJsonPath; // Keep track of the original download path
    let downloadSuccess = false;

    // --- Wait ---
    const delay = Math.floor(Math.random() * (maxDelayMs - minDelayMs + 1)) + minDelayMs;
    console.log(`\n(${i + 1}/${totalToProcess}) Waiting for ${Math.round(delay / 1000)}s before processing "${libraryName}"...`);
    await sleep(delay);

    // --- Download ---
    console.log(`Attempting to download: ${downloadUrl}`);
    const curlCommand = `curl --fail --show-error --location -o "${outputJsonPath}" "${downloadUrl}"`;
    try {
      execSync(curlCommand, { stdio: 'inherit' });
      console.log(`Successfully downloaded to: ${outputJsonPath}`);
      downloadSuccess = true;
    } catch (error) {
      console.error(`Error downloading "${libraryName}". curl exited with code: ${error.status}. Skipping.`);
      if (fs.existsSync(outputJsonPath)) { try { fs.unlinkSync(outputJsonPath); } catch (_) {} } // Clean up failed download
    }

    // --- Check Size & Split ---
    if (downloadSuccess) {
        try {
            const stats = fs.statSync(outputJsonPath);
            const fileSizeMB = stats.size / (1024 * 1024);
            if (fileSizeMB > fileSizeThresholdMB) {
                const splitResult = splitJsonFile(outputJsonPath, libraryName); // Moves original to archive
                if (splitResult) {
                    filesToProcess = splitResult; // Use the chunk paths
                    originalFilePath = null; // Original was moved by splitJsonFile
                } else {
                    downloadSuccess = false; // Splitting failed
                    console.error(`Failed to split large file for ${libraryName}. Skipping processing.`);
                }
            } else {
                filesToProcess = [outputJsonPath]; // Process the single downloaded file
            }
        } catch (statError) {
            console.error(`Error getting file stats for ${outputJsonPath}: ${statError.message}. Skipping processing.`);
            downloadSuccess = false;
        }
    }

    // --- Process Chunks/File ---
    let allProcessed = downloadSuccess;
    if (downloadSuccess && filesToProcess.length > 0) {
      console.log(`Processing ${filesToProcess.length} file(s)/chunk(s) for "${libraryName}"...`);
      for (const filePath of filesToProcess) {
        const nodeCommand = `node "${kbScript}" "${filePath}" "${libraryName}"`;
        const success = runCommandSync(nodeCommand, `process file ${path.basename(filePath)}`);
        if (!success) {
            allProcessed = false;
            console.error(`Stopping processing for "${libraryName}" due to error in file: ${path.basename(filePath)}`);
            break;
        }
      }
    } else if (downloadSuccess) {
        console.warn(`No file paths to process for ${libraryName} after download/split check.`);
        allProcessed = false;
    }

    // --- Archive Processed Files ---
    if (allProcessed) {
        filesToProcess.forEach(filePath => archiveFile(filePath)); // Archive chunks or the single file
    } else if (originalFilePath) {
        // If download was ok but processing failed for a non-split file, archive the original
        archiveFile(originalFilePath);
    } // Chunks are archived by splitJsonFile on error or after processing

    // --- Trigger AI Refinement (if processed) ---
    let refinementTriggered = false;
    if (allProcessed) {
        refinementTriggered = triggerAiRefinement(libraryName);
        if (!refinementTriggered) {
            console.error(`Failed to trigger AI refinement for ${libraryName}. Index finalization will use pre-refinement data.`);
        }
    }

    // --- Finalize Index (if processed - uses pre-refinement data initially) ---
    if (allProcessed) {
        console.log(`Finalizing index for "${libraryName}" (using pre-refinement data)...`);
        console.warn(`NOTE: Run 'node ${kbScript} --finalize-index ${libraryName}' again manually after AI refinement task completes to update index with tags.`);
        const finalizeCommand = `node "${kbScript}" --finalize-index "${libraryName}"`;
        exec(finalizeCommand, (error, stdout, stderr) => {
            if (error) { console.error(`Error finalizing index for ${libraryName}: ${error.message}`); if (stderr) console.error(`Finalize stderr: ${stderr}`); return; }
            if (stdout) console.log(`Finalize stdout for ${libraryName}: ${stdout}`);
            console.log(`Initial index finalization initiated for "${libraryName}".`);
        });
    } else if (downloadSuccess) {
        console.error(`Did not finalize index or trigger refinement for "${libraryName}" because processing failed.`);
    }
     // No else needed if download failed

  } // End loop through libraries

  console.log("\nBatch processing script finished.");
}

processLibraries().catch(error => {
  console.error("An unexpected error occurred during batch processing:", error);
  process.exit(1);
});