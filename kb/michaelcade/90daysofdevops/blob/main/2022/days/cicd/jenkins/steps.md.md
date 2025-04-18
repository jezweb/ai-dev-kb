# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md
Language: bash

## Snippet: Applying Jenkins Service Account Configuration
Description: Command to create a service account for Jenkins with the necessary permissions to interact with the Kubernetes API, defined in a YAML configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl apply -f jenkins-sa.yml
```

## Snippet: Listing Kubernetes Namespaces
Description: Command to verify the successful creation of the Jenkins namespace by listing all available namespaces in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get namespaces
```

## Snippet: Deleting Jenkins Pod for Restart
Description: Command to delete the Jenkins pod to trigger a restart. This is often done after fixing volume permissions to ensure Jenkins starts with the correct configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl delete pod jenkins-0 -n jenkins
```

## Snippet: Adding Jenkins Helm Repository
Description: Command to add the official Jenkins Helm chart repository to the local Helm configuration. This repository contains the chart needed to deploy Jenkins.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_4
Language: bash

```bash
helm repo add jenkinsci https://charts.jenkins.io
```

## Snippet: Applying Jenkins Persistent Volume Configuration
Description: Command to create a persistent volume for Jenkins using a predefined YAML configuration file. This ensures Jenkins data persists across pod restarts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl apply -f jenkins-volume.yml
```

## Snippet: Creating Jenkins Namespace in Kubernetes
Description: Commands to create a dedicated namespace for Jenkins in the Kubernetes cluster. This can be done either with a direct kubectl command or by applying a YAML configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create namespace jenkins or kubectl create -f jenkins-namespace.yml
```

## Snippet: Listing Helm Repositories
Description: Command to display the currently configured Helm repositories. This helps verify what repositories are already available before adding the Jenkins repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_3
Language: bash

```bash
helm repo list
```

## Snippet: Watching Jenkins Pod Status
Description: Command to watch the status of Jenkins pods in the jenkins namespace. The -w flag enables continuous watching until interrupted.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl get pods -n jenkins -w
```

## Snippet: Port Forwarding to Access Jenkins UI
Description: Command to set up port forwarding from localhost port 8080 to the Jenkins service in the Kubernetes cluster. This allows access to the Jenkins web interface from the local machine.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_13
Language: bash

```bash
kubectl --namespace jenkins port-forward svc/jenkins 8080:8080
```

## Snippet: Installing Jenkins with Helm Chart
Description: Commands to install Jenkins using Helm with custom values defined in a configuration file. The chart variable is set to the Jenkins chart from the previously added repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_8
Language: bash

```bash
chart=jenkinsci/jenkins
helm install jenkins -n jenkins -f jenkins-values.yml $chart
```

## Snippet: Setting Volume Permissions in Minikube
Description: Commands to access the Minikube VM and set the proper ownership on the Jenkins data volume. This ensures Jenkins has the necessary permissions to read and write data.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_9
Language: bash

```bash
minikube ssh
sudo chown -R 1000:1000 /data/jenkins-volume
```

## Snippet: Updating Helm Repositories
Description: Command to update all Helm repositories, including the newly added Jenkins repository, to ensure the latest charts are available for installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_5
Language: bash

```bash
helm repo update
```

## Snippet: Starting Minikube Kubernetes Cluster
Description: Command to start a local Kubernetes cluster using Minikube. This creates the foundation for deploying Jenkins.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start
```

## Snippet: Retrieving Jenkins Admin Password
Description: Command to extract the generated admin password from the Jenkins container. This is required for the initial login to the Jenkins web interface.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/CICD/Jenkins/steps.md#2025-04-17_snippet_12
Language: bash

```bash
kubectl exec --namespace jenkins -it svc/jenkins -c jenkins -- /bin/cat /run/secrets/chart-admin-password && echo
```