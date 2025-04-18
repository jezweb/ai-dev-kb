# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day89.md
Language: Shell

## Snippet: Creating a Standby Minikube Cluster for Disaster Recovery
Description: This command creates a standby Minikube cluster with volume snapshots and CSI hostpath driver addons enabled for disaster recovery purposes. It specifies a custom API server port and Kubernetes version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day89.md#2025-04-17_snippet_2
Language: Shell

```Shell
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p standby --kubernetes-version=1.21.2
```

## Snippet: Installing Kasten K10 on Kubernetes Cluster Using Helm
Description: This Helm command installs Kasten K10 data management platform on a Kubernetes cluster. It enables token authentication and Kanister sidecar injection for application-consistent backups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day89.md#2025-04-17_snippet_3
Language: Shell

```Shell
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Setting up Port Forwarding for Kasten K10 Dashboard in Kubernetes
Description: This command sets up port forwarding to access the Kasten K10 dashboard UI by forwarding local port 8080 to the Kasten gateway service port 8000.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day89.md#2025-04-17_snippet_0
Language: Shell

```Shell
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Monitoring Kasten K10 Pod Deployment Status
Description: This command watches the deployment status of Kasten K10 pods in the kasten-io namespace, allowing you to monitor when all components are ready and running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day89.md#2025-04-17_snippet_4
Language: Shell

```Shell
kubectl get pods -n kasten-io -w
```

## Snippet: Retrieving Authentication Token for Kasten K10 Dashboard
Description: This Shell script extracts the authentication token from Kubernetes secrets to access the Kasten K10 dashboard. It identifies the token secret, decodes it from base64, and outputs the value.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day89.md#2025-04-17_snippet_1
Language: Shell

```Shell
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```