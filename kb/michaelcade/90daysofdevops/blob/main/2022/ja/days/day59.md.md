# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day59.md
Language: hcl

## Snippet: Creating VirtualBox VMs with Terraform Configuration
Description: Terraform configuration to create multiple Ubuntu VMs in VirtualBox with network configuration and output definitions. Uses the terra-farm/virtualbox provider to provision VMs with specified CPU, memory, and networking settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day59.md#2025-04-17_snippet_0
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

# There are currently no configuration options for the provider itself.

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