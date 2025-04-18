# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md
Language: yaml

## Snippet: Implementing Ansible Role in a Playbook (YAML)
Description: This snippet demonstrates how to include and use an Ansible role within a playbook. It shows the basic structure for specifying hosts and applying a role with parameters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Configmgmt/ansible-scenario5/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```