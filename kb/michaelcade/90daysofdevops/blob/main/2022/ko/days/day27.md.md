# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md
Language: multiple

## Snippet: Validating Network Device Configurations with Python
Description: References a Python script that validates VLAN configurations on network devices. This script extends the previous automation by adding verification of the applied configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_3
Language: python

```python
# Reference to netmiko_con_multi_vlan.py
```

## Snippet: Using Python with Netmiko to Configure Network Devices
Description: References a Python script that uses Netmiko to configure trunk ports between switches. This demonstrates how Python can be used to automate configuration changes across multiple network devices.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_2
Language: python

```python
# Reference to netmiko_sendchange.py
```

## Snippet: Using Python with Netmiko to Collect Information from Network Devices
Description: References a Python script that uses Netmiko to connect to multiple network devices and gather interface configuration information. This script allows for centralized monitoring of network device configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_1
Language: python

```python
# Reference to netmiko_con_multi.py
```

## Snippet: Installing Additional Python Modules for Network Automation
Description: Commands for installing supplementary Python modules useful for network automation tasks: netaddr for IP address manipulation and xlrd for working with Excel spreadsheets of network configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_7
Language: bash

```bash
pip install netaddr
pip install xlrd
```

## Snippet: Installing Paramiko SSH Module for Python
Description: Commands for installing and verifying the Paramiko Python module, which is widely used for SSH connections. This module is a foundation for many network automation scripts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_5
Language: bash

```bash
pip install paramiko
```

## Snippet: Installing Netmiko Network Automation Module for Python
Description: Command for installing the Netmiko Python module, which is specifically designed for network device automation. Netmiko simplifies SSH connections to network devices from various vendors.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_6
Language: bash

```bash
pip install netmiko
```

## Snippet: Backing Up Network Device Configurations with Python
Description: References a Python script that automates the backup of network device configurations. The script uses a text file containing IP addresses to determine which devices to back up.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_4
Language: python

```python
# Reference to backup.py and backup.txt
```

## Snippet: Configuring Network Interfaces on Cisco Devices with Command Line
Description: A series of Cisco CLI commands used to enable and configure a network interface with DHCP, and display interface status. These commands are executed on network devices to establish connectivity to the management network.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day27.md#2025-04-17_snippet_0
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