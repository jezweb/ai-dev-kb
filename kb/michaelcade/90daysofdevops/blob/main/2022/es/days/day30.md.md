# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day30.md
Language: powershell

## Snippet: Creating Azure AD Users and Groups with PowerShell
Description: This snippet demonstrates how to create users and groups in Azure Active Directory using PowerShell for automated, large-scale management. It's mentioned as an alternative to manual creation through the Azure portal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day30.md#2025-04-17_snippet_0
Language: powershell

```powershell
# Example PowerShell commands for bulk user and group creation in Azure AD
# (Note: This is a conceptual example, not actual code provided in the text)

# Connect to Azure AD
Connect-AzureAD

# Create a new user
New-AzureADUser -DisplayName "New User" -UserPrincipalName "newuser@90DaysOfDevOps.com" -PasswordProfile $PasswordProfile -AccountEnabled $true

# Create a new group
New-AzureADGroup -DisplayName "90DaysOfDevOps Users" -MailEnabled $false -SecurityEnabled $true -Description "Group for 90DaysOfDevOps users"

# Add user to group
Add-AzureADGroupMember -ObjectId "<group-object-id>" -RefObjectId "<user-object-id>"
```