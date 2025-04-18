# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md
Language: bash

## Snippet: Viewing commit history in a condensed format
Description: Shows a simplified view of the commit history with only the abbreviated hash and commit message for each commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_7
Language: bash

```bash
git log --oneline
```

## Snippet: Restoring a file from a previous commit
Description: Demonstrates how to restore a file to its state in a previous commit when the file has been deleted or modified.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_16
Language: bash

```bash
git restore --source=HEAD~1 README.md
```

## Snippet: Listing files in a specific commit
Description: Displays a list of all files in a commit's tree structure, showing file types (blob for files, tree for directories).
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_11
Language: bash

```bash
git ls-tree HEAD~1
```

## Snippet: Viewing commit history in reverse chronological order
Description: Displays the commit history starting from the first commit instead of the default most recent first order.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_8
Language: bash

```bash
git log --oneline --reverse
```

## Snippet: Viewing staged changes in Git
Description: Shows how to view changes that have been staged for commit using the git diff command with the --staged flag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_0
Language: bash

```bash
git diff --staged
```

## Snippet: Discarding local changes in Git
Description: Shows how to discard all local changes and restore the working directory to match the last commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_13
Language: bash

```bash
git restore .
```

## Snippet: Showing details of a specific commit
Description: Displays detailed information about a specific commit, including the changes made in that commit, using its commit ID.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_9
Language: bash

```bash
git show <commit ID>
```

## Snippet: Viewing differences between working directory and staging area
Description: Demonstrates how to compare the working directory with the staging area to see changes that haven't been staged yet.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_1
Language: bash

```bash
git diff
```

## Snippet: Checking Git global configuration
Description: Shows how to view the global Git configuration file, which includes the diff tool settings and other preferences.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_3
Language: bash

```bash
git config --global -e
```

## Snippet: Viewing a commit relative to HEAD
Description: Shows the details of a commit specified by its position relative to the current HEAD (most recent commit).
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_10
Language: bash

```bash
git show HEAD~1
```

## Snippet: Performing Git Rebase to Incorporate Main Branch Changes
Description: This code demonstrates how to rebase a feature branch onto the main branch. The commands first switch to the feature branch and then rebase it onto the main branch, which re-writes the commit history by creating new commits for each commit in the original branch instead of creating a merge commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_17
Language: bash

```bash
git checkout feature
git rebase main
```

## Snippet: Using visual diff tool for comparing changes
Description: Launches the configured visual diff tool to compare changes between the working directory and staging area.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_4
Language: bash

```bash
git difftool
```

## Snippet: Comparing staged changes with visual diff tool
Description: Opens the visual diff tool to view changes that have been staged for commit, providing a visual comparison with the previous committed version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_5
Language: bash

```bash
git difftool --staged
```

## Snippet: Forcefully removing untracked files and directories
Description: Shows how to force remove all untracked files and directories from the working directory without prompting.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_15
Language: bash

```bash
git clean -fd
```

## Snippet: Configuring Visual Studio Code as the default diff tool
Description: Sets Visual Studio Code as the default visual diff tool for Git to provide a more user-friendly way to view differences.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_2
Language: bash

```bash
git config --global diff.tool vscode
```

## Snippet: Unstaging a file in Git
Description: Demonstrates how to remove a file from the staging area without discarding the changes in the working directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_12
Language: bash

```bash
git restore --staged newfile.txt
```

## Snippet: Viewing commit history in Git
Description: Displays a detailed log of all commits in the repository, including commit hashes, authors, dates, and commit messages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_6
Language: bash

```bash
git log
```

## Snippet: Removing untracked files with warning
Description: Demonstrates the git clean command which provides a warning before removing untracked files from the working directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day39.md#2025-04-17_snippet_14
Language: bash

```bash
git clean
```