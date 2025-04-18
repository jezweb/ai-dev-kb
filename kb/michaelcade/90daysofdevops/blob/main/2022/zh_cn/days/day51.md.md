# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md
Language: bash

## Snippet: Describing Kubernetes Resources
Description: Commands for getting detailed information about Kubernetes resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl describe nodes
```

## Snippet: Creating Kubernetes Resources
Description: Commands for creating new resources in Kubernetes, including namespaces and resources from YAML/JSON files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl create namespace name
kubectl create -f [filename]
```

## Snippet: Retrieving Kubernetes Nodes with kubectl in Bash
Description: Basic kubectl command to list all nodes in the Kubernetes cluster. This verifies that the cluster is running and kubectl is properly configured.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get nodes
```

## Snippet: Configuring Minikube Cluster Deployment in Bash
Description: Advanced Minikube start command with custom configurations. Sets API server port, container runtime, and Kubernetes version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_2
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd --kubernetes-version=1.21.2
```

## Snippet: Installing Minikube using Arkade in Bash
Description: Command to install Minikube using the Arkade package manager. Arkade simplifies the installation of Kubernetes tools and CLIs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_0
Language: bash

```bash
arkade get minikube
```

## Snippet: Editing Kubernetes Resources
Description: Commands for modifying existing Kubernetes resources like services.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl edit svc/servicename
```

## Snippet: Installing kubectl using Arkade in Bash
Description: Command to install kubectl, the Kubernetes command-line tool, using Arkade package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_3
Language: bash

```bash
arkade get kubectl
```

## Snippet: Listing Kubernetes Resources with kubectl
Description: Basic kubectl commands for listing various Kubernetes resources including nodes, namespaces, and pods across different namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get nodes
kubectl get namespaces
kubectl get pods
kubectl get pods -n name
```

## Snippet: Starting a Minikube Cluster in Bash
Description: Command to start a basic Minikube cluster. This creates a single-node Kubernetes cluster using the default Docker driver.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start
```

## Snippet: Deleting Kubernetes Resources
Description: Commands for removing resources from a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day51.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl delete pod
```