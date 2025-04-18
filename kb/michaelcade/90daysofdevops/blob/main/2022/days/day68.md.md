# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md
Language: multiple

## Snippet: MySQL Installation Tasks
Description: Ansible tasks for installing MySQL server and dependencies, ensuring service is running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_5
Language: yaml

```yaml
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - python3-pip
   - mysql-client
   - python3-mysqldb
   - libmysqlclient-dev

- name: Ensure mysql-server is installed latest version
  apt: name=mysql-server state=latest

- name: Installing python module MySQL-python
  pip:
    name: PyMySQL

- name: Ensure mysql-server is running
  service:
    name: mysql
    state: started
```

## Snippet: MySQL Setup and Configuration Tasks
Description: Configures MySQL server by creating configuration file, setting up database user with privileges, and creating a new database. Uses templating and MySQL modules.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_7
Language: yaml

```yaml
- name: Create my.cnf configuration file
  template: src=templates/my.cnf.j2 dest=/etc/mysql/conf.d/mysql.cnf
  notify: restart mysql

- name: Create database user with name 'devops' and password 'DevOps90' with all database privileges
  community.mysql.mysql_user:
    login_unix_socket: /var/run/mysqld/mysqld.sock
    login_user: "{{ mysql_user_name }}"
    login_password: "{{ mysql_user_password }}"
    name: "{{db_user}}"
    password: "{{db_pass}}"
    priv: '*.*:ALL'
    host: '%'
    state: present

- name: Create a new database with name '90daysofdevops'
  mysql_db:
    login_user: "{{ mysql_user_name }}"
    login_password: "{{ mysql_user_password }}"
    name: "{{ db_name }}"
    state: present
```

## Snippet: Ansible Web and Proxy Server Configuration with Tags
Description: Playbook configuration defining web servers and proxy setup with tags for selective execution. Includes variable definitions and role assignments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_0
Language: yaml

```yaml
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

## Snippet: Common Variables Configuration
Description: Defines common variables used across the Ansible playbook including ports, messages, and MySQL credentials.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_8
Language: yaml

```yaml
http_port: 8000
https_port: 4443
html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"

mysql_user_name: root
mysql_user_password: "vagrant"
db_user: devops
db_pass: DevOps90
db_name: 90DaysOfDevOps
```

## Snippet: MySQL Configuration Template
Description: Jinja2 template for MySQL configuration that sets the bind address to allow connections from any IP.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_9
Language: j2

```j2
[mysql]
bind-address = 0.0.0.0
```

## Snippet: Complete Playbook with Database Configuration
Description: Extended playbook including web servers, proxy, and database configurations with role assignments and tags.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_4
Language: yaml

```yaml
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

## Snippet: Main MySQL Tasks Import
Description: Imports the installation and setup tasks for MySQL role configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_6
Language: yaml

```yaml
# tasks file for roles/mysql
- import_tasks: install_mysql.yml
- import_tasks: setup_mysql.yml
```

## Snippet: Welcome Page Template with Ansible Facts
Description: HTML template using Ansible variables and facts to display custom welcome message and server information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_3
Language: j2

```j2
<html>

<h1>{{ html_welcome_msg }}! I'm webserver {{ ansible_facts['nodename'] }} </h1>

</html>
```

## Snippet: Common Variables Definition
Description: YAML configuration file defining common variables for HTTP ports and welcome message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_2
Language: yaml

```yaml
http_port: 8000
https_port: 4443
html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"
```

## Snippet: Dynamic Nginx Template Configuration
Description: J2 template for dynamic Nginx configuration using Ansible facts and variables to configure upstream web servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day68.md#2025-04-17_snippet_1
Language: j2

```j2
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