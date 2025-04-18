# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md
Language: bash

## Snippet: Viewing Commit History in Git
Description: Use various 'git log' commands to view the commit history in different formats, including one-line and reverse order.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_4
Language: bash

```bash
git log
git log --oneline
git log --oneline --reverse
```

## Snippet: Rebasing a Feature Branch onto Main in Git
Description: Commands for rebasing a feature branch onto the main branch. This approach rewrites project history by creating new commits for each original commit, resulting in a cleaner, linear project history compared to merging.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_10
Language: bash

```bash
git checkout feature
git rebase main
```

## Snippet: Inspecting Specific Commits in Git
Description: Use the 'git show' command to view details of a specific commit, including changes made in that commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_5
Language: bash

```bash
git show <commit ID>
git show HEAD~1
```

## Snippet: Discarding Local Changes in Git
Description: Use 'git restore' and 'git clean' commands to discard local changes and remove untracked files from the working directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_8
Language: bash

```bash
git restore .
git clean -fd
```

## Snippet: Unstaging Files in Git
Description: Use the 'git restore --staged' command to unstage files that were previously added to the staging area but are not ready for commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_7
Language: bash

```bash
git restore --staged <filename>
```

## Snippet: Viewing Staged Changes in Git
Description: Use the 'git diff --staged' command to view changes that have been staged but not yet committed. This shows modifications, additions, and deletions in staged files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_0
Language: bash

```bash
git diff --staged
```

## Snippet: Restoring a File to an Earlier Version in Git
Description: Use the 'git restore --source' command to restore a specific file to its state in a previous commit without undoing other changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_9
Language: bash

```bash
git restore --source=HEAD~1 <filename>
```

## Snippet: Listing Files in a Commit Snapshot
Description: Use the 'git ls-tree' command to list all files and directories in a specific commit snapshot.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_6
Language: bash

```bash
git ls-tree HEAD~1
```

## Snippet: Using Visual Diff Tool in Git
Description: Open the configured visual diff tool to compare changes using the 'git difftool' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_3
Language: bash

```bash
git difftool
```

## Snippet: Configuring Visual Diff Tool in Git
Description: Set up a visual diff tool (e.g., VSCode) for easier comparison of changes using the 'git config' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_2
Language: bash

```bash
git config --global diff.tool vscode
```

## Snippet: Comparing Staging Area with Working Directory in Git
Description: Use the 'git diff' command to compare the staging area with the working directory, showing unstaged changes in modified files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day39.md#2025-04-17_snippet_1
Language: bash

```bash
git diff
```