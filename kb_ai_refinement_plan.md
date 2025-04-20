# Plan: AI-Driven Knowledge Base Refinement

This document outlines a plan for the next phase of knowledge base (KB) enhancement, focusing on using AI capabilities to optimize the content within the generated markdown files for superior utility by AI developer modes. This builds upon the script-based structural organization already established (see `kb_generation_process.md`).

**Goal:** Transform the current KB content (consolidated markdown files with basic summaries) into semantically rich, highly structured, and easily digestible knowledge units optimized for AI consumption and retrieval.

**Current State:**
*   KB exists in `kb/[library_name]/` (e.g., `kb/vuejs/`).
*   Hierarchical index structure:
    *   Top-level `index.json` (categories, keywords, links to category indexes).
    *   Category-level `index.json` files (listing files within the category, with summaries including page title + first few snippet titles).
*   Markdown files are categorized into subdirectories.
*   Each markdown file consolidates snippets from an original source page and includes a basic summary listing the first few snippet titles.

**Proposed AI Refinement Tasks (Delegation Plan):**

This work would ideally be delegated to an AI specialist mode (e.g., `technical-writer`, `context-condenser`, or a custom `kb-optimizer`). The specialist would process each markdown file within the KB directory structure (e.g., iterating through `kb/vuejs/**/*.md`).

**For each markdown file, the specialist should perform the following:**

1.  **Generate Abstract Semantic Summary:**
    *   **Objective:** Replace the existing `**Summary:** ...` line (which lists snippet titles) with a concise, abstract paragraph (or bullet points) summarizing the core concepts, purpose, and key takeaways of the entire file (representing the original documentation page).
    *   **Instructions:** Analyze the overall content, including all snippet titles and descriptions. Synthesize the main themes and intended knowledge transfer. The summary should be optimized for an AI trying to quickly determine the file's relevance to a specific task.
    *   **Example (Before):** `**Summary:** This file covers topics related to "Vue.js Component Lifecycle Hooks Documentation". Key snippets include: Defining renderTriggered Hook Interface, Defining mounted Hook Interface...`
    *   **Example (After):** `**Summary:** Explains the various lifecycle hooks available in Vue.js components (both Options and Composition API), detailing their execution order and common use cases like DOM manipulation after mounting (`mounted`, `onMounted`) or cleanup before unmounting (`unmounted`, `onUnmounted`). Covers hooks related to updates, error handling, and server-side rendering.`

2.  **Extract Keywords & Concepts (YAML Frontmatter):**
    *   **Objective:** Add a YAML frontmatter block at the very top of each markdown file containing structured metadata.
    *   **Instructions:** Analyze the file content (page title, summaries, snippet titles, descriptions, code) to identify key terms, API names, function names, component names, directives, concepts, and related topics. Populate a `tags` or `keywords` list in the frontmatter.
    *   **Example Frontmatter:**
        ```yaml
        ---
        title: "Vue.js Component Lifecycle Hooks Documentation"
        category: "guide"
        tags:
          - vue
          - component
          - lifecycle
          - hooks
          - mounted
          - onMounted
          - created
          - setup
          - unmounted
          - onUnmounted
          - updated
          - onUpdated
          - errorCaptured
          - composition api
          - options api
        ---
        ```
    *   **Note:** The `title` and `category` could also be moved into the frontmatter for consistency.

3.  **Standardize Structure & Formatting:**
    *   **Objective:** Ensure consistent and clean markdown structure.
    *   **Instructions:** Verify that snippet titles use `##`, descriptions are clear, code blocks are correctly fenced with language identifiers, and appropriate markdown (bolding, lists) is used for clarity. Ensure consistent use of separators (`---`) between snippets.

4.  **Enhance Snippet Descriptions:**
    *   **Objective:** Improve the clarity and context of individual snippet descriptions.
    *   **Instructions:** For each snippet, review the `**Description:**`. If it's merely repeating the title or is too brief, expand it slightly based on the code example and its purpose within the context of the overall page topic. Focus on *what* the code does and *why* it's relevant.

5.  **(Optional) Add Cross-References:**
    *   **Objective:** Create links between related concepts within the KB.
    *   **Instructions:** Identify mentions of key concepts (e.g., `ref`, `props`, `v-model`) within the text or descriptions. If a dedicated file exists for that concept in the KB (discoverable via the index), add a relative markdown link to it. (e.g., `See [[../api/ref.md|ref]] for more details.`). This requires careful implementation to avoid broken links.

**Post-Refinement Steps (Coordination):**

1.  **Update Index Generation:** Modify the `process_vuejs_kb.js` script (or create a new indexer script) to:
    *   Read the YAML frontmatter from each processed markdown file.
    *   Use the extracted `tags`/`keywords` to populate a richer `keywords` field in the category-level and potentially the top-level index files.
    *   Potentially use the AI-generated abstract summary from the frontmatter (if added there) for the `summary` field in the category-level index, instead of the current title/snippet-title combination.
2.  **Re-run Indexer:** Execute the updated script to generate the final, AI-optimized index files based on the refined markdown content.

**Expected Outcome:**

*   A knowledge base where each file has a high-quality semantic summary and structured keyword metadata.
*   Highly optimized index files (top-level and category-level) that include these keywords and potentially better summaries, enabling more accurate and efficient searching by AI developer modes.
*   Improved overall utility and discoverability of the knowledge within the KB for AI agents.