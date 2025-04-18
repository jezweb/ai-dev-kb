# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day64.md
Language: bash

## Snippet: Executing Ping Module Against a Defined Host Group
Description: This command runs the ping module against systems defined in the 'windows' group in the hosts inventory file. It demonstrates targeting specific groups defined in the Ansible inventory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day64.md#2025-04-17_snippet_3
Language: bash

```bash
ansible windows -m ping
```

## Snippet: Installing Ansible on Ubuntu Linux
Description: These commands install Ansible on an Ubuntu system by adding the Ansible repository and using apt package manager. This setup creates a control node from which you can manage other machines via SSH.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day64.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```

## Snippet: Running Ad Hoc Command to Get OS Information
Description: This command demonstrates an ad hoc command that retrieves the operating system details from all systems in the 'linux' group. It shows how Ansible can execute shell commands across multiple systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day64.md#2025-04-17_snippet_5
Language: bash

```bash
ansible linux -a "cat /etc/os-release"
```

## Snippet: Running an Ansible Ping Module Against Local System
Description: This command demonstrates using Ansible's ping module to test connectivity against the local system. It's a simple way to verify that Ansible is working properly on the control node.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day64.md#2025-04-17_snippet_1
Language: bash

```bash
ansible localhost -m ping
```

## Snippet: Running Ping Module Against Linux Group
Description: This command runs the ping module against systems defined in the 'linux' group in the hosts inventory file. It shows successful connectivity to properly configured Linux hosts with SSH access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day64.md#2025-04-17_snippet_4
Language: bash

```bash
ansible linux -m ping
```

## Snippet: Example Service Module Command for Webservers
Description: This example command would check if the httpd service is running on all systems in the 'webservers' group. It demonstrates how modules can be used to perform specific tasks across multiple systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day64.md#2025-04-17_snippet_2
Language: bash

```bash
ansible webservers --m service -a "name=httpd state=started"
```