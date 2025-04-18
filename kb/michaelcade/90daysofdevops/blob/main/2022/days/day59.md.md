# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day59.md
Language: HCL

## Snippet: Defining VirtualBox VMs with Terraform
Description: This Terraform configuration creates two Ubuntu VMs in VirtualBox with specified CPU, memory, and network settings. It also defines outputs for the IP addresses of the created VMs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day59.md#2025-04-17_snippet_0
Language: HCL

```HCL
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
Description: This snippet demonstrates how to define a sensitive variable in Terraform. Sensitive variables are useful for storing confidential information like API keys or passwords.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day59.md#2025-04-17_snippet_1
Language: HCL

```HCL
variable "some resource"  {
    description = "something important"
    type= string
    sensitive = true

}
```