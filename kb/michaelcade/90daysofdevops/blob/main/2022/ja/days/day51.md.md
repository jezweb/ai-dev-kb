# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md
Language: bash

## Snippet: Listing Kubernetes Resources with kubectl
Description: Basic kubectl commands for listing various Kubernetes resources including nodes, namespaces, and pods across different namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get nodes
kubectl get namespaces
kubectl get pods
kubectl get pods -n name
```

## Snippet: Installing kubectl via Arkade
Description: Command to install kubectl CLI tool using Arkade package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_2
Language: bash

```bash
arkade get kubectl
```

## Snippet: Deleting Kubernetes Resources with kubectl
Description: Commands for removing resources from a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl delete pod
```

## Snippet: Installing Minikube via Arkade
Description: Command to install Minikube using the Arkade package manager for Kubernetes tools.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_0
Language: bash

```bash
arkade get minikube
```

## Snippet: Editing Kubernetes Resources with kubectl
Description: Commands for editing existing Kubernetes resources like services.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl edit svc/servicename
```

## Snippet: Creating Kubernetes Resources with kubectl
Description: Commands for creating new resources in Kubernetes, including namespaces and resources from YAML/JSON files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl create namespace name
kubectl create -f [filename]
```

## Snippet: Starting Minikube Cluster
Description: Basic command to start a Minikube cluster with default Docker driver configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start
```

## Snippet: Describing Kubernetes Resources with kubectl
Description: Commands for getting detailed information about Kubernetes resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl describe nodes
```

## Snippet: Checking Kubernetes Node Status
Description: Basic kubectl command to verify cluster node status and connectivity.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day51.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get nodes
```