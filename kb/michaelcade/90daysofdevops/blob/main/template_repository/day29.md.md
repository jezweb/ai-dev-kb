# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day29.md
Language: multiple

## Snippet: Adding Changes to Git Staging Area
Description: Command to stage changes for commit in Git. This adds your modified files to the staging area in preparation for committing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day29.md#2025-04-17_snippet_2
Language: bash

```bash
git add .
```

## Snippet: Creating a New Branch in Git
Description: Command to create a new branch in Git for your feature or bug fix. This allows you to work independently from the main branch.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day29.md#2025-04-17_snippet_1
Language: bash

```bash
git checkout -b {new-branch-name}
```

## Snippet: Pull Request Template Example
Description: Markdown template for creating a pull request with structured sections for description, changes made, related issues, and checklists. This helps maintainers understand the purpose and scope of your contribution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day29.md#2025-04-17_snippet_5
Language: markdown

```markdown
## Description

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context. List any dependencies that are required for this change.

Fixes # (issue)

## Type of change

Please delete options that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

## How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration.

- [ ] Test A
- [ ] Test B

## Checklist:

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules
```

## Snippet: Cloning a Forked Repository Using Git
Description: Command to clone a forked repository to your local machine using Git. This creates a local copy of your forked repository that you can work with.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day29.md#2025-04-17_snippet_0
Language: bash

```bash
git clone https://github.com/{your-username}/{forked-repository-name}.git
```

## Snippet: Pushing Changes to Remote Repository
Description: Command to push your changes and branch to your forked repository on GitHub. This uploads your local commits to your remote fork.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day29.md#2025-04-17_snippet_4
Language: bash

```bash
git push origin {branch-name}
```

## Snippet: Committing Changes with Git
Description: Command to commit staged changes with a descriptive message. This creates a snapshot of your changes with an explanation of what was modified.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day29.md#2025-04-17_snippet_3
Language: bash

```bash
git commit -m "Your detailed commit message"
```