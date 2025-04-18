# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md
Language: yaml

## Snippet: Example Playbook Usage for Ansible Role
Description: Demonstrates how to include and use the Ansible role in a playbook, with an example of passing a variable. This snippet shows the basic structure for applying the role to servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```