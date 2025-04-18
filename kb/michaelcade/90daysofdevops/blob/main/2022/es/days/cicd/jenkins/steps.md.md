# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md
Language: bash

## Snippet: Initializing Minikube Cluster for Jenkins Deployment
Description: This snippet starts a Minikube cluster, creates a Jenkins namespace, and verifies its creation. It's the initial setup for deploying Jenkins on Kubernetes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start

kubectl create namespace jenkins or kubectl create -f jenkins-namespace.yml 

kubectl get namespaces
```

## Snippet: Installing Jenkins Using Helm Chart
Description: This snippet installs Jenkins using a Helm chart with custom values. It deploys Jenkins to the previously created namespace using specified configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_3
Language: bash

```bash
chart=jenkinsci/jenkins
helm install jenkins -n jenkins -f jenkins-values.yml $chart
```

## Snippet: Managing Jenkins Kubernetes Pod
Description: This snippet deletes and monitors the Jenkins pod to apply volume permission changes. It ensures the Jenkins pod is properly restarted with the correct permissions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl delete pod jenkins-0 -n jenkins

kubectl get pods -n jenkins -w
```

## Snippet: Configuring Helm and Adding Jenkins Repository
Description: This snippet lists Helm repositories, adds the Jenkins chart repository, and updates the repository information. It prepares Helm for Jenkins chart installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_1
Language: bash

```bash
helm repo list

helm repo add jenkinsci https://charts.jenkins.io

helm repo update
```

## Snippet: Retrieving Jenkins Admin Password
Description: This snippet retrieves the initial admin password for Jenkins from the Kubernetes secret. It's necessary for the first-time login to the Jenkins UI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl exec --namespace jenkins -it svc/jenkins -c jenkins -- /bin/cat /run/secrets/chart-admin-password && echo
```

## Snippet: Configuring Jenkins Volume Permissions
Description: This snippet adjusts the permissions of the Jenkins volume within the Minikube VM. It ensures proper access rights for the Jenkins container.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_4
Language: bash

```bash
minikube ssh
sudo chown -R 1000:1000 /data/jenkins-volume
```

## Snippet: Applying Jenkins Kubernetes Configurations
Description: This snippet applies Kubernetes configurations for Jenkins, including volume and service account settings. It sets up the necessary Kubernetes resources for Jenkins.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl apply -f jenkins-volume.yml 

kubectl apply -f jenkins-sa.yml
```

## Snippet: Port Forwarding Jenkins Service
Description: This snippet sets up port forwarding to access the Jenkins web interface from the local machine. It maps the service port to a local port for access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl --namespace jenkins port-forward svc/jenkins 8080:8080
```