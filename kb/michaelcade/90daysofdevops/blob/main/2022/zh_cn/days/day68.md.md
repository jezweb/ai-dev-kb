# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md
Language: multiple

## Snippet: Simplified Ansible Playbook with Roles and Tags
Description: This YAML snippet shows a simplified version of the Ansible playbook, using roles and tags without inline variable definitions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_3
Language: yaml

```yaml
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

## Snippet: Configuring Nginx Upstream Servers using Jinja2 Template
Description: This Jinja2 template dynamically configures Nginx upstream servers by looping through the 'webservers' group and using Ansible facts to set server names and ports.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_1
Language: jinja2

```jinja2
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

## Snippet: MySQL Role Main Tasks File
Description: Main tasks file that imports other task files for MySQL installation and setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_9
Language: yaml

```yaml
# tasks file for roles/mysql
- import_tasks: install_mysql.yml
- import_tasks: setup_mysql.yml
```

## Snippet: MySQL Installation Tasks in Ansible
Description: Tasks for installing MySQL server, client, Python dependencies, and ensuring the service is running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_8
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

## Snippet: Defining Common Variables for Ansible Playbook
Description: This YAML snippet defines common variables used across the Ansible playbook, including HTTP and HTTPS ports and a welcome message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_2
Language: yaml

```yaml
http_port: 8000
https_port: 4443
html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"
```

## Snippet: Configuring Nginx Upstream Servers with Variable Port
Description: This Jinja2 template configures Nginx upstream servers, using a variable for the HTTP port and Ansible facts for server names.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_4
Language: jinja2

```jinja2
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

## Snippet: MySQL Configuration Template
Description: Template file for MySQL configuration defining bind address.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_12
Language: yaml

```yaml
[mysql]    
bind-address = 0.0.0.0
```

## Snippet: Defining Ansible Playbook with Tags for Web and Proxy Servers
Description: This YAML snippet defines an Ansible playbook with two plays, one for webservers and one for proxy servers. It uses tags to allow selective execution of plays.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_0
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

## Snippet: Ansible Playbook with Database Server Configuration
Description: This YAML snippet extends the Ansible playbook to include configuration for a database server using MySQL role and tags.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_6
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

## Snippet: MySQL Database and User Setup Tasks
Description: Tasks for creating MySQL configuration, database user with privileges, and a new database.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_10
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

## Snippet: MySQL Service Handler Configuration in Ansible
Description: Handler definition for restarting the MySQL service when configuration changes occur.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_7
Language: yaml

```yaml
- name: restart mysql
  service:
    name: mysql
    state: restarted
```

## Snippet: Common Variables Definition for MySQL Setup
Description: Variable definitions for ports, messages, and MySQL credentials used across the playbook.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_11
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

## Snippet: Configuring Apache2 Welcome Page with Ansible Facts
Description: This Jinja2 template creates a simple HTML welcome page for Apache2, using a variable for the welcome message and an Ansible fact for the server name.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day68.md#2025-04-17_snippet_5
Language: jinja2

```jinja2
<html>

<h1>{{ html_welcome_msg }}! I'm webserver {{ ansible_facts['nodename'] }} </h1>

</html>
```