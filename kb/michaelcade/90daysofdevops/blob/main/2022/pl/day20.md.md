# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day20.md
Language: multiple

## Snippet: Installing ZSH Plugins
Description: Commands to install autosuggestions and syntax highlighting plugins for ZSH.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day20.md#2025-04-17_snippet_3
Language: bash

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

## Snippet: Installing Oh My ZSH Framework
Description: Command to install Oh My ZSH framework using curl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day20.md#2025-04-17_snippet_2
Language: bash

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Snippet: Setting ZSH as Default Shell
Description: Command to change the default shell to ZSH for the current user.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day20.md#2025-04-17_snippet_1
Language: bash

```bash
chsh -s $(which zsh)
```

## Snippet: Installing ZSH Shell on Ubuntu
Description: Command to install ZSH shell using apt package manager on Ubuntu Linux.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day20.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt install zsh
```

## Snippet: Configuring ZSH Plugins
Description: ZSH configuration line to enable git, autosuggestions, and syntax highlighting plugins.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day20.md#2025-04-17_snippet_5
Language: shell

```shell
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

## Snippet: Editing ZSH Configuration
Description: Command to open the ZSH configuration file for editing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day20.md#2025-04-17_snippet_4
Language: bash

```bash
nano ~/.zshrc
```