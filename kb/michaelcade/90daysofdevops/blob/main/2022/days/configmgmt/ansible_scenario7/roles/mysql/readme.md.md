# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md
Language: yaml

## Snippet: Example Ansible Playbook Implementation
Description: Shows how to include a role in an Ansible playbook with variables passed as parameters. This example demonstrates the proper syntax for incorporating the role into a playbook targeting servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```