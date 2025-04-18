# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day54.md
Language: multiple

## Snippet: Installing Helm on a Linux System
Description: Shell commands for installing Helm, the package manager for Kubernetes. This script downloads the Helm installer, makes it executable, and runs it to install the latest version of Helm.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day54.md#2025-04-17_snippet_1
Language: bash

```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3

chmod 700 get_helm.sh

./get_helm.sh
```

## Snippet: Creating a Stateless Nginx Application with YAML
Description: A YAML configuration file that creates a namespace, deployment, and service for a stateless nginx application in Kubernetes. It defines a single replica of nginx with exposed port 80.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day54.md#2025-04-17_snippet_0
Language: yaml

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: nginx
  "labels": {
    "name": "nginx"
  }
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  namespace: nginx
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 1
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
  namespace: nginx
spec:
  selector:
    app: nginx-deployment
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```