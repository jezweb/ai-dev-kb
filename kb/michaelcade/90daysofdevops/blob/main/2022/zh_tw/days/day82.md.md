# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day82.md
Language: bash

## Snippet: Listing All Resources in Kubernetes Namespace
Description: Command to list all resources (pods, services, deployments, etc.) in the kube-logging namespace to verify the deployment status of EFK stack components.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day82.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get all -n kube-logging
```

## Snippet: Setting up EFK Stack in Minikube with kubectl
Description: Command to create the EFK stack deployment in a Kubernetes cluster using a pre-defined YAML file. This deploys Elasticsearch, Fluentd, and Kibana in the kube-logging namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day82.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create -f efk-stack.yaml
```

## Snippet: Monitoring Pod Status in Kubernetes Namespace
Description: Command to watch the status of pods in the kube-logging namespace with the -w flag for continuous monitoring until all components are ready.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day82.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get pods -n kube-logging -w
```

## Snippet: Checking Pod Status in Kubernetes Namespace
Description: Command to check the status of all pods in the kube-logging namespace to ensure Elasticsearch, Fluentd, and Kibana are running properly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day82.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get pods -n kube-logging
```

## Snippet: Port Forwarding to Access Kibana Dashboard
Description: Command to set up port forwarding from the Kibana pod to localhost port 5601, enabling access to the Kibana web interface for log visualization.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day82.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl port-forward kibana-84cf7f59c-v2l8v 5601:5601 -n kube-logging
```