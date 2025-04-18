# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md
Language: multiple

## Snippet: Dynamic Nginx Configuration Template (Jinja2)
Description: This Jinja2 template dynamically configures Nginx upstream servers using a loop through the 'webservers' group. It demonstrates how to use Ansible facts and variables in templates.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_1
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

## Snippet: Defining Tags in Ansible Playbook (YAML)
Description: This snippet shows how to define tags for different plays in an Ansible playbook. Tags allow for selective execution of specific parts of the playbook.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_0
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

## Snippet: MySQL Setup Configuration (YAML)
Description: Tasks for configuring MySQL including creating database, user and setting up configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_9
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

## Snippet: Updated Ansible Playbook Without Variables (YAML)
Description: This updated playbook shows a cleaner structure after moving variables to a separate file. It demonstrates the use of roles and tags for organizing tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_2
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

## Snippet: Ansible Playbook with Database Configuration (YAML)
Description: This playbook includes a new play block for database configuration, introducing the MySQL role and demonstrating how to organize playbooks for different server types.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_5
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

## Snippet: MySQL Configuration Template (INI)
Description: Template file for MySQL configuration defining bind address.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_11
Language: ini

```ini
[mysql]
bind-address = 0.0.0.0
```

## Snippet: Dynamic HTML Template with Ansible Facts (Jinja2)
Description: This HTML template uses Ansible facts to display a custom message including the server's node name, showcasing how to use variables and facts in web content.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_4
Language: jinja2

```jinja2
<html>

<h1>{{ html_welcome_msg }}! I'm webserver {{ ansible_facts['nodename'] }} </h1>

</html>
```

## Snippet: Common Variables Configuration (YAML)
Description: Variable definitions for MySQL configuration including ports, credentials and database names.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_10
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

## Snippet: MySQL Service Handler Configuration (YAML)
Description: Ansible handler definition for restarting MySQL service when configuration changes are made.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_6
Language: yaml

```yaml
- name: restart mysql
  service:
    name: mysql
    state: restarted
```

## Snippet: Dynamic Nginx Configuration with Variable Port (Jinja2)
Description: This updated Nginx configuration template uses a variable for the HTTP port, demonstrating how to combine Ansible facts with user-defined variables in templates.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_3
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

## Snippet: MySQL Installation Tasks (YAML)
Description: Ansible tasks for installing MySQL server, client, Python dependencies and ensuring the service is running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_7
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

## Snippet: Main Tasks Import (YAML)
Description: Main task file that imports other MySQL configuration tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day68.md#2025-04-17_snippet_8
Language: yaml

```yaml
# tasks file for roles/mysql
- import_tasks: install_mysql.yml
- import_tasks: setup_mysql.yml
```