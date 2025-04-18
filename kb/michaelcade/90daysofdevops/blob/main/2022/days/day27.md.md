# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day27.md
Language: multiple

## Snippet: Installing Excel Reading Module for Network Automation
Description: Command to install the xlrd Python module, which allows scripts to read Excel workbooks. This is useful for network automation when configuration data is stored in spreadsheets.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day27.md#2025-04-17_snippet_5
Language: bash

```bash
pip install xlrd
```

## Snippet: Verifying Paramiko Installation in Python Shell
Description: Example showing how to verify the successful installation of the Paramiko module by importing it in the Python shell. This is a basic check to ensure the module is accessible.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day27.md#2025-04-17_snippet_2
Language: python

```python
import paramiko
```

## Snippet: Installing Network Address Manipulation Module
Description: Command to install the netaddr Python module, which is used for working with and manipulating IP addresses in network automation scripts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day27.md#2025-04-17_snippet_4
Language: bash

```bash
pip install netaddr
```

## Snippet: Installing Netmiko Network Automation Module
Description: Command to install the Netmiko Python module, which extends Paramiko specifically for network devices. Netmiko simplifies connecting to network devices and executing commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day27.md#2025-04-17_snippet_3
Language: bash

```bash
pip install netmiko
```

## Snippet: Configuring Network Interfaces on Cisco Devices via CLI
Description: Basic Cisco CLI commands to enable an interface, configure it with DHCP, and display interface status. These commands are used to set up connectivity between virtual devices and the home network.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day27.md#2025-04-17_snippet_0
Language: bash

```bash
enable
config t
int gi0/0
IP add DHCP
no sh
exit
exit
sh ip int br
```

## Snippet: Installing Paramiko SSH Module in Python
Description: Command to install the Paramiko Python module, which is widely used for SSH connections. Paramiko provides SSH client functionality for Python applications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day27.md#2025-04-17_snippet_1
Language: bash

```bash
pip install paramiko
```