# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day67.md
Language: multiple

## Snippet: Configuring Nginx Load Balancer with Jinja2 Template
Description: This Jinja2 template configures Nginx as a load balancer. It defines an upstream group of web servers and sets up a server block to proxy requests to these web servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day67.md#2025-04-17_snippet_2
Language: Jinja2

```Jinja2
upstream webservers {
        server 192.168.169.131:8000;
        server 192.168.169.132:8000;
    }

    server {
        listen 80;

        location / {
                proxy_pass http://webservers;
        }
    }
```

## Snippet: Defining Ansible Playbook for Web Servers and Proxy
Description: This YAML snippet defines an Ansible playbook with two host blocks. It applies common and apache2 roles to webservers, and common and nginx roles to the proxy server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day67.md#2025-04-17_snippet_1
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

- hosts: proxy
  become: yes
  roles:
    - common
    - nginx
```

## Snippet: Installing Common Packages with Ansible
Description: This YAML snippet defines a task to install common packages on all servers using Ansible's apt module. It installs neofetch, tree, and figlet packages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day67.md#2025-04-17_snippet_0
Language: YAML

```YAML
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - neofetch
   - tree
   - figlet
```