# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day59.md
Language: terraform

## Snippet: Creating VirtualBox VMs with Terraform
Description: This Terraform configuration creates multiple Ubuntu VMs in VirtualBox. It defines a provider configuration, resource specifications for two VMs with networking, and outputs their IP addresses. The configuration uses the count parameter to create multiple similar resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day59.md#2025-04-17_snippet_0
Language: terraform

```terraform
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

## Snippet: Defining Sensitive Variables in Terraform
Description: This snippet demonstrates how to define a sensitive variable in Terraform. The configuration includes a description, type specification, and the sensitive flag to prevent the value from being displayed in logs or console output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day59.md#2025-04-17_snippet_1
Language: terraform

```terraform
variable "some resource"  {
    description = "something important"
    type: string
    sensitive = true

}
```