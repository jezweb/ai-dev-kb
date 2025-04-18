# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md
Language: bash

## Snippet: Managing Processes with ps, kill, and top Commands in Linux
Description: Shows commands for process management: ps displays running processes, kill terminates processes by PID, and top provides an interactive view of system resource usage and processes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_11
Language: bash

```bash
ps aux
kill PID
top
```

## Snippet: Executing pwd Command to Show Current Directory in Linux
Description: Demonstrates the pwd (print working directory) command which displays the full path of the current directory in the Linux filesystem.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_0
Language: bash

```bash
pwd
```

## Snippet: Copying and Moving Files with cp and mv Commands in Linux
Description: Shows how to copy files with cp and move/rename files with mv. These commands are essential for file management operations in Linux environments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_5
Language: bash

```bash
cp source.txt destination.txt
cp -r source_directory destination_directory
mv old_name.txt new_name.txt
mv file.txt /path/to/destination/
```

## Snippet: Creating and Managing Directories with mkdir and rmdir in Linux
Description: Shows how to create new directories with mkdir and remove empty directories with rmdir. Includes examples of creating nested directories with the -p flag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_3
Language: bash

```bash
mkdir new_directory
mkdir -p parent_directory/child_directory
rmdir directory_to_remove
```

## Snippet: Viewing and Changing File Permissions with chmod in Linux
Description: Demonstrates how to view file permissions with ls -l and modify them with chmod. Includes examples of both symbolic notation (u+x) and numeric notation (755) for permission changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_10
Language: bash

```bash
ls -l file.txt
chmod u+x file.txt
chmod 755 file.txt
```

## Snippet: Creating and Viewing Files with touch and cat Commands in Linux
Description: Demonstrates creating empty files with touch and viewing file contents with cat. These commands are fundamental for file creation and inspection in Linux.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_4
Language: bash

```bash
touch new_file.txt
cat existing_file.txt
```

## Snippet: Searching File Contents with grep Command in Linux
Description: Demonstrates using grep to search for text patterns within files. Shows basic pattern matching as well as using the -r flag for recursive searching through directories.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_8
Language: bash

```bash
grep "search_term" file.txt
grep -r "search_term" directory/
```

## Snippet: Checking Disk Usage with df and du Commands in Linux
Description: Shows how to monitor disk space with df (disk free) and du (disk usage). These commands help analyze storage consumption at system and directory levels.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_13
Language: bash

```bash
df -h
du -sh /path/to/directory
```

## Snippet: Viewing File Contents with head, tail, and more Commands in Linux
Description: Shows commands for viewing partial file contents: head displays the beginning of a file, tail shows the end of a file, and more allows for paginated viewing of large files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_7
Language: bash

```bash
head file.txt
tail file.txt
more large_file.txt
```

## Snippet: Installing Packages with Package Managers in Linux
Description: Demonstrates package installation commands for different Linux distributions using apt (Debian/Ubuntu), yum (RHEL/CentOS), and dnf (Fedora). Shows both update and install operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_14
Language: bash

```bash
# Debian/Ubuntu
apt update
apt install package_name

# RHEL/CentOS
yum update
yum install package_name

# Fedora
dnf update
dnf install package_name
```

## Snippet: Using sudo for Administrative Commands in Linux
Description: Demonstrates the sudo command which allows regular users to execute commands with superuser (root) privileges, essential for system administration tasks in Linux.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_16
Language: bash

```bash
sudo command
sudo apt update
```

## Snippet: Listing Files and Directories with ls Command in Linux
Description: Shows the basic usage of the ls command to list files and directories in the current location, and demonstrates how to use the -l flag for detailed listing format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_1
Language: bash

```bash
ls
ls -l
```

## Snippet: Changing Directories with cd Command in Linux
Description: Demonstrates the cd (change directory) command to navigate the filesystem, including moving into directories, going up one level, and returning to the home directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_2
Language: bash

```bash
cd /home/user/Documents
cd ..
cd ~
```

## Snippet: Redirecting Output with > and >> Operators in Linux
Description: Shows how to redirect command output to files using > (overwrite) and >> (append) operators. This is essential for capturing command results and creating logs in Linux.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_9
Language: bash

```bash
command > output.txt
command >> append_to_file.txt
```

## Snippet: Removing Files and Directories with rm Command in Linux
Description: Demonstrates using the rm command to delete files and directories. Includes the -r flag for recursive deletion of directories and their contents, with a caution about its irreversible nature.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_6
Language: bash

```bash
rm file_to_delete.txt
rm -r directory_to_delete
```

## Snippet: Finding Files with find Command in Linux
Description: Demonstrates the find command which allows searching for files based on various criteria such as name, type, and modification time across the filesystem hierarchy.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_12
Language: bash

```bash
find /path/to/search -name "filename"
find /path/to/search -type f -name "*.txt"
```

## Snippet: Reading Manual Pages with man Command in Linux
Description: Shows how to use the man command to access system manual pages which provide detailed documentation for Linux commands, their options, and usage examples.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day14.md#2025-04-17_snippet_15
Language: bash

```bash
man command_name
```