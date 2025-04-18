# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md
Language: bash

## Snippet: Installing Jenkins using Helm
Description: This command installs Jenkins using Helm. It specifies the chart, namespace, and a custom values file for configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_8
Language: bash

```bash
chart=jenkinsci/jenkins
helm install jenkins -n jenkins -f jenkins-values.yml $chart
```

## Snippet: Starting Minikube for Kubernetes Deployment
Description: This command starts a local Kubernetes cluster using Minikube. It's the first step in setting up the environment for Jenkins deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start
```

## Snippet: Applying Jenkins Volume Configuration
Description: This command applies a YAML file that defines the persistent volume for Jenkins. It ensures data persistence across pod restarts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl apply -f jenkins-volume.yml
```

## Snippet: Applying Jenkins Service Account Configuration
Description: This command applies a YAML file that sets up the necessary service account for Jenkins in Kubernetes. It defines the permissions for Jenkins within the cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl apply -f jenkins-sa.yml
```

## Snippet: Retrieving Jenkins Admin Password
Description: This command retrieves the initial admin password for Jenkins from the running pod. This password is required for the first login to the Jenkins UI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_12
Language: bash

```bash
kubectl exec --namespace jenkins -it svc/jenkins -c jenkins -- /bin/cat /run/secrets/chart-admin-password && echo
```

## Snippet: Deleting Jenkins Pod for Restart
Description: This command deletes the Jenkins pod, triggering a restart with the new volume permissions. Kubernetes will automatically create a new pod to replace it.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl delete pod jenkins-0 -n jenkins
```

## Snippet: Setting Jenkins Volume Permissions
Description: These commands SSH into the Minikube VM and change the ownership of the Jenkins volume to the Jenkins user (UID 1000). This ensures Jenkins has the necessary permissions to access its data.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_9
Language: bash

```bash
minikube ssh
sudo chown -R 1000:1000 /data/jenkins-volume
```

## Snippet: Port Forwarding Jenkins Service
Description: This command sets up port forwarding from the local machine to the Jenkins service in Kubernetes. It allows accessing the Jenkins UI through localhost:8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_13
Language: bash

```bash
kubectl --namespace jenkins port-forward svc/jenkins 8080:8080
```

## Snippet: Updating Helm Repositories
Description: This command updates all Helm repositories, ensuring the latest charts are available for installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_5
Language: bash

```bash
helm repo update
```

## Snippet: Listing Kubernetes Namespaces
Description: This command lists all available namespaces in the Kubernetes cluster, allowing verification of the Jenkins namespace creation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get namespaces
```

## Snippet: Listing Helm Repositories
Description: This command displays the list of currently added Helm repositories. It's useful for verifying the existing repositories before adding a new one.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_3
Language: bash

```bash
helm repo list
```

## Snippet: Monitoring Jenkins Pod Status
Description: This command watches the status of pods in the Jenkins namespace, allowing you to monitor the restart process and ensure the new pod comes up correctly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl get pods -n jenkins -w
```

## Snippet: Creating Jenkins Namespace in Kubernetes
Description: This snippet shows two alternative methods to create a namespace for Jenkins in Kubernetes. The namespace isolates Jenkins resources within the cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create namespace jenkins or kubectl create -f jenkins-namespace.yml
```

## Snippet: Adding Jenkins Helm Repository
Description: This command adds the official Jenkins Helm repository to the local Helm installation. This repository contains the Jenkins chart needed for deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_4
Language: bash

```bash
helm repo add jenkinsci https://charts.jenkins.io
```