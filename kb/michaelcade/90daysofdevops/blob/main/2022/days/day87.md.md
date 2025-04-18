# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day87.md
Language: shell

## Snippet: Installing Kasten K10 via Helm
Description: Adds Kasten Helm repository and installs K10 with specific configuration settings for token authentication and Kanister sidecar injection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day87.md#2025-04-17_snippet_2
Language: shell

```shell
helm repo add kasten https://charts.kasten.io/

helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Retrieving Kasten K10 Authentication Token
Description: Commands to extract and decode the authentication token required for accessing the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day87.md#2025-04-17_snippet_3
Language: shell

```shell
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Configuring Default StorageClass
Description: Updates storage class configurations to set csi-hostpath-sc as default and remove default status from standard storage class.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day87.md#2025-04-17_snippet_1
Language: shell

```shell
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Annotating VolumeSnapshotClass for Kasten K10
Description: Adds annotation to the csi-hostpath-snapclass to enable it for use with Kasten K10 backup operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day87.md#2025-04-17_snippet_0
Language: shell

```shell
kubectl annotate volumesnapshotclass csi-hostpath-snapclass \
    k10.kasten.io/is-snapshot-class=true
```