# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day67.md
Language: yaml

## Snippet: Complete Playbook with Load Balancer - YAML
Description: Complete Ansible playbook configuration including both web servers and proxy (load balancer) configurations with their respective roles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day67.md#2025-04-17_snippet_2
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

## Snippet: Web Servers Playbook Configuration - YAML
Description: Ansible playbook configuration for web servers, defining HTTP/HTTPS ports and welcome message. Includes common and apache2 roles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day67.md#2025-04-17_snippet_1
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

## Snippet: Nginx Load Balancer Configuration Template - YAML
Description: Nginx configuration template for load balancing between two web servers, defining upstream servers and proxy settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day67.md#2025-04-17_snippet_3
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

## Snippet: Common Role Tasks Configuration - YAML
Description: Ansible task configuration for installing common packages across all servers using apt package manager. Installs neofetch, tree, and figlet packages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day67.md#2025-04-17_snippet_0
Language: yaml

```yaml
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - neofetch
   - tree
   - figlet
```