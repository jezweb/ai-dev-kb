# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day89.md
Language: bash

## Snippet: Creating Standby Minikube Cluster for Disaster Recovery
Description: Creating a new Minikube cluster to act as a standby for disaster recovery purposes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day89.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p standby --kubernetes-version=1.21.2
```

## Snippet: Monitoring Kasten K10 Pod Deployment
Description: Watching the progress of Kasten K10 pods getting to the running status in the standby cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day89.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n kasten-io -w
```

## Snippet: Installing Kasten K10 on Standby Cluster
Description: Deploying Kasten K10 on the standby Minikube cluster using Helm.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day89.md#2025-04-17_snippet_2
Language: bash

```bash
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Accessing Kasten K10 Dashboard in Kubernetes
Description: Port forwarding to access the Kasten K10 dashboard and retrieving the authentication token.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day89.md#2025-04-17_snippet_0
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```