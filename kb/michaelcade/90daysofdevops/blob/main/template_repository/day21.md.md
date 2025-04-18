# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md
Language: multiple

## Snippet: Cloud-Init Configuration for VM Customization
Description: YAML configuration file for cloud-init that automates VM setup, including package installation, user creation, and SSH key configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_12
Language: yaml

```yaml
#cloud-config
package_update: true
packages:
  - figlet
runcmd:
  - figlet "90DaysOfDevOps" > /etc/motd
ssh_authorized_keys:
  - ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPM5G51HWQEIRyr3bYOKWWGRYrLXGIjW3qDKKstazmBw cade.mccabe@gmail.com
```

## Snippet: Installing Multipass with Homebrew
Description: Command to install Multipass using Homebrew package manager on macOS systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_0
Language: bash

```bash
brew install --cask multipass
```

## Snippet: Getting VM Information with Multipass
Description: Command to display detailed information about a specific virtual machine including state, IPv4 address, release version, and resource allocation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_7
Language: bash

```bash
multipass info 90DaysOfDevOps
```

## Snippet: Accessing VM Shell with Multipass
Description: Command to open a shell session in the '90DaysOfDevOps' virtual machine, providing direct terminal access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_5
Language: bash

```bash
multipass shell 90DaysOfDevOps
```

## Snippet: Creating a Virtual Machine with Multipass
Description: Command to create a new virtual machine named 'demo' using the default Ubuntu LTS image in Multipass.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_2
Language: bash

```bash
multipass launch --name demo
```

## Snippet: Creating VM with Cloud-Init Configuration in Multipass
Description: Command to create a virtual machine with cloud-init configuration specified in a YAML file, automating the initialization process.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_11
Language: bash

```bash
multipass launch --name 90DaysOfDevOps --cloud-init cloud-config.yml
```

## Snippet: Checking VM System Information
Description: Commands executed inside a VM to check system details like the operating system version and hardware specifications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_6
Language: bash

```bash
cat /etc/os-release
free
disk
```

## Snippet: Listing Running Virtual Machines in Multipass
Description: Command to display all running virtual machines managed by Multipass, showing their names, states, IP addresses, and image information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_4
Language: bash

```bash
multipass list
```

## Snippet: Finding Available VM Images in Multipass
Description: Command to list all available images that can be used to create VMs in Multipass, showing available Ubuntu versions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_1
Language: bash

```bash
multipass find
```

## Snippet: Stopping and Starting VMs with Multipass
Description: Commands to stop and restart a virtual machine in Multipass.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_9
Language: bash

```bash
multipass stop 90DaysOfDevOps
multipass start 90DaysOfDevOps
```

## Snippet: Executing Commands in VM from Host
Description: Command to run a specific command inside a virtual machine without opening a shell session.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_8
Language: bash

```bash
multipass exec 90DaysOfDevOps -- lsb_release -a
```

## Snippet: Creating a VM with Custom Resources in Multipass
Description: Command to create a virtual machine with specific CPU, memory, and disk allocations using Multipass.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_3
Language: bash

```bash
multipass launch --name 90DaysOfDevOps --cpus 1 --memory 1G --disk 5G
```

## Snippet: Deleting and Purging VMs with Multipass
Description: Commands to delete a virtual machine and permanently remove it from the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day21.md#2025-04-17_snippet_10
Language: bash

```bash
multipass delete 90DaysOfDevOps
multipass purge
```