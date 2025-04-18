# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md
Language: multiple

## Snippet: Azure Pipeline Stages Configuration
Description: Defines the stages of the pipeline including Build and Deploy. Each stage consists of jobs that execute on an agent with specified VM image, with dependencies between stages to ensure sequential execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md#2025-04-17_snippet_1
Language: yaml

```yaml
stages:
- stage: Build
  displayName: Build stage
  jobs:  
  - job: Build
    displayName: Build
    pool:
      vmImage: $(vmImageName)
    steps:
    - task: Docker@2
      displayName: Build and push an image to container registry
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: |
          $(tag)
          
    - upload: manifests
      artifact: manifests

- stage: Deploy
  displayName: Deploy stage
  dependsOn: Build

  jobs:
  - deployment: Deploy
    displayName: Deploy
    pool:
      vmImage: $(vmImageName)
    environment: 'development.default'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: KubernetesManifest@0
            displayName: Create imagePullSecret
            inputs:
              action: createSecret
              secretName: $(imagePullSecret)
              dockerRegistryEndpoint: $(dockerRegistryServiceConnection)
              
          - task: KubernetesManifest@0
            displayName: Deploy to Kubernetes cluster
            inputs:
              action: deploy
              manifests: |
                $(Pipeline.Workspace)/manifests/deployment.yml
                $(Pipeline.Workspace)/manifests/service.yml
              imagePullSecrets: |
                $(imagePullSecret)
              containers: |
                $(containerRegistry)/$(imageRepository):$(tag)
```

## Snippet: Basic Azure Pipeline YAML Structure
Description: The foundational structure of an Azure Pipeline YAML file showing trigger configuration, resources, and variables. It defines when the pipeline runs, what repositories to use, and key variables for the deployment environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md#2025-04-17_snippet_0
Language: yaml

```yaml
trigger:
- main

resources:
- repo: self

variables:
  # Container registry service connection established during pipeline creation
  dockerRegistryServiceConnection: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  imageRepository: 'apiname' # name of the repository to deploy
  containerRegistry: '<ACRname>.azurecr.io' # we need this to upload our images 
  dockerfilePath: '$(Build.SourcesDirectory)/Dockerfile' # where are we keeping our dockerfile for our app? 
  tag: '$(Build.BuildId)' # good idea to tag with this so we know what build the image came from 
  imagePullSecret: 'secret' # the Kubernetes cluster can be private, if so then we might need to pull from ACR 

  # Agent VM image name
  vmImageName: 'ubuntu-latest'
  
  # Name of the new namespace being created to deploy the PR changes.
  k8sNamespaceForPR: 'review-app-$(System.PullRequest.PullRequestId)'
```

## Snippet: Kubernetes Deployment YAML Configuration
Description: A Kubernetes deployment manifest that defines an application deployment. It specifies replicas, selector, container details including image, ports, and resource requirements for running in a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md#2025-04-17_snippet_2
Language: yaml

```yaml
apiVersion : apps/v1
kind: Deployment
metadata:
  name: api-name # this will be the name of the deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: api-name
  template:
    metadata:
      labels:
        app: api-name # this label is matched by the selector above 
    spec:
      containers:
        - name: api-name 
          image: aksacrname.azurecr.io/api-name 
          ports:
          - containerPort: 80
```

## Snippet: Azure CLI Command for AKS Credentials
Description: Command to fetch and configure Kubernetes credentials for authenticating with an Azure Kubernetes Service (AKS) cluster. This enables kubectl commands to work with the specific AKS cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md#2025-04-17_snippet_6
Language: bash

```bash
az aks get-credentials --resource-group {ResourceGroupName} --name {AKSClusterName}
```

## Snippet: Kubernetes Service YAML Configuration
Description: A Kubernetes service manifest that exposes the deployed application. This service configuration maps port 80 to target port 80 for the selected application, making it accessible within the cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md#2025-04-17_snippet_3
Language: yaml

```yaml
apiVersion: v1
kind: Service
metadata:
    name: api-name
spec:
    type: ClusterIP
    ports:
    - port: 80 
    selector:
        app: api-name
```

## Snippet: Bash Commands for Creating Azure Service Principal
Description: Commands for creating an Azure service principal with Contributor role access to a specific resource group. This service principal provides authentication for the CI/CD pipeline to access Azure resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md#2025-04-17_snippet_4
Language: bash

```bash
az ad sp create-for-rbac --name "api-name" --role contributor --scopes /subscriptions/$(az account show --query id -o tsv)/resourceGroups/{ResourceGroupName} --sdk-auth
```

## Snippet: Commands for Installing az cli and kubectl
Description: Basic shell commands for installing the Azure CLI and Kubernetes command-line tool (kubectl). These tools are prerequisites for interacting with Azure resources and Kubernetes clusters from command line.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day25.md#2025-04-17_snippet_5
Language: bash

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

sudo az aks install-cli
```