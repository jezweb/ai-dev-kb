# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day82.md
Language: bash

## Snippet: Deploying EFK Stack to Kubernetes Cluster
Description: Using kubectl to create resources defined in the efk-stack.yaml file. This YAML contains definitions for Elasticsearch, Fluentd, and Kibana components in the kube-logging namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day82.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create -f efk-stack.yaml
```

## Snippet: Monitoring EFK Stack Deployment Progress
Description: Watching the deployment progress of pods in the kube-logging namespace. The -w flag keeps the command running and shows changes to resources in real-time.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day82.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get pods -n kube-logging -w
```

## Snippet: Checking Pod Status in kube-logging Namespace
Description: Verifying that all the EFK stack components (Elasticsearch, Fluentd, and Kibana) are successfully deployed and running in the kube-logging namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day82.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n kube-logging
```

## Snippet: Starting Minikube Cluster for EFK Deployment
Description: Starting a Minikube Kubernetes cluster where the EFK stack will be deployed. This is the foundation for the logging infrastructure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day82.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start
```

## Snippet: Viewing All Resources in kube-logging Namespace
Description: Displaying all Kubernetes resources in the kube-logging namespace, including deployments, services, daemonsets, and statefulsets that make up the EFK stack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day82.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get all -n kube-logging
```

## Snippet: Port Forwarding to Access Kibana Dashboard
Description: Setting up port forwarding from the local machine to the Kibana pod, allowing access to the Kibana web interface through localhost:5601. This creates a secure tunnel to the Kibana service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day82.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl port-forward kibana-84cf7f59c-v2l8v 5601:5601 -n kube-logging
```