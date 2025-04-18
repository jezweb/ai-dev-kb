# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md
Language: yaml

## Snippet: Defining Ansible Role Usage Example in YAML
Description: Example playbook showing how to include and use the role with parameters. Demonstrates passing variables to the role using the standard Ansible playbook format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```