# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day14.md
Language: Ruby

## Snippet: Configuring Ubuntu Desktop VM with Vagrant
Description: This Vagrantfile configures an Ubuntu Desktop 20.04 virtual machine using VirtualBox provider. It sets memory to 8GB, allocates 4 CPUs, and customizes video memory to 128MB.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day14.md#2025-04-17_snippet_0
Language: Ruby

```Ruby
Vagrant.configure("2") do |config|

  config.vm.box = "chenhan/ubuntu-desktop-20.04"

  config.vm.provider :virtualbox do |v|

   v.memory  = 8096

   v.cpus    = 4

   v.customize ["modifyvm", :id, "--vram", "128"]

end

end
```