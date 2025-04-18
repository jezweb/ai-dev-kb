# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md
Language: multiple

## Snippet: Configuring Git User Information
Description: Commands to configure global Git settings for user name and email which are required for commits.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_3
Language: git

```git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Snippet: Installing Git on macOS using Homebrew
Description: Command to install Git on macOS using the Homebrew package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_1
Language: bash

```bash
brew install git
```

## Snippet: Creating a Git Repository
Description: Commands to initialize a new Git repository in the current directory and make an initial commit.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_4
Language: git

```git
mkdir Day11_Creating_a_repo
cd Day11_Creating_a_repo
git init
touch README.md
git add README.md
git commit -m "Initial commit"
```

## Snippet: Visualizing Git Commits in VS Code
Description: Step showing how to view Git commit history in Visual Studio Code using GitLens extension.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_10
Language: powershell

```powershell
View -> Command Palette -> GitLens: Show Commit Search
```

## Snippet: Installing Git on Ubuntu Linux
Description: Command to install Git on Ubuntu Linux using apt package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt-get install git
```

## Snippet: Managing Git Configuration
Description: Commands to view and edit Git configuration at different levels (local, global, system).
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_8
Language: git

```git
git config --system --list
git config --global --list
git config --local --list
```

## Snippet: Viewing Repository History
Description: Command to display the commit history of a Git repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_9
Language: git

```git
git log
```

## Snippet: Checking Git Version
Description: Command to verify Git installation by checking the installed version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_2
Language: bash

```bash
git --version
```

## Snippet: Pushing to Remote Repository
Description: Command to push the committed changes from the local repository to the remote GitHub repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_6
Language: git

```git
git push -u origin main
```

## Snippet: Checking Git Remote Configuration
Description: Command to verify the configured remote repositories for the current Git project.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_7
Language: git

```git
git remote -v
```

## Snippet: Adding Remote Repository on GitHub
Description: Command to connect a local Git repository to a remote repository on GitHub.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day42.md#2025-04-17_snippet_5
Language: git

```git
git remote add origin https://github.com/MichaelCade/Day11_Creating_a_repo.git
```