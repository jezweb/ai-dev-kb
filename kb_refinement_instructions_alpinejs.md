# AI Refinement Instructions: AlpineJS Knowledge Base

**Goal:** Refine the content of markdown files within the `kb/alpinejs-alpine/` directory to optimize them for AI consumption and retrieval. Each file represents a consolidated page from the original AlpineJS documentation.

**Target Specialist:** `technical-writer` or `context-condenser`

**Input:** Markdown files located within `kb/alpinejs-alpine/` subdirectories (e.g., `kb/alpinejs-alpine/guide/installation.md`).

**Process (For EACH input markdown file):**

1.  **Read & Understand:** Read the entire content of the markdown file, including the existing basic summary and all contained snippets (titles, descriptions, code). Understand the main topic derived from the original documentation page title (the `# Title` line).

2.  **Generate Abstract Semantic Summary:**
    *   **Task:** Replace the existing `**Summary:** ...` line with a new, concise paragraph (2-4 sentences) that captures the core concepts and purpose of the file. Focus on *what* the user learns from this page, not just *which* snippets are included.
    *   **Example Focus:** For AlpineJS, highlight the directives, magic properties, concepts (like state management, reactivity, plugins), or setup processes discussed.

3.  **Extract Keywords & Concepts (YAML Frontmatter):**
    *   **Task:** Add a YAML frontmatter block at the very top of the file. Extract relevant keywords and concepts from the entire file content.
    *   **Instructions:**
        *   Include `title:` (the original page title from the `# Title` line).
        *   Include `category:` (the name of the parent directory, e.g., `guide`, `api`).
        *   Create a `tags:` list. Prioritize extracting:
            *   Specific AlpineJS directives (e.g., `x-data`, `x-init`, `x-show`, `x-bind`, `x-on`, `x-for`, `x-if`, `x-model`, `x-transition`, `x-effect`, `x-cloak`).
            *   Magic properties (e.g., `$el`, `$refs`, `$store`, `$watch`, `$dispatch`, `$nextTick`, `$root`, `$data`, `$id`).
            *   Core concepts (e.g., `initialization`, `state`, `reactivity`, `events`, `binding`, `components`, `plugins`, `globals`, `cdn`, `bundler`, `scope`).
            *   Related technologies if mentioned (e.g., `javascript`, `html`, `css`, `livewire`).
        *   Keep tags concise, lowercase, and use hyphens for multi-word terms (e.g., `composition-api`). Aim for 5-15 relevant tags per file.
    *   **Example Frontmatter:**
        ```yaml
        ---
        title: "Alpine.js Core Concepts: x-data"
        category: "guide"
        tags:
          - alpinejs
          - core-concept
          - directive
          - x-data
          - state
          - initialization
          - scope
          - reactivity
          - component
        ---
        ```

4.  **Standardize Structure & Formatting:**
    *   **Task:** Ensure consistent markdown.
    *   **Instructions:**
        *   Verify the main title uses `# Title`.
        *   Verify the new abstract summary follows as `**Summary:** [Your summary here]`.
        *   Verify a `---` separator exists after the summary.
        *   Verify each snippet title uses `## Snippet Title`.
        *   Verify snippet descriptions use `**Description:** ...`.
        *   Verify code blocks are correctly fenced with language identifiers (e.g., ```html, ```javascript).
        *   Ensure a `---` separator exists between distinct snippets.

5.  **Enhance Snippet Descriptions:**
    *   **Task:** Improve clarity and context for each snippet's description.
    *   **Instructions:** Review the `**Description:**`. If it's too brief or just repeats the title, expand it slightly (1-2 sentences) based on the code example and its purpose within the context of the file's main topic. Explain *why* this snippet is useful or *what specific aspect* of AlpineJS it demonstrates.

6.  **(Optional - Low Priority) Add Cross-References:**
    *   **Task:** If you identify clear mentions of other core AlpineJS directives or magic properties within a description, consider adding a relative markdown link *if* you are confident a corresponding file exists based on the likely filename structure (e.g., `[[../api/x-bind.md|x-bind]]`). Use sparingly and only for high-confidence links.

**Output:** Overwrite the original markdown file with the refined content, including the new YAML frontmatter and abstract summary.