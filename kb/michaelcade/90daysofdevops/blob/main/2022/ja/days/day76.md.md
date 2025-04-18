# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day76.md
Language: bash

## Snippet: Deploying ArgoCD in Kubernetes using kubectl
Description: These commands create a namespace for ArgoCD and apply the ArgoCD installation manifest to deploy it in a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day76.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Snippet: Retrieving ArgoCD Initial Admin Password
Description: This command retrieves and decodes the initial admin password for ArgoCD from a Kubernetes secret.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day76.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo
```

## Snippet: Port Forwarding ArgoCD Server in Kubernetes
Description: This command sets up port forwarding to access the ArgoCD server UI locally on port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day76.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```