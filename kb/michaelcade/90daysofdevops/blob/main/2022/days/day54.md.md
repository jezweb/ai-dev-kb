# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day54.md
Language: multiple

## Snippet: Defining a Stateless Nginx Application with YAML in Kubernetes
Description: This YAML manifest defines a complete nginx application deployment with three components: a namespace, a deployment with a single nginx container, and a service to expose the application. This demonstrates how to structure a multi-component application deployment in a single YAML file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day54.md#2025-04-17_snippet_0
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

## Snippet: Installing Helm on Linux Using Shell Script
Description: This shell script downloads and executes the Helm installer. Helm is a package manager for Kubernetes that simplifies deploying applications. The script retrieves the latest Helm version, makes the installer executable, and runs it to install Helm on the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day54.md#2025-04-17_snippet_1
Language: shell

```shell
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3

chmod 700 get_helm.sh

./get_helm.sh
```