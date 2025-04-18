# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day15.md
Language: shell

## Snippet: Configuring History Timestamp Format in Bash
Description: Command to add timestamp format to bash history entries, enabling better tracking of when commands were executed.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day15.md#2025-04-17_snippet_0
Language: shell

```shell
HISTTIMEFORMAT="%d-%m-%Y %T "
```

## Snippet: Setting Up Bash History Configuration
Description: Commands to configure bash history settings including timestamp format and history size limits.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day15.md#2025-04-17_snippet_1
Language: shell

```shell
echo 'export HISTTIMEFORMAT="%d-%m-%Y %T "' >> ~/.bash_profile
echo 'export HISTSIZE=100000' >> ~/.bash_profile
echo 'export HISTFILESIZE=10000000' >> ~/.bash_profile
```