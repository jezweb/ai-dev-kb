# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day69.md
Language: multiple

## Snippet: Setting Up AWX Operator in Kubernetes
Description: Bash commands for deploying AWX Operator to a Kubernetes cluster. This sequence exports the namespace, deploys the operator, and then creates the AWX instance using the configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day69.md#2025-04-17_snippet_1
Language: bash

```bash
export NAMESPACE=awx
make deploy
```

## Snippet: Exposing AWX Service via Minikube
Description: Command to expose the AWX service through minikube ingress, creating an accessible URL endpoint for the AWX web interface.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day69.md#2025-04-17_snippet_4
Language: bash

```bash
minikube service awx-demo-service --url -n $NAMESPACE
```

## Snippet: Retrieving AWX Admin Password from Kubernetes Secrets
Description: Command to extract and decode the default admin password from the Kubernetes secret created during AWX deployment. This password is needed for the initial login to the AWX web interface.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day69.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get secret awx-demo-admin-password -o jsonpath="{.data.password}" -n awx| base64 --decode
```

## Snippet: Monitoring AWX Deployment Progress
Description: Command to watch the progress of pod creation in the AWX namespace, allowing you to monitor the deployment status in real-time.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day69.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n awx -w
```

## Snippet: Defining AWX Operator Configuration in YAML
Description: A YAML configuration file for AWX deployment that specifies the service type as ClusterIP for Kubernetes deployment. This configuration is used when deploying AWX with the operator.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day69.md#2025-04-17_snippet_0
Language: yaml

```yaml
---
apiVersion: awx.ansible.com/v1beta1
kind: AWX
metadata:
  name: awx-demo
spec:
  service_type: ClusterIP
```

## Snippet: Deploying AWX Demo Instance to Kubernetes
Description: Command to create the AWX demo instance in the specified namespace using the configuration file. This deploys the AWX application after the operator is running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day69.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f awx-demo.yml -n awx
```