# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md
Language: yaml

## Snippet: Implementing Ansible Role Example Playbook
Description: Example playbook showing how to use the role with parameters. Demonstrates passing a variable 'x' with value 42 to the role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```