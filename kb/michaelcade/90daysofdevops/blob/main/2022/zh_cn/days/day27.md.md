# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day27.md
Language: multiple

## Snippet: Installing Additional Python Modules for Network Automation
Description: These commands install additional Python modules useful for network automation tasks, including IP address manipulation and Excel file handling.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day27.md#2025-04-17_snippet_3
Language: bash

```bash
pip install netaddr
pip install xlrd
```

## Snippet: Installing Netmiko Python Module
Description: This command installs the Netmiko Python module, which is specifically designed for network device automation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day27.md#2025-04-17_snippet_2
Language: bash

```bash
pip install netmiko
```

## Snippet: Configuring Network Interface on Cisco Device
Description: This snippet shows the commands to configure a network interface on a Cisco device to obtain an IP address via DHCP and display interface information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day27.md#2025-04-17_snippet_0
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

## Snippet: Installing Paramiko Python Module
Description: This command installs the Paramiko Python module, which is used for SSH connections in network automation scripts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day27.md#2025-04-17_snippet_1
Language: bash

```bash
pip install paramiko
```