# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day38.md
Language: bash

## Snippet: Git Ignore File Configuration
Description: Example of creating and using .gitignore file to exclude files/directories from version control
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day38.md#2025-04-17_snippet_3
Language: bash

```bash
echo "logs/" > .gitignore
git status
git rm --cached logs/
```

## Snippet: Git File Removal Commands
Description: Commands demonstrating how to remove files from both the working directory and Git repository
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day38.md#2025-04-17_snippet_1
Language: bash

```bash
rm oldcode.ps1
git status
git rm oldcode.ps1
```

## Snippet: Git File Renaming Operations
Description: Commands showing how to rename files and update Git tracking
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day38.md#2025-04-17_snippet_2
Language: bash

```bash
mv oldcode.ps1 newcode.ps1
git rm oldcode.ps1
git add newcode.ps1

# Alternative single command:
git mv oldcode.ps1 newcode.ps1
```

## Snippet: Git Basic File Operations
Description: Common Git commands for initializing repository, staging files and making initial commits
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day38.md#2025-04-17_snippet_0
Language: bash

```bash
git init
git status
git add README.md
git commit -m "Meaningful message"
```