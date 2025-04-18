# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day72.md
Language: groovy

## Snippet: Creating Basic Jenkins Pipeline with Build, Test, and Deploy Stages
Description: A simple Jenkinsfile that defines a declarative pipeline with three stages: Build, Test, and Deploy. Each stage simply echoes its name, serving as a placeholder for actual build, test, and deployment commands in a real CI pipeline.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day72.md#2025-04-17_snippet_0
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