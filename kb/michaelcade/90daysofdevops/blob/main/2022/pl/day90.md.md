# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day90.md
Language: bash

## Snippet: Deleting Pac-Man Namespace in Kubernetes
Description: Command to remove the existing Pac-Man namespace from the standby Kubernetes cluster before performing a new restore operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day90.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl delete ns pacman
```