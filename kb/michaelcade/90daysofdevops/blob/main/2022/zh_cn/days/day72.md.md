# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day72.md
Language: groovy

## Snippet: Creating a Basic Jenkins Pipeline with Declarative Syntax
Description: This Jenkinsfile defines a basic pipeline with three stages: Build, Test, and Deploy. Each stage simply echoes a message indicating what would happen in a real pipeline. This demonstrates the structure of a declarative pipeline in Jenkins.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day72.md#2025-04-17_snippet_0
Language: groovy

```groovy
Jenkinsfile (Declarative Pipeline)

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