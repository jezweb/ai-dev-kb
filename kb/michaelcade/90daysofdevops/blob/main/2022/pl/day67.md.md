# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day67.md
Language: yaml

## Snippet: Installing Common Packages with Ansible Tasks
Description: Ansible task definition for installing common utility packages across all servers using apt package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day67.md#2025-04-17_snippet_0
Language: yaml

```yaml
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - neofetch
   - tree
   - figlet
```

## Snippet: Ansible Playbook with Multiple Role Assignments
Description: Playbook configuration showing role assignment for both webservers and proxy, including common and specific roles for each host group.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day67.md#2025-04-17_snippet_1
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

## Snippet: Nginx Load Balancer Configuration Template
Description: J2 template for nginx configuration defining upstream webservers and proxy settings for load balancing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day67.md#2025-04-17_snippet_2
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