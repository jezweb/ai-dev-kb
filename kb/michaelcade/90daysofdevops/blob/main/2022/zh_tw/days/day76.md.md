# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day76.md
Language: bash

## Snippet: Accessing ArgoCD Admin Password
Description: Command to retrieve the initial admin password for ArgoCD from the Kubernetes secret, decoded from base64.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day76.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo
```

## Snippet: Deploying ArgoCD in Kubernetes
Description: Commands to create a namespace for ArgoCD and deploy it in a Kubernetes cluster using the official manifest file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day76.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Snippet: Port Forwarding ArgoCD Server
Description: Command to set up port forwarding for accessing the ArgoCD web interface locally through port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day76.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```