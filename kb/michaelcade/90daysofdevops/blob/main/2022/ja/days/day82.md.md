# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day82.md
Language: bash

## Snippet: Deploying EFK Stack in Kubernetes using YAML
Description: This command deploys the EFK stack components (Elasticsearch, Fluentd, Kibana) into a Kubernetes cluster using a pre-defined YAML file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day82.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create -f efk-stack.yaml
```

## Snippet: Port Forwarding for Kibana Access
Description: This command sets up port forwarding to access the Kibana dashboard from localhost. Replace the pod name with your actual Kibana pod name.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day82.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl port-forward kibana-84cf7f59c-v2l8v 5601:5601 -n kube-logging
```

## Snippet: Checking Pod Status in Kubernetes Namespace
Description: This command retrieves the current status of all pods in the 'kube-logging' namespace, providing a snapshot of the EFK stack deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day82.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get pods -n kube-logging
```

## Snippet: Monitoring Pod Status in Kubernetes Namespace
Description: This command watches the status of pods in the 'kube-logging' namespace, allowing you to monitor the deployment progress of the EFK stack components.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day82.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get pods -n kube-logging -w
```

## Snippet: Listing All Resources in Kubernetes Namespace
Description: This command displays all resources (pods, services, deployments, etc.) in the 'kube-logging' namespace, giving a comprehensive view of the EFK stack deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day82.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get all -n kube-logging
```