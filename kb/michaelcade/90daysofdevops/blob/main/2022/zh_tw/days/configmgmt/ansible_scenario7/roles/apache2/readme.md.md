# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario7/roles/apache2/README.md
Language: yaml

## Snippet: Implementing Ansible Role in Playbook (YAML)
Description: This snippet demonstrates how to include an Ansible role in a playbook. It shows the basic structure of using a role with variables passed as parameters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Configmgmt/ansible-scenario7/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```