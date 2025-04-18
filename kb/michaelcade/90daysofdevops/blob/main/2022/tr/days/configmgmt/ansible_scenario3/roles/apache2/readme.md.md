# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md
Language: yaml

## Snippet: Example Playbook Usage for Ansible Role
Description: Demonstrates how to include the role in an Ansible playbook, including passing parameters. This example shows a simple implementation where the role is applied to the 'servers' host group with a variable 'x' set to 42.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario3/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```