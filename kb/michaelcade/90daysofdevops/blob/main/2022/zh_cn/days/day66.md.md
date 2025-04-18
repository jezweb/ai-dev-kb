# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day66.md
Language: yaml

## Snippet: Refactored Playbook Using Roles in YAML
Description: This playbook demonstrates how to use Ansible roles instead of directly including tasks and handlers. It sets variables for HTTP and HTTPS ports and a welcome message, then applies the apache2 role to the webservers group.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day66.md#2025-04-17_snippet_2
Language: yaml

```yaml
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 66!"
  roles:
    - apache2
```

## Snippet: Apache2 Tasks for Webserver Configuration in YAML
Description: This code snippet contains the tasks for ensuring Apache2 is installed, configuring ports, creating an index.html file, and ensuring the service is running. These tasks were extracted from the main playbook to be organized in a separate file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day66.md#2025-04-17_snippet_0
Language: yaml

```yaml
- name: ensure apache is at the latest version
  apt: name=apache2 state=latest

- name: write the apache2 ports.conf config file
  template: 
    src=templates/ports.conf.j2 
    dest=/etc/apache2/ports.conf
  notify: restart apache

- name: write a basic index.html file
  template:
    src: templates/index.html.j2
    dest: /var/www/html/index.html
  notify:
  - restart apache

- name: ensure apache is running
  service:
    name: apache2
    state: started
```

## Snippet: Apache2 Handler for Service Restart in YAML
Description: This code snippet defines a handler for restarting the Apache2 service. It was extracted from the main playbook to be organized in a separate file for better maintainability.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day66.md#2025-04-17_snippet_1
Language: yaml

```yaml
- name: restart apache
  service:
    name: apache2
    state: restarted
```