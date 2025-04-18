# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md
Language: bash

## Snippet: Editing Resources with kubectl in Kubernetes
Description: Command for editing existing resources in a Kubernetes cluster, specifically a service. This allows for dynamic modification of resource configurations without having to delete and recreate them.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl edit svc/servicename
```

## Snippet: Creating Resources with kubectl in Kubernetes
Description: Commands for creating resources in a Kubernetes cluster, including creating namespaces and resources from YAML or JSON files. These commands are essential for setting up and configuring Kubernetes environments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl create namespace name
kubectl create -f [filename]
```

## Snippet: Deleting Resources with kubectl in Kubernetes
Description: Command for removing resources from a Kubernetes cluster. This can be used to delete pods and other resources, with input coming from either stdin or a file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl delete pod
```

## Snippet: Starting Minikube Cluster with Custom Configuration in Bash
Description: Command to start a Minikube cluster with custom configurations including API server port, container runtime, and Kubernetes version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd --kubernetes-version=1.23.1
```

## Snippet: Checking Kubernetes Cluster Nodes with kubectl in Bash
Description: Command to list all nodes in the Kubernetes cluster using kubectl, demonstrating basic cluster interaction.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get nodes
```

## Snippet: Listing Resources with kubectl in Kubernetes
Description: Basic kubectl commands for listing various resources in a Kubernetes cluster, including nodes, namespaces, and pods. These commands help administrators and developers to view resources in the default or specific namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get nodes
kubectl get namespaces
kubectl get pods
kubectl get pods -n name
```

## Snippet: Installing Minikube using Arkade in Bash
Description: Command to install Minikube using the Arkade package manager. Arkade simplifies the installation of Kubernetes tools and CLIs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_0
Language: bash

```bash
arkade get minikube
```

## Snippet: Installing kubectl using Arkade in Bash
Description: Command to install kubectl, the Kubernetes command-line tool, using the Arkade package manager.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_2
Language: bash

```bash
arkade get kubectl
```

## Snippet: Viewing Detailed Resource Information with kubectl in Kubernetes
Description: Command for obtaining detailed information about resources in a Kubernetes cluster. This provides more comprehensive information than the 'get' command, showing the state of resources in detail.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day51.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl describe nodes
```