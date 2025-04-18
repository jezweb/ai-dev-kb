# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md
Language: bash

## Snippet: Git Remote Repository Commands
Description: Commands for working with remote Git repositories, including adding remotes, fetching, pulling, and pushing, with their usage examples and descriptions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_6
Language: bash

```bash
git remote add <name> <url>
git fetch <remote> <branch>
git pull <remote>
git push <remote> <branch>
```

## Snippet: Git Basics Commands
Description: A table of basic Git commands including init, clone, config, add, commit, status, log, and diff, with their usage examples and descriptions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_2
Language: bash

```bash
git init <directory>
git clone <repo>
git config user.name
git add <directory>
git commit -m "<message>"
git status
git log
git diff
```

## Snippet: Accessing Git Help in Terminal
Description: Demonstrates how to access Git help documentation directly from the command line for the 'git add' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_0
Language: bash

```bash
git add --help
```

## Snippet: Git Rewriting History Commands
Description: Commands for rewriting Git history, including amending commits, rebasing, and viewing reflog, with their usage examples and descriptions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_4
Language: bash

```bash
git commit --amend
git rebase <base>
git reflog
```

## Snippet: Git Branch Management Commands
Description: Commands for managing Git branches, including creating, switching, and merging branches, with their usage examples and descriptions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_5
Language: bash

```bash
git branch
git checkout -b <branch>
git merge <branch>
```

## Snippet: Git Undo Changes Commands
Description: Commands for undoing changes in Git, including revert, reset, and clean, with their usage examples and descriptions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_3
Language: bash

```bash
git revert <commit>
git reset <file>
git clean -n
```

## Snippet: Git Diff Commands
Description: Commands for viewing differences between Git states, including comparing working directory with HEAD and staged changes with the last commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_7
Language: bash

```bash
git diff HEAD
git diff --cached
```

## Snippet: Viewing Git Command Options Summary
Description: Shows how to view a summary of available options for the 'git add' command using the -h flag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day37.md#2025-04-17_snippet_1
Language: bash

```bash
git add -h
```