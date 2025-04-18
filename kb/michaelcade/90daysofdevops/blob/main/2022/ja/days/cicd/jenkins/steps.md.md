# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md
Language: bash

## Snippet: Initializing Minikube Cluster
Description: Start a local Kubernetes cluster using Minikube.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start
```

## Snippet: Applying Jenkins Configurations
Description: Apply volume and service account configurations for Jenkins.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl apply -f jenkins-volume.yml
kubectl apply -f jenkins-sa.yml
```

## Snippet: Creating Jenkins Namespace
Description: Create a dedicated namespace for Jenkins deployment using kubectl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create namespace jenkins
```

## Snippet: Port Forwarding Jenkins Service
Description: Forward Jenkins service port to local machine for access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl --namespace jenkins port-forward svc/jenkins 8080:8080
```

## Snippet: Configuring Jenkins Volume Permissions
Description: Set correct ownership permissions for Jenkins persistent volume.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_6
Language: bash

```bash
minikube ssh
sudo chown -R 1000:1000 /data/jenkins-volume
```

## Snippet: Installing Jenkins via Helm
Description: Install Jenkins using Helm chart with custom values.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_5
Language: bash

```bash
chart=jenkinsci/jenkins
helm install jenkins -n jenkins -f jenkins-values.yml $chart
```

## Snippet: Adding Jenkins Helm Repository
Description: Add and update the official Jenkins Helm repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_3
Language: bash

```bash
helm repo list
helm repo add jenkinsci https://charts.jenkins.io
helm repo update
```

## Snippet: Listing Namespaces
Description: View all available namespaces in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get namespaces
```

## Snippet: Managing Jenkins Pod
Description: Delete and monitor Jenkins pod status.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl delete pod jenkins-0 -n jenkins
kubectl get pods -n jenkins -w
```

## Snippet: Retrieving Jenkins Admin Password
Description: Get the initial admin password for Jenkins installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl exec --namespace jenkins -it svc/jenkins -c jenkins -- /bin/cat /run/secrets/chart-admin-password && echo
```