# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day78.md
Language: bash

## Snippet: Running Prometheus Docker Container
Description: Command to run Prometheus as a Docker container with local port mapping
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day78.md#2025-04-17_snippet_0
Language: bash

```bash
docker run --name prometheus -d -p 127.0.0.1:9090:9090 prom/prometheus
```

## Snippet: Installing Prometheus Helm Chart
Description: Commands to add Prometheus Helm repository and install Prometheus in Kubernetes
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day78.md#2025-04-17_snippet_1
Language: bash

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

## Snippet: Accessing Prometheus Server UI
Description: Commands to port-forward the Prometheus server pod for UI access
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day78.md#2025-04-17_snippet_2
Language: bash

```bash
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward $POD_NAME 9090
```