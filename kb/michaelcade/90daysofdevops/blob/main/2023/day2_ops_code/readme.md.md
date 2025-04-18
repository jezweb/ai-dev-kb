# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day2-ops-code/README.md
Language: shell

## Snippet: Deploying MySQL Database in Kubernetes
Description: Command to deploy a MySQL database using a predefined Kubernetes manifest file. This sets up the database component required for the applications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day2-ops-code/README.md#2025-04-17_snippet_0
Language: shell

```shell
kubectl apply -f database/mysql.yaml
```

## Snippet: Deploying Asynchronous Application Components
Description: Command to deploy the asynchronous communication pattern application components using a Kubernetes manifest file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day2-ops-code/README.md#2025-04-17_snippet_4
Language: shell

```shell
kubectl apply -f async/k8s.yaml
```

## Snippet: Adding NATS Helm Repository and Installing NATS
Description: Commands to add the NATS Helm repository and install NATS messaging system, which is required for asynchronous communication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day2-ops-code/README.md#2025-04-17_snippet_3
Language: shell

```shell
helm repo add nats https://nats-io.github.io/k8s/helm/charts/
helm install my-nats nats/nats
```

## Snippet: Deploying Synchronous Application Components
Description: Command to deploy the synchronous communication pattern application components using a Kubernetes manifest file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day2-ops-code/README.md#2025-04-17_snippet_1
Language: shell

```shell
kubectl apply -f synchronous/k8s.yaml
```

## Snippet: Checking Application Logs for Asynchronous Components
Description: Commands to check logs for the generator and requestor deployments to verify proper functioning of the asynchronous communication setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day2-ops-code/README.md#2025-04-17_snippet_5
Language: shell

```shell
kubectl logs deploy/generator

kubectl logs deploy/requestor
```

## Snippet: Checking Application Logs for Synchronous Components
Description: Commands to check logs for the generator and requestor deployments to verify proper functioning of the synchronous communication setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day2-ops-code/README.md#2025-04-17_snippet_2
Language: shell

```shell
kubectl logs deploy/generator

kubectl logs deploy/requestor
```