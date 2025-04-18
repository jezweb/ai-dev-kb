# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day45.md
Language: multiple

## Snippet: Creating an Azure Service Principal Using Azure CLI
Description: Azure CLI command to create a Service Principal with Contributor role at the subscription level. Creates and configures the principal in a single command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day45.md#2025-04-17_snippet_3
Language: bash

```bash
az ad sp create-for-rbac --name ServicePrincipalName --role Contributor --scopes /subscriptions/<subscription-id>
```

## Snippet: Displaying Azure Service Principal Credentials in PowerShell
Description: PowerShell command to output the essential credentials needed for authentication when using a Service Principal, including application ID, tenant, and secret.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day45.md#2025-04-17_snippet_2
Language: powershell

```powershell
$sp.ApplicationId
$UnsecureSecret
$tenantID = (Get-AzContext).Tenant.Id
```

## Snippet: JSON Output from Azure CLI Service Principal Creation
Description: Example of the JSON response containing the credentials returned by Azure when creating a Service Principal with the Azure CLI. Shows the appId, password, and tenant details needed for authentication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day45.md#2025-04-17_snippet_4
Language: bash

```bash
{
  "appId": "<application-id>",
  "displayName": "ServicePrincipalName",
  "name": "http://ServicePrincipalName",
  "password": "<client-secret>",
  "tenant": "<tenant-id>"
}
```

## Snippet: Retrieving Client Secret from Azure Service Principal in PowerShell
Description: Code to extract and display the client secret from a newly created Service Principal in PowerShell. This secret is only visible at creation time.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day45.md#2025-04-17_snippet_1
Language: powershell

```powershell
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($sp.Secret)
$UnsecureSecret = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)
```

## Snippet: Creating Azure Service Principal Using PowerShell
Description: This command creates a new Azure Service Principal with the Contributor role scoped to a specific subscription using PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day45.md#2025-04-17_snippet_0
Language: powershell

```powershell
$sp = New-AzADServicePrincipal -DisplayName ServicePrincipalName -Role Contributor -Scope "/subscriptions/<Subscription-Id>"
```