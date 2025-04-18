# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day51.md
Language: bash

## Snippet: Checking Kubernetes nodes with kubectl in bash
Description: This command uses kubectl to list all nodes in the Kubernetes cluster, verifying the cluster is running and accessible.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day51.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get nodes
```

## Snippet: Starting a Minikube cluster in bash
Description: This command initiates the deployment of a local Kubernetes cluster using Minikube with default settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day51.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start
```

## Snippet: Installing Minikube using arkade in bash
Description: This command uses arkade to download and install the Minikube binary, making it ready for use in the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day51.md#2025-04-17_snippet_0
Language: bash

```bash
arkade get minikube
```

## Snippet: Installing kubectl using arkade in bash
Description: This command uses arkade to download and install the kubectl binary, which is necessary for interacting with the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day51.md#2025-04-17_snippet_2
Language: bash

```bash
arkade get kubectl
```