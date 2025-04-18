# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day33.md
Language: multiple

## Snippet: Network Security Group Rule Configuration Example (Markdown Table)
Description: Shows how Network Security Group rules are configured with priority levels, source/destination addresses, ports, and actions to control traffic flow in Azure networks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day33.md#2025-04-17_snippet_0
Language: markdown

```markdown
| Description      | Priority |   Source Address   | Source Port | Destination Address | Destination Port | Action | 
| -----------      | ---------|   --------------   | ----------- | ------------------- | ---------------- | ------ |
| Inbound 443      | 1005     | *                  | *           | *                   | 443              | Allow  |
| ILB              | 1010     | Azure LoadBalancer | *           | *                   | 10000            | Allow  |
| Deny All Inbound | 4000     | *                  | *           | *                   | *                | DENY   |
```

## Snippet: Creating a Virtual Machine using Azure PowerShell
Description: This snippet shows the Azure PowerShell cmdlet for creating a new virtual machine in Azure. It demonstrates the syntax difference between Azure PowerShell and Azure CLI for similar operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day33.md#2025-04-17_snippet_3
Language: powershell

```powershell
New-AzVM
```

## Snippet: Executing Azure CLI Command in PowerShell
Description: This snippet demonstrates how to use the Azure CLI command 'az' within PowerShell to interact with Azure resources. It shows the availability of Azure CLI on a Windows machine running PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day33.md#2025-04-17_snippet_2
Language: powershell

```powershell
az
```

## Snippet: Creating a Virtual Machine using Azure CLI
Description: This snippet illustrates the Azure CLI command for creating a new virtual machine in Azure. It showcases the syntax used in Azure CLI, which differs from the Azure PowerShell cmdlet for the same operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day33.md#2025-04-17_snippet_4
Language: bash

```bash
az VM create
```

## Snippet: Application Security Group Rule Configuration Example (Markdown Table)
Description: Demonstrates how Application Security Groups can be used in rules to control communication flow between application tiers using named groups rather than IP addresses.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day33.md#2025-04-17_snippet_1
Language: markdown

```markdown
| Action| Name               | Source     | Destination | Port         |  
| ------| ------------------ | ---------- | ----------- | ------------ |
| Allow | AllowInternettoWeb | Internet   | WebServers  | 443(HTTPS)   |
| Allow | AllowWebToApp      | WebServers | AppServers  | 443(HTTPS)   |
| Allow | AllowAppToDB       | AppServers | DbServers   | 1443 (MSSQL) |
| Deny  | DenyAllinbound     | Any        | Any         | Any          |
```