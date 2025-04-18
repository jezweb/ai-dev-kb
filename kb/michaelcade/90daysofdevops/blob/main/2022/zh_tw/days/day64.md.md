# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day64.md
Language: bash

## Snippet: Running Ansible Ping Module Against localhost
Description: Example of using the Ansible ping module to test connectivity against the local machine, which is a quick way to verify Ansible is working properly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day64.md#2025-04-17_snippet_1
Language: bash

```bash
ansible localhost -m ping
```

## Snippet: Running Ansible Service Module Against Webservers
Description: Example command showing how to use the Ansible service module to ensure the httpd service is started on all servers in the 'webservers' group.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day64.md#2025-04-17_snippet_2
Language: bash

```bash
ansible webservers --m service -a "name=httpd state=started"
```

## Snippet: Running Ansible Ping Module Against Linux Group
Description: Command to run the Ansible ping module against hosts in the Linux group defined in the inventory file, used to test connectivity.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day64.md#2025-04-17_snippet_4
Language: bash

```bash
ansible linux -m ping
```

## Snippet: Installing Ansible on Ubuntu
Description: Commands for installing Ansible on an Ubuntu system by adding the Ansible repository and installing the package using apt.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day64.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```

## Snippet: Running Shell Command on Linux Hosts with Ansible
Description: Ad hoc command to execute a shell command on all Linux hosts to retrieve operating system details from the os-release file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day64.md#2025-04-17_snippet_5
Language: bash

```bash
ansible linux -a "cat /etc/os-release"
```

## Snippet: Running Ansible Ping Module Against Windows Group
Description: Command to run the Ansible ping module against hosts in the Windows group defined in the inventory file, used to test connectivity.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day64.md#2025-04-17_snippet_3
Language: bash

```bash
ansible windows -m ping
```