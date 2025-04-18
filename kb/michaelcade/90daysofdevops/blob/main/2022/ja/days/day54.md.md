# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day54.md
Language: multiple

## Snippet: Deploying Nginx Application with YAML in Kubernetes
Description: This YAML file defines a namespace, deployment, and service for a stateless nginx application in Kubernetes. It creates a namespace called 'nginx', deploys one replica of the nginx container, and sets up a service to expose the application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day54.md#2025-04-17_snippet_0
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

## Snippet: Installing Helm using Curl Script
Description: This bash script downloads and installs the latest version of Helm, a package manager for Kubernetes. It uses curl to download the installer script, sets the appropriate permissions, and then runs the script to install Helm.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day54.md#2025-04-17_snippet_1
Language: bash

```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3

chmod 700 get_helm.sh

./get_helm.sh
```