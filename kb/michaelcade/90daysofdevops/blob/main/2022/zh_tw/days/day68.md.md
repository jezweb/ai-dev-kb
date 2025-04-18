# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md
Language: multiple

## Snippet: Complete Ansible Playbook with Database Role
Description: A complete Ansible playbook that configures webservers, a proxy, and a database server, using roles and tags for organization and selective execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_6
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

## Snippet: MySQL Configuration Template for Binding Address
Description: A Jinja2 template file that gets rendered into a MySQL configuration file. This particular configuration allows MySQL to listen on all network interfaces by setting bind-address to 0.0.0.0.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_12
Language: jinja2

```jinja2
[mysql]    
bind-address = 0.0.0.0
```

## Snippet: Using Jinja2 Templates with Ansible Facts for Dynamic Nginx Configuration
Description: This template demonstrates how to create a dynamic Nginx configuration using Jinja2 templating with Ansible facts to automatically include all webservers in the load balancer upstream configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_1
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

## Snippet: MySQL Database and User Setup in Ansible
Description: An Ansible task file for configuring MySQL, creating a database user with specific privileges, and setting up a new database. It uses variables for credentials and configuration templates.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_10
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

## Snippet: Common Variables for Ansible Configuration
Description: A variables file containing important configuration parameters for the web server ports, MySQL credentials, and database settings. These variables are referenced throughout the playbook tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_11
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

## Snippet: Defining User Variables in YAML File for Ansible
Description: This YAML snippet shows how to define common variables in a separate file that can be used across multiple plays in Ansible, improving playbook organization and maintainability.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_2
Language: yaml

```yaml
http_port: 8000
https_port: 4443
html_welcome_msg: "Hello 90DaysOfDevOps - Welcome to Day 68!"
```

## Snippet: Defining Tags in Ansible Playbook for Selective Execution
Description: This YAML snippet shows how to define tags for different plays in an Ansible playbook, allowing selective execution of webservers or proxy configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_0
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

## Snippet: MySQL Installation Tasks in Ansible
Description: An Ansible task file for installing MySQL server, client, Python dependencies, and ensuring the service is running. It installs necessary packages including Python modules for MySQL interaction.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_8
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

## Snippet: Improved Jinja2 Template with Variable References
Description: This improved Nginx configuration template uses both Ansible facts and user-defined variables to create a more flexible and dynamic configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_4
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

## Snippet: Handlers for MySQL Service Restart in Ansible
Description: A handler definition for restarting the MySQL service used by Ansible when configuration changes require a service restart.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_7
Language: yaml

```yaml
- name: restart mysql
  service:
    name: mysql
    state: restarted
```

## Snippet: HTML Template with Ansible Facts
Description: A simple HTML template that uses Ansible facts and variables to display custom welcome messages and the server hostname, demonstrating template personalization.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_5
Language: jinja2

```jinja2
<html>

<h1>{{ html_welcome_msg }}! I'm webserver {{ ansible_facts['nodename'] }} </h1>

</html>
```

## Snippet: Ansible MySQL Role Main Task File
Description: A main task file for the MySQL role that imports other task files. It serves as a coordinator file to organize and execute installation and setup tasks in sequence.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_9
Language: yaml

```yaml
# tasks file for roles/mysql
- import_tasks: install_mysql.yml
- import_tasks: setup_mysql.yml
```

## Snippet: Cleaned Ansible Playbook After Variable Extraction
Description: This shows a clean Ansible playbook after variables have been moved to a separate file, demonstrating better organization of configuration elements.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day68.md#2025-04-17_snippet_3
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