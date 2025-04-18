# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md
Language: bash

## Snippet: Getting system memory information in Linux
Description: This command retrieves memory information using the 'cat /proc/meminfo' command, which shows details about the system's RAM usage, availability, and allocation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md#2025-04-17_snippet_5
Language: bash

```bash
cat /proc/meminfo
```

## Snippet: Using curl for basic file download in Linux
Description: This snippet demonstrates how to use curl to download a file from a URL. The command downloads the file and outputs it to standard output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md#2025-04-17_snippet_0
Language: bash

```bash
curl https://directwebsiteurl.com
```

## Snippet: Downloading and saving files with curl in Linux
Description: This example shows how to download a file with curl and save it to a specific location using the -o or -O flags. The -o flag allows naming the file while -O uses the original filename.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md#2025-04-17_snippet_1
Language: bash

```bash
curl -o downloadedFileName.txt https://directwebsiteurl.com
curl -O https://directwebsiteurl.com/downloadMe.txt
```

## Snippet: Checking system CPU information in Linux
Description: This command shows CPU information using the 'cat /proc/cpuinfo' command in Linux, which displays detailed information about the CPU cores on the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md#2025-04-17_snippet_4
Language: bash

```bash
cat /proc/cpuinfo
```

## Snippet: Terminal keyboard shortcut for moving cursor to start of line
Description: This keyboard shortcut demonstrates how to move the cursor to the beginning of the command line using Ctrl+a in a Linux terminal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md#2025-04-17_snippet_2
Language: bash

```bash
Ctrl+a
```

## Snippet: Terminal keyboard shortcut for moving cursor to end of line
Description: This keyboard shortcut shows how to move the cursor to the end of the command line using Ctrl+e in a Linux terminal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md#2025-04-17_snippet_3
Language: bash

```bash
Ctrl+e
```

## Snippet: Checking system uptime in Linux
Description: This command displays system uptime information using the 'uptime' utility, showing how long the system has been running, number of users, and system load averages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day02.md#2025-04-17_snippet_6
Language: bash

```bash
uptime
```