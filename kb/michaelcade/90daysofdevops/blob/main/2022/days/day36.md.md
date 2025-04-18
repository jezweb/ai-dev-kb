# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day36.md
Language: multiple

## Snippet: Configuring Git User Information
Description: Commands to set up the basic Git configuration including user name, email, and preferred text editor. These global settings will apply to all repositories for the current user.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day36.md#2025-04-17_snippet_1
Language: shell

```shell
git config --global user.name "Michael Cade"
git config --global user.email Michael.Cade@90DaysOfDevOPs.com
git config --global core.editor "code --wait"
git config --global -e
```

## Snippet: Installing Git on Linux using apt
Description: Commands to install Git on a Linux system using the apt package manager. This snippet shows how to update and install the latest version of Git from the Git core PPA repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day36.md#2025-04-17_snippet_0
Language: bash

```bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update
sudo apt-get install git -y
git --version
```