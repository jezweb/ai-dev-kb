# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day66.md
Language: multiple

## Snippet: Refactored Ansible Playbook Using Roles
Description: YAML configuration for an Ansible playbook that uses the newly created Apache2 role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day66.md#2025-04-17_snippet_4
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

## Snippet: Defining Apache2 Handlers in YAML
Description: YAML configuration for Apache2 handlers, specifically for restarting the Apache2 service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day66.md#2025-04-17_snippet_1
Language: yaml

```yaml
- name: restart apache
  service:
    name: apache2
    state: restarted
```

## Snippet: Defining Apache2 Tasks in YAML
Description: YAML configuration for Apache2 tasks including ensuring latest version, configuring ports, writing index.html, and ensuring the service is running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day66.md#2025-04-17_snippet_0
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

## Snippet: Creating Apache2 Role with Ansible Galaxy
Description: Shell command to create an Apache2 role using ansible-galaxy.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day66.md#2025-04-17_snippet_3
Language: shell

```shell
ansible-galaxy init roles/apache2
```

## Snippet: Using curl to Test Web Server Configuration
Description: Shell command to test the web server configuration using curl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day66.md#2025-04-17_snippet_2
Language: shell

```shell
curl web01:8000
```

## Snippet: Creating Additional Ansible Roles
Description: Shell commands to create common and nginx roles using ansible-galaxy.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day66.md#2025-04-17_snippet_5
Language: shell

```shell
ansible-galaxy init roles/common
ansible-galaxy init roles/nginx
```