# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md
Language: bash

## Snippet: Retrieving Ingress Information in Kubernetes
Description: Command to get information about the created Ingress resource in the Pacman namespace. This displays details such as the assigned IP address and hostname.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl get ingress -n pacman
```

## Snippet: Inspecting Kubernetes Resources
Description: Commands to inspect Kubernetes resources including namespaces, all resources in the pacman namespace, persistent volumes, and persistent volume claims. Used to verify the successful deployment of the stateful application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pvc -n pacman
```

## Snippet: Starting Minikube with Storage Support
Description: Command to start a minikube cluster with necessary addons for storage functionality. This configuration enables volumesnapshots and the CSI hostpath driver, which provides the storage class needed for persistent volumes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p mc-demo --kubernetes-version=1.21.2
```

## Snippet: Creating Minikube Tunnel for Ingress Access
Description: Command to create a Minikube tunnel for accessing the Ingress. This is necessary when running Minikube on WSL2 in Windows to enable external access to the cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_10
Language: bash

```bash
minikube tunnel --profile=mc-demo
```

## Snippet: Creating Ingress Resource for Pacman Application
Description: Command to create an Ingress resource using a YAML configuration file. This sets up routing rules for the Pacman application in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl create -f pacman-ingress.yaml
```

## Snippet: Port Forwarding Pacman Service in Kubernetes
Description: Command to forward the Pacman service port to access the application locally. This allows access to the Pacman game running in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Enabling Ingress Addon in Minikube
Description: Command to enable the Ingress addon in Minikube. This sets up the necessary components for ingress functionality in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_7
Language: bash

```bash
minikube --profile='mc-demo' addons enable ingress
```

## Snippet: Deleting MongoDB Pod in Kubernetes
Description: Command to delete the MongoDB pod to test persistence. This simulates a failure scenario to verify data retention in the stateful application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl delete pod mongo-0 -n pacman
```

## Snippet: Deploying Stateful Pacman Application in Kubernetes
Description: Command to create the Pacman stateful application in Kubernetes using a YAML configuration file. This deploys multiple Kubernetes objects including a namespace, deployment, service, and StatefulSet.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f pacman-stateful-demo.yaml
```

## Snippet: Scaling Pacman Deployment in Kubernetes
Description: Command to scale up the Pacman deployment to 10 replicas. This demonstrates how to increase the number of game instances for higher capacity.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl scale deployment pacman --replicas=10 -n pacman
```

## Snippet: Configuring Default StorageClass in Kubernetes
Description: Commands to configure the CSI-Hostpath storage class as the default in a minikube cluster. The first command sets csi-hostpath-sc as the default storage class, while the second removes the default annotation from the standard storage class.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day55.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```