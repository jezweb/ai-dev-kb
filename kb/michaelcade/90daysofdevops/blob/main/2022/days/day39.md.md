# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md
Language: bash

## Snippet: Viewing Git History
Description: Commands for viewing commit history in different formats
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md#2025-04-17_snippet_2
Language: bash

```bash
git log
git log --oneline
git log --oneline --reverse
```

## Snippet: Rebasing Feature Branch onto Main Branch in Git
Description: Commands to perform a rebase operation that moves a feature branch to incorporate all new commits from the main branch. This creates a linear history by rewriting commit history instead of creating merge commits.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md#2025-04-17_snippet_6
Language: bash

```bash
git checkout feature
git rebase main
```

## Snippet: Viewing Git Diff Commands
Description: Basic Git commands for viewing differences between staged, unstaged, and committed files
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md#2025-04-17_snippet_0
Language: bash

```bash
git diff --staged
git diff
```

## Snippet: Inspecting Git Commits
Description: Commands for viewing detailed commit information and file trees
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md#2025-04-17_snippet_3
Language: bash

```bash
git show <commit ID>
git show HEAD~1
git ls-tree HEAD~1
```

## Snippet: Restoring Previous Versions
Description: Commands for restoring files from previous commits
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md#2025-04-17_snippet_5
Language: bash

```bash
git restore --source=HEAD~1 README.md
```

## Snippet: Configuring Visual Diff Tool
Description: Commands to configure VSCode as the default diff tool in Git
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md#2025-04-17_snippet_1
Language: bash

```bash
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
```

## Snippet: Managing Staged Changes
Description: Commands for unstaging files and discarding local changes
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day39.md#2025-04-17_snippet_4
Language: bash

```bash
git restore --staged newfile.txt
git restore .
git clean -fd
```