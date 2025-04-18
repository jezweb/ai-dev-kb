# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md
Language: bash

## Snippet: Viewing Differences Between Commits
Description: The git diff command with two commit hashes shows the differences between those commits. It displays what files have been added, modified, or deleted, helping to understand what changes were made.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_7
Language: bash

```bash
git diff b8f8 709a
```

## Snippet: Creating a Commit with Descriptive Message
Description: The git commit command creates a new commit with staged changes and includes a descriptive message. The -m flag allows adding a commit message directly in the command line, helping document the purpose of the changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_3
Language: bash

```bash
git commit -m "My First Commit"
```

## Snippet: Staging a Specific File for Commit
Description: The git add command with a specific filename stages just that file for the next commit. This allows for selective staging of changes when you've modified multiple files but only want to commit some of them.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_5
Language: bash

```bash
git add sample code.ps1
```

## Snippet: Checking Out a Previous Commit
Description: The git checkout command with a commit hash allows you to go back to a specific point in the project's history. This demonstrates Git's time-travel capability, enabling examination of the code at any previous commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_8
Language: bash

```bash
git checkout 709a
```

## Snippet: Returning to the Latest Commit
Description: The git switch - command returns the repository to the most recent commit after checking out a previous one. It's a quick way to undo a checkout operation and get back to the latest state of the code.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_9
Language: bash

```bash
git switch -
```

## Snippet: Staging All Files with git add
Description: The git add . command stages all files in the current directory for the next commit. This prepares the snapshot of changes that will be committed to the repository history.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_2
Language: bash

```bash
git add .
```

## Snippet: Initializing a Git Repository with git init
Description: The git init command creates a new Git repository in the current directory. It sets up all the necessary Git metadata files in a .git directory, enabling version control for the project.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_1
Language: bash

```bash
git init
```

## Snippet: Checking Repository Status with git status
Description: The git status command shows the current state of the working directory and staging area. It displays which changes have been staged, which haven't, and which files are untracked by Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_4
Language: bash

```bash
git status
```

## Snippet: Creating a Second Commit with Message
Description: This command creates another commit with the staged changes and a descriptive message. It demonstrates the iterative nature of version control, where multiple commits build up the project history.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_6
Language: bash

```bash
git commit -m "My Second Commit"
```

## Snippet: Viewing Git Commit History with git log
Description: The git log command displays the commit history of a repository, showing commit hashes, authors, dates, and commit messages. This helps in tracking the project's history and understanding what changes have been made over time.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day35.md#2025-04-17_snippet_0
Language: bash

```bash
git log
```