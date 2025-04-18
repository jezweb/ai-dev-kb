# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Configmgmt/ansible-scenario7/roles/apache2/README.md
Language: yaml

## Snippet: Example Playbook Usage for Ansible Role
Description: Demonstrates how to include and use the Ansible role in a playbook. It shows passing variables as parameters to the role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Configmgmt/ansible-scenario7/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```