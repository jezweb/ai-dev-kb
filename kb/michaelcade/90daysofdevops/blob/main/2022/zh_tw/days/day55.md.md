# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md
Language: bash

## Snippet: Deploying Stateful Pacman Application with MongoDB
Description: Command to create the Pacman application with MongoDB backend from a YAML configuration file, establishing pods, services, deployment, and statefulset objects.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f pacman-stateful-demo.yaml
```

## Snippet: Create Ingress Configuration
Description: Command to create an Ingress resource from a YAML configuration file
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl create -f pacman-ingress.yaml
```

## Snippet: Enable Minikube Ingress
Description: Command to enable the Ingress addon on a Minikube cluster with profile 'mc-demo'
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_9
Language: bash

```bash
minikube --profile='mc-demo' addons enable ingress
```

## Snippet: Starting Minikube with Required Storage Addons
Description: Command to start Minikube with the necessary addons (volumesnapshots and csi-hostpath-driver) needed for testing stateful applications with persistent storage.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_5
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p mc-demo --kubernetes-version=1.21.2
```

## Snippet: Verifying Namespaces in Kubernetes Cluster
Description: Command to list all namespaces in the Kubernetes cluster to confirm no pacman namespace exists before deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get namespace
```

## Snippet: Scale Pacman Deployment
Description: Command to scale the Pacman deployment to 10 replicas in the pacman namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl scale deployment pacman --replicas=10 -n pacman
```

## Snippet: Verifying Persistent Volumes and Claims
Description: Commands to view persistent volumes (cluster-wide) and persistent volume claims (in the pacman namespace) created for the stateful MongoDB application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get pvc -n pacman
```

## Snippet: Setting Default StorageClass for Kubernetes Cluster
Description: Commands to configure the csi-hostpath-sc as the default StorageClass and remove the default annotation from the standard StorageClass in a Minikube cluster for stateful applications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Delete MongoDB Pod
Description: Command to delete the mongo-0 pod in the pacman namespace to test persistence
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl delete pod mongo-0 -n pacman
```

## Snippet: Port Forwarding Kubernetes Service
Description: Command to forward local port 9090 to port 80 of the Pacman service in the pacman namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Listing Resources in Pacman Namespace
Description: Command to list all Kubernetes resources (pods, services, deployments, statefulsets) in the pacman namespace to verify successful deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get all -n pacman
```

## Snippet: Create Minikube Tunnel
Description: Command to create a network tunnel for accessing Ingress resources in Minikube
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_12
Language: bash

```bash
minikube tunnel --profile=mc-demo
```

## Snippet: View Ingress Resources
Description: Command to list Ingress resources in the pacman namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day55.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl get ingress -n pacman
```