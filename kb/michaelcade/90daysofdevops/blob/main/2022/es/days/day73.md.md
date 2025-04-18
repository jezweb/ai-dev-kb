# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day73.md
Language: multiple

## Snippet: Jenkins Pipeline for Building and Pushing Docker Image
Description: A complete Jenkins pipeline script that clones a GitHub repository, builds a Docker image using Kaniko, and pushes it to DockerHub. It uses a Kubernetes Pod template to define the build environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day73.md#2025-04-17_snippet_2
Language: yaml

```yaml
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
Description: A sample Jenkins pipeline script using Declarative syntax to run commands inside a Kubernetes container. It demonstrates how to define a Pod template and execute a simple shell command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day73.md#2025-04-17_snippet_0
Language: yaml

```yaml
// Uses Declarative syntax to run commands inside a container.
pipeline {
    agent {
        kubernetes {
            // Rather than inline YAML, in a multibranch Pipeline you could use: yamlFile 'jenkins-pod.yaml'
            // Or, to avoid YAML:
            // containerTemplate {
            //     name 'shell'
            //     image 'ubuntu'
            //     command 'sleep'
            //     args 'infinity'
            // }
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
            // Can also wrap individual steps:
            // container('shell') {
            //     sh 'hostname'
            // }
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

## Snippet: Creating Kubernetes Secret for Docker Registry
Description: A shell command to create a Kubernetes secret for storing Docker registry credentials. This is used to authenticate with DockerHub when pushing images.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day73.md#2025-04-17_snippet_1
Language: shell

```shell
kubectl create secret docker-registry dockercred \
    --docker-server=https://index.docker.io/v1/ \
    --docker-username=<dockerhub-username> \
    --docker-password=<dockerhub-password>\
    --docker-email=<dockerhub-email>
```