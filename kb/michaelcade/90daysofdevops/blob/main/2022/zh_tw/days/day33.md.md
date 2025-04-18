# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day33.md
Language: multiple

## Snippet: Creating a Virtual Machine with Azure CLI
Description: This snippet demonstrates the Azure CLI command for creating a new Azure virtual machine.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day33.md#2025-04-17_snippet_4
Language: Bash

```Bash
az VM create
```

## Snippet: Creating a Virtual Machine with Azure PowerShell
Description: This snippet shows the PowerShell cmdlet for creating a new Azure virtual machine using Azure PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day33.md#2025-04-17_snippet_3
Language: PowerShell

```PowerShell
New-AzVM
```

## Snippet: Azure Application Security Group Rule Configuration
Description: Example configuration showing ASG-based rules for controlling application-level network access between web servers, application servers, and database servers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day33.md#2025-04-17_snippet_1
Language: markdown

```markdown
| Action| Name               | Source     | Destination | Port         |  
| ------| ------------------ | ---------- | ----------- | ------------ |
| Allow | AllowInternettoWeb | Internet   | WebServers  | 443(HTTPS)   |
| Allow | AllowWebToApp      | WebServers | AppServers  | 443(HTTPS)   |
| Allow | AllowAppToDB       | AppServers | DbServers   | 1443 (MSSQL) |
| Deny  | DenyAllinbound     | Any        | Any         | Any          |
```

## Snippet: Azure Network Security Group Rule Configuration Table
Description: Example configuration table showing priority-based NSG rules for controlling network traffic in Azure, including inbound HTTPS access and load balancer rules.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day33.md#2025-04-17_snippet_0
Language: markdown

```markdown
| Description      | Priority |   Source Address   | Source Port | Destination Address | Destination Port | Action | 
| -----------      | ---------|   --------------   | ----------- | ------------------- | ---------------- | ------ |
| Inbound 443      | 1005     | *                  | *           | *                   | 443              | Allow  |
| ILB              | 1010     | Azure LoadBalancer | *           | *                   | 10000            | Allow  |
| Deny All Inbound | 4000     | *                  | *           | *                   | *                | DENY   |
```

## Snippet: Executing Azure CLI Command in PowerShell
Description: This snippet demonstrates how to run an Azure CLI command within PowerShell to list Azure CLI version information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day33.md#2025-04-17_snippet_2
Language: PowerShell

```PowerShell
az
```