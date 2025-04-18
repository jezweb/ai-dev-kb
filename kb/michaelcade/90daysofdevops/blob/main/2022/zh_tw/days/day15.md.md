# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md
Language: bash

## Snippet: Changing File Permissions with chmod
Description: Modifies file permissions using the chmod command with numeric notation 750, giving read/write/execute to owner, read/execute to group, and no permissions to others.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_4
Language: bash

```bash
chmod 750 Day15
```

## Snippet: Filtering Command Output with awk
Description: Uses the awk command to extract only the first column from the output of the who command, showing just the usernames of logged-in users.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_6
Language: bash

```bash
who | awk '{print $1}'
```

## Snippet: Setting History Timestamp Format in Linux
Description: Commands to configure Linux history to include timestamps with each command entry. This helps with tracing when commands were executed, which is useful for system administration and troubleshooting.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_0
Language: bash

```bash
HISTTIMEFORMAT="%d-%m-%Y %T "
```

## Snippet: Extracting Fields with cut Command
Description: Demonstrates the cut command with space delimiter to extract the second field from each line of a text file, useful for data extraction.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_9
Language: bash

```bash
cut -d " " -f 2 list.txt
```

## Snippet: Compacting Output with xargs
Description: Combines cut, sort, and xargs to extract usernames from /etc/passwd, sort them, and display them in a compact single-line format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_8
Language: bash

```bash
cut -d: -f1 < /etc/passwd | sort | xargs
```

## Snippet: Adding History Timestamp Format to Bash Profile
Description: Command to add timestamp formatting to the bash profile, making the configuration persistent across sessions. This appends the export statement to the user's bash_profile file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_1
Language: bash

```bash
echo 'export HISTTIMEFORMAT="%d-%m-%Y %T "' >> ~/.bash_profile
```

## Snippet: Changing File Ownership with chown
Description: Transfers ownership of a file from the current user to a new user using the chown command with sudo privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_5
Language: bash

```bash
sudo chown NewUser Day15
```

## Snippet: Checking File Permissions in Linux
Description: Uses the ls command with options -al to list detailed file information including permissions, ownership, and size for a specific file or directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_3
Language: bash

```bash
ls -al Day15
```

## Snippet: Increasing History Size in Bash Profile
Description: Commands to increase the history file size and command count limits in bash. This allows for storing more commands in history, which is useful for referencing past operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_2
Language: bash

```bash
echo 'export HISTSIZE=100000' >> ~/.bash_profile
echo 'export HISTFILESIZE=10000000' >> ~/.bash_profile
```

## Snippet: Extracting User Accounts from /etc/passwd
Description: Uses the cut command to extract the first field (username) from each line of the /etc/passwd file, listing all system users.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day15.md#2025-04-17_snippet_7
Language: bash

```bash
cut -d: -f1 < /etc/passwd
```