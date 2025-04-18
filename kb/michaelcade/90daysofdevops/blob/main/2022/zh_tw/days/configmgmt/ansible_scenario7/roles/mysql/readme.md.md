# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md
Language: yaml

## Snippet: Example Ansible Playbook Usage
Description: Demonstrates how to include an Ansible role in a playbook with a variable being passed as a parameter. The example shows a basic playbook structure targeting 'servers' and incorporating a role with a parameter 'x' set to 42.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```