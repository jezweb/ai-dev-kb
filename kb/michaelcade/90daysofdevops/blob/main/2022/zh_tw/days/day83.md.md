# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md
Language: multiple

## Snippet: Monitoring Pod Status in Kubernetes
Description: Kubectl commands to watch and check the status of pods in the monitoring namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n monitoring -w
kubectl get pods -n monitoring
```

## Snippet: Listing Kubernetes Services and Resources
Description: Kubectl commands to list services and all resources in the monitoring namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get svc -n monitoring
kubbell get all -n monitoring
```

## Snippet: Deploying Prometheus and Grafana Resources
Description: Kubectl command to deploy all necessary resources for Prometheus and Grafana in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f manifests/
```

## Snippet: Port Forwarding for Grafana Access
Description: Kubectl command to set up port forwarding for accessing Grafana on localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/grafana 3000
```

## Snippet: Port Forwarding for Prometheus Access
Description: Kubectl command to set up port forwarding for accessing Prometheus on localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090
```

## Snippet: Creating Kubernetes Namespace for Monitoring
Description: Kubectl command to create a namespace for the monitoring resources in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create -f manifests/setup
```

## Snippet: Grafana Default Login Credentials
Description: Default username and password for initial Grafana login.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_6
Language: yaml

```yaml
Username: admin 
Password: admin
```

## Snippet: Port Forwarding for Alertmanager Access
Description: Kubectl command to set up port forwarding for accessing Alertmanager on localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/alertmanager-main 9093
```

## Snippet: Cloning Prometheus Operator Repository
Description: Commands to clone the Prometheus Operator repository and navigate to the project directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day83.md#2025-04-17_snippet_0
Language: bash

```bash
git clone https://github.com/prometheus-operator/kube-prometheus.git
cd kube-prometheus
```