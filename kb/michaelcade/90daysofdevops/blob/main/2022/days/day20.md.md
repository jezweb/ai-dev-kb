# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md
Language: bash

## Snippet: Configuring ZSH Plugins
Description: Configuration line to enable git, auto-suggestions, and syntax highlighting plugins in the ZSH shell. This should be added to the .zshrc file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_7
Language: bash

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

## Snippet: Opening ZSH Configuration File
Description: Command to open the ZSH configuration file (.zshrc) for editing. This file contains settings that control the behavior and appearance of the ZSH shell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_6
Language: bash

```bash
nano ~/.zshrc
```

## Snippet: Installing Oh My ZSH Framework
Description: Command using curl to download and install Oh My ZSH, a framework for managing ZSH configuration. Oh My ZSH provides themes, plugins, and helpers to enhance the shell experience.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_3
Language: bash

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Snippet: Installing ZSH Shell on Ubuntu
Description: Command to install ZSH shell using apt package manager on Ubuntu. ZSH offers improved features over bash including interactive tab completion, automated file searching, and a rich theme engine.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt install zsh
```

## Snippet: Installing ZSH Auto-suggestions Plugin
Description: Command to install the ZSH auto-suggestions plugin which provides fish-like suggestions based on command history as you type in the terminal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_4
Language: bash

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

## Snippet: Installing ZSH Syntax Highlighting Plugin
Description: Command to install the ZSH syntax highlighting plugin which provides fish-like syntax highlighting for commands in the terminal, making it easier to spot errors before executing commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_5
Language: bash

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

## Snippet: Setting ZSH as Default Shell
Description: Command to change the default shell to ZSH. This ensures ZSH is launched every time a terminal is opened instead of the default bash shell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_1
Language: bash

```bash
chsh -s $(which zsh)
```

## Snippet: Listing Hidden Files to Find Dotfiles
Description: Command using ls with grep to find the .zshrc configuration file in the home directory. This demonstrates how to locate dotfiles on the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_8
Language: bash

```bash
ls -al | grep .zshrc
```

## Snippet: Verifying Current Shell
Description: Command to check which shell is currently active in the terminal session. This confirms the shell change has taken effect after logging out and back in.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day20.md#2025-04-17_snippet_2
Language: bash

```bash
which $SHELL
```