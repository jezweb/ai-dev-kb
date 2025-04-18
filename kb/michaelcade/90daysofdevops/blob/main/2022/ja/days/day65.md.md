# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day65.md
Language: multiple

## Snippet: Creating a Basic Ansible Playbook for Apache Web Server Configuration
Description: This playbook installs and configures Apache on webservers grouped in the hosts file. It defines environment variables, installs the latest version of Apache, configures ports through templates, creates a custom index.html file, ensures Apache is running, and sets up handlers for service restarts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day65.md#2025-04-17_snippet_2
Language: yaml

```yaml
- hosts: webservers
  become: yes
  vars:
    http_port: 8000
    https_port: 4443
    html_welcome_msg: "Hello 90DaysOfDevOps"
  tasks:
  - name: ensure apache is at the latest version
    apt:
      name: apache2
      state: latest

  - name: write the apache2 ports.conf config file
    template:
      src: templates/ports.conf.j2
      dest: /etc/apache2/ports.conf
    notify:
    - restart apache

  - name: write a basic index.html file
    template:
      src: templates/index.html.j2
      dest: /var/www/html/index.html
    notify:
    - restart apache

  - name: ensure apache is running
    service:
      name: apache2
      state: started

  handlers:
    - name: restart apache
      service:
        name: apache2
        state: restarted
```

## Snippet: Simple Ansible Playbook Implementation
Description: A basic Ansible playbook that demonstrates ping functionality and OS detection. It includes tasks for connectivity testing and system information gathering.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day65.md#2025-04-17_snippet_0
Language: yaml

```yaml
- name: Simple Play
  hosts: localhost
  connection: local
  tasks:
    - name: Ping me
      ping:
    - name: print os
      debug:
        msg: "{{ ansible_os_family }}"
```

## Snippet: Vagrant Configuration for Multi-Node Test Environment
Description: A Vagrant configuration file that sets up multiple Ubuntu nodes for testing Ansible playbooks. Defines four servers including database, web servers, and load balancer with specific IP addresses and SSH ports.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day65.md#2025-04-17_snippet_1
Language: ruby

```ruby
Vagrant.configure("2") do |config|
  servers=[
    {
      :hostname => "db01",
      :box => "bento/ubuntu-21.10",
      :ip => "192.168.169.130",
      :ssh_port => '2210'
    },
    {
      :hostname => "web01",
      :box => "bento/ubuntu-21.10",
      :ip => "192.168.169.131",
      :ssh_port => '2211'
    },
    {
      :hostname => "web02",
      :box => "bento/ubuntu-21.10",
      :ip => "192.168.169.132",
      :ssh_port => '2212'
    },
    {
      :hostname => "loadbalancer",
      :box => "bento/ubuntu-21.10",
      :ip => "192.168.169.134",
      :ssh_port => '2213'
    }

  ]

config.vm.base_address = 600

  servers.each do |machine|

    config.vm.define machine[:hostname] do |node|
      node.vm.box = machine[:box]
      node.vm.hostname = machine[:hostname]
    
      node.vm.network :public_network, bridge: "Intel(R) Ethernet Connection (7) I219-V", ip: machine[:ip]
      node.vm.network "forwarded_port", guest: 22, host: machine[:ssh_port], id: "ssh"

      node.vm.provider :virtualbox do |v|
        v.customize ["modifyvm", :id, "--memory", 2048]
        v.customize ["modifyvm", :id, "--name", machine[:hostname]]
      end
    end
  end

end
```