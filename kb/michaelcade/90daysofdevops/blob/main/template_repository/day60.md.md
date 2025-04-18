# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day60.md
Language: multiple

## Snippet: Creating an Ansible Playbook for VM Configuration
Description: This Ansible playbook defines tasks to be executed on different VM groups. It installs specific packages on Ubuntu (nginx, mariadb-server) and Centos (httpd, mariadb-server) systems, and creates a simple HTML file on all hosts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day60.md#2025-04-17_snippet_1
Language: yaml

```yaml
---
- hosts: ubuntu
  become: yes
  tasks:
    - name: "apt - Install nginx & mariadb"
      apt:
        name:
          - nginx
          - mariadb-server
        state: present
        update_cache: yes

- hosts: centos
  become: yes
  tasks:
    - name: "dnf - Install httpd & mariadb"
      dnf:
        name:
          - httpd
          - mariadb-server
        state: present

- hosts: all
  become: yes
  tasks:
    - name: "Create simple HTML file"
      copy:
        content: "<h1>90DaysOfDevOps - Configure by Ansible</h1>"
        dest: "/var/html/index.html"
```

## Snippet: Configuring Vagrant with Ansible for VM Provisioning
Description: This Vagrantfile defines two virtual machines (Ubuntu and Centos) with specific configurations for each. It sets up networking, VM resources, and uses Ansible as the provisioner to configure the VMs after creation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day60.md#2025-04-17_snippet_0
Language: ruby

```ruby
Vagrant.configure("2") do |config|
    config.vm.define "ubuntu" do |ubuntu|
      ubuntu.vm.box = "generic/ubuntu2004"
      ubuntu.vm.hostname = "ubuntu"
      ubuntu.vm.network "private_network", ip: "192.168.169.110"
      ubuntu.vm.provider :virtualbox do |vb|
        vb.name = "ubuntu"
        vb.memory = 1024
        vb.cpus = 2
      end
    end
  
    config.vm.define "centos" do |centos|
      centos.vm.box = "generic/centos8"
      centos.vm.hostname = "centos"
      centos.vm.network "private_network", ip: "192.168.169.111"
      centos.vm.provider :virtualbox do |vb|
        vb.name = "centos"
        vb.memory = 1024
        vb.cpus = 2
      end
    end
  
    # Ansible provision
    config.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
      ansible.groups = {
        "centos" => ["centos"],
        "ubuntu" => ["ubuntu"]
      }
    end  
  end
```