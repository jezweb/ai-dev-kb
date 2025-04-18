# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day82.md
Language: bash

## Snippet: Deploying EFK Stack Configuration
Description: Command to apply the EFK stack configuration to the Kubernetes cluster
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day82.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl create -f efk-stack.yaml
```

## Snippet: Port Forwarding Kibana Service
Description: Command to set up port forwarding for accessing the Kibana dashboard through localhost
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day82.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl port-forward kibana-84cf7f59c-v2l8v 5601:5601 -n kube-logging
```

## Snippet: Starting Minikube Cluster
Description: Command to initialize a Minikube cluster for EFK stack deployment
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day82.md#2025-04-17_snippet_2
Language: bash

```bash
minikube start
```

## Snippet: Checking Kubernetes Pod Status
Description: Commands to monitor and verify the status of EFK stack pods in the kube-logging namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day82.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl get pods -n kube-logging -w
kubectl get pods -n kube-logging
kubectl get all -n kube-logging
```