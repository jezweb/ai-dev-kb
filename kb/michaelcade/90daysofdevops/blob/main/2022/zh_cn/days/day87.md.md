# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md
Language: bash

## Snippet: Deploying Kasten K10 on Kubernetes with Helm
Description: Helm command to install Kasten K10 in the kasten-io namespace with token authentication enabled and Kanister sidecar injection configured.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_3
Language: bash

```bash
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Changing Default StorageClass in Kubernetes
Description: Commands to change the default storageclass from the standard class to the csi-hostpath-sc storageclass, which is required for the backup demonstration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Annotating Kubernetes VolumeSnapshotClass for Kasten K10
Description: Command to annotate the csi-hostpath-snapclass volumesnapshotclass so that Kasten K10 can use it for creating volume snapshots.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl annotate volumesnapshotclass csi-hostpath-snapclass \
    k10.kasten.io/is-snapshot-class=true
```

## Snippet: Starting Minikube with Required Addons for Kubernetes Backup
Description: Command to start a minikube cluster with the volumesnapshots and csi-hostpath-driver addons enabled, which are required for Kasten K10 backup functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_8
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p 90daysofdevops --kubernetes-version=1.21.2
```

## Snippet: Adding Kasten K10 Helm Repository
Description: Command to add the Kasten Helm repository which contains the K10 chart needed for deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_2
Language: bash

```bash
helm repo add kasten https://charts.kasten.io/
```

## Snippet: Port Forwarding for Pacman Application
Description: Command to set up port forwarding to access the Pacman application front-end on localhost port 9090.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Retrieving Kasten K10 Authentication Token
Description: Script to extract the authentication token from Kubernetes secrets for logging into the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_6
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Port Forwarding to Access Kasten K10 Dashboard
Description: Command to set up port forwarding to access the Kasten K10 dashboard through localhost on port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Watching Kasten K10 Pods Initialize
Description: Command to monitor the initialization of Kasten K10 pods in the kasten-io namespace with the watch flag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day87.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get pods -n kasten-io -w
```