# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario6/roles/apache2/README.md
Language: yaml

## Snippet: Example Ansible Playbook Implementation
Description: Demonstrates how to include and use a role within an Ansible playbook, showing how to pass parameters to the role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario6/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```