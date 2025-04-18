# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day90.md
Language: bash

## Snippet: Deleting a namespace in Kubernetes
Description: Command to remove the pacman namespace from a Kubernetes cluster, which is necessary to clean up the previous disaster recovery test before performing a new migration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day90.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl delete ns pacman
```