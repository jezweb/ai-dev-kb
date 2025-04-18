# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md
Language: bash

## Snippet: Mounting a New Disk
Description: These commands create a mount point and mount the new disk.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_7
Language: bash

```bash
sudo mkdir /mnt/NewDisk
sudo mount /dev/sdb /mnt/newdisk
```

## Snippet: Formatting a New Disk
Description: This command formats a new disk (/dev/sdb) with the ext4 filesystem.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_6
Language: bash

```bash
sudo mkfs -t ext4 /dev/sdb
```

## Snippet: Displaying Disk Space Usage
Description: This command shows disk space usage in a human-readable format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_5
Language: bash

```bash
df -h
```

## Snippet: Unmounting a Disk
Description: This command safely unmounts a disk from the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_8
Language: bash

```bash
sudo umount /dev/sdb
```

## Snippet: Adding Third-Party Repository for Vagrant
Description: These commands add the HashiCorp repository to install Vagrant, including adding the GPG key and repository URL.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_3
Language: bash

```bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
```

## Snippet: Installing Software with apt
Description: This command installs the 'figlet' program, which generates text banners.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_1
Language: bash

```bash
sudo apt install figlet
```

## Snippet: Updating Ubuntu System with apt
Description: This command updates the package lists for upgrades and new package installations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt-get update
```

## Snippet: Removing Software with apt
Description: This command removes the previously installed 'figlet' program from the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_2
Language: bash

```bash
sudo apt remove figlet
```

## Snippet: Listing Block Devices
Description: This command lists all block devices, showing disk and partition information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_4
Language: bash

```bash
lsblk
```

## Snippet: Verifying fstab Configuration
Description: This command checks if the /etc/fstab file is configured correctly for persistent mounts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day16.md#2025-04-17_snippet_9
Language: bash

```bash
sudo mount -a
```