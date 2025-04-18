# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day76.md
Language: shell

## Snippet: Installing ArgoCD in Kubernetes
Description: Commands to create a namespace for ArgoCD and deploy it in a Kubernetes cluster using the official manifest file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day76.md#2025-04-17_snippet_0
Language: shell

```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Snippet: Accessing ArgoCD Admin Password
Description: Command to retrieve the initial admin password for ArgoCD by decoding the secret from Kubernetes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day76.md#2025-04-17_snippet_1
Language: shell

```shell
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo
```