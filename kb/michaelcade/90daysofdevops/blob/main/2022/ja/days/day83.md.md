# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md
Language: bash

## Snippet: Deploying Prometheus and Grafana Resources
Description: Kubectl command to deploy all necessary resources for Prometheus and Grafana in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f manifests/
```

## Snippet: Creating Kubernetes Namespace for Monitoring
Description: Kubectl command to create a namespace for monitoring resources in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create -f manifests/setup
```

## Snippet: Port Forwarding Prometheus Service
Description: Kubectl command to forward the Prometheus service port for local access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090
```

## Snippet: Cloning Prometheus Operator Repository
Description: Command to clone the Prometheus Operator repository and change to the project directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md#2025-04-17_snippet_0
Language: bash

```bash
git clone https://github.com/prometheus-operator/kube-prometheus.git
cd kube-prometheus
```

## Snippet: Port Forwarding Alertmanager Service
Description: Kubectl command to forward the Alertmanager service port for local access and configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/alertmanager-main 9093
```

## Snippet: Port Forwarding Grafana Service
Description: Kubectl command to forward the Grafana service port to access it locally.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/grafana 3000
```

## Snippet: Monitoring Pod Status in Kubernetes
Description: Kubectl command to watch the status of pods in the monitoring namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day83.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n monitoring -w
```