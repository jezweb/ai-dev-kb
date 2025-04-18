# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day20.md
Language: bash

## Snippet: Installing ZSH Shell
Description: Command to install the ZSH shell using apt package manager
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day20.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt install zsh
```

## Snippet: Installing ZSH Plugins
Description: Commands to install autosuggestions and syntax highlighting plugins for ZSH
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day20.md#2025-04-17_snippet_3
Language: bash

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

## Snippet: Setting ZSH as Default Shell
Description: Command to change the default shell to ZSH
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day20.md#2025-04-17_snippet_1
Language: bash

```bash
chsh -s $(which zsh)
```

## Snippet: Configuring ZSH Plugins
Description: Command to edit ZSH configuration file and enable plugins
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day20.md#2025-04-17_snippet_4
Language: bash

```bash
nano ~/.zshrc
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

## Snippet: Installing Oh My ZSH
Description: Command to install Oh My ZSH framework using curl
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day20.md#2025-04-17_snippet_2
Language: bash

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```