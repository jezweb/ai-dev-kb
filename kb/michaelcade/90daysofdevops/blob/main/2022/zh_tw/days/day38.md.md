# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md
Language: bash

## Snippet: Skipping Staging Area in Git
Description: Demonstrates how to commit changes directly without staging, using the -a flag with git commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_5
Language: bash

```bash
git commit -am "Skipping the staging area"
```

## Snippet: Ignoring Files in Git
Description: Shows how to create and use a .gitignore file to exclude certain files or directories from version control.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_8
Language: bash

```bash
echo logs/ > .gitignore
```

## Snippet: Using Short Status in Git
Description: Demonstrates how to use the short format of git status for a more concise output using the -s flag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_9
Language: bash

```bash
git status -s
```

## Snippet: Renaming Files in Git
Description: Demonstrates how to rename a file in Git using the 'git mv' command, which stages the change automatically.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_7
Language: bash

```bash
git mv oldcode.ps1 newcode.ps1
```

## Snippet: Committing Changes in Git
Description: Demonstrates how to commit staged changes with a message using the 'git commit' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_3
Language: bash

```bash
git commit -m "Meaningful message"
```

## Snippet: Removing Files from Git Repository
Description: Shows how to remove a file from both the working directory and the Git repository using the 'git rm' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_6
Language: bash

```bash
git rm oldcode.ps1
```

## Snippet: Initializing a Git Repository
Description: Shows how to initialize a new Git repository in a directory using the 'git init' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_0
Language: bash

```bash
git init
```

## Snippet: Checking Git Status
Description: Demonstrates how to check the status of files in a Git repository using the 'git status' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_1
Language: bash

```bash
git status
```

## Snippet: Committing Changes with Detailed Message
Description: Shows how to open a text editor for writing a detailed commit message using 'git commit' without the -m flag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_4
Language: bash

```bash
git commit
```

## Snippet: Staging Files in Git
Description: Shows how to stage a specific file (README.md) for commit using the 'git add' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day38.md#2025-04-17_snippet_2
Language: bash

```bash
git add README.md
```