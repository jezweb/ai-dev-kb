# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day87.md
Language: Shell

## Snippet: Installing Kasten K10 using Helm in Kubernetes
Description: This Helm command installs Kasten K10 in the 'kasten-io' namespace with specific configuration options for token authentication and Kanister sidecar injection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day87.md#2025-04-17_snippet_2
Language: Shell

```Shell
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Retrieving Kasten K10 Authentication Token in Kubernetes
Description: These commands retrieve the authentication token for the Kasten K10 dashboard from a Kubernetes secret.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day87.md#2025-04-17_snippet_3
Language: Shell

```Shell
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Changing Default StorageClass in Kubernetes
Description: These commands change the default StorageClass from 'standard' to 'csi-hostpath-sc' in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day87.md#2025-04-17_snippet_1
Language: Shell

```Shell
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Annotating VolumeSnapshotClass for Kasten K10 in Kubernetes
Description: This command annotates the csi-hostpath-snapclass VolumeSnapshotClass to be used by Kasten K10 for snapshot operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day87.md#2025-04-17_snippet_0
Language: Shell

```Shell
kubectl annotate volumesnapshotclass csi-hostpath-snapclass \
    k10.kasten.io/is-snapshot-class=true
```