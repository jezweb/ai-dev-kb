# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md
Language: bash

## Snippet: Inspecting Git Commits and Files
Description: Commands for viewing specific commit details and file contents from different snapshots.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md#2025-04-17_snippet_3
Language: bash

```bash
git show <commit ID>
git show HEAD~1
git ls-tree HEAD~1
```

## Snippet: Restoring Files from Previous Versions
Description: Commands for restoring deleted files from previous Git commits and snapshots.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md#2025-04-17_snippet_5
Language: bash

```bash
git restore --source=HEAD~1 README.md
```

## Snippet: Viewing Git Differences Using Diff Commands
Description: Commands for viewing staged and unstaged changes in Git repositories using git diff and related commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md#2025-04-17_snippet_0
Language: bash

```bash
git diff --staged
git diff
```

## Snippet: Viewing Git History and Commits
Description: Commands for viewing Git commit history in different formats including oneline and reverse order.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md#2025-04-17_snippet_2
Language: bash

```bash
git log
git log --oneline
git log --oneline --reverse
```

## Snippet: Rebasing Feature Branch onto Main Branch in Git
Description: Commands to perform a rebase operation that moves a feature branch to incorporate all new commits from the main branch. This creates a linear project history by rewriting commits instead of creating merge commits.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md#2025-04-17_snippet_6
Language: bash

```bash
git checkout feature
git rebase main
```

## Snippet: Configuring Visual Diff Tool in Git
Description: Commands to configure VSCode as the default diff tool for Git and checking the configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md#2025-04-17_snippet_1
Language: bash

```bash
git config --global diff.tool vscode
git config --global -e
```

## Snippet: Managing Staged and Unstaged Files
Description: Commands for unstaging files and discarding local changes in Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day39.md#2025-04-17_snippet_4
Language: bash

```bash
git restore --staged newfile.txt
git restore .
git clean -fd
```