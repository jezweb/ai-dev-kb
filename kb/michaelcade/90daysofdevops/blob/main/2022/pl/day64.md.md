# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day64.md
Language: bash

## Snippet: Running an Ansible Ping Module Against a Local Machine
Description: A basic command to test Ansible functionality by running the ping module against the localhost. This confirms Ansible is working correctly on the control node.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day64.md#2025-04-17_snippet_1
Language: bash

```bash
ansible localhost -m ping
```

## Snippet: Checking Operating System Details with Ansible
Description: An ad hoc command that retrieves OS information from all systems in the 'linux' group by executing a shell command on the remote systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day64.md#2025-04-17_snippet_4
Language: bash

```bash
ansible linux -a "cat /etc/os-release"
```

## Snippet: Example Service Module Command for Webservers
Description: A practical example of using Ansible's service module to ensure the httpd service is running across all systems in the 'webservers' group.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day64.md#2025-04-17_snippet_2
Language: bash

```bash
ansible webservers --m service -a "name=httpd state=started"
```

## Snippet: Running Ansible Ping Module Against a Group
Description: Command to run the ping module against a group of hosts (called 'linux') defined in the inventory file, verifying SSH connectivity to these systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day64.md#2025-04-17_snippet_3
Language: bash

```bash
ansible linux -m ping
```

## Snippet: Installing Ansible on Ubuntu
Description: A sequence of commands to install Ansible on an Ubuntu system that will serve as the control node. These commands add the Ansible repository and install the software.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day64.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```