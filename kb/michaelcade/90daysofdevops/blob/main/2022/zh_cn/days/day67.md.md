# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day67.md
Language: yaml

## Snippet: Installing Common Packages with Ansible Tasks
Description: An Ansible task that installs common packages (neofetch, tree, and figlet) on target hosts using the apt module with a loop to iterate through the package list.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day67.md#2025-04-17_snippet_0
Language: yaml

```yaml
- name: "Install Common packages"
  apt: name={{ item }} state=latest
  with_items:
   - neofetch
   - tree
   - figlet
```

## Snippet: Configuring Roles in Ansible Playbook for Web Servers
Description: A host block in an Ansible playbook that applies the common and apache2 roles to web servers and defines variables for HTTP/HTTPS ports and a welcome message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day67.md#2025-04-17_snippet_1
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

## Snippet: Nginx Load Balancer Configuration Template
Description: A Jinja2 template file for Nginx configuration that sets up load balancing between two web servers on port 8000 and listens on port 80 to route requests to the upstream servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day67.md#2025-04-17_snippet_3
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

## Snippet: Complete Ansible Playbook with Multiple Host Groups
Description: A complete Ansible playbook with two host blocks - one for web servers applying apache2 and common roles, and another for proxy servers applying nginx and common roles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day67.md#2025-04-17_snippet_2
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