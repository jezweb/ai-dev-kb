# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md
Language: shell

## Snippet: Removing files in Linux
Description: The 'rm' command deletes files. The 'rm -R' option recursively removes directories and their contents, while 'rm -R -f' forces removal without prompting.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_14
Language: shell

```shell
rm AnotherDay
```

## Snippet: Searching command history in Linux
Description: You can search your command history for specific terms by piping the history output to grep, helping you find previously used commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_22
Language: shell

```shell
history | grep "Komut"
```

## Snippet: Creating directories with mkdir in Linux
Description: The 'mkdir' command creates a new directory in the specified location. In this example, it creates a 'Day15' directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_3
Language: shell

```shell
mkdir Day15
```

## Snippet: Moving files in Linux
Description: The 'mv' command moves files from one location to another. Here it moves 'Day15' to the '90DaysOfDevOps' directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_12
Language: shell

```shell
mv Day15 90DaysOfDevOps
```

## Snippet: Changing user password in Linux
Description: The 'passwd' command allows users to change their password. When used directly, it doesn't show the password in command history for security.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_26
Language: shell

```shell
passwd
```

## Snippet: Removing directories with rmdir in Linux
Description: The 'rmdir' command removes empty directories. It will only work if the directory contains no files or subdirectories.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_5
Language: shell

```shell
rmdir Day15
```

## Snippet: Using sudo for elevated privileges in Linux
Description: The 'sudo' command allows you to run commands with superuser privileges. It requires your password to execute.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_1
Language: shell

```shell
sudo [command]
```

## Snippet: Working with man pages in Linux Terminal
Description: The 'man' command provides documentation for other commands. You can exit man pages by pressing 'q'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_0
Language: shell

```shell
man man
```

## Snippet: Adding users to groups in Linux
Description: The 'usermod' command modifies user accounts. With -a (append) and -G (group) options, it adds a user to a specified group.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_29
Language: shell

```shell
sudo usermod -a -G DevOps
```

## Snippet: Searching file content with grep in Linux
Description: The 'grep' command filters text to find specific patterns. When combined with 'cat' using a pipe, it searches for specific text within a file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_19
Language: shell

```shell
cat Day15 | grep "#90DaysOfDevOps"
```

## Snippet: Viewing file contents with cat in Linux
Description: The 'cat' command (short for concatenate) displays the contents of a file directly in the terminal. It's useful for quick viewing of configuration files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_18
Language: shell

```shell
cat Day15
```

## Snippet: Appending to files with echo in Linux
Description: Using echo with the '>>' operator adds content to the end of a file without overwriting existing content.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_17
Language: shell

```shell
echo "Komutlar eglenceldir!" >> Gun15
```

## Snippet: Copying files in Linux
Description: The 'cp' command copies files from one location to another. This example copies 'Day15' to the 'Desktop' directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_15
Language: shell

```shell
cp Day15 Desktop
```

## Snippet: Renaming files with mv in Linux
Description: The 'mv' command can also rename files. This example changes 'Day15' to 'day15' (case change) and then to 'AnotherDay'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_13
Language: shell

```shell
mv Day15 day15
```

## Snippet: Adding users to sudo group in Linux
Description: This command adds 'NewUser' to the sudo group, granting them administrative privileges to run commands with sudo.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_30
Language: shell

```shell
usermod -a -G sudo NewUser
```

## Snippet: Increasing command history size in Linux
Description: These commands increase the number of commands stored in history and the size of the history file, allowing you to access more of your command history.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_25
Language: shell

```shell
echo 'export HISTSIZE=100000' >> ~/.bash_profile
echo 'export HISTFILESIZE=10000000' >> ~/.bash_profile
```

## Snippet: Creating empty files with touch in Linux
Description: The 'touch' command creates a new empty file with the specified name if it doesn't exist, or updates the timestamp if it does.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_7
Language: shell

```shell
touch Day15
```

## Snippet: Creating user groups in Linux
Description: The 'groupadd' command creates a new group in the system. This example creates a 'DevOps' group for organizing users.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_28
Language: shell

```shell
sudo groupadd DevOps
```

## Snippet: Navigating directories with cd in Linux
Description: The 'cd' command changes your current directory. 'cd ..' moves up one level to the parent directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_4
Language: shell

```shell
cd Day15
```

## Snippet: Adding new user accounts in Linux
Description: The 'useradd' command creates new user accounts in the system. It requires sudo privileges to execute.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_27
Language: shell

```shell
sudo useradd NewUser
```

## Snippet: Running commands from history in Linux
Description: You can execute a command from your history by using '!' followed by the history number of the command you want to run.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_21
Language: shell

```shell
!3
```

## Snippet: Updating the file database in Linux
Description: The 'updatedb' command refreshes the file location database used by the 'locate' command, ensuring newly created files can be found.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_10
Language: shell

```shell
sudo updatedb
```

## Snippet: Finding files with locate in Linux
Description: The 'locate' command searches for files in the database. If the file isn't found, update the database with 'sudo updatedb' and try again.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_9
Language: shell

```shell
locate Day15
```

## Snippet: Listing directory contents with ls in Linux
Description: The 'ls' command lists all files and directories in the current directory, providing a view of what's available in your current location.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_8
Language: shell

```shell
ls
```

## Snippet: Adding timestamp format to bash profile in Linux
Description: This command adds the timestamp format setting to your bash profile, making it persistent across sessions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_24
Language: shell

```shell
echo 'export HISTTIMEFORMAT="%d-%m-%Y %T "' >> ~/.bash_profile
```

## Snippet: Switching to root user in Linux
Description: The 'sudo su' command gives you a shell with root user privileges. Use 'exit' to return to your normal user account.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_2
Language: shell

```shell
sudo su
```

## Snippet: Setting timestamp format for command history in Linux
Description: This variable sets the format for timestamps in command history, showing when each command was executed.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_23
Language: shell

```shell
HISTTIMEFORMAT="%d-%m-%Y %T "
```

## Snippet: Clearing command history in Linux
Description: The 'history -c' command clears your command history, removing all previously executed commands from the history list.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_20
Language: shell

```shell
history -c
```

## Snippet: Showing current working directory in Linux
Description: The 'pwd' command displays the absolute path of your current directory, helping you identify where you are in the file system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_6
Language: shell

```shell
pwd
```

## Snippet: Creating file content with echo in Linux
Description: The 'echo' command with redirection operators can add content to files. The '>' operator overwrites file content, while '>>' appends to existing content.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_16
Language: shell

```shell
echo "Hello #90DaysOfDevOps" > Day15
```

## Snippet: Installing locate on Linux
Description: If the locate command is not available, you can install it using apt package manager with the mlocate package.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day15.md#2025-04-17_snippet_11
Language: shell

```shell
sudo apt install mlocate
```