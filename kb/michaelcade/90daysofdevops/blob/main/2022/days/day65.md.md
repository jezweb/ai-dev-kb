# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day65.md
Language: multiple

## Snippet: Apache Web Server Configuration Playbook in Ansible
Description: Ansible playbook that installs and configures Apache web servers on multiple nodes. The playbook sets up custom ports (8000 for HTTP, 4443 for HTTPS), configures a welcome message, and ensures Apache is running with the latest version. It includes handlers for service restart when configuration changes occur.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day65.md#2025-04-17_snippet_5
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

## Snippet: Configuring Ansible Hosts File with Server Groups
Description: An example of organizing servers into logical groups in the Ansible hosts file (inventory). The configuration creates control, proxy, webservers, and database groups to organize the infrastructure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day65.md#2025-04-17_snippet_3
Language: Text

```Text
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

## Snippet: Creating a Simple Ansible Playbook in YAML
Description: A basic Ansible playbook that demonstrates the format with two tasks: a ping check and printing the OS family information. This simple playbook runs against localhost and shows the structure of plays and tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day65.md#2025-04-17_snippet_0
Language: YAML

```YAML
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

## Snippet: Conditional Task Example in Ansible Playbook
Description: An example task that demonstrates how to use conditionals in Ansible playbooks. This specific example shows how to shut down Debian-flavored systems based on the ansible_os_family variable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day65.md#2025-04-17_snippet_1
Language: YAML

```YAML
tasks:
  - name: "shut down Debian flavoured systems"
    command: /sbin/shutdown -t now
    when: ansible_os_family == "Debian"
```

## Snippet: Hosts File Configuration for Node Resolution
Description: A hosts file configuration that maps IP addresses to hostnames for the Ansible control node and managed nodes. This allows for name resolution across the infrastructure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day65.md#2025-04-17_snippet_4
Language: Text

```Text
192.168.169.140 ansible-control
192.168.169.130 db01
192.168.169.131 web01
192.168.169.132 web02
192.168.169.133 loadbalancer
```

## Snippet: Creating a Multi-Node Environment with Vagrant
Description: A Vagrant configuration file that sets up a testing environment with four nodes: two web servers, one database server, and one load balancer. Each machine is configured with specific IP addresses and SSH ports.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day65.md#2025-04-17_snippet_2
Language: Vagrant

```Vagrant
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