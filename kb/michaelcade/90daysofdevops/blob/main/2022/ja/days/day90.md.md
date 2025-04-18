# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day90.md
Language: bash

## Snippet: Deleting Pacman Namespace in Kubernetes
Description: Removes the pacman namespace from the Kubernetes cluster to clean up previous restore operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day90.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl delete ns pacman
```