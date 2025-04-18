# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md
Language: bash

## Snippet: User and Group Management in Linux
Description: Commands for changing passwords, adding users, creating groups, and modifying group memberships.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_7
Language: bash

```bash
passwd
sudo useradd NewUser
sudo groupadd DevOps
sudo usermod -a -G DevOps
usermod -a -G sudo NewUser
```

## Snippet: Modifying File Permissions with chmod
Description: Demonstrates changing file permissions using chmod command with numeric notation
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_9
Language: bash

```bash
chmod 750 Day15
```

## Snippet: Basic File and Directory Operations in Linux
Description: This snippet shows various commands for creating, navigating, and manipulating files and directories in Linux.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_2
Language: bash

```bash
mkdir Day15
cd Day15
cd ..
rmdir Day15
pwd
touch Day15
ls
```

## Snippet: Elevating Privileges with sudo in Linux
Description: The 'sudo' command is used to execute commands with elevated privileges. This snippet demonstrates how to use 'sudo' and 'sudo su' for temporary and persistent elevation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_1
Language: bash

```bash
sudo command
sudo su
exit
```

## Snippet: Command History Management in Linux
Description: Using the 'history' command to view and manage command history, including searching and executing previous commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_5
Language: bash

```bash
history
history -c
!3
history | grep "Command"
```

## Snippet: File Content Manipulation in Linux
Description: Commands for adding content to files, viewing file contents, and searching within files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_4
Language: bash

```bash
echo "Hello #90DaysOfDevOps" > Day15
echo "Commands are fun!" >> Day15
cat Day15
cat Day15 | grep "#90DaysOfDevOps"
```

## Snippet: Configuring Command History Format in Linux
Description: Setting up command history to include timestamps and increasing history file size.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_6
Language: bash

```bash
HISTTIMEFORMAT="%d-%m-%Y %T "
echo 'export HISTTIMEFORMAT="%d-%m-%Y %T "' >> ~/.bash_profile
echo 'export HISTSIZE=100000' >> ~/.bash_profile
echo 'export HISTFILESIZE=10000000' >> ~/.bash_profile
```

## Snippet: Changing File Ownership with chown
Description: Shows how to change file ownership from one user to another using chown command
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_10
Language: bash

```bash
sudo chown NewUser Day15
```

## Snippet: Filtering Output with awk
Description: Demonstrates using awk to filter specific columns from command output
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_11
Language: bash

```bash
who | awk '{print $1}'
```

## Snippet: Displaying Manual Pages in Linux
Description: The 'man' command is used to display manual pages for Linux commands. This snippet shows how to view the manual for the 'man' command itself.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_0
Language: bash

```bash
man man
```

## Snippet: File Search and Manipulation in Linux
Description: Commands for locating, moving, and renaming files in Linux file system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_3
Language: bash

```bash
locate Day15
sudo updatedb
mv Day15 90DaysOfDevOps
mv day15 AnotherDay
rm AnotherDay
rm -R
rm -R -f
cp Day15 Desktop
```

## Snippet: Viewing File Permissions with ls Command
Description: Shows how to view detailed file permissions using the ls command with -al flag
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_8
Language: bash

```bash
ls -al Day15
```

## Snippet: Extracting User Accounts with cut and xargs
Description: Shows how to extract and format user account information from /etc/passwd using cut, sort, and xargs
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_12
Language: bash

```bash
cut -d: -f1 < /etc/passwd | sort | xargs
```

## Snippet: Cutting Text with Field Delimiter
Description: Demonstrates using cut command with delimiter to extract specific fields from a file
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day15.md#2025-04-17_snippet_13
Language: bash

```bash
cut -d " " -f 2 list.txt
```