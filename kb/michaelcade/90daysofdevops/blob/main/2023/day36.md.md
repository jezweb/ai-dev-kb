# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day36.md
Language: bash

## Snippet: Using Vault operator init command
Description: The command used to initialize a new Vault cluster, which creates the encryption key, unseal/recovery keys, and prepares the storage backend.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day36.md#2025-04-17_snippet_0
Language: bash

```bash
vault operator init
```

## Snippet: Using Vault operator unseal command
Description: The command used to unseal Vault by reconstructing the root key needed to decrypt the encryption key. This process must be performed multiple times with different unseal keys.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day36.md#2025-04-17_snippet_1
Language: bash

```bash
vault operator unseal
```

## Snippet: Disabling TLS in Vault configuration
Description: A configuration setting to disable TLS for testing environments. This should not be used in production as it creates an insecure environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day36.md#2025-04-17_snippet_2
Language: bash

```bash
tls_disable = true
```