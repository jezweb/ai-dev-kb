# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md
Language: yaml

## Snippet: Example Ansible Playbook Implementation
Description: Shows how to include a role in an Ansible playbook with parameters. This example demonstrates passing a variable 'x' with value 42 to the role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```