# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md
Language: multiple

## Snippet: Dynamic Nginx Configuration with Jinja2 Template
Description: This Jinja2 template dynamically configures Nginx upstream servers using a loop over the webservers group. It demonstrates how to use Ansible facts and variables in templates.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_1
Language: Jinja2

```Jinja2
#Dynamic Config for server {{ ansible_facts['nodename'] }}
    upstream webservers {
  {% for host in groups['webservers'] %}
        server {{ hostvars[host]['ansible_facts']['nodename'] }}:8000;
    {% endfor %}
    }

    server {
        listen 80;

        location / {
                proxy_pass http://webservers;
        }
    }
```

## Snippet: Simplified Ansible Playbook with Roles (YAML)
Description: This playbook demonstrates a clean structure using roles and tags, without inline variable definitions. Variables are moved to separate files for better organization.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_4
Language: YAML

```YAML
- hosts: webservers
  become: yes
  roles:
    - common
    - apache2
  tags: web

- hosts: proxy
  become: yes
  roles:
    - common
    - nginx
  tags: proxy
```

## Snippet: Ansible Playbook with Database Configuration (YAML)
Description: This playbook includes a new block for database configuration, demonstrating how to add new roles and tags for different server types.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_7
Language: YAML

```YAML
- hosts: webservers
  become: yes
  roles:
    - common
    - apache2
  tags:
    web

- hosts: proxy
  become: yes
  roles:
    - common
    - nginx
  tags:
    proxy

- hosts: database
  become: yes
  roles:
    - common
    - mysql
  tags: database
```

## Snippet: Dynamic Nginx Configuration with Variables (Jinja2)
Description: This Jinja2 template for Nginx configuration uses both Ansible facts and user-defined variables to create a dynamic upstream server list.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_5
Language: Jinja2

```Jinja2
#Dynamic Config for server {{ ansible_facts['nodename'] }}
    upstream webservers {
  {% for host in groups['webservers'] %}
        server {{ hostvars[host]['ansible_facts']['nodename'] }}:{{ http_port }};
    {% endfor %}
    }

    server {
        listen 80;

        location / {
                proxy_pass http://webservers;
        }
    }
```

## Snippet: Dynamic HTML Template with Ansible Facts (Jinja2)
Description: This Jinja2 template for an HTML file uses Ansible facts to display the server name, demonstrating how to incorporate dynamic information in static files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_6
Language: Jinja2

```Jinja2
<html>

<h1>{{ html_welcome_msg }}! I'm webserver {{ ansible_facts['nodename'] }} </h1>

</html>
```

## Snippet: User-Defined Variables in Ansible Playbook (YAML)
Description: This snippet demonstrates how to define user variables in an Ansible playbook. These variables can be used throughout the playbook for configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_2
Language: YAML

```YAML
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"
  roles:
    - common
    - apache2
  tags: web

- hosts: proxy
  become: yes
  roles:
    - common
    - nginx
  tags: proxy
```

## Snippet: Common Variables File for Ansible (YAML)
Description: This YAML file defines common variables that can be used across all host groups in an Ansible playbook. It's typically placed in the group_vars/all directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_3
Language: YAML

```YAML
http_port: 8000
https_port: 4443
html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"
```

## Snippet: Defining Tags in Ansible Playbook (YAML)
Description: This snippet shows how to define tags for different host groups in an Ansible playbook. Tags allow selective execution of playbook tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day68.md#2025-04-17_snippet_0
Language: YAML

```YAML
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 66!"
  roles:
    - common
    - apache2
  tags: web

- hosts: proxy
  become: yes
  roles:
    - common
    - nginx
  tags: proxy
```