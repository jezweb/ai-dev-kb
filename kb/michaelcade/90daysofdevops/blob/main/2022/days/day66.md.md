# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day66.md
Language: YAML

## Snippet: Extracting Apache Handlers into a Separate File
Description: A YAML file containing handler definitions for Apache service restarts. This has been extracted from the main playbook to improve organization and reusability.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day66.md#2025-04-17_snippet_1
Language: YAML

```YAML
- name: restart apache
  service:
    name: apache2
    state: restarted
```

## Snippet: Refactored Playbook Using Roles for Apache Web Servers
Description: An updated playbook that uses the Apache role instead of inline tasks and handlers. It defines variables for HTTP and HTTPS ports and a welcome message to be used in templates.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day66.md#2025-04-17_snippet_2
Language: YAML

```YAML
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 66!"
  roles:
    - apache2
```

## Snippet: Extracting Apache Tasks into a Separate File
Description: A YAML file containing task definitions for installing Apache, configuring ports, creating an index page, and ensuring the service is running. These tasks have been extracted from the main playbook to improve organization.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day66.md#2025-04-17_snippet_0
Language: YAML

```YAML
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