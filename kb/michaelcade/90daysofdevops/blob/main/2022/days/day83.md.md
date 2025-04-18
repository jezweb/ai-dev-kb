# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md
Language: bash

## Snippet: Port Forwarding Grafana Service
Description: Command to set up port forwarding for accessing Grafana service on localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/grafana 3000
```

## Snippet: Deploying Monitoring Resources in Kubernetes
Description: Command to deploy all monitoring resources defined in the manifests directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f manifests/
```

## Snippet: Cloning Kube-Prometheus Repository
Description: Command to clone the kube-prometheus repository and change to the project directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md#2025-04-17_snippet_0
Language: bash

```bash
git clone https://github.com/prometheus-operator/kube-prometheus.git
cd kube-prometheus
```

## Snippet: Monitoring Kubernetes Pod Status
Description: Command to watch the status of pods in the monitoring namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n monitoring -w
```

## Snippet: Port Forwarding Alertmanager Service
Description: Command to set up port forwarding for accessing Alertmanager service on localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/alertmanager-main 9093
```

## Snippet: Creating Kubernetes Namespace for Monitoring
Description: Command to create a new namespace in Kubernetes for monitoring resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create -f manifests/setup
```

## Snippet: Port Forwarding Prometheus Service
Description: Command to set up port forwarding for accessing Prometheus service on localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day83.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090
```