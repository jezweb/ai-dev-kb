# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md
Language: multiple

## Snippet: Defining Tags in Ansible Playbook for Web and Proxy Servers
Description: This YAML snippet defines two plays in an Ansible playbook, one for webservers and another for proxy servers. It demonstrates the use of tags, roles, and variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md#2025-04-17_snippet_0
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

## Snippet: MySQL Database and User Setup Tasks
Description: This YAML file contains tasks for setting up MySQL configuration, creating a database user, and creating a new database using Ansible MySQL modules.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md#2025-04-17_snippet_4
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

## Snippet: Dynamic Nginx Configuration with Jinja2 Template
Description: This Jinja2 template creates a dynamic Nginx configuration for load balancing. It uses Ansible facts and a for loop to generate server entries for all webservers in the inventory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md#2025-04-17_snippet_1
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

## Snippet: MySQL Installation and Configuration Tasks
Description: This YAML file defines tasks for installing and configuring MySQL server. It includes package installation, service management, and Python module setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md#2025-04-17_snippet_3
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

## Snippet: MySQL Configuration Template
Description: This Jinja2 template file sets the MySQL bind address to allow connections from any IP address.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md#2025-04-17_snippet_6
Language: jinja2

```jinja2
[mysql]
bind-address = 0.0.0.0
```

## Snippet: Common Variables for Ansible Playbook
Description: This YAML file defines common variables used across the Ansible playbook, including ports, messages, and MySQL configuration details.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md#2025-04-17_snippet_5
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

## Snippet: Ansible Playbook with Roles and Tags
Description: This YAML snippet shows an Ansible playbook structure using roles and tags for webservers, proxy servers, and database servers. It demonstrates a clean separation of concerns.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day68.md#2025-04-17_snippet_2
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

- hosts: database
  become: yes
  roles:
    - common
    - mysql
  tags: database
```