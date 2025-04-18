# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day33.md
Language: multiple

## Snippet: Application Security Groups Configuration
Description: Sample configuration demonstrating Application Security Group rules for controlling communication between different application tiers in Azure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day33.md#2025-04-17_snippet_1
Language: plaintext

```plaintext
| Action| Name               | Source     | Destination | Port         |  
| ------| ------------------ | ---------- | ----------- | ------------ |
| Allow | AllowInternettoWeb | Internet   | WebServers  | 443(HTTPS)   |
| Allow | AllowWebToApp      | WebServers | AppServers  | 443(HTTPS)   |
| Allow | AllowAppToDB       | AppServers | DbServers   | 1443 (MSSQL) |
| Deny  | DenyAllinbound     | Any        | Any         | Any          |
```

## Snippet: Azure PowerShell Command Example
Description: Example showing the Azure PowerShell cmdlet syntax for creating a virtual machine
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day33.md#2025-04-17_snippet_3
Language: powershell

```powershell
New-AzVM
```

## Snippet: Azure CLI Basic Command
Description: Basic Azure CLI command prefix used to interact with Azure resources
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day33.md#2025-04-17_snippet_4
Language: bash

```bash
az
```

## Snippet: Basic Azure CLI Command Example
Description: Example showing the basic Azure CLI command syntax for creating a virtual machine
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day33.md#2025-04-17_snippet_2
Language: bash

```bash
az VM create
```

## Snippet: Azure Network Security Group Rules Table
Description: Example configuration showing Network Security Group rules with priorities, source/destination addresses, ports and actions for controlling network traffic in Azure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day33.md#2025-04-17_snippet_0
Language: plaintext

```plaintext
| Description      | Priority |   Source Address   | Source Port | Destination Address | Destination Port | Action | 
| -----------      | ---------|   --------------   | ----------- | ------------------- | ---------------- | ------ |
| Inbound 443      | 1005     | *                  | *           | *                   | 443              | Allow  |
| ILB              | 1010     | Azure LoadBalancer | *           | *                   | 10000            | Allow  |
| Deny All Inbound | 4000     | *                  | *           | *                   | *                | DENY   |
```