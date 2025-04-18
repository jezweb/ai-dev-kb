# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day36.md
Language: multiple

## Snippet: Configuring Git Global Settings
Description: Basic Git configuration commands for setting up user name, email, and default editor globally
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day36.md#2025-04-17_snippet_1
Language: shell

```shell
git config --global user.name "Michael Cade"
git config --global user.email Michael.Cade@90DaysOfDevOPs.com
git config --global core.editor "code --wait"
git config --global -e
```

## Snippet: Installing Git via Linux Package Repository
Description: Commands to add the Git repository and install the latest version of Git on Ubuntu/Debian systems
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day36.md#2025-04-17_snippet_0
Language: bash

```bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update
sudo apt-get install git -y
git --version
```