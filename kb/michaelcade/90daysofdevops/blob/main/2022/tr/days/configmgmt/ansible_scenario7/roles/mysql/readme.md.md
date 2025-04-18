# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md
Language: yaml

## Snippet: Implementing Basic Ansible Role Example
Description: Example playbook showing how to use the role with parameters. Demonstrates basic role inclusion with a variable parameter.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```