# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md
Language: shell

## Snippet: Mounting a Disk in Linux
Description: These commands create a mount point and mount a disk to make it accessible in the file system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md#2025-04-17_snippet_4
Language: shell

```shell
sudo mount /dev/sdb newdisk
```

## Snippet: Updating Ubuntu System using apt
Description: This command updates the package lists for upgrades and new package installations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md#2025-04-17_snippet_0
Language: shell

```shell
sudo apt-get update
```

## Snippet: Unmounting a Disk in Linux
Description: This command safely unmounts a disk from the file system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md#2025-04-17_snippet_5
Language: shell

```shell
sudo umount /dev/sdb
```

## Snippet: Formatting a New Disk in Linux
Description: This command formats a new disk (/dev/sdb) with the ext4 file system. Caution: This will erase all data on the specified disk.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md#2025-04-17_snippet_3
Language: shell

```shell
sudo mkfs -t ext4 /dev/sdb
```

## Snippet: Installing Software using apt in Ubuntu
Description: This command installs the 'figlet' package, which is a program that generates text banners.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md#2025-04-17_snippet_1
Language: shell

```shell
sudo apt install figlet
```

## Snippet: Removing Software using apt in Ubuntu
Description: These commands demonstrate how to remove installed software, with an option to purge all related files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md#2025-04-17_snippet_2
Language: shell

```shell
sudo apt --purge remove figlet
```

## Snippet: Verifying fstab Configuration in Linux
Description: This command checks the /etc/fstab file for errors after editing, ensuring persistent mounts across reboots.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day16.md#2025-04-17_snippet_6
Language: shell

```shell
sudo mount -a
```