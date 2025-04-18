# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day69.md
Language: multiple

## Snippet: Retrieving AWX Admin Password
Description: Kubectl command to retrieve and decode the AWX admin password from a Kubernetes secret.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day69.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get secret awx-demo-admin-password -o jsonpath="{.data.password}" -n awx| base64 --decode
```

## Snippet: Configuring AWX Deployment in Kubernetes
Description: YAML configuration for deploying AWX in a Kubernetes cluster, specifying the service type as ClusterIP.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day69.md#2025-04-17_snippet_0
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

## Snippet: Deploying AWX Operator in Kubernetes
Description: Bash commands for setting up the AWX namespace and deploying the AWX operator in a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day69.md#2025-04-17_snippet_1
Language: bash

```bash
export NAMESPACE=awx
make deploy
```

## Snippet: Creating AWX Demo Deployment
Description: Kubectl command to create the AWX demo deployment in the specified namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day69.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl create -f awx-demo.yml -n awx
```

## Snippet: Monitoring AWX Deployment Progress
Description: Kubectl command to watch the progress of pod creation in the AWX namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day69.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n awx -w
```

## Snippet: Exposing AWX Service in Minikube
Description: Minikube command to expose the AWX demo service and obtain the URL.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day69.md#2025-04-17_snippet_4
Language: bash

```bash
minikube service awx-demo-service --url -n $NAMESPACE
```