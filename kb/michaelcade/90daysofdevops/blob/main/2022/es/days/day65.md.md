# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day65.md
Language: multiple

## Snippet: Conditional Task Example in Ansible
Description: Demonstrates how to use conditional statements in Ansible tasks, specifically for shutting down Debian systems based on OS family detection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day65.md#2025-04-17_snippet_1
Language: yaml

```yaml
tasks:
  - name: "shut down Debian flavoured systems"
    command: /sbin/shutdown -t now
    when: ansible_os_family == "Debian"
```

## Snippet: Vagrant Environment Configuration
Description: Vagrant configuration file that sets up multiple Ubuntu nodes for testing Ansible playbooks. Defines four servers with specific IP addresses and SSH ports.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day65.md#2025-04-17_snippet_2
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

## Snippet: Basic Ansible Playbook Example in YAML
Description: A simple Ansible playbook that demonstrates ping functionality and OS detection. It includes two tasks: a ping check and printing the OS family of the target system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day65.md#2025-04-17_snippet_0
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