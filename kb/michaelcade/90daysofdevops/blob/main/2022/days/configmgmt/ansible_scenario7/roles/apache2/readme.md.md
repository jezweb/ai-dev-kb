# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario7/roles/apache2/README.md
Language: yaml

## Snippet: Example Ansible Playbook Usage
Description: Demonstrates how to include the role in an Ansible playbook with variables passed as parameters. The example shows a basic pattern for incorporating the role into a playbook that targets servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario7/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```