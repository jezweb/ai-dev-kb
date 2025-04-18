# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day64.md
Language: bash

## Snippet: Installing Ansible on Ubuntu
Description: Commands to install Ansible on an Ubuntu-based control node using apt package manager. Includes adding the Ansible repository and installing the main package.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day64.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```

## Snippet: Ansible Hosts File Configuration
Description: Example of host entries in the Ansible inventory file (/etc/ansible/hosts) showing how to define groups of machines and their connection details.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day64.md#2025-04-17_snippet_1
Language: bash

```bash
[windows]
10.0.0.1
```

## Snippet: Ansible OS Release Info Command
Description: Ad-hoc command example showing how to retrieve OS release information from all Linux hosts in the inventory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day64.md#2025-04-17_snippet_2
Language: bash

```bash
ansible linux -a "cat /etc/os-release"
```