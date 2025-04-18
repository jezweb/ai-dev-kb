# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day89.md
Language: bash

## Snippet: Creating a Standby Kubernetes Cluster with MiniKube
Description: Command to start a new MiniKube cluster with required addons for disaster recovery. This creates a separate standby cluster for testing failover capabilities.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day89.md#2025-04-17_snippet_2
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p standby --kubernetes-version=1.21.2
```

## Snippet: Installing Kasten K10 on the Standby Cluster
Description: Helm command to deploy Kasten K10 on the standby cluster with token authentication and Kanister sidecar injection enabled. This prepares the standby cluster for disaster recovery operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day89.md#2025-04-17_snippet_3
Language: bash

```bash
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Forwarding Kubernetes Port for Kasten K10 Dashboard Access
Description: Command to port-forward the Kasten K10 dashboard service to localhost port 8080, making the web interface accessible at http://127.0.0.1:8080/k10/#/.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day89.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Monitoring Kasten K10 Pod Deployment
Description: Command to watch the status of Kasten K10 pods in the kasten-io namespace as they come online, using the -w flag to continuously watch the resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day89.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get pods -n kasten-io -w
```

## Snippet: Retrieving Authentication Token for Kasten K10 Dashboard
Description: Script to extract the authentication token from Kubernetes secrets. The token is required to log into the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day89.md#2025-04-17_snippet_1
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```