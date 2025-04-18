# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md
Language: yaml

## Snippet: Example Ansible Role Usage Playbook
Description: Demonstrates how to include and use the role in an Ansible playbook with variable parameters. Shows basic role inclusion syntax with a parameter 'x' set to value 42.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```