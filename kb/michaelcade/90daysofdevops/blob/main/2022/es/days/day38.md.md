# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md
Language: bash

## Snippet: Committing Changes in Git
Description: Creates a new commit with a message describing the changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_2
Language: bash

```bash
git commit -m "<Mensaje significativo>"
```

## Snippet: Committing Changes with Detailed Message
Description: Opens the default text editor to write a detailed commit message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_3
Language: bash

```bash
git commit
```

## Snippet: Staging Files in Git
Description: Adds a specific file to the staging area in Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_1
Language: bash

```bash
git add README.md
```

## Snippet: Renaming Files in Git
Description: Renames a file in both the working directory and the Git repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_6
Language: bash

```bash
git mv readme.md README.md
```

## Snippet: Removing Files in Git
Description: Removes a file from both the working directory and the Git repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_5
Language: bash

```bash
git rm oldcode.ps1
```

## Snippet: Skipping Staging Area in Git
Description: Commits changes directly, bypassing the staging area.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_4
Language: bash

```bash
git commit -a -m "<Mensaje significativo>"
```

## Snippet: Initializing Git Repository
Description: Creates a new Git repository in the current directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_0
Language: bash

```bash
git init
```

## Snippet: Viewing Brief Git Status
Description: Displays a condensed status of the working directory and staging area.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day38.md#2025-04-17_snippet_7
Language: bash

```bash
git status -s
```