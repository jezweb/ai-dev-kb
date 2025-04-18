# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day66.md
Language: yaml

## Snippet: Separating Tasks in Ansible Playbook
Description: This snippet shows how to separate tasks into their own file for better organization in an Ansible playbook. It includes tasks for ensuring Apache is up-to-date, configuring ports, writing an index file, and ensuring the service is running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day66.md#2025-04-17_snippet_0
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

## Snippet: Separating Handlers in Ansible Playbook
Description: This snippet demonstrates how to separate handlers into their own file in an Ansible playbook. It includes a handler for restarting the Apache service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day66.md#2025-04-17_snippet_1
Language: yaml

```yaml
- name: restart apache
  service:
    name: apache2
    state: restarted
```

## Snippet: Using Roles in Ansible Playbook
Description: This snippet shows how to use roles in an Ansible playbook. It defines variables for HTTP and HTTPS ports, sets a welcome message, and includes the apache2 role for webservers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day66.md#2025-04-17_snippet_2
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