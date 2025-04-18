# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day37.md
Language: bash

## Snippet: Reading Secrets from KV Engine in HashiCorp Vault
Description: These commands show different ways to read secrets from the KV secrets engine, including retrieving specific fields and formatting output as JSON.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day37.md#2025-04-17_snippet_2
Language: bash

```bash
vault kv get -format=json 90daysofdevops/cloud/aws | jq -r '.data.data.secret_key'
```

## Snippet: Enabling KV Secrets Engine in HashiCorp Vault
Description: This command enables a Key/Value version 2 secrets engine on the path '90daysofdevops' in HashiCorp Vault.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day37.md#2025-04-17_snippet_0
Language: bash

```bash
vault secrets enable -path=90daysofdevops kv-v2
```

## Snippet: Writing Secrets to KV Engine in HashiCorp Vault
Description: These commands demonstrate how to write secrets to different paths in the KV secrets engine for various teams and applications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day37.md#2025-04-17_snippet_1
Language: bash

```bash
vault kv put 90daysofdevops/development/apps/cache-app cert="----BEGIN CERTIFICATE----asdfwefsadfa23jjklnsdfkl2jns9n2a32sdaffgrsyhgsfwefdsan---END CERTIFICATE----" private_key="---BEGIN PRIVATE KEY----nwljdwsxcvmnrejhq394hdsfjfgadjkhfajkl----END PRIVATE KEY---"
```