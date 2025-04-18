# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day36.md
Language: multiple

## Snippet: Setting Default Git Editor to Visual Studio Code
Description: This command sets Visual Studio Code as the default text editor for Git operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day36.md#2025-04-17_snippet_4
Language: bash

```bash
git config --global core.editor "code --wait"
```

## Snippet: Adding Git Repository and Updating on Linux
Description: These commands add the Git repository, update the package list, install Git, and check the version on a Linux system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day36.md#2025-04-17_snippet_2
Language: bash

```bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update
sudo apt-get install git -y
git --version
```

## Snippet: Checking Git Version in PowerShell
Description: This command is used to check the installed version of Git on a Windows system using PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day36.md#2025-04-17_snippet_0
Language: powershell

```powershell
git --version
```

## Snippet: Installing Git on Ubuntu Linux
Description: This command installs Git on an Ubuntu Linux system using the apt package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day36.md#2025-04-17_snippet_1
Language: bash

```bash
sudo apt-get install git
```

## Snippet: Configuring Global Git User Settings
Description: These commands set the global Git configuration for user name and email.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day36.md#2025-04-17_snippet_3
Language: bash

```bash
git config --global user.name "Michael Cade"
git config --global user.email Michael.Cade@90DaysOfDevOPs.com
```

## Snippet: Viewing Global Git Configuration
Description: This command displays the current global Git configuration settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day36.md#2025-04-17_snippet_5
Language: bash

```bash
git config --global -e
```