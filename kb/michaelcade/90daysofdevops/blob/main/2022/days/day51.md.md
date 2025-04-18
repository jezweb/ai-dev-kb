# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md
Language: multiple

## Snippet: Installing Minikube using Arkade in Bash
Description: Command to install Minikube using the arkade package manager tool. Arkade simplifies the installation of Kubernetes tools and CLIs across platforms.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_0
Language: bash

```bash
arkade get minikube
```

## Snippet: Creating Kubernetes Resources
Description: Commands for creating new resources in Kubernetes, including namespaces and resources from YAML/JSON files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_5
Language: shell

```shell
kubectl create namespace name
kubectl create -f [filename]
```

## Snippet: Installing kubectl with Arkade in Bash
Description: Command to install kubectl CLI tool using arkade. kubectl is required to interact with and manage Kubernetes clusters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_2
Language: bash

```bash
arkade get kubectl
```

## Snippet: Checking Kubernetes Nodes with kubectl in Bash
Description: Command to list all nodes in the Kubernetes cluster using kubectl. This verifies the cluster is running properly and shows available nodes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get nodes
```

## Snippet: Describing Kubernetes Resources
Description: Commands for getting detailed information about Kubernetes resources, particularly useful for debugging and monitoring.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_7
Language: shell

```shell
kubectl describe nodes
```

## Snippet: Starting a Minikube Kubernetes Cluster in Bash
Description: Command to start a basic Minikube Kubernetes cluster with default settings. This creates a single-node cluster running as a Docker container with both control and worker plane components.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start
```

## Snippet: Deleting Kubernetes Resources
Description: Commands for removing resources from a Kubernetes cluster, supporting both stdin and file-based deletion.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_8
Language: shell

```shell
kubectl delete pod
```

## Snippet: Editing Kubernetes Resources
Description: Commands for modifying existing Kubernetes resources, specifically focusing on editing services.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_6
Language: shell

```shell
kubectl edit svc/servicename
```

## Snippet: Listing Kubernetes Resources with kubectl
Description: Basic kubectl commands for listing resources like nodes, namespaces, and pods in a Kubernetes cluster. These commands help in viewing cluster resources across different namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day51.md#2025-04-17_snippet_4
Language: shell

```shell
kubectl get nodes
kubectl get namespaces
kubectl get pods
kubectl get pods -n name
```