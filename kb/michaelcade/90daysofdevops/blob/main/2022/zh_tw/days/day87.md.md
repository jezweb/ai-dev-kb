# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md
Language: bash

## Snippet: Retrieving Kasten K10 Authentication Token
Description: Commands to extract the authentication token from Kubernetes secrets for logging into the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md#2025-04-17_snippet_5
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Configuring Default StorageClass for Kubernetes Cluster
Description: Commands to change the default storage class from 'standard' to 'csi-hostpath-sc' to support volume snapshots in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Installing Kasten K10 via Helm
Description: Commands to add the Kasten Helm repository and install Kasten K10 with token authentication and Kanister sidecar injection enabled in the kasten-io namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md#2025-04-17_snippet_2
Language: bash

```bash
helm repo add kasten https://charts.kasten.io/

helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Accessing Pacman Application via Port Forwarding
Description: Command to set up port forwarding to access the deployed Pacman application frontend locally on port 9090.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Annotating VolumeSnapshotClass for Kasten K10 Integration
Description: A command to annotate the CSI hostpath snapclass so that Kasten K10 can identify and use it for backup operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl annotate volumesnapshotclass csi-hostpath-snapclass \
    k10.kasten.io/is-snapshot-class=true
```

## Snippet: Accessing Kasten K10 Dashboard via Port Forwarding
Description: Command to set up port forwarding to access the Kasten K10 dashboard locally on port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Monitoring Kasten K10 Pod Deployment
Description: Command to watch Kasten K10 pods being created in the kasten-io namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day87.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n kasten-io -w
```