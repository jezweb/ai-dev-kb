# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day90.md
Language: bash

## Snippet: Deleting Namespace in Kubernetes
Description: This command deletes the 'pacman' namespace in the Kubernetes cluster, which is used to remove the previous restore operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day90.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl delete ns pacman
```