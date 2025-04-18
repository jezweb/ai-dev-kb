# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md
Language: yaml

## Snippet: Defining Ansible Role Usage in YAML
Description: Demonstrates how to include and use the Ansible role in a playbook, showing how to pass variables as parameters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```