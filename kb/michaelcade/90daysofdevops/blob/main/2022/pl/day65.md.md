# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md
Language: multiple

## Snippet: Creating a Simple Ansible Playbook in YAML
Description: A basic Ansible playbook that connects to localhost, runs a ping test, and displays the operating system family using the debug module. This demonstrates the format of a playbook with tasks and how to use variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md#2025-04-17_snippet_0
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

## Snippet: Creating a Multi-Node Environment with Vagrant
Description: A Vagrantfile that defines four Ubuntu virtual machines (web servers, database, and load balancer) for testing Ansible playbooks. The configuration includes networking, port forwarding, and resource allocation for each node.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md#2025-04-17_snippet_2
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

## Snippet: Configuring Ansible Host Groups in inventory
Description: An example of how to organize servers into logical groups in the Ansible hosts file. This configuration groups servers as control, proxy, webservers, and database nodes for targeted management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md#2025-04-17_snippet_3
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

## Snippet: Conditional Task Example in Ansible Playbook
Description: An example task that uses conditionals in Ansible to perform actions based on the detected operating system. This snippet shows how to shut down Debian-based systems using the when clause to evaluate conditions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md#2025-04-17_snippet_1
Language: yaml

```yaml
tasks: 
  - name: "shut down Debian flavoured systems"
    command: /sbin/shutdown -t now 
    when: ansible_os_family == "Debian"
```

## Snippet: Installing and Configuring Apache Web Server with Ansible Playbook
Description: Ansible playbook that installs Apache, configures ports, creates an index page, and ensures the service is running. Uses variables for port configuration and welcome message. Includes handlers for service restart when configurations change.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md#2025-04-17_snippet_6
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

## Snippet: SSH Key Distribution Command for Ansible
Description: A command chain to distribute SSH keys from the Ansible control node to the managed web servers, enabling passwordless authentication for Ansible automation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md#2025-04-17_snippet_5
Language: bash

```bash
ssh-copy-id web01 && ssh-copy-id web02
```

## Snippet: DNS Configuration in /etc/hosts
Description: Sample entries for the /etc/hosts file that map IP addresses to hostnames for the Ansible control node and managed nodes. This enables name resolution within the test environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day65.md#2025-04-17_snippet_4
Language: bash

```bash
192.168.169.140 ansible-control
192.168.169.130 db01
192.168.169.131 web01
192.168.169.132 web02
192.168.169.133 loadbalancer
```