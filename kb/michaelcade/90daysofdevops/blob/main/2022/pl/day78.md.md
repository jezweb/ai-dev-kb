# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day78.md
Language: multiple

## Snippet: Installing Prometheus on Kubernetes using Helm
Description: Command to install Prometheus on a Kubernetes cluster using the Helm chart from the Prometheus community repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day78.md#2025-04-17_snippet_2
Language: bash

```bash
helm install stable prometheus-community/prometheus
```

## Snippet: Querying Container CPU Usage with PromQL
Description: A basic PromQL query example to monitor container CPU usage in a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day78.md#2025-04-17_snippet_4
Language: promql

```promql
container_cpu_usage_seconds_total
```

## Snippet: Port Forwarding Prometheus Server in Kubernetes
Description: Commands to export the Prometheus server pod name and set up port forwarding to access the Prometheus UI on localhost:9090.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day78.md#2025-04-17_snippet_3
Language: bash

```bash
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace default port-forward $POD_NAME 9090
```

## Snippet: Deploying Prometheus with Docker
Description: A simple Docker command to run Prometheus locally, exposing it on port 9090.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day78.md#2025-04-17_snippet_0
Language: bash

```bash
docker run --name prometheus -d -p 127.0.0.1:9090:9090 prom/prometheus
```

## Snippet: Adding Prometheus Helm Repository
Description: Command to add the Prometheus community Helm chart repository to your local Helm configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day78.md#2025-04-17_snippet_1
Language: bash

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```