# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day64.md
Language: Shell

## Snippet: Running Ansible Ping Module Locally
Description: Command to run the Ansible ping module against the local machine, used to test Ansible functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day64.md#2025-04-17_snippet_1
Language: Shell

```Shell
ansible localhost -m ping
```

## Snippet: Installing Ansible on Ubuntu
Description: Commands to install Ansible on an Ubuntu system, including updating packages and adding the Ansible repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day64.md#2025-04-17_snippet_0
Language: Shell

```Shell
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```

## Snippet: Running Ansible Service Module on Webservers
Description: Example command to start the httpd service on all systems in the 'webservers' group using the Ansible service module.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day64.md#2025-04-17_snippet_2
Language: Shell

```Shell
ansible webservers -m service -a "name=httpd state=started"
```

## Snippet: Running Ansible Ping Module on Windows Group
Description: Command to run the Ansible ping module against the 'windows' group defined in the hosts file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day64.md#2025-04-17_snippet_3
Language: Shell

```Shell
ansible windows -m ping
```

## Snippet: Running Ad-hoc Command to Get OS Information
Description: Ansible ad-hoc command to retrieve operating system details from all systems in the 'linux' group.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day64.md#2025-04-17_snippet_5
Language: Shell

```Shell
ansible linux -a "cat /etc/os-release"
```

## Snippet: Running Ansible Ping Module on Linux Group
Description: Command to run the Ansible ping module against the 'Linux' group defined in the hosts file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day64.md#2025-04-17_snippet_4
Language: Shell

```Shell
ansible Linux -m ping
```