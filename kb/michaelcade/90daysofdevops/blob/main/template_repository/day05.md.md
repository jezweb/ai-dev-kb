# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md
Language: multiple

## Snippet: Terraform Resource Definition for Azure Virtual Desktop Host Pool
Description: Terraform configuration block that defines an Azure Virtual Desktop host pool. It configures host pool type, maximum session limits, load balancing algorithm, and other essential host pool properties.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md#2025-04-17_snippet_3
Language: terraform

```terraform
resource "azurerm_virtual_desktop_host_pool" "hostpool" {
  location            = azurerm_resource_group.AVD.location
  resource_group_name = azurerm_resource_group.AVD.name

  name                             = var.hostpool
  friendly_name                    = var.hostpool
  validate_environment             = false
  start_vm_on_connect              = true
  custom_rdp_properties            = "audiocapturemode:i:1;audiomode:i:0;"
  description                      = "${var.prefix} Terraform HostPool"
  type                             = "Pooled"
  maximum_sessions_allowed         = 16
  load_balancer_type               = "DepthFirst" #"BreadthFirst"
  personal_desktop_assignment_type = null
}
```

## Snippet: Terraform Resource Definition for Azure Virtual Desktop Workspace
Description: Terraform configuration block that defines an Azure Virtual Desktop workspace. It specifies the resource group, location, name, description, and friendly name for the workspace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md#2025-04-17_snippet_2
Language: terraform

```terraform
resource "azurerm_virtual_desktop_workspace" "workspace" {
  name                = var.workspace
  location            = azurerm_resource_group.AVD.location
  resource_group_name = azurerm_resource_group.AVD.name

  friendly_name = "${var.prefix} Workspace"
  description   = "${var.prefix} Workspace"
}
```

## Snippet: Terraform Resource Definition for AVD Workspace-Application Group Association
Description: Terraform configuration block that associates an application group with a workspace in Azure Virtual Desktop. This association makes the application group available within the specified workspace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md#2025-04-17_snippet_5
Language: terraform

```terraform
resource "azurerm_virtual_desktop_workspace_application_group_association" "ws-dag" {
  application_group_id = azurerm_virtual_desktop_application_group.dag.id
  workspace_id         = azurerm_virtual_desktop_workspace.workspace.id
}
```

## Snippet: Terraform Resource Definition for Azure Virtual Desktop Application Group
Description: Terraform configuration for creating an AVD application group. It associates the application group with a host pool and specifies the type as 'Desktop', indicating it will provide full desktop access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md#2025-04-17_snippet_4
Language: terraform

```terraform
resource "azurerm_virtual_desktop_application_group" "dag" {
  location            = azurerm_resource_group.AVD.location
  resource_group_name = azurerm_resource_group.AVD.name

  name                         = "${var.prefix}-dag"
  type                         = "Desktop"
  host_pool_id                 = azurerm_virtual_desktop_host_pool.hostpool.id
  friendly_name                = "Desktop AppGroup"
  description                  = "AVD application group"
  default_desktop_display_name = "SessionDesktop"
}
```

## Snippet: Terraform Resource Definition for Azure Role Assignment in AVD
Description: Terraform configuration that assigns the 'Desktop Virtualization User' role to the specified Azure AD group for the application group. This grants users in that group access to the AVD resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md#2025-04-17_snippet_6
Language: terraform

```terraform
resource "azurerm_role_assignment" "role" {
  scope                = azurerm_virtual_desktop_application_group.dag.id
  role_definition_name = "Desktop Virtualization User"
  principal_id         = var.aad_group_id
}
```

## Snippet: Authenticating with MSAL in PowerShell for Azure
Description: This PowerShell script authenticates using MSAL with the specified tenant and client ID. It acquires a token for the Management API and retrieves an access token to use in subsequent API calls.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md#2025-04-17_snippet_1
Language: powershell

```powershell
# Get Token for Subscription
$MsalToken = Get-MsalToken -TenantId $TenantID -ClientId $ClientID
$AccessToken = $MsalToken.AccessToken
```

## Snippet: Installing MSAL Module for PowerShell Authentication
Description: This PowerShell command installs the Microsoft Authentication Library (MSAL) module required for authenticating with Azure services. The module allows secure authentication when working with Azure resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day05.md#2025-04-17_snippet_0
Language: powershell

```powershell
Install-Module MSAL.PS
```