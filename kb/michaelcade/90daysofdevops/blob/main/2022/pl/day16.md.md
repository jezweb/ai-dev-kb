# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md
Language: bash

## Snippet: Updating Ubuntu System with apt Package Manager
Description: Command to update the package list on an Ubuntu system, ensuring that the system has the latest information about available packages before installing software.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt-get update
```

## Snippet: Verifying fstab Configuration for Persistent Mounts
Description: Command to verify the /etc/fstab configuration file after editing it to add persistent mount points. This checks for syntax errors without requiring a system reboot.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_9
Language: bash

```bash
sudo mount -a
```

## Snippet: Displaying Disk Space Usage with Human-Readable Output
Description: The df -h command shows disk space usage for all mounted filesystems in a human-readable format, displaying total, used, and available space in appropriate units (KB, MB, GB).
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_5
Language: bash

```bash
df -h
```

## Snippet: Removing Software with apt Package Manager
Description: Command to remove the figlet application from the Ubuntu system using apt package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_2
Language: bash

```bash
sudo apt remove figlet
```

## Snippet: Formatting a New Disk in Linux
Description: Command to format a newly added disk (sdb) with the ext4 filesystem. This prepares the disk for use in a Linux system by creating the necessary filesystem structures.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_6
Language: bash

```bash
sudo mkfs -t ext4 /dev/sdb
```

## Snippet: Safely Unmounting a Disk
Description: Command to safely unmount a disk from the system before physically removing it, ensuring data integrity by completing all pending read/write operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_8
Language: bash

```bash
sudo umount /dev/sdb
```

## Snippet: Adding Third-Party Repository for HashiCorp Vagrant
Description: Process for adding the HashiCorp repository to an Ubuntu system, which includes adding the trusted key and repository URL before installing Vagrant.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_3
Language: bash

```bash
sudo apt install vagrant
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
```

## Snippet: Creating a Mount Point and Mounting a Disk
Description: Commands to create a directory in the /mnt folder and mount a formatted disk to that location, making it accessible to the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_7
Language: bash

```bash
sudo mkdir NewDisk
sudo mount /dev/sdb newdisk
```

## Snippet: Listing Block Devices on Linux System
Description: The lsblk command lists all block devices on a Linux system, showing disk drives and their partitions. In this example, sda is the physical disk with sda1, sda2, and sda3 representing its partitions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_4
Language: bash

```bash
lsblk
```

## Snippet: Installing Software with apt Package Manager
Description: Command to install the figlet program, which generates text banners, using the apt package manager on Ubuntu.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day16.md#2025-04-17_snippet_1
Language: bash

```bash
sudo apt install figlet
```