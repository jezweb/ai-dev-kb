# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day82.md
Language: bash

## Snippet: Listing All Resources in kube-logging Namespace
Description: Command to display all Kubernetes resources (pods, deployments, services, etc.) in the kube-logging namespace, showing the complete EFK stack implementation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day82.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get all -n kube-logging
```

## Snippet: Monitoring Kubernetes Pods in kube-logging Namespace
Description: Command to watch the status of the pods in the kube-logging namespace as they start up. The -w flag enables watching for changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day82.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get pods -n kube-logging -w
```

## Snippet: Checking Pod Status in kube-logging Namespace
Description: Command to verify that all EFK stack pods are running correctly in the kube-logging namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day82.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get pods -n kube-logging
```

## Snippet: Deploying EFK Stack on Minikube using kubectl
Description: Command to deploy the EFK stack YAML manifest file to the Kubernetes cluster. This creates all necessary resources including Elasticsearch StatefulSet, Fluentd DaemonSet, and Kibana Deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day82.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create -f efk-stack.yaml
```

## Snippet: Port Forwarding to Access Kibana Dashboard
Description: Command to set up port forwarding from local port 5601 to the Kibana pod's port 5601, enabling access to the Kibana dashboard through localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day82.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl port-forward kibana-84cf7f59c-v2l8v 5601:5601 -n kube-logging
```