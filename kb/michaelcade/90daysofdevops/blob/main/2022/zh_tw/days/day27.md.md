# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day27.md
Language: multiple

## Snippet: Network Device Connection Path
Description: Network device mapping with internal and external IP addresses
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day27.md#2025-04-17_snippet_1
Language: markdown

```markdown
| Node        | IP Address  | Home Network IP  |
| ----------- | ----------- | -----------      |
| Router      | 10.10.88.110| 192.168.169.115  |
| Switch1     | 10.10.88.111| 192.168.169.178  |
| Switch2     | 10.10.88.112| 192.168.169.193  |
| Switch3     | 10.10.88.113| 192.168.169.125  |
| Switch4     | 10.10.88.114| 192.168.169.197  |
```

## Snippet: Basic Cisco Device Configuration Commands
Description: Essential Cisco IOS commands for configuring interface with DHCP and verifying status
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day27.md#2025-04-17_snippet_0
Language: cisco-ios

```cisco-ios
enable
config t
int gi0/0
ip add dhcp 
no sh 
exit 
exit
sh ip int br
```