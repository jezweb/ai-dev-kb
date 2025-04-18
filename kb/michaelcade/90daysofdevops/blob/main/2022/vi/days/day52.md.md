# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day52.md
Language: multiple

## Snippet: Defining Vagrant Configuration for Kubernetes Cluster
Description: This Vagrantfile defines the configuration for a 3-node Kubernetes cluster, including the master node and two worker nodes. It specifies the VM settings, network configuration, and provisioning scripts to be run on each node.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day52.md#2025-04-17_snippet_0
Language: ruby

```ruby
NUM_WORKER_NODES=2
IP_NW="10.0.0."
IP_START=10

Vagrant.configure("2") do |config|
    config.vm.provision "shell", inline: <<-SHELL
        apt-get update -y
        echo "$IP_NW$((IP_START))  master-node" >> /etc/hosts
        echo "$IP_NW$((IP_START+1))  worker-node01" >> /etc/hosts
        echo "$IP_NW$((IP_START+2))  worker-node02" >> /etc/hosts
    SHELL
    config.vm.box = "bento/ubuntu-21.10"
    config.vm.box_check_update = true

    config.vm.define "master" do |master|
      master.vm.hostname = "master-node"
      master.vm.network "private_network", ip: IP_NW + "#{IP_START}"
      master.vm.provider "virtualbox" do |vb|
          vb.memory = 4048
          vb.cpus = 2
          vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      end
      master.vm.provision "shell", path: "scripts/common.sh"
      master.vm.provision "shell", path: "scripts/master.sh"
    end

    (1..NUM_WORKER_NODES).each do |i|
      config.vm.define "node0#{i}" do |node|
        node.vm.hostname = "worker-node0#{i}"
        node.vm.network "private_network", ip: IP_NW + "#{IP_START + i}"
        node.vm.provider "virtualbox" do |vb|
            vb.memory = 2048
            vb.cpus = 1
            vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        end
        node.vm.provision "shell", path: "scripts/common.sh"
        node.vm.provision "shell", path: "scripts/node.sh"
      end
    end
  end
```

## Snippet: Checking Kubernetes Cluster Node Status
Description: This command retrieves the status of all nodes in the Kubernetes cluster using kubectl. It displays information such as node names, status, roles, and versions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day52.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get nodes
```