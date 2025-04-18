# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md
Language: bash

## Snippet: Starting Minikube with Storage Support
Description: Command to start Minikube with volume snapshots and CSI hostpath driver addons enabled, configuring the API server port, container runtime, and Kubernetes version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p mc-demo --kubernetes-version=1.21.2
```

## Snippet: Setting Default StorageClass in Kubernetes
Description: Commands to patch the StorageClass configuration in Kubernetes, making csi-hostpath-sc the default StorageClass and removing the default annotation from the standard StorageClass.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'
```

## Snippet: Create Ingress Configuration
Description: Command to create an Ingress resource from a YAML configuration file
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl create -f pacman-ingress.yaml
```

## Snippet: Examining Persistent Volumes
Description: Commands to list Persistent Volumes (cluster-wide) and Persistent Volume Claims (namespace-specific) after the Pacman application deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get pvc -n pacman
```

## Snippet: Scale Deployment
Description: Command to scale the Pacman deployment to 10 replicas in the pacman namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl scale deployment pacman --replicas=10 -n pacman
```

## Snippet: Enable Minikube Ingress
Description: Command to enable the Ingress addon on a Minikube cluster with specific profile
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_9
Language: bash

```bash
minikube --profile='mc-demo' addons enable ingress
```

## Snippet: Port Forwarding Kubernetes Service
Description: Command to set up port forwarding from local port 9090 to port 80 of the Pacman service in the pacman namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl port-forward svc/pacman 9090:80 -n pacman
```

## Snippet: Kubernetes Namespace Operations
Description: Command to list all namespaces in the Kubernetes cluster, used to verify the absence of the pacman namespace before deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get namespace
```

## Snippet: Delete MongoDB Pod
Description: Command to delete the mongo-0 pod in the pacman namespace to test persistence
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl delete pod mongo-0 -n pacman
```

## Snippet: Create Minikube Tunnel
Description: Command to create a tunnel for accessing Ingress endpoints in Minikube
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_11
Language: bash

```bash
minikube tunnel --profile=mc-demo
```

## Snippet: Deploying Pacman Stateful Application
Description: Command to create resources defined in the pacman-stateful-demo.yaml file, which includes deployments, services, and StatefulSets for the Pacman application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl create -f pacman-stateful-demo.yaml
```

## Snippet: Listing Resources in Pacman Namespace
Description: Command to list all resources (pods, services, deployments, StatefulSets) in the pacman namespace after deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day55.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get all -n pacman
```