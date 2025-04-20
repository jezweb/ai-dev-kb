# Workflow: Generating AI Knowledge Bases from `llms.json` Files

This document outlines the repeatable workflow for processing `llms.json` files (containing documentation snippets) into structured, indexed knowledge bases (KBs) suitable for AI developer modes. This workflow supports processing multiple libraries in batch.

**Prerequisites:**

1.  **Node.js:** Ensure Node.js (which includes npm) is installed on the system where the processing will occur.
2.  **Scripts:**
    *   `create_kb_from_json.js`: The script that processes a single downloaded `llms.json` file into the KB structure.
    *   `batch_process_kbs.js`: The script that orchestrates downloading and processing multiple libraries.
3.  **Library List:** A text file (e.g., `library-list.txt`) containing the base Context7 URLs for the libraries to process, one URL per line. Example line: `https://context7.com/vuejs/docs`
4.  **Network Access:** Ability to download files from `context7.com`.

**Workflow Steps:**

1.  **Prepare Library List:**
    *   Ensure your `library-list.txt` (or similarly named file) contains the correct base URLs for all desired libraries.

2.  **Execute the Batch Script:**
    *   Open a terminal or command prompt in the directory containing the scripts (`batch_process_kbs.js`, `create_kb_from_json.js`) and the `library-list.txt` file.
    *   Run the batch script using Node.js.
    *   **Syntax:**
        ```bash
        node batch_process_kbs.js
        ```
    *   **Process:** The script will:
        *   Read the URLs from `library-list.txt`.
        *   For each URL:
            *   Parse the library name and construct the download URL.
            *   Wait for a random delay (30-180 seconds) to avoid rate limiting.
            *   Attempt to download the `llms.json` file into the `source_json/` directory.
            *   If download is successful, call `create_kb_from_json.js` to generate the KB structure in `kb/[library_name]/`.
            *   Log progress and any errors encountered.
    *   **Note:** This process can take a significant amount of time depending on the number of libraries and the random delays. It's designed to run potentially unattended.

3.  **Review Output:**
    *   After the script completes, check the `kb/` directory. You should find subdirectories for each successfully processed library (e.g., `kb/vuejs/`, `kb/react/`).
    *   Each library directory will contain the hierarchical structure:
        *   Category subdirectories (`guide`, `api`, etc.).
        *   Markdown files within categories.
        *   `index.json` files within each category.
        *   A top-level `index.json` for the library.
    *   Check the `source_json/archive/` directory for the original downloaded `llms.json` files (or their chunks if they were split). Files are moved here after successful processing. Failed downloads or processing errors might leave files in `source_json/` or they might be absent.
    *   Review the terminal output from `batch_process_kbs.js` for any download, splitting, or processing errors for specific libraries.

4.  **Integrate with AI Modes:**
    *   The generated KB structures within the `kb/` directory are ready for use.
    *   Consider creating a master index (`kb/index.json`) listing all generated library KBs (see `kb_considerations.md`).
    *   Instruct AI modes on how to discover available KBs (e.g., via the master index or by listing directories) and how to use the hierarchical index structure for navigation.

**Updating/Adding Libraries:**

*   **Adding:** Add the new library's base URL to `library-list.txt` and re-run `batch_process_kbs.js`. The script will attempt to download and process the new library.
*   **Updating:** To force an update for an existing library's KB (e.g., after source documentation changes), you need to ensure a fresh download occurs. The simplest way is to manually delete the library's archived file(s) from `source_json/archive/` (e.g., `source_json/archive/vuejs-docs_llms.json` or `source_json/archive/mongodb-docs_llms_part_*.json`) before running the batch script. This forces a new download attempt. Alternatively, modify the batch script to include an `--update` or `--force` flag.

This workflow provides a scalable method for generating and maintaining multiple KBs.