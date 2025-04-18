# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day55.md
Language: bash

## Snippet: Starting Minikube with Persistent Storage Add-ons
Description: Command to start Minikube with volume snapshots and CSI hostpath driver add-ons for persistent storage support.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day55.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p mc-demo --Kubernetes-version=1.21.2
```

## Snippet: Viewing Persistent Volumes and Claims in Kubernetes
Description: Commands to list persistent volumes (cluster-wide) and persistent volume claims (in the Pacman namespace).
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day55.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get pvc -n pacman
```

## Snippet: Checking Kubernetes Resources in Pacman Namespace
Description: Command to list all resources in the Pacman namespace after deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day55.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get all -n pacman
```

## Snippet: Deploying Stateful Pacman Application in Kubernetes
Description: Command to create the Pacman stateful application using a YAML configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day55.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f pacman-stateful-demo.yaml
```

## Snippet: Setting Default StorageClass in Kubernetes
Description: Commands to set the CSI-hostpath-sc as the default StorageClass and remove the default annotation from the standard StorageClass.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day55.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```