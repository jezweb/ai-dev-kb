# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md
Language: bash

## Snippet: Configuring Jenkins Volume Permissions
Description: Sets the correct ownership for the Jenkins data volume inside the Minikube VM. This ensures Jenkins has the necessary permissions to access its data.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_4
Language: bash

```bash
minikube ssh
sudo chown -R 1000:1000 /data/jenkins-volume
```

## Snippet: Restarting Jenkins Pod and Monitoring Deployment
Description: Deletes the Jenkins pod to trigger a restart and monitors the pod status. This ensures the Jenkins deployment is running with the correct configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl delete pod jenkins-0 -n jenkins

kubectl get pods -n jenkins -w
```

## Snippet: Starting Minikube and Creating Jenkins Namespace
Description: Initializes a Minikube cluster and creates a dedicated namespace for Jenkins. This sets up the environment for Jenkins deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start

kubectl create namespace jenkins or kubectl create -f jenkins-namespace.yml 

kubectl get namespaces
```

## Snippet: Installing Jenkins using Helm
Description: Installs Jenkins in the jenkins namespace using Helm and a custom values file. This deploys the Jenkins application to the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_3
Language: bash

```bash
chart=jenkinsci/jenkins
helm install jenkins -n jenkins -f jenkins-values.yml $chart
```

## Snippet: Applying Jenkins Configuration Files
Description: Applies Kubernetes configuration files for Jenkins volume and service account. These files set up the necessary storage and permissions for Jenkins.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl apply -f jenkins-volume.yml 

kubectl apply -f jenkins-sa.yml
```

## Snippet: Retrieving Jenkins Admin Password and Port Forwarding
Description: Retrieves the Jenkins admin password and sets up port forwarding to access the Jenkins web interface. This allows initial access to the Jenkins instance.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl exec --namespace jenkins -it svc/jenkins -c jenkins -- /bin/cat /run/secrets/chart-admin-password && echo

kubectl --namespace jenkins port-forward svc/jenkins 8080:8080
```

## Snippet: Adding and Updating Jenkins Helm Repository
Description: Adds the official Jenkins Helm repository and updates the local Helm repository cache. This ensures access to the latest Jenkins chart for deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_1
Language: bash

```bash
helm repo list

helm repo add jenkinsci https://charts.jenkins.io

helm repo update
```