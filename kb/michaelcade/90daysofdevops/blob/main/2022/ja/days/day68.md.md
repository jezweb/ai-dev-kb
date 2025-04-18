# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md
Language: multiple

## Snippet: Dynamic Nginx Configuration with Jinja2 Template
Description: This Jinja2 template creates a dynamic Nginx configuration for load balancing. It uses a for loop to iterate through web servers and includes variables for server names and ports.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_1
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

## Snippet: Defining Web and Proxy Server Roles in Ansible Playbook (YAML)
Description: This snippet defines two plays in an Ansible playbook, one for web servers and another for a proxy server. It uses roles and tags to organize tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_0
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

## Snippet: Comprehensive Ansible Playbook with Database Configuration (YAML)
Description: This expanded playbook includes configurations for web servers, proxy server, and a new database server. It uses roles and tags for organization and selective execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_4
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

## Snippet: Simplified Ansible Playbook with External Variables (YAML)
Description: This playbook demonstrates a cleaner structure after moving variables to external files. It defines roles for web servers and proxy server with tags.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_2
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

## Snippet: MySQL Setup and Database Configuration
Description: Tasks for creating MySQL configuration, database user with privileges, and a new database using variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_8
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

## Snippet: Dynamic HTML Template with Ansible Facts (Jinja2)
Description: This Jinja2 template for an HTML file uses Ansible facts and variables to display a dynamic welcome message including the server's hostname.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_3
Language: jinja2

```jinja2
<html>

<h1>{{ html_welcome_msg }}! I'm webserver {{ ansible_facts['nodename'] }} </h1>

</html>
```

## Snippet: MySQL Installation Task Configuration
Description: Ansible task for installing MySQL server and its dependencies, including Python modules and ensuring the service is running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_6
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

## Snippet: MySQL Bind Address Configuration Template
Description: Template for MySQL configuration to allow remote connections by binding to all interfaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_10
Language: ini

```ini
[mysql]    
bind-address = 0.0.0.0
```

## Snippet: MySQL Service Handler Configuration in Ansible
Description: Handler configuration for restarting MySQL service when configuration changes are made.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_5
Language: yaml

```yaml
- name: restart mysql
  service:
    name: mysql
    state: restarted
```

## Snippet: Common Variables Configuration
Description: Variable definitions for ports, messages, and MySQL credentials used across the playbook.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_9
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

## Snippet: Main Tasks Import Configuration
Description: Main task file that imports other MySQL-related tasks in sequence.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day68.md#2025-04-17_snippet_7
Language: yaml

```yaml
# tasks file for roles/mysql
- import_tasks: install_mysql.yml
- import_tasks: setup_mysql.yml
```