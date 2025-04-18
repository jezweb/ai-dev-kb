# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day87.md
Language: bash

## Snippet: Installing Kasten K10 using Helm
Description: Commands to add the Kasten Helm repository and install K10 with specific configuration settings for token authentication and Kanister sidecar injection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day87.md#2025-04-17_snippet_1
Language: bash

```bash
helm repo add kasten https://charts.kasten.io/

helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```

## Snippet: Retrieving Kasten K10 Authentication Token
Description: Commands to extract the authentication token required for accessing the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day87.md#2025-04-17_snippet_2
Language: bash

```bash
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Configuring VolumeSnapshot Annotations for Kasten K10
Description: Commands to annotate the volumesnapshotclass for Kasten K10 compatibility and modify the default storage class settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day87.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```