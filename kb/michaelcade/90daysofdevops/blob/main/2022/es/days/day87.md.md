# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md
Language: Shell

## Snippet: Annotating VolumeSnapshotClass for Kasten K10 in Kubernetes
Description: This command annotates the csi-hostpath-snapclass VolumeSnapshotClass to be used by Kasten K10 for backups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_0
Language: Shell

```Shell
kubectl annotate volumesnapshotclass csi-hostpath-snapclass \
    k10.kasten.io/is-snapshot-class=true
```

## Snippet: Port Forwarding for Kasten K10 Dashboard
Description: This command sets up port forwarding to access the Kasten K10 dashboard on localhost:8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_5
Language: Shell

```Shell
kubectl --namespace kasten-io port-forward service/gateway 8080:8000
```

## Snippet: Port Forwarding for Pacman Application
Description: This command sets up port forwarding to access the Pacman application frontend on localhost:9090.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_8
Language: Shell

```Shell
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Retrieving Kasten K10 Authentication Token
Description: These commands retrieve the authentication token for accessing the Kasten K10 dashboard.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_6
Language: Shell

```Shell
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Token value: "
echo $TOKEN
```

## Snippet: Monitoring Kasten K10 Pod Deployment
Description: This command watches the deployment of Kasten K10 pods in the kasten-io namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_4
Language: Shell

```Shell
kubectl get pods -n kasten-io -w
```

## Snippet: Adding Kasten Helm Repository
Description: This command adds the Kasten Helm repository to the local Helm installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_2
Language: Shell

```Shell
helm repo add kasten https://charts.kasten.io/
```

## Snippet: Changing Default StorageClass in Kubernetes
Description: These commands change the default StorageClass from 'standard' to 'csi-hostpath-sc' in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_1
Language: Shell

```Shell
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Verifying Pacman Application Deployment
Description: This command checks the status of all resources in the pacman namespace to verify the deployment of the Pacman application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_7
Language: Shell

```Shell
kubectl get all -n pacman
```

## Snippet: Installing Kasten K10 using Helm
Description: This Helm command installs Kasten K10 in the kasten-io namespace with specific configuration options.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day87.md#2025-04-17_snippet_3
Language: Shell

```Shell
helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace
```