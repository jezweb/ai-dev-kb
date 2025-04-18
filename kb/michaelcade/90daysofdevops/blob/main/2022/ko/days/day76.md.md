# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day76.md
Language: Shell

## Snippet: Deploying ArgoCD on Kubernetes
Description: Commands to create a namespace for ArgoCD and apply the installation manifest in a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day76.md#2025-04-17_snippet_0
Language: Shell

```Shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Snippet: Port Forwarding for ArgoCD Server
Description: Command to set up port forwarding to access the ArgoCD server UI locally.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day76.md#2025-04-17_snippet_3
Language: Shell

```Shell
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

## Snippet: Retrieving ArgoCD Admin Password
Description: Command to fetch the initial admin password for ArgoCD from a Kubernetes secret.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day76.md#2025-04-17_snippet_4
Language: Shell

```Shell
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo
```

## Snippet: Viewing All ArgoCD Resources
Description: Command to display all resources deployed in the argocd namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day76.md#2025-04-17_snippet_2
Language: Shell

```Shell
kubectl get all -n argocd
```

## Snippet: Checking ArgoCD Pod Status
Description: Command to verify if all ArgoCD pods are running in the argocd namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day76.md#2025-04-17_snippet_1
Language: Shell

```Shell
kubectl get pods -n argocd
```