# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day73.md
Language: multiple

## Snippet: Creating Docker Registry Secret in Kubernetes
Description: Kubernetes command to create a secret for Docker registry credentials. This secret is used to authenticate with DockerHub when pushing images from the Jenkins Pipeline.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day73.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl create secret docker-registry dockercred \
    --docker-server=https://index.docker.io/v1/ \
    --docker-username=<dockerhub-username> \
    --docker-password=<dockerhub-password>\
    --docker-email=<dockerhub-email>
```

## Snippet: Jenkins Pipeline for Building and Pushing Docker Image with Kaniko
Description: A Jenkins Pipeline script that clones a GitHub repository, builds a Docker image using Kaniko, and pushes it to DockerHub. It uses a Kubernetes Pod template with Maven and Kaniko containers to execute the pipeline stages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day73.md#2025-04-17_snippet_2
Language: groovy

```groovy
podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: maven
        image: maven:3.8.1-jdk-8
        command:
        - sleep
        args:
        - 99d
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        command:
        - sleep
        args:
        - 9999999
        volumeMounts:
        - name: kaniko-secret
          mountPath: /kaniko/.docker
      restartPolicy: Never
      volumes:
      - name: kaniko-secret
        secret:
            secretName: dockercred
            items:
            - key: .dockerconfigjson
              path: config.json
''') {
  node(POD_LABEL) {
    stage('Get the project') {
      git url: 'https://github.com/scriptcamp/kubernetes-kaniko.git', branch: 'main'
      container('maven') {
        stage('Test the project') {
          sh '''
          echo pwd
          '''
        }
      }
    }

    stage('Build & Test the Docker Image') {
      container('kaniko') {
        stage('Deploy to DockerHub') {
          sh '''
            /kaniko/executor --context `pwd` --destination michaelcade1/helloworld:latest
          '''
        }
      }
    }

  }
}
```

## Snippet: Declarative Kubernetes Pipeline Example
Description: A basic Jenkins Pipeline script using Declarative syntax to run commands inside a Kubernetes container. It defines a Pod with an Ubuntu container and executes a simple hostname command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day73.md#2025-04-17_snippet_0
Language: groovy

```groovy
// Uses Declarative syntax to run commands inside a container.
pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: shell
    image: ubuntu
    command:
    - sleep
    args:
    - infinity
'''
            defaultContainer 'shell'
        }
    }
    stages {
        stage('Main') {
            steps {
                sh 'hostname'
            }
        }
    }
}
```