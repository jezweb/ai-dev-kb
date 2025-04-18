# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day89.md
Language: bash

## Snippet: Installing Kasten K10 on Kubernetes with Helm
Description: Helm command to install Kasten K10 with token authentication and Kanister sidecar injection enabled. This configuration allows for application-consistent backups and disaster recovery capabilities.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day89.md#2025-04-17_snippet_3
Language: bash

```bash
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Monitoring Kubernetes Pod Status with Watch Command
Description: Command to watch the status of Kasten K10 pods during deployment, ensuring all components are successfully running before proceeding with disaster recovery setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day89.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get pods -n kasten-io -w
```

## Snippet: Retrieving Kasten K10 Authentication Token from Kubernetes
Description: Script to extract the authentication token from Kubernetes secrets for logging into the Kasten K10 dashboard. This token is required for dashboard authentication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day89.md#2025-04-17_snippet_1
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Port Forwarding Kasten K10 Dashboard in Kubernetes
Description: Command to port forward the Kasten K10 gateway service to enable dashboard access on localhost port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day89.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Creating a Standby Minikube Cluster with Volume Snapshot Support
Description: Command to create a second minikube cluster named 'standby' with the necessary add-ons for volume snapshots and CSI driver, which will serve as the disaster recovery target.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day89.md#2025-04-17_snippet_2
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p standby --kubernetes-version=1.21.2
```