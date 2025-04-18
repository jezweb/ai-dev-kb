# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day65.md
Language: multiple

## Snippet: Apache Configuration Ansible Playbook for Web Servers
Description: This playbook configures Apache web servers with custom ports and welcome message. It ensures Apache is installed, configures ports.conf and index.html using templates, and ensures the service is running. It also includes handlers to restart Apache when configuration changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day65.md#2025-04-17_snippet_5
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

## Snippet: Creating a Simple Ansible Playbook in YAML
Description: A basic Ansible playbook that demonstrates two tasks: pinging the local host and printing the operating system family. This playbook shows the fundamental structure of a playbook with named tasks and conditional output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day65.md#2025-04-17_snippet_0
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

## Snippet: Configuring Ansible Hosts Inventory Groups
Description: Example of how to organize hosts into logical groups in the Ansible hosts file. This configuration defines control, proxy, webservers, and database groups for targeted playbook execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day65.md#2025-04-17_snippet_3
Language: ini

```ini
[control]
ansible-control

[proxy] 
loadbalancer

[webservers] 
web01
web02

[database] 
db01
```

## Snippet: Configuring a Multi-Node Test Environment with Vagrant
Description: A Vagrantfile that defines a test environment with four nodes: a database server, two web servers, and a load balancer. This configuration supports testing Ansible playbooks across multiple machines.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day65.md#2025-04-17_snippet_2
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

## Snippet: Conditional Task Example in Ansible Playbook
Description: An example task that uses conditionals to execute commands based on the target system's operating system family. This demonstrates how Ansible can apply different configurations to different types of systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day65.md#2025-04-17_snippet_1
Language: yaml

```yaml
tasks: 
  - name: "shut down Debian flavoured systems"
    command: /sbin/shutdown -t now 
    when: ansible_os_family == "Debian"
```

## Snippet: Configuring Host Entries for Ansible Environment
Description: Example entries for the /etc/hosts file to enable name resolution for the Ansible control node and managed nodes. This configuration ensures proper connectivity between nodes in the environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day65.md#2025-04-17_snippet_4
Language: bash

```bash
192.168.169.140 ansible-control
192.168.169.130 db01
192.168.169.131 web01
192.168.169.132 web02
192.168.169.133 loadbalancer
```