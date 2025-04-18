# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day76.md
Language: bash

## Snippet: Deploying ArgoCD on Kubernetes
Description: Commands to create a namespace for ArgoCD and deploy it into a Kubernetes cluster using the official installation manifest.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day76.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Snippet: Accessing ArgoCD Server Through Port Forwarding
Description: Command to set up port forwarding to access the ArgoCD server UI through localhost on port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day76.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

## Snippet: Retrieving ArgoCD Admin Password
Description: Command to extract the initial admin password from the Kubernetes secret created during ArgoCD installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day76.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo
```