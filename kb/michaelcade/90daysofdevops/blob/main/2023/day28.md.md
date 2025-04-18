# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day28.md
Language: multiple

## Snippet: Installing Prometheus and Grafana on Kubernetes
Description: Sets up Prometheus for metrics collection and Grafana for visualization in a Kubernetes cluster using Helm. The commands add repository sources, install the charts, and expose the Grafana service for external access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day28.md#2025-04-17_snippet_3
Language: bash

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm install prometheus prometheus-community/prometheus
helm install grafana grafana/grafana
kubectl expose service grafana --type=NodePort --target-port=3000 --name=grafana-np
```

## Snippet: Configuring Kubernetes Audit Logs in Minikube
Description: Sets up a basic audit policy in Minikube to log all API requests at the Metadata level. The configuration creates an audit policy file and starts Minikube with the appropriate flags to enable audit logging to stdout.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day28.md#2025-04-17_snippet_0
Language: bash

```bash
mkdir -p ~/.minikube/files/etc/ssl/certs
cat <<EOF > ~/.minikube/files/etc/ssl/certs/audit-policy.yaml
# Log all requests at the Metadata level.
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: RequestResponse
EOF
minikube start --extra-config=apiserver.audit-policy-file=/etc/ssl/certs/audit-policy.yaml --extra-config=apiserver.audit-log-path=-
```

## Snippet: Example Kubernetes Audit Log in JSON Format
Description: Shows an example of a Kubernetes audit log entry in JSON format, capturing a request to list secrets in the default namespace. The log includes details about the user, request URI, and timestamp.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day28.md#2025-04-17_snippet_2
Language: json

```json
{"kind":"Event","apiVersion":"audit.k8s.io/v1","level":"RequestResponse","auditID":"8e526e77-1fd9-43c3-9714-367fde233c99","stage":"RequestReceived","requestURI":"/api/v1/namespaces/default/secrets?limit=500","verb":"list","user":{"username":"minikube-user","groups":["system:masters","system:authenticated"]},"sourceIPs":["192.168.49.1"],"userAgent":"kubectl/v1.25.4 (linux/amd64) kubernetes/872a965","objectRef":{"resource":"secrets","namespace":"default","apiVersion":"v1"},"requestReceivedTimestamp":"2023-02-11T20:34:11.015389Z","stageTimestamp":"2023-02-11T20:34:11.015389Z"}
```

## Snippet: Viewing Kubernetes Audit Logs
Description: Retrieves and filters the logs from the Kubernetes API server to show only audit events. This command helps in monitoring API operations for security and troubleshooting purposes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day28.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl logs kube-apiserver-minikube -n kube-system | grep audit.k8s.io/v1
```

## Snippet: Retrieving Grafana Admin Password in Kubernetes
Description: Extracts the auto-generated admin password for Grafana from Kubernetes secrets. This command is necessary for initial login to the Grafana dashboard after installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day28.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

## Snippet: Accessing Grafana UI in Minikube
Description: Gets the URL to access the Grafana web interface from Minikube. This command creates a tunnel to the service and returns the accessible URL.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day28.md#2025-04-17_snippet_5
Language: bash

```bash
minikube service grafana-np --url
```