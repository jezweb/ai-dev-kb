# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario6/roles/apache2/README.md
Language: yaml

## Snippet: Implementing Ansible Role in YAML Playbook
Description: This snippet demonstrates how to include an Ansible role in a playbook. It shows the basic structure of assigning a role to hosts and passing parameters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Configmgmt/ansible-scenario6/roles/apache2/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
- hosts: servers
  roles:
     - { role: username.rolename, x: 42 }
```