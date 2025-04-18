# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day89.md
Language: multiple

## Snippet: Retrieving Kasten K10 Authentication Token
Description: Commands to get the authentication token required to log into the Kasten K10 dashboard by retrieving and decoding the secret from Kubernetes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day89.md#2025-04-17_snippet_1
Language: shell

```shell
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Creating Standby MiniKube Cluster
Description: Command to create a new MiniKube cluster for disaster recovery with specific add-ons and Kubernetes version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day89.md#2025-04-17_snippet_2
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p standby --kubernetes-version=1.21.2
```

## Snippet: Port Forwarding Kasten K10 Dashboard
Description: Command to port forward the Kasten K10 dashboard service to access it locally on port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day89.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Installing Kasten K10 via Helm
Description: Helm command to install Kasten K10 in the standby cluster with specific configuration options for authentication and Kanister sidecar injection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day89.md#2025-04-17_snippet_3
Language: bash

```bash
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```