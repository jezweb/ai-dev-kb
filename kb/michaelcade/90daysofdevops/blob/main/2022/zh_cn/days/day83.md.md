# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day83.md
Language: multiple

## Snippet: Kubernetes Port Forwarding Commands
Description: Commands for port forwarding Grafana, Prometheus, and Alertmanager services in Kubernetes monitoring namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day83.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/grafana 3000
kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090
kubectl --namespace monitoring port-forward svc/alertmanager-main 9093
```

## Snippet: Accessing Grafana Default Credentials
Description: Default login credentials for accessing Grafana dashboard after initial deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day83.md#2025-04-17_snippet_0
Language: text

```text
Username: admin 
Password: admin
```

## Snippet: Prometheus Operator Deployment Commands
Description: Series of kubectl commands to deploy Prometheus Operator and related components in Kubernetes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day83.md#2025-04-17_snippet_2
Language: bash

```bash
git clone https://github.com/prometheus-operator/kube-prometheus.git
cd kube-prometheus
kubectl create -f manifests/setup
kubectl create -f manifests/
kubectl get pods -n monitoring -w
kubectl get pods -n monitoring
kubectl get svc -n monitoring
kubectl get all -n monitoring
```