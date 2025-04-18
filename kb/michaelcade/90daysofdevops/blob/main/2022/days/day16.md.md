# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md
Language: bash

## Snippet: Updating Ubuntu System using apt Package Manager
Description: This command updates the package lists for upgrades and new package installations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_0
Language: bash

```bash
sudo apt-get update
```

## Snippet: Listing Block Devices in Linux
Description: This command lists all block devices, showing physical disks and their partitions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_4
Language: bash

```bash
lsblk
```

## Snippet: Adding Third-Party Repository for Software Installation
Description: These commands add the HashiCorp repository to install Vagrant, including adding the GPG key and repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_3
Language: bash

```bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt update && sudo apt install vagrant
```

## Snippet: Displaying Disk Space Usage in Linux
Description: This command shows disk space usage in a human-readable format for all mounted filesystems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_5
Language: bash

```bash
df -h
```

## Snippet: Removing Software using apt Package Manager
Description: This command removes the previously installed 'figlet' program from the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_2
Language: bash

```bash
sudo apt remove figlet
```

## Snippet: Installing Software using apt Package Manager
Description: This command installs the 'figlet' program, which generates text banners.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_1
Language: bash

```bash
sudo apt install figlet
```

## Snippet: Formatting a New Disk in Linux
Description: This command formats a new disk (/dev/sdb) with the ext4 filesystem.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_6
Language: bash

```bash
sudo mkfs -t ext4 /dev/sdb
```

## Snippet: Verifying fstab Configuration in Linux
Description: This command checks if the changes made to the /etc/fstab file are correct by attempting to mount all entries.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_9
Language: bash

```bash
sudo mount -a
```

## Snippet: Mounting a Newly Formatted Disk in Linux
Description: These commands create a mount point and mount the newly formatted disk.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_7
Language: bash

```bash
sudo mkdir /mnt/NewDisk
sudo mount /dev/sdb /mnt/newdisk
```

## Snippet: Unmounting a Disk in Linux
Description: This command safely unmounts a disk from the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day16.md#2025-04-17_snippet_8
Language: bash

```bash
sudo umount /dev/sdb
```