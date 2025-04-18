# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day14.md
Language: Ruby

## Snippet: Configuring Ubuntu Desktop VM with Vagrant
Description: This Vagrantfile defines the configuration for an Ubuntu Desktop 20.04 virtual machine. It specifies the base box, memory allocation, CPU count, and video memory settings for use with VirtualBox.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day14.md#2025-04-17_snippet_0
Language: Ruby

```Ruby
Vagrant.configure("2") do |config|
  config.vm.box = "chenhan/ubuntu-desktop-20.04"
  config.vm.provider :virtualbox do |v|
   v.memory  = 8096
   v.cpus    = 4
   v.customize ["modifyvm", :id, "--vram", "128mb"]
end
end
```

## Snippet: Setting VirtualBox Video Memory
Description: This line can be added to the Vagrantfile to set the video memory for the virtual machine, which may help resolve display issues.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day14.md#2025-04-17_snippet_1
Language: Ruby

```Ruby
v.customize ["modifyvm", :id, "--vram", ""]
```