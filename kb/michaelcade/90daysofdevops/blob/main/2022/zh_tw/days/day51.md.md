# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day51.md
Language: bash

## Snippet: Starting Minikube Cluster with Custom Configuration
Description: Command to start a Minikube cluster with custom configurations including API server port, container runtime, and Kubernetes version specification.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day51.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start \
--apiserver-port=6443 \
--container-runtime=containerd \
--kubernetes-version=v1.23.3
```

## Snippet: Basic Kubectl Cluster Interaction
Description: Command to verify cluster status by retrieving node information using kubectl
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day51.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get nodes
```

## Snippet: Installing Minikube via Arkade
Description: Command to install Minikube using the Arkade package manager
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day51.md#2025-04-17_snippet_2
Language: bash

```bash
arkade get minikube
```

## Snippet: Installing Kubectl via Arkade
Description: Command to install kubectl CLI tool using the Arkade package manager
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day51.md#2025-04-17_snippet_3
Language: bash

```bash
arkade get kubectl
```