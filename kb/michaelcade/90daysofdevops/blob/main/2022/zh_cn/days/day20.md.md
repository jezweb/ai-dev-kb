# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md
Language: bash

## Snippet: Installing Oh My ZSH Framework
Description: Command to install Oh My ZSH using curl. Oh My ZSH is a framework for managing ZSH configuration that provides plugins, themes, and other enhancements for the ZSH shell experience.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_3
Language: bash

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Snippet: Installing ZSH Shell on Ubuntu
Description: Command to install the ZSH shell using the apt package manager. ZSH offers improved features over bash including interactive Tab completion, automated file searching, and advanced shorthand for commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt install zsh
```

## Snippet: Listing All Dotfiles in Home Directory
Description: Command to list all hidden configuration files (dotfiles) in the home directory that contain 'zshrc'. This helps verify that the ZSH configuration file has been created.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_8
Language: bash

```bash
ls -al | grep .zshrc
```

## Snippet: Configuring ZSH Plugins
Description: Configuration line to enable git, auto-suggestions, and syntax highlighting plugins in the ZSH environment. This should be added to the .zshrc file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_7
Language: bash

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

## Snippet: Setting ZSH as Default Shell
Description: Command to change the default shell to ZSH. After running this command, the user needs to log out and back in for the changes to take effect.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_1
Language: bash

```bash
chsh -s $(which zsh)
```

## Snippet: Installing ZSH Syntax Highlighting Plugin
Description: Command to install the syntax highlighting plugin for ZSH. This plugin provides syntax highlighting for the shell, making commands, options, and arguments visually distinct.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_5
Language: bash

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

## Snippet: Checking Current Shell
Description: Command to verify which shell is currently being used. This helps confirm if the shell has been successfully changed from bash to ZSH.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_2
Language: bash

```bash
which $SHELL
```

## Snippet: Opening ZSH Configuration File
Description: Command to open the ZSH configuration file (.zshrc) in the nano text editor. This file contains settings and configurations for the ZSH shell environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_6
Language: bash

```bash
nano ~/.zshrc
```

## Snippet: Installing ZSH Auto-suggestions Plugin
Description: Command to install the auto-suggestions plugin for ZSH. This plugin provides fish-like autosuggestions for ZSH, suggesting commands as you type based on command history.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day20.md#2025-04-17_snippet_4
Language: bash

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```