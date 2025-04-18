# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day87.md
Language: bash

## Snippet: Setting up Minikube Cluster with Volume Snapshots
Description: Command to start a minikube cluster with volumesnapshots and csi-hostpath-driver addons enabled, specifying Kubernetes version and container runtime.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day87.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p 90daysofdevops --kubernetes-version=1.21.2
```

## Snippet: Installing Kasten K10 with Helm
Description: Helm commands to add Kasten repository and install K10 in the kasten-io namespace with specific configuration options.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day87.md#2025-04-17_snippet_3
Language: bash

```bash
helm repo add kasten https://charts.kasten.io/

helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Changing Default StorageClass in Kubernetes
Description: Kubectl commands to change the default storageclass from standard to csi-hostpath-sc.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day87.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Annotating VolumeSnapshotClass for Kasten K10
Description: Kubectl command to annotate the volumesnapshotclass for use with Kasten K10.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day87.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl annotate volumesnapshotclass csi-hostpath-snapclass \
    k10.kasten.io/is-snapshot-class=true
```

## Snippet: Retrieving Kasten K10 Authentication Token
Description: Bash commands to retrieve the authentication token for accessing the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day87.md#2025-04-17_snippet_4
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```