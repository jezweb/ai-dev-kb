# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day54.md
Language: multiple

## Snippet: Deploying Nginx Application in Kubernetes
Description: A complete YAML configuration for deploying an Nginx application in Kubernetes. Includes namespace creation, deployment configuration with replicas, and service definition for exposure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day54.md#2025-04-17_snippet_0
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

## Snippet: Installing Helm Package Manager
Description: Bash commands for installing Helm, the package manager for Kubernetes, using a shell script that downloads and installs the latest version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day54.md#2025-04-17_snippet_1
Language: bash

```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3

chmod 700 get_helm.sh

./get_helm.sh
```