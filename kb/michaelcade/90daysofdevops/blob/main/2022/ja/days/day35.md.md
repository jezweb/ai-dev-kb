# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day35.md
Language: bash

## Snippet: Checking Repository Status and Adding New Files
Description: Shows how to check the status of a Git repository, add new files, and make additional commits.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day35.md#2025-04-17_snippet_1
Language: bash

```bash
git status
git add samplecode.ps1
git commit -m "My Second Commit"
git status
git log
```

## Snippet: Initializing a Git Repository and Making Commits
Description: Demonstrates how to initialize a Git repository, add files, make commits, and view the commit history.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day35.md#2025-04-17_snippet_0
Language: bash

```bash
git init
git add .
git commit -m "My First Commit"
git log
```

## Snippet: Comparing Commits and Time Traveling in Git
Description: Demonstrates how to compare changes between commits and switch between different commit states in Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day35.md#2025-04-17_snippet_2
Language: bash

```bash
git diff b8f8 709a
git checkout 709a
git switch -
```