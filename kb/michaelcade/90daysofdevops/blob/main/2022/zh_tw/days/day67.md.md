# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day67.md
Language: yaml

## Snippet: Nginx Loadbalancer Configuration Template
Description: This Jinja2 template for Nginx defines an upstream group of webservers and a server block that listens on port 80 and proxies requests to the defined webservers. This creates a simple loadbalancing configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day67.md#2025-04-17_snippet_3
Language: yaml

```yaml
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

## Snippet: Complete Ansible Playbook with Webservers and Proxy Configuration
Description: This YAML snippet shows a complete Ansible playbook with two host blocks - one for webservers deploying apache2 and another for the proxy server deploying nginx. Both include the common role for shared configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day67.md#2025-04-17_snippet_2
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

- hosts: proxy 
  become: yes
  roles: 
    - common
    - nginx
```

## Snippet: Defining Webservers Role Block in Ansible Playbook
Description: This YAML snippet demonstrates how to define a role block for webservers in an Ansible playbook. It includes variables for HTTP and HTTPS ports, a welcome message, and specifies both common and apache2 roles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day67.md#2025-04-17_snippet_1
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
```

## Snippet: Installing Common Packages with Ansible Role
Description: This YAML snippet defines a task for installing common packages across all servers using the apt module with a loop. It installs neofetch, tree, and figlet packages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day67.md#2025-04-17_snippet_0
Language: yaml

```yaml
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - neofetch
   - tree
   - figlet
```