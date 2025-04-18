# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day14.md
Language: ruby

## Snippet: Creating a Vagrant Configuration for Ubuntu Desktop with VirtualBox
Description: This Vagrantfile defines an Ubuntu Desktop 20.04 virtual machine configuration with 8GB memory, 4 CPUs, and 128MB video memory. It uses the chenhan/ubuntu-desktop-20.04 box and VirtualBox as the provider.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day14.md#2025-04-17_snippet_0
Language: ruby

```ruby
Vagrant.configure("2") do |config|

  config.vm.box = "chenhan/ubuntu-desktop-20.04"

  config.vm.provider :virtualbox do |v|

   v.memory  = 8096

   v.cpus    = 4

   v.customize ["modifyvm", :id, "--vram", "128"]

end

end
```

## Snippet: Setting VirtualBox Video Memory in Vagrant
Description: This command customizes the VirtualBox virtual machine by setting the video memory. It's an optional addition to the Vagrantfile that helps prevent display issues with the Ubuntu Desktop environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day14.md#2025-04-17_snippet_1
Language: ruby

```ruby
v.customize ["modifyvm", :id, "--vram", ""]
```