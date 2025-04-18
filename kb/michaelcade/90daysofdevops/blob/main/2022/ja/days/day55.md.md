# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md
Language: bash

## Snippet: Enabling Ingress Addon in Minikube
Description: This command enables the ingress addon for a Minikube profile named 'mc-demo'. It's necessary to set up ingress functionality in the Minikube cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_5
Language: bash

```bash
minikube --profile='mc-demo' addons enable ingress
```

## Snippet: Port Forwarding Kubernetes Service in Bash
Description: This command sets up port forwarding to access the Pacman service running in the Kubernetes cluster. It forwards local port 9090 to port 80 of the service named 'pacman' in the 'pacman' namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Retrieving Ingress Information in Kubernetes
Description: This command retrieves information about ingress resources in the 'pacman' namespace. It's used to verify the creation and status of the ingress resource.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl get ingress -n pacman
```

## Snippet: Creating Ingress Resource in Kubernetes
Description: This command creates an ingress resource in Kubernetes using a YAML configuration file named 'pacman-ingress.yaml'. It sets up routing rules for the Pacman application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl create -f pacman-ingress.yaml
```

## Snippet: Creating Minikube Tunnel for Ingress Access
Description: This command creates a tunnel in Minikube for the 'mc-demo' profile. It's necessary to access services through ingress when using Minikube, especially in WSL2 environments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_8
Language: bash

```bash
minikube tunnel --profile=mc-demo
```

## Snippet: Setting Default StorageClass in Kubernetes
Description: Commands to configure the csi-hostpath-sc as the default StorageClass and remove the default annotation from the standard StorageClass in a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Deleting Kubernetes Pod in Bash
Description: This command deletes the 'mongo-0' pod in the 'pacman' namespace. It's used to demonstrate the persistence of data in a stateful application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl delete pod mongo-0 -n pacman
```

## Snippet: Scaling Kubernetes Deployment in Bash
Description: This command scales the 'pacman' deployment to 10 replicas in the 'pacman' namespace. It demonstrates how to horizontally scale a deployment in Kubernetes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl scale deployment pacman --replicas=10 -n pacman
```

## Snippet: Kubernetes Cluster Management Commands
Description: Various kubectl commands for managing and inspecting resources in a Kubernetes cluster, including namespace creation and resource inspection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day55.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get pvc -n pacman
```