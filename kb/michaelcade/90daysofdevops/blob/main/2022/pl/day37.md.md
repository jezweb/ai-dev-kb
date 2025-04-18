# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md
Language: multiple

## Snippet: Git History Rewriting Commands
Description: Commands for modifying commit history, including amending commits and rebasing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_2
Language: bash

```bash
git commit --amend
git rebase <base>
git reflog
```

## Snippet: Git Basic Commands
Description: Core Git commands for repository initialization, cloning, configuration, and basic operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_0
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

## Snippet: Advanced Git Push Operations
Description: Commands for pushing changes to remote repositories with special options, including force pushing, pushing all branches, and pushing tags.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_10
Language: markdown

```markdown
| Command                   |           Example           |           Description                                                                                                                           | 
| ------------------------- |   --------------------------|
```

## Snippet: Working with Git Remote Repositories
Description: Commands for managing connections to remote repositories, including adding remotes, fetching, pulling, and pushing code changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_4
Language: markdown

```markdown
| Command           |           Example                       |           Description                                                                                                                 | 
| ---------------   |
```

## Snippet: Configuring Git Settings
Description: Commands for configuring Git settings, including user identity, command aliases, editor preferences, and editing configuration files directly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_6
Language: markdown

```markdown
| Command                                               |           Example                                      |           Description                                                                                                                         | 
|
```

## Snippet: Git Branch Management Commands
Description: Commands for creating, switching, and merging branches in Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_3
Language: bash

```bash
git branch
git checkout -b <branch>
git merge <branch>
```

## Snippet: Advanced Git Pull Operations
Description: Command for pulling changes from a remote repository while applying local changes on top using rebase instead of merge, resulting in a cleaner commit history.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_8
Language: markdown

```markdown
| Command                               |           Example                      |           Description                                                                                                                         | 
|
```

## Snippet: Rebasing in Git
Description: Command for interactively rebasing the current branch onto another base commit, allowing control over how each commit is transferred to the new base.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_7
Language: markdown

```markdown
| Command                               |           Example                      |           Description                                                                                                                         | 
|
```

## Snippet: Resetting Repository State in Git
Description: Commands for resetting the repository to a previous state, with different options for handling the staging area and working directory changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_9
Language: markdown

```markdown
| Command                   |           Example           |           Description                                                                                                                           | 
| ------------------------- |   --------------------------|
```

## Snippet: Git Undoing Changes Commands
Description: Commands for reverting changes, resetting files, and cleaning the working directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_1
Language: bash

```bash
git revert <commit>
git reset <file>
git clean -n
```

## Snippet: Comparing Changes with Git Diff
Description: Commands for comparing different states of the repository, including comparing working directory with the last commit and staged changes with the last commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day37.md#2025-04-17_snippet_5
Language: markdown

```markdown
| Command           |           Example                       |           Description                                                                                                                 | 
| ---------------   |
```