# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day65.md
Language: multiple

## Snippet: Ansible Hosts File Configuration
Description: An example of how to configure the Ansible hosts file to define groups of nodes. This configuration defines control, proxy, webservers, and database groups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day65.md#2025-04-17_snippet_3
Language: text

```text
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

## Snippet: Conditional Task in Ansible Playbook
Description: An example of a conditional task in an Ansible playbook that shuts down Debian-flavored systems. It demonstrates the use of the 'when' clause for conditional execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day65.md#2025-04-17_snippet_1
Language: yaml

```yaml
tasks:
  - name: "shut down Debian flavoured systems"
    command: /sbin/shutdown -t now
    when: ansible_os_family == "Debian"
```

## Snippet: Hosts File Configuration for Ansible Control Node
Description: An example of how to configure the /etc/hosts file on the Ansible control node to map IP addresses to hostnames for the managed nodes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day65.md#2025-04-17_snippet_4
Language: text

```text
192.168.169.140 ansible-control
192.168.169.130 db01
192.168.169.131 web01
192.168.169.132 web02
192.168.169.133 loadbalancer
```

## Snippet: Vagrant Configuration for Multi-Node Setup
Description: A Vagrantfile that sets up multiple Ubuntu nodes for testing Ansible playbooks. It defines four nodes with specific IP addresses and SSH ports.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day65.md#2025-04-17_snippet_2
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

## Snippet: Simple Ansible Playbook in YAML
Description: A basic Ansible playbook that pings the localhost and prints the OS family. It demonstrates the structure of a playbook with a single play containing multiple tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day65.md#2025-04-17_snippet_0
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