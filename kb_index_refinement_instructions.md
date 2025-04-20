# AI Index Refinement Instructions (Standard)

**Goal:** Refine the category-level and top-level index files for a given library's knowledge base (KB) to maximize their utility for AI consumption, using metadata from already-refined markdown files.

**Target Specialist:** `technical-writer` or `context-condenser`

**Input:** The path to a library's processed KB directory (e.g., `kb/alpinejs-alpine/`), assuming the markdown files within have already undergone content refinement (including YAML frontmatter with `title`, `category`, `tags`, and an abstract `summary` replacing the basic one).

**Process:**

1.  **Scan Directory:** Identify all category subdirectories (e.g., `api`, `guide`, `misc`) within the input library directory.
2.  **Initialize Data Structures:** Prepare to build data for the new top-level index and new category-level indexes.
3.  **Process Each Category:** For each identified category subdirectory:
    *   Initialize an empty list for the new category index data.
    *   Initialize a set or frequency map to collect tags/keywords for this category.
    *   **Iterate through Markdown Files:** Find all `.md` files within the category directory. For each markdown file:
        *   Read the file content.
        *   Parse the YAML frontmatter using a reliable YAML parser. Extract `title`, `category` (verify it matches the directory), `tags` (list), and the abstract semantic `summary` (from the markdown body, typically the first paragraph after frontmatter/title). Handle missing fields gracefully (e.g., use filename if title missing, empty list for tags, empty string for summary).
        *   Add all `tags` from the frontmatter to the category's tag collection. Ensure tags are treated case-insensitively for collection but potentially stored in a consistent case (e.g., lowercase).
        *   Create an entry for the new category index containing:
            *   `filename`: The base filename (e.g., `alpine.js_directives_documentation.md`).
            *   `title`: The title from the frontmatter or filename.
            *   `summary`: The abstract semantic summary read from the markdown body.
            *   `tags`: The list of tags from the frontmatter.
        *   Append this entry to the new category index data list.
    *   **Finalize Category Index:**
        *   Sort the new category index data list alphabetically by `title`.
        *   Overwrite the existing `index.json` file within the category subdirectory (e.g., `kb/alpinejs-alpine/api/index.json`) with the newly generated, sorted list (JSON format, pretty-printed).
    *   **Prepare Top-Level Entry:**
        *   Determine the most frequent or representative `tags` collected for this category (e.g., top 15-20 unique tags, potentially weighted by frequency). Filter out overly generic terms if possible.
        *   Create an entry for the top-level index containing:
            *   `category`: The category name.
            *   `index_file`: The relative path to the category's `index.json` (e.g., `api/index.json`).
            *   `file_count`: The number of files processed in this category.
            *   `keywords`: The list of representative tags/keywords for the category.

4.  **Finalize Top-Level Index:**
    *   Sort the collected top-level index entries alphabetically by `category`.
    *   Overwrite the existing top-level `index.json` file for the library (e.g., `kb/alpinejs-alpine/index.json`) with the newly generated, sorted list (JSON format, pretty-printed).

**Output:** Updated `index.json` files (one top-level per library, one per category within the library) containing refined summaries and keywords derived directly from the AI-refined markdown content and frontmatter. Ensure output JSON is valid.