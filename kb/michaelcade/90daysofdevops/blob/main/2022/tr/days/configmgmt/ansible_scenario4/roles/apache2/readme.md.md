# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario4/roles/apache2/README.md
Language: yaml

## Snippet: Example Ansible Playbook Usage
Description: Demonstrates how to include the role in an Ansible playbook with variables passed as parameters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario4/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```