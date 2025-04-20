# AI Refinement Instructions (Generic Placeholder)

**Goal:** Refine the content of markdown files within a library's KB directory to optimize them for AI consumption.

**Target Specialist:** `technical-writer` or `context-condenser`

**Input:** Markdown files located within a library's KB directory (e.g., `kb/some-library/`).

**Process (For EACH input markdown file):**

1.  **Read & Understand:** Read the file content.
2.  **Generate Abstract Semantic Summary:** Replace the existing `**Summary:** ...` line with a concise, abstract paragraph (2-4 sentences) summarizing the core concepts.
3.  **Extract Keywords & Concepts (YAML Frontmatter):**
    *   Add YAML frontmatter (`---`).
    *   Include `title:` (original page title).
    *   Include `category:` (parent directory name).
    *   Create a `tags:` list with 5-15 relevant keywords/concepts extracted from the content. Use lowercase and hyphens.
4.  **Standardize Structure & Formatting:** Ensure consistent markdown (`#`, `##`, `**Description:**`, code fences, `---` separators).
5.  **Enhance Snippet Descriptions:** Briefly clarify or expand descriptions where needed.
6.  **Output:** Overwrite the original file with refined content.