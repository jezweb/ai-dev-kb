# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day78.md
Language: shell

## Snippet: Deploying Prometheus using Docker
Description: Basic command to run Prometheus container locally using Docker
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day78.md#2025-04-17_snippet_0
Language: shell

```shell
docker run --name prometheus -d -p 127.0.0.1:9090:9090 prom/prometheus
```

## Snippet: Accessing Prometheus Server UI in Kubernetes
Description: Commands to port forward Prometheus server pod for UI access on localhost:9090
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day78.md#2025-04-17_snippet_1
Language: shell

```shell
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace default port-forward $POD_NAME 9090
```