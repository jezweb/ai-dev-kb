# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md
Language: bash

## Snippet: Using awk to Extract Data from Command Output
Description: This command uses the 'who' command to list logged-in users and pipes the output to awk, which then extracts and prints only the first column (usernames) from the output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_5
Language: bash

```bash
who | awk '{print $1}'
```

## Snippet: Adding User to Sudo Group
Description: This command demonstrates how to add a user to the sudo group, granting them administrative privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_1
Language: bash

```bash
usermod -a -G sudo NewUser
```

## Snippet: Changing File Permissions in Linux
Description: This command changes the permissions of the 'Day15' file to 750, giving the owner read, write, and execute permissions, the group read and execute permissions, and others no permissions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_3
Language: bash

```bash
chmod 750 Day15
```

## Snippet: Appending Date and Time to Bash History
Description: This snippet shows how to configure bash to include date and time for each command in the history file. It sets the HISTTIMEFORMAT variable and increases the history file size.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_0
Language: bash

```bash
HISTTIMEFORMAT="%d-%m-%Y %T "

echo 'export HISTTIMEFORMAT="%d-%m-%Y %T "' >> ~/.bash_profile

echo 'export HISTSIZE=100000' >> ~/.bash_profile
echo 'export HISTFILESIZE=10000000' >> ~/.bash_profile
```

## Snippet: Using cut to Extract Specific Fields from Text
Description: This command uses the 'cut' utility to extract the second field from each line in the 'list.txt' file, using space as the delimiter. It's useful for parsing structured text data.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_8
Language: bash

```bash
cut -d " " -f 2 list.txt
```

## Snippet: Viewing File Permissions in Linux
Description: This command lists all files in the 'Day15' directory with detailed information, including permissions, ownership, and timestamps.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_2
Language: bash

```bash
ls -al Day15
```

## Snippet: Changing File Ownership in Linux
Description: This command changes the ownership of the 'Day15' file from the current user 'vagrant' to 'NewUser'. The sudo command is used to execute this operation with elevated privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_4
Language: bash

```bash
sudo chown NewUser Day15
```

## Snippet: Listing Linux User Accounts
Description: This command extracts the first field (username) from the /etc/passwd file, which contains user account information on Linux systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_6
Language: bash

```bash
cut -d: -f1 < /etc/passwd
```

## Snippet: Compacting User Account List with xargs
Description: This command extracts usernames from /etc/passwd, sorts them, and uses xargs to compact the output into a single line, providing a concise list of all user accounts on the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day15.md#2025-04-17_snippet_7
Language: bash

```bash
cut -d: -f1 < /etc/passwd | sort | xargs
```