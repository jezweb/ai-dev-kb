# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md
Language: yaml

## Snippet: Example Playbook Usage for Ansible Role
Description: Demonstrates how to include the role in an Ansible playbook. This example shows how to apply the role to servers and pass a variable to the role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```