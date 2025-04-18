# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day90.md
Language: bash

## Snippet: Deleting Pacman Namespace in Kubernetes
Description: Command used to remove the restore operation by deleting the pacman namespace on the standby minikube cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day90.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl delete ns pacman
```