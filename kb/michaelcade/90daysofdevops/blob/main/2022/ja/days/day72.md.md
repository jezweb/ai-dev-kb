# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day72.md
Language: multiple

## Snippet: Creating Jenkins Namespace in Kubernetes
Description: This YAML snippet creates a namespace for Jenkins in a Kubernetes cluster. It's used to isolate Jenkins resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day72.md#2025-04-17_snippet_0
Language: yaml

```yaml
kubectl create -f jenkins-namespace.yml
```

## Snippet: Basic Jenkinsfile Pipeline Structure
Description: This Groovy script defines a basic Jenkins pipeline with Build, Test, and Deploy stages. Each stage simply echoes its name, serving as a template for more complex pipelines.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day72.md#2025-04-17_snippet_1
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