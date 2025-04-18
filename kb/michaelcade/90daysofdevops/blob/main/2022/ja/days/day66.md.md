# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day66.md
Language: yaml

## Snippet: Role-Based Playbook Configuration
Description: Updated playbook configuration using roles for Apache web server deployment with custom variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day66.md#2025-04-17_snippet_2
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

## Snippet: Apache Tasks Configuration in YAML
Description: Basic Apache server configuration tasks including installation, port configuration, and service management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day66.md#2025-04-17_snippet_0
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

## Snippet: Apache Handler Configuration in YAML
Description: Handler definition for Apache service restart operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day66.md#2025-04-17_snippet_1
Language: yaml

```yaml
- name: restart apache
  service:
    name: apache2
    state: restarted
```