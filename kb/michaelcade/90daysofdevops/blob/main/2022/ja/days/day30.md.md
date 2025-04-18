# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day30.md
Language: json

## Snippet: Dynamic Azure AD Group Query
Description: Example configuration showing a Dynamic User query rule in Azure AD to automatically add users based on their email domain. The rule identifies users with @90DaysOfDevOps.com domain suffix.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day30.md#2025-04-17_snippet_0
Language: json

```json
user.principalName -contains "@90DaysOfDevOps.com"
```