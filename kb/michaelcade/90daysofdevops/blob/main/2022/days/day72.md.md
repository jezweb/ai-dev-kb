# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day72.md
Language: groovy

## Snippet: Basic Jenkins Pipeline Definition
Description: A basic Jenkinsfile template showing a three-stage CI pipeline with Build, Test, and Deploy stages. Each stage simply echoes its name as a placeholder for actual implementation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day72.md#2025-04-17_snippet_0
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