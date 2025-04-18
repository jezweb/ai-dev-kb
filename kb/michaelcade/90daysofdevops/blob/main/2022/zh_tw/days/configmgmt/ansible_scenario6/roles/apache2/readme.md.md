# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario6/roles/apache2/README.md
Language: yaml

## Snippet: Example Ansible Role Usage Playbook
Description: Demonstrates how to incorporate a role into an Ansible playbook with variables. Shows basic role usage with a parameter being passed to the role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario6/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```