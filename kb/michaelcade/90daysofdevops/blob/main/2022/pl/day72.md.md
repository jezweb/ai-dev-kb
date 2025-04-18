# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md
Language: multiple

## Snippet: Creating Jenkins Persistent Volume in Kubernetes
Description: This command applies a YAML configuration to create a persistent volume for Jenkins in Kubernetes, ensuring data persistence across pod restarts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl apply -f jenkins-volume.yml
```

## Snippet: Basic Jenkinsfile Pipeline Definition
Description: This Groovy script defines a basic Jenkins pipeline with three stages: Build, Test, and Deploy. Each stage simply echoes a message, serving as a template for more complex pipelines.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_8
Language: groovy

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
```

## Snippet: Creating Jenkins Namespace in Kubernetes
Description: This YAML snippet creates a namespace for Jenkins in a Kubernetes cluster. It's used to isolate Jenkins resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_0
Language: yaml

```yaml
kubectl create -f jenkins-namespace.yml
```

## Snippet: Deploying Jenkins using Helm
Description: This command installs Jenkins in the Kubernetes cluster using Helm. It specifies the namespace, values file, and chart to use for the deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_4
Language: bash

```bash
chart=jenkinsci/jenkins
helm install jenkins -n jenkins -f jenkins-values.yml $chart
```

## Snippet: Port Forwarding Jenkins Service
Description: This command sets up port forwarding to access the Jenkins service from the local machine on port 8080.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl --namespace jenkins port-forward svc/jenkins 8080:8080
```

## Snippet: Setting Permissions for Jenkins Volume
Description: These commands SSH into the Minikube container and set the correct permissions on the Jenkins data volume to allow the Jenkins pod to access it.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_5
Language: bash

```bash
minikube ssh
sudo chown -R 1000:1000 /data/jenkins-volume
```

## Snippet: Creating Jenkins Service Account in Kubernetes
Description: This command applies a YAML configuration to create a service account for Jenkins in Kubernetes, allowing Jenkins to interact with the cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl apply -f jenkins-sa.yml
```

## Snippet: Retrieving Jenkins Admin Password
Description: This command retrieves the initial admin password for Jenkins by executing a command inside the Jenkins container.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl exec --namespace jenkins -it svc/jenkins -c jenkins -- /bin/cat /run/secrets/chart-admin-password && echo
```

## Snippet: Adding Jenkins Helm Repository
Description: These commands add the Jenkins Helm repository and update the local Helm chart cache. This is necessary for deploying Jenkins using Helm.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day72.md#2025-04-17_snippet_1
Language: bash

```bash
helm repo add jenkinsci https://charts.jenkins.io
helm repo update
```