# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day36.md
Language: multiple

## Snippet: Configuring Global Git User Settings
Description: These commands set the global Git configuration for user name and email.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day36.md#2025-04-17_snippet_3
Language: bash

```bash
git config --global user.name "Michael Cade"
git config --global user.email Michael.Cade@90DaysOfDevOPs.com
```

## Snippet: Adding Git Repository and Updating on Linux
Description: These commands add the Git repository for software installations, update the package list, and install the latest version of Git on a Linux system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day36.md#2025-04-17_snippet_2
Language: bash

```bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update
sudo apt-get install git -y
git --version
```

## Snippet: Installing Git on Linux using apt-get
Description: This command installs Git on a Linux system using the apt package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day36.md#2025-04-17_snippet_1
Language: bash

```bash
sudo apt-get install git
```

## Snippet: Setting Default Git Editor to Visual Studio Code
Description: This command sets Visual Studio Code as the default text editor for Git operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day36.md#2025-04-17_snippet_4
Language: bash

```bash
git config --global core.editor "code --wait"
```

## Snippet: Viewing Global Git Configuration
Description: This command opens the global Git configuration file in the default text editor.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day36.md#2025-04-17_snippet_5
Language: bash

```bash
git config --global -e
```

## Snippet: Checking Git Version in PowerShell
Description: Use this command in PowerShell to check the installed version of Git on a Windows machine.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day36.md#2025-04-17_snippet_0
Language: powershell

```powershell
git --version
```