# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md
Language: bash

## Snippet: Deploying a Stateful Pacman Application
Description: Command to create all resources defined in the pacman-stateful-demo.yaml file, which includes deployments, services, and StatefulSets for the Pacman application with MongoDB backend.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl create -f pacman-stateful-demo.yaml
```

## Snippet: Setting Default StorageClass in Kubernetes
Description: Two kubectl commands to configure the default StorageClass in the cluster - first making csi-hostpath-sc the default, then removing the default annotation from the standard StorageClass.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Creating Ingress Configuration
Description: Command to apply the Pacman ingress configuration from a YAML file
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl create -f Pacman-ingress.yaml
```

## Snippet: Deleting Kubernetes Pod
Description: Command to delete the mongo-0 pod in the pacman namespace for testing persistence
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl delete pod mongo-0 -n pacman
```

## Snippet: Checking Kubernetes Namespaces
Description: Command to list all namespaces in the Kubernetes cluster, used to verify the initial state before deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get namespace
```

## Snippet: Starting Minikube with Storage Capabilities for StatefulSet Demo
Description: Command to start a Minikube cluster with the required addons for persistence (volumesnapshots and csi-hostpath-driver) along with specific Kubernetes version and container runtime settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p mc-demo --kubernetes-version=1.21.2
```

## Snippet: Port Forwarding Kubernetes Service
Description: Command to set up port forwarding from local port 9090 to port 80 of the Pacman service in the pacman namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Checking Persistent Volumes and Claims
Description: Commands to view persistent volumes (cluster-wide resource) and persistent volume claims (namespace-scoped) used by the Pacman application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get pvc -n pacman
```

## Snippet: Viewing Resources in Pacman Namespace
Description: Command to list all resources (pods, services, deployments, StatefulSets) in the pacman namespace after deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get all -n pacman
```

## Snippet: Enabling Minikube Ingress
Description: Command to enable the ingress addon for a specific Minikube profile
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_9
Language: bash

```bash
minikube --profile='mc-demo' addons enable ingress
```

## Snippet: Scaling Kubernetes Deployment
Description: Command to scale the Pacman deployment to 10 replicas in the pacman namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl scale deployment pacman --replicas=10 -n pacman
```

## Snippet: Starting Minikube Tunnel
Description: Command to create a tunnel for ingress access in Minikube with a specific profile
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day55.md#2025-04-17_snippet_11
Language: bash

```bash
minikube tunnel --profile=mc-demo
```