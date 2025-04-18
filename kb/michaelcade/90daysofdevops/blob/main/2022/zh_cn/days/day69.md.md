# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md
Language: multiple

## Snippet: Checking AWX Operator Pod Status in Kubernetes
Description: Command to verify the AWX operator pod is running correctly in the designated namespace after deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get pods -n awx
```

## Snippet: Setting Namespace Environment Variable for AWX Operator
Description: Command to export the NAMESPACE environment variable for AWX deployment, followed by making the deployment using the operator's Makefile.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_2
Language: bash

```bash
export NAMESPACE=awx
make deploy
```

## Snippet: Creating AWX Deployment Configuration in YAML
Description: A basic YAML configuration file for AWX deployment using the AWX Operator in Kubernetes. This defines an AWX instance with ClusterIP service type.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_0
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

## Snippet: Setting up Minikube for AWX Deployment
Description: Command to start a Minikube Kubernetes cluster with sufficient resources and the ingress addon enabled for AWX deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start --cpus=4 --memory=6g --addons=ingress
```

## Snippet: Retrieving AWX Admin Password from Kubernetes Secret
Description: Command to extract and decode the admin password from the Kubernetes secret created during AWX deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl get secret awx-demo-admin-password -o jsonpath="{.data.password}" -n awx| base64 --decode
```

## Snippet: Monitoring AWX Pod Deployment Status
Description: Command to watch the progress of AWX pods being created and started in the AWX namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get pods -n awx -w
```

## Snippet: Exposing AWX Service in Minikube
Description: Command to expose the AWX service through Minikube's ingress and obtain the URL for accessing the AWX web interface.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_6
Language: bash

```bash
minikube service awx-demo-service --url -n $NAMESPACE
```

## Snippet: Deploying AWX Demo Instance with Kubernetes
Description: Command to create the AWX demo instance in the AWX namespace using the configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day69.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl create -f awx-demo.yml -n awx
```