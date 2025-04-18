# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md
Language: multiple

## Snippet: Creating a ClusterIP Service for Nginx
Description: Command to expose a deployment as a ClusterIP service in Kubernetes, making nginx accessible within the cluster on port 80.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl expose deployment nginx --port=80 --target-port=80
```

## Snippet: Checking Kubernetes Pod IP Addresses
Description: Displaying wide output format for pods to view IP addresses assigned to each pod in the cluster, showing name, ready status, status, restarts, age, IP, and node.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get pods -o wide
```

## Snippet: Creating a LoadBalancer Service in Kubernetes
Description: Command to expose a deployment as a LoadBalancer service, which provisions an external load balancer in cloud environments to direct traffic to the service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl expose deployment nginx --port=80 --target-port=80 --type=LoadBalancer
```

## Snippet: Listing Kubernetes Resources by Label
Description: Command to list all Kubernetes resources that match a specific label selector, showing pods with the label 'app=nginx'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_14
Language: bash

```bash
kubectl get all -l app=nginx
```

## Snippet: Describing Kubernetes Pod in Detail
Description: Command to get detailed information about a specific pod in Kubernetes, showing configuration, status, events, and other metadata.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl describe pod nginx
```

## Snippet: Defining a NodePort Service in YAML
Description: YAML definition for a NodePort service targeting nginx pods on port 80, exposed on a specific NodePort (31000), allowing external access to the service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_12
Language: yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  type: NodePort
  ports:
  - port: 80
    targetPort: 80
    nodePort: 31000
  selector:
    app: nginx
```

## Snippet: Listing Kubernetes Services
Description: Command to display all services running in the current namespace, showing name, type, cluster IP, external IP, ports, and age.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl get svc
```

## Snippet: Deploying Multiple Nginx Pods in Kubernetes
Description: Command to create three replicas of an nginx pod in Kubernetes using a deployment, with pods labeled as 'app=nginx'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl create deployment nginx --image=nginx --replicas=3
```

## Snippet: Executing Commands in a Kubernetes Pod
Description: Using kubectl exec to run shell commands inside a running container within a Kubernetes pod, specifically checking the IP address configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl exec nginx -- ip addr
```

## Snippet: Running a Shell in a Kubernetes Pod
Description: Command to start an interactive bash shell inside a running Kubernetes pod, allowing direct interaction with the container environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl exec -it nginx -- /bin/bash
```

## Snippet: Applying Kubernetes YAML Configuration
Description: Command to create or update resources in a Kubernetes cluster using a YAML definition file, in this case applying a service configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_13
Language: bash

```bash
kubectl apply -f service.yaml
```

## Snippet: Accessing NodePort Service Information
Description: Command to get detailed information about a specific service in Kubernetes, including its type, IP addresses, endpoints, and port configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl describe svc nginx
```

## Snippet: Listing Running Pods in Kubernetes
Description: Command to list all running pods in the current namespace in a Kubernetes cluster, displaying their names, ready status, status, restarts, and age.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl get pods
```

## Snippet: Testing ClusterIP Service Communication
Description: Using a temporary pod to test connectivity to an nginx service within the cluster via its ClusterIP address.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl run busybox --rm -it --image=busybox -- sh
```

## Snippet: Creating a NodePort Service in Kubernetes
Description: Command to create a NodePort service that exposes the nginx deployment externally on a port in the 30000-32767 range while targeting port 80 internally.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day31.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl expose deployment nginx --port=80 --target-port=80 --type=NodePort
```