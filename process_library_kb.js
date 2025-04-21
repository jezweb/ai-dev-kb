const fs = require('fs');
const path = require('path');
const url = require('url');

// --- Helper Functions ---

/**
 * Sanitizes a string for use in file paths (lowercase, hyphenated).
 * Removes most non-alphanumeric characters except hyphens, underscores, and periods.
 * @param {string} name - The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitizeForPath(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9\-_\.]/g, ''); // Remove invalid characters
}

/**
 * Sanitizes a filename, ensuring it ends with .md.
 * Handles cases like removing existing non-markdown extensions.
 * @param {string} filename - The filename to sanitize.
 * @returns {string} The sanitized filename ending in .md.
 */
function sanitizeFilename(filename) {
    if (!filename) return 'unknown.md';
    let sanitized = filename
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-_\.]/g, '');

    // Ensure it ends with .md
    const ext = path.extname(sanitized);
    if (ext === '.mdx') {
        sanitized = sanitized.substring(0, sanitized.length - 4) + '.md';
    } else if (ext !== '.md') {
        // Remove existing extension if not .md or .mdx, then add .md
        if (ext) {
            sanitized = sanitized.substring(0, sanitized.length - ext.length);
        }
        sanitized += '.md';
    }

    // Handle cases like '.' or '..' or empty string after sanitization
    if (!sanitized || sanitized === '.md' || sanitized === '..md') {
        return 'unknown.md';
    }

    // Remove leading/trailing dots/hyphens that might remain after sanitization
    sanitized = sanitized.replace(/^[.-]+|[.-]+$/g, '');
    if (!sanitized || sanitized === '.md') {
         return 'unknown.md';
    }

    return sanitized;
}


/**
 * Parses the llms.txt content into snippet objects using a marker-focused approach.
 * Handles multi-line DESCRIPTION and CODE fields.
 * Handles blocks containing multiple LANGUAGE/DESCRIPTION/CODE sections under one TITLE/SOURCE.
 * @param {string} content - The content of the llms.txt file.
 * @returns {Array<object>} An array of snippet objects.
 */
function parseLlmsTxtRevised(content) {
    const allSnippets = [];
    const separator = '----------------------------------------';
    const blocks = content.split(separator);
    let snippetCounter = 1; // Global counter for fallback snippet IDs

    for (const block of blocks) {
        const trimmedBlock = block.trim();
        if (!trimmedBlock) continue;

        const lines = trimmedBlock.split('\n');
        let mainTitle = null;
        let mainSource = null;
        let firstContentLineIndex = -1;

        // 1. Find main TITLE and SOURCE
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const upperCaseLine = line.trim().toUpperCase();
            if (mainTitle === null && upperCaseLine.startsWith('TITLE:')) {
                mainTitle = line.substring('TITLE:'.length).trim();
            } else if (mainSource === null && upperCaseLine.startsWith('SOURCE:')) {
                mainSource = line.substring('SOURCE:'.length).trim();
            } else if (firstContentLineIndex === -1 && line.trim() !== '' && !upperCaseLine.startsWith('TITLE:') && !upperCaseLine.startsWith('SOURCE:')) {
                 firstContentLineIndex = i; // Mark potential start of content
            }
        }

        if (!mainTitle || !mainSource) {
            const preview = trimmedBlock.substring(0, 150).replace(/\n/g, ' ') + (trimmedBlock.length > 150 ? '...' : '');
            console.warn(`Skipping block (missing main TITLE or SOURCE): Content starts with "${preview}"`);
            continue;
        }
        if (firstContentLineIndex === -1) { // No content found after TITLE/SOURCE
             console.warn(`Skipping block "${mainTitle}" as no content found after TITLE/SOURCE.`);
             continue;
        }

        // 2. Process content lines to find LANGUAGE/DESCRIPTION/CODE groups
        let currentLanguage = null;
        let currentDescriptionLines = [];
        let currentCodeLines = [];
        let collecting = 'none'; // 'none', 'description', 'code'
        let subSnippetIndex = 0; // Counter for snippets within this block

        function finalizeAndPushSnippet() {
            // Only finalize if we actually collected some code lines
            if (currentCodeLines.length > 0) {
                const code = currentCodeLines.join('\n').trim();
                const description = currentDescriptionLines.join('\n').trim() || null;
                subSnippetIndex++;
                let snippet_id;
                try {
                    const parsedUrl = new url.URL(mainSource);
                    if (parsedUrl.hash && parsedUrl.hash.length > 1) {
                        const baseId = parsedUrl.hash.substring(1);
                        snippet_id = subSnippetIndex > 1 ? `${baseId}_${subSnippetIndex}` : baseId;
                    } else {
                        snippet_id = `snippet-${snippetCounter++}`;
                    }
                } catch (e) {
                    console.warn(`Could not parse SOURCE URL "${mainSource}" to generate snippet_id. Using counter.`);
                    snippet_id = `snippet-${snippetCounter++}`;
                }

                allSnippets.push({
                    title: mainTitle,
                    source: mainSource, // Use main source for grouping, specific URL generated later
                    language: currentLanguage,
                    description: description,
                    code: code,
                    snippet_id: snippet_id,
                });
            } else if (collecting === 'code' && currentCodeLines.length === 0) {
                 // Handle case where CODE: is present but empty
                 const description = currentDescriptionLines.join('\n').trim() || null;
                 subSnippetIndex++;
                 let snippet_id;
                 try {
                    const parsedUrl = new url.URL(mainSource);
                    if (parsedUrl.hash && parsedUrl.hash.length > 1) {
                        const baseId = parsedUrl.hash.substring(1);
                        snippet_id = subSnippetIndex > 1 ? `${baseId}_${subSnippetIndex}` : baseId;
                    } else {
                        snippet_id = `snippet-${snippetCounter++}`;
                    }
                 } catch (e) {
                    console.warn(`Could not parse SOURCE URL "${mainSource}" to generate snippet_id. Using counter.`);
                    snippet_id = `snippet-${snippetCounter++}`;
                 }
                 allSnippets.push({
                    title: mainTitle,
                    source: mainSource,
                    language: currentLanguage,
                    description: description,
                    code: "", // Empty code block
                    snippet_id: snippet_id,
                 });

            } else if (currentLanguage || currentDescriptionLines.length > 0) {
                 // Warn if we had LANGUAGE/DESCRIPTION but no CODE followed before the next marker/end
                 // console.warn(`Skipping potential sub-snippet within block "${mainTitle}" because CODE section was missing after LANGUAGE/DESCRIPTION.`);
            }
            resetSubSnippetState();
        }

        function resetSubSnippetState() {
            currentLanguage = null;
            currentDescriptionLines = [];
            currentCodeLines = [];
            collecting = 'none';
        }

        for (let i = firstContentLineIndex; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();
            const upperCaseLine = trimmedLine.toUpperCase();

            if (upperCaseLine.startsWith('LANGUAGE:')) {
                finalizeAndPushSnippet(); // Finalize previous before starting new
                const langValue = line.substring('LANGUAGE:'.length).trim();
                currentLanguage = langValue ? langValue : null;
                collecting = 'none';
            } else if (upperCaseLine.startsWith('DESCRIPTION:')) {
                finalizeAndPushSnippet(); // Finalize previous before starting new
                const firstDescLine = line.substring('DESCRIPTION:'.length).trimStart();
                currentDescriptionLines = firstDescLine ? [firstDescLine] : [];
                collecting = 'description';
            } else if (upperCaseLine.startsWith('CODE:')) {
                // Don't finalize here, description/language belong to this code
                const firstCodeLine = line.substring(line.toUpperCase().indexOf('CODE:') + 'CODE:'.length).trimStart();
                currentCodeLines = firstCodeLine ? [firstCodeLine] : [];
                collecting = 'code';
            } else {
                // Add line to current collection state
                if (collecting === 'code') {
                    currentCodeLines.push(line);
                } else if (collecting === 'description') {
                    currentDescriptionLines.push(line);
                }
                // Ignore lines if collecting is 'none'
            }
        }

        // Finalize the very last snippet collected in the block
        finalizeAndPushSnippet();
    }

    return allSnippets;
}


// --- Main Script Logic ---

// 1. Argument Parsing
const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error('Usage: node process_library_kb.js <inputFile> <libraryName> <outputBaseDir>');
  process.exit(1);
}
const [inputFile, libraryName, outputBaseDir] = args;
const sanitizedLibraryName = sanitizeForPath(libraryName);

// 2. Read and Parse Input File
let fileContent;
try {
  fileContent = fs.readFileSync(inputFile, 'utf8');
} catch (err) {
  console.error(`Error reading input file "${inputFile}":`, err.message);
  process.exit(1);
}

let snippets;
try {
    snippets = parseLlmsTxtRevised(fileContent);
    if (snippets.length === 0) {
        console.warn(`Warning: No valid snippets found in "${inputFile}".`);
        fs.writeFileSync('temp_index_output.json', JSON.stringify([], null, 2), 'utf8');
        console.log('No valid snippets found. Wrote empty index to temp_index_output.json');
        process.exit(0);
    }
} catch (err) {
    console.error(`Error parsing input file "${inputFile}":`, err.message);
    console.error(err.stack); // Log stack trace for better debugging
    process.exit(1);
}


// 3. Group Snippets by Base Source URL (Path Part)
const groupedSnippets = snippets.reduce((acc, snippet) => {
  try {
    // Ensure snippet.source is a valid string before parsing
    if (typeof snippet.source !== 'string' || !snippet.source) {
        console.warn(`Skipping snippet with invalid or missing SOURCE during grouping: Title "${snippet.title}"`);
        return acc;
    }
    const parsedUrl = new url.URL(snippet.source);
    // Group by origin + pathname (the file path part)
    const sourceFileKey = `${parsedUrl.origin}${parsedUrl.pathname}`;
    if (!acc[sourceFileKey]) {
      acc[sourceFileKey] = [];
    }
    acc[sourceFileKey].push(snippet);
  } catch (e) {
    // Catch URL parsing errors specifically
    console.warn(`Skipping snippet with invalid SOURCE URL "${snippet.source}" during grouping: ${e.message}`);
  }
  return acc;
}, {});

const indexEntries = [];

// 4. Bundling & Writing Files
for (const sourceFileKey in groupedSnippets) {
  const group = groupedSnippets[sourceFileKey];
  let bundledMarkdown = '';
  let relativeFilePath = ''; // To store the generated path for index entries

  try {
     // Ensure sourceFileKey is a valid string before parsing
    if (typeof sourceFileKey !== 'string' || !sourceFileKey) {
        console.error(`Error processing group: Invalid sourceFileKey "${sourceFileKey}"`);
        continue; // Skip this group
    }
    const parsedSourceUrl = new url.URL(sourceFileKey); // This might throw if sourceFileKey is invalid
    const sourceFilename = path.basename(parsedSourceUrl.pathname);
    const sanitizedFilename = sanitizeFilename(sourceFilename);

     // Prevent writing outside the intended directory structure
    if (sanitizedFilename.includes('..')) {
        console.error(`Error processing group: Invalid sanitized filename "${sanitizedFilename}" attempts path traversal.`);
        continue;
    }


    // Construct the relative path for output and index
    relativeFilePath = path.join(sanitizedLibraryName, sanitizedFilename).replace(/\\/g, '/'); // Use forward slashes
    const outputFilePath = path.join(outputBaseDir, relativeFilePath);

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(outputFilePath);
    fs.mkdirSync(outputDir, { recursive: true });

    // Add header to the bundled file
    bundledMarkdown += `# Source File: ${sourceFileKey}\n\n`;

    // Process each snippet in the group
    group.forEach((snippet) => {
      // Basic validation for snippet object structure before processing
      // Allow snippet.code to be an empty string, but not null/undefined
      if (!snippet || typeof snippet.title !== 'string' || typeof snippet.source !== 'string' || typeof snippet.code !== 'string' || typeof snippet.snippet_id !== 'string') {
          console.warn(`Skipping invalid snippet object within group "${sourceFileKey}":`, snippet);
          return; // Skip this snippet within the group
      }

      bundledMarkdown += '---\n\n'; // Separator between snippets
      bundledMarkdown += `## ${snippet.title}\n`;
      // Reconstruct source URL with fragment for accuracy in output
      let snippetSourceUrl = snippet.source; // Default to original source
       try {
           // Attempt to parse the original source URL to reconstruct with snippet_id
           const base = new url.URL(snippet.source);
           // Ensure snippet_id is valid before appending
           if (snippet.snippet_id && /^[a-zA-Z0-9_\-]+(?:_\d+)?$/.test(snippet.snippet_id)) {
                snippetSourceUrl = `${base.origin}${base.pathname}#${snippet.snippet_id}`;
           } else {
                console.warn(`Using original source URL for snippet ID "${snippet.snippet_id}" due to potentially invalid characters or format.`);
           }
       } catch(e) {
           console.warn(`Could not reconstruct source URL for snippet ID ${snippet.snippet_id}, using original: ${snippet.source}`);
       }

      bundledMarkdown += `**Source:** ${snippetSourceUrl}\n`;
      if (snippet.language) {
        bundledMarkdown += `**Language:** ${snippet.language}\n`;
      }
      bundledMarkdown += '\n'; // Blank line before description/code

      if (snippet.description) {
        bundledMarkdown += `${snippet.description}\n\n`;
      }

      const codeLang = snippet.language || ''; // Use empty string if language is missing for ``` block
      bundledMarkdown += `\`\`\`${codeLang}\n`;
      bundledMarkdown += `${snippet.code}\n`; // Assumes snippet.code is already trimmed
      bundledMarkdown += `\`\`\`\n\n`;

      // 5. Add entry to index (for each original snippet)
      indexEntries.push({
        source: snippetSourceUrl, // Use the reconstructed source URL
        title: snippet.title,
        language: snippet.language || null, // Keep null if originally missing
        file_path: relativeFilePath, // Already has forward slashes
        snippet_id: snippet.snippet_id,
      });
    });

    // Write the bundled markdown file
    fs.writeFileSync(outputFilePath, bundledMarkdown.trimEnd(), 'utf8'); // Trim trailing whitespace/newlines
    // console.log(`Successfully wrote bundled file: ${outputFilePath}`); // Optional logging

  } catch (err) {
    // Catch errors during URL parsing or file writing for this group
    console.error(`Error processing group for "${sourceFileKey}":`, err.message);
    console.error(err.stack);
    // Continue to next group if possible
  }
}

// 6. Write Index JSON to File
try {
    // Sort index entries alphabetically by source URL for consistency
    indexEntries.sort((a, b) => {
        // Handle potential null/undefined sources during sort
        const sourceA = a.source || '';
        const sourceB = b.source || '';
        return sourceA.localeCompare(sourceB);
    });
    fs.writeFileSync('temp_index_output.json', JSON.stringify(indexEntries, null, 2), 'utf8');
    console.log(`Index entries written to temp_index_output.json (${indexEntries.length} entries)`);
} catch (err) {
    console.error('Error writing index file:', err.message);
    process.exit(1);
}

console.log('Processing complete.');