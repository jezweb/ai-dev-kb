# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day36.md
Language: multiple

## Snippet: Configuring Git User Information
Description: Commands to set up global Git configuration for user name and email.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day36.md#2025-04-17_snippet_3
Language: bash

```bash
git config --global user.name "Michael Cade"
git config --global user.email Michael.Cade@90DaysOfDevOPs.com
```

## Snippet: Setting Default Git Editor to Visual Studio Code
Description: Command to set Visual Studio Code as the default text editor for Git operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day36.md#2025-04-17_snippet_4
Language: bash

```bash
git config --global core.editor "code --wait"
```

## Snippet: Checking Git Version in PowerShell
Description: Command to check the installed version of Git in Windows PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day36.md#2025-04-17_snippet_0
Language: powershell

```powershell
git --version
```

## Snippet: Adding Git Repository and Updating on Linux
Description: A series of commands to add the Git repository, update the package list, and install Git on a Linux system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day36.md#2025-04-17_snippet_2
Language: bash

```bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update
sudo apt-get install git -y
git --version
```

## Snippet: Viewing Global Git Configuration
Description: Command to display the global Git configuration settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day36.md#2025-04-17_snippet_5
Language: bash

```bash
git config --global -e
```

## Snippet: Installing Git on Linux using apt-get
Description: Command to install Git on a Linux system using the apt-get package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day36.md#2025-04-17_snippet_1
Language: bash

```bash
sudo apt-get install git
```