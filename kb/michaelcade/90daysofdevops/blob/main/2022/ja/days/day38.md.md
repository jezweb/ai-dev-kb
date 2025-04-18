# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md
Language: bash

## Snippet: Ignoring Files in Git
Description: Explains how to ignore files and directories in Git using the .gitignore file. This is useful for excluding files that should not be tracked, such as log files or local configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md#2025-04-17_snippet_5
Language: bash

```bash
echo "logs/" >> .gitignore
git add .gitignore
git commit -m "Added .gitignore file"
```

## Snippet: Staging and Committing Files in Git
Description: Shows the process of staging files with 'git add' and committing changes with 'git commit'. The example includes adding a specific file and using a commit message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md#2025-04-17_snippet_1
Language: bash

```bash
git add README.md
git commit -m "Meaningful message"
```

## Snippet: Initializing Git Repository and Checking Status
Description: Demonstrates how to initialize a Git repository and check its status. The 'git init' command creates a new repository, while 'git status' shows the current state of the working directory and staging area.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md#2025-04-17_snippet_0
Language: bash

```bash
git init
git status
```

## Snippet: Renaming Files in Git Repository
Description: Shows how to rename files in a Git repository using both manual and Git-specific methods. The 'git mv' command renames the file and stages the change in one step.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md#2025-04-17_snippet_4
Language: bash

```bash
mv README.md README.txt
git add .
git commit -m "Renamed README.md to README.txt"

# Alternative method
git mv README.md README.txt
```

## Snippet: Using Short Status in Git
Description: Demonstrates the use of 'git status -s' for a concise status output. This command provides a shortened version of the status, showing only the essential information about changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md#2025-04-17_snippet_6
Language: bash

```bash
git status -s
```

## Snippet: Removing Files from Git Repository
Description: Demonstrates two methods for removing files from a Git repository: manually deleting and using 'git rm'. The 'git rm' command removes the file from both the working directory and the Git repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md#2025-04-17_snippet_3
Language: bash

```bash
rm oldcode.ps1
git add .
git commit -m "Removed oldcode.ps1"

# Alternative method
git rm oldcode.ps1
```

## Snippet: Committing Changes with Extended Message in Git
Description: Illustrates how to commit changes using an extended commit message. The 'git commit' command without flags opens a text editor for a more detailed commit message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day38.md#2025-04-17_snippet_2
Language: bash

```bash
git add .
git commit
```