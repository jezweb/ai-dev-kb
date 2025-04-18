# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md
Language: bash

## Snippet: Adding a Specific File to Git Staging Area
Description: Command to add a specific file (README.md) to the staging area in preparation for commit. This tracks the file in Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_2
Language: bash

```bash
git add README.md
```

## Snippet: Checking File Status in Git Repository
Description: Command to check the status of files in a Git repository. Shows which files are tracked/untracked, modified, and which changes are staged for commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_1
Language: bash

```bash
git status
```

## Snippet: Committing Changes with a Message
Description: Command to commit staged changes with a descriptive message. The -m flag allows for adding a message directly in the command line without opening a text editor.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_3
Language: bash

```bash
git commit -m "Meaningful message"
```

## Snippet: Getting Condensed Status Output
Description: Command to show a shortened version of the git status output. Shows modified, added, and deleted files in a more compact format, using the -s flag for 'short'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_9
Language: bash

```bash
git status -s
```

## Snippet: Removing Cached Files from Git Tracking
Description: Command to remove a file from Git tracking without deleting it from the filesystem. Useful when you want to start ignoring a previously tracked file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_8
Language: bash

```bash
git rm --cached
```

## Snippet: Removing Files from Git Repository
Description: Command to remove a file from both the working directory and the Git repository. This stages the deletion for the next commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_6
Language: bash

```bash
git rm oldcode.ps1
```

## Snippet: Adding All Changed Files to Staging Area
Description: Command to add all modified and new files in the repository to the staging area at once. This is a shorthand for adding multiple files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_4
Language: bash

```bash
git add .
```

## Snippet: Opening Text Editor for Detailed Commit Message
Description: Command to commit changes using the default text editor. This opens an editor where you can write a more detailed commit message with both a short summary and extended description.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_5
Language: bash

```bash
git commit
```

## Snippet: Initializing a Git Repository
Description: The command to initialize a new Git repository in an existing directory. This creates a hidden .git folder that stores repository metadata.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_0
Language: bash

```bash
git init
```

## Snippet: Renaming Files in Git Repository
Description: Command to rename a file in both the working directory and Git repository in one step. This stages the rename operation for the next commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day38.md#2025-04-17_snippet_7
Language: bash

```bash
git mv config.yaml config.yml
```