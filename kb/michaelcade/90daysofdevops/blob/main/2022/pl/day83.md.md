# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md
Language: multiple

## Snippet: Port Forwarding Grafana Service in Kubernetes
Description: Command to port-forward the Grafana service to access it on localhost port 3000, enabling access to the Grafana UI from a local browser.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/grafana 3000
```

## Snippet: Deploying Prometheus Operator and Grafana to Kubernetes
Description: Command to deploy the Prometheus Operator, Grafana, and related monitoring components to the Kubernetes cluster using the provided manifests.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f manifests/
```

## Snippet: Creating Kubernetes Namespace for Monitoring
Description: Command to create the necessary namespace and resources for setting up monitoring in a Kubernetes cluster using the setup manifests.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create -f manifests/setup
```

## Snippet: Checking Monitoring Pods Status in Kubernetes
Description: Command to list all pods in the monitoring namespace to verify they are running properly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get pods -n monitoring
```

## Snippet: Cloning the Prometheus Operator Repository in Bash
Description: Command to clone the kube-prometheus repository which contains manifests to deploy Prometheus Operator and Grafana to a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_0
Language: bash

```bash
git clone https://github.com/prometheus-operator/kube-prometheus.git
```

## Snippet: Listing Monitoring Services in Kubernetes
Description: Command to list all services created in the monitoring namespace, which includes Prometheus, Grafana, and other monitoring components.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get svc -n monitoring
```

## Snippet: Port Forwarding Prometheus Service in Kubernetes
Description: Command to port-forward the Prometheus service to access it on localhost port 9090, allowing Grafana to connect to Prometheus as a data source.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090
```

## Snippet: Listing All Monitoring Resources in Kubernetes
Description: Command to list all resources (pods, services, deployments, etc.) that have been created in the monitoring namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl get all -n monitoring
```

## Snippet: Grafana Default Login Credentials
Description: The default username and password required for first-time login to Grafana. After initial login, you will be prompted to change the password.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_8
Language: yaml

```yaml
Username: admin 
Password: admin
```

## Snippet: Port Forwarding Alertmanager Service in Kubernetes
Description: Command to port-forward the Alertmanager service to access it on localhost port 9093, enabling configuration of alerts that can be sent to integration platforms like Slack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl --namespace monitoring port-forward svc/alertmanager-main 9093
```

## Snippet: Watching Monitoring Pods Deployment in Kubernetes
Description: Command to watch the status of pods being deployed in the monitoring namespace, allowing you to monitor when they reach the running state.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day83.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n monitoring -w
```