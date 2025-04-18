# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md
Language: multiple

## Snippet: SSH Config File Content for GitHub
Description: Configuration settings for SSH connections to GitHub, specifying the host, identity file location, and enabling automatic key adding.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_3
Language: markdown

```markdown
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

## Snippet: SSH Config File Path Error Resolution
Description: Commands to resolve a common error where the SSH config directory or file doesn't exist, by creating the directory and setting proper permissions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_7
Language: bash

```bash
mkdir ~/.ssh
chmod 700 ~/.ssh
```

## Snippet: Copying SSH Public Key to Clipboard
Description: Command to copy the public SSH key to clipboard for pasting into GitHub settings. This example is for macOS.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_5
Language: bash

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

## Snippet: SSH Private Key Permissions Error Resolution
Description: Command to fix permissions on your SSH private key file, which needs to be readable only by your user account.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_8
Language: bash

```bash
chmod 600 ~/.ssh/id_ed25519
```

## Snippet: Testing SSH Connection to GitHub
Description: Command to verify your SSH connection to GitHub is working properly. This will attempt to authenticate with GitHub using your SSH key.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_6
Language: bash

```bash
ssh -T git@github.com
```

## Snippet: Adding SSH Key to SSH Agent
Description: Command to add your private SSH key to the SSH agent, which allows you to use the key without entering a passphrase each time.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_4
Language: bash

```bash
ssh-add -K ~/.ssh/id_ed25519
```

## Snippet: Starting the SSH Agent in Background
Description: Command to start the SSH agent in the background, which will manage your SSH keys.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_1
Language: bash

```bash
eval "$(ssh-agent -s)"
```

## Snippet: Generating SSH Key Pair for GitHub Authentication
Description: Commands to create a new SSH key pair, with an email address as an identifier, and then start the SSH agent to manage your keys.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_0
Language: bash

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## Snippet: Creating SSH Config File
Description: Command to create an SSH config file that configures connection settings for GitHub, including automatic key adding and server identification.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day09.md#2025-04-17_snippet_2
Language: bash

```bash
touch ~/.ssh/config
```