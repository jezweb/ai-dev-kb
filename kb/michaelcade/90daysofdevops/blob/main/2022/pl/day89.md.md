# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day89.md
Language: bash

## Snippet: Installing Kasten K10 on Standby Cluster
Description: Helm command to install Kasten K10 on the standby cluster with necessary configurations for Kanister integration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day89.md#2025-04-17_snippet_3
Language: bash

```bash
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Retrieving Kasten K10 Authentication Token
Description: Commands to extract and decode the authentication token required for accessing the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day89.md#2025-04-17_snippet_1
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Port Forwarding Kasten K10 Dashboard
Description: Command to set up port forwarding for accessing the Kasten K10 dashboard locally through port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day89.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Creating Standby MiniKube Cluster
Description: Command to create a new MiniKube cluster with required add-ons for disaster recovery setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day89.md#2025-04-17_snippet_2
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p standby --kubernetes-version=1.21.2
```