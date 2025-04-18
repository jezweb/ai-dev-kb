# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day54.md
Language: multiple

## Snippet: Port Forwarding Kubernetes Deployment
Description: This command sets up port forwarding from the local machine to a Kubernetes deployment, allowing access to the application on localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day54.md#2025-04-17_snippet_1
Language: shell

```shell
kubectl port-forward deployment/nginx-deployment -n nginx 8090:80
```

## Snippet: Installing Helm Package Manager
Description: This shell script downloads and installs the latest version of Helm, a package manager for Kubernetes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day54.md#2025-04-17_snippet_4
Language: shell

```shell
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3

chmod 700 get_helm.sh

./get_helm.sh
```

## Snippet: Creating URL for Minikube Service
Description: This command generates a URL for accessing a service running in Minikube, creating a tunnel to the service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day54.md#2025-04-17_snippet_3
Language: shell

```shell
minikube --profile='mc-demo' service nginx-service --url -n nginx
```

## Snippet: Defining Kubernetes Resources with YAML
Description: This YAML file defines a namespace, deployment, and service for an nginx application in Kubernetes. It specifies the container image, port, and replica count.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day54.md#2025-04-17_snippet_0
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

## Snippet: Exposing Kubernetes Deployment as NodePort Service
Description: This command exposes a Kubernetes deployment as a NodePort service, making it accessible from outside the cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day54.md#2025-04-17_snippet_2
Language: shell

```shell
kubectl expose deployment nginx-deployment --name nginx-service --namespace nginx --port=80 --type=NodePort
```