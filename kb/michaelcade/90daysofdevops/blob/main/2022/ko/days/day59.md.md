# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day59.md
Language: hcl

## Snippet: Creating Multiple VMs in VirtualBox using Terraform
Description: Terraform configuration to create multiple Ubuntu VMs in VirtualBox with specified CPU, memory, and network settings. Uses count parameter for multiple instances and includes output definitions for IP addresses.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day59.md#2025-04-17_snippet_0
Language: hcl

```hcl
terraform {
  required_providers {
    virtualbox = {
      source = "terra-farm/virtualbox"
      version = "0.2.2-alpha.1"
    }
  }
}

# 현재 공급자 자체에 대한 구성 옵션이 없습니다.

resource "virtualbox_vm" "node" {
  count     = 2
  name      = format("node-%02d", count.index + 1)
  image     = "https://app.vagrantup.com/ubuntu/boxes/bionic64/versions/20180903.0.0/providers/virtualbox.box"
  cpus      = 2
  memory    = "512 mib"

  network_adapter {
    type           = "hostonly"
    host_interface = "vboxnet1"
  }
}

output "IPAddr" {
  value = element(virtualbox_vm.node.*.network_adapter.0.ipv4_address, 1)
}

output "IPAddr_2" {
  value = element(virtualbox_vm.node.*.network_adapter.0.ipv4_address, 2)
}
```