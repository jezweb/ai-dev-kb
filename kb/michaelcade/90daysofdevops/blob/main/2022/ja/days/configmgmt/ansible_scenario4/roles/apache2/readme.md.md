# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Configmgmt/ansible-scenario4/roles/apache2/README.md
Language: yaml

## Snippet: Using Ansible Role in Playbook Example
Description: Example playbook configuration showing how to include a role with parameters, where x is set to 42 and username.rolename represents the role identifier.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Configmgmt/ansible-scenario4/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```