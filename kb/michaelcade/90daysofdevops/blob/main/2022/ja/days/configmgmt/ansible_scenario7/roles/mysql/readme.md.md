# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md
Language: yaml

## Snippet: Defining Ansible Playbook with Role in YAML
Description: This snippet demonstrates how to include an Ansible role in a playbook. It shows the basic structure of defining hosts and applying a role with parameters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Configmgmt/ansible-scenario7/roles/mysql/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```