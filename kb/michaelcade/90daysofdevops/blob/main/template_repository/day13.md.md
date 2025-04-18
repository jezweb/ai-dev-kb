# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md
Language: multiple

## Snippet: Defining Docker Image Resource in Terraform
Description: Terraform resource block that pulls an Nginx Docker image from Docker Hub. This specifies the image name and sets a custom tag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_3
Language: HCL (Terraform)

```HCL (Terraform)
resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}
```

## Snippet: Destroying Terraform Infrastructure
Description: Command to destroy all resources created by the Terraform configuration, effectively tearing down the infrastructure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_9
Language: Bash

```Bash
terraform destroy
```

## Snippet: Configuring Docker Provider in Terraform
Description: Terraform configuration file that sets up the Docker provider, which is required to interact with Docker for container management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_2
Language: HCL (Terraform)

```HCL (Terraform)
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.16.0"
    }
  }
}
```

## Snippet: Installing Terraform on Linux
Description: Commands to download, extract and install Terraform on a Linux system. The commands add the HashiCorp GPG key, add the repository, update the package index, and install Terraform.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_0
Language: Bash

```Bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform
```

## Snippet: Complete Terraform Configuration for Docker Deployment
Description: Full Terraform configuration file that combines the provider setup and resource definitions to deploy an Nginx container with exposed port mapping.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_8
Language: HCL (Terraform)

```HCL (Terraform)
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.16.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  name  = "tutorial"
  ports {
    internal = 80
    external = 8000
  }
}
```

## Snippet: Planning Terraform Deployment
Description: Command to create an execution plan for Terraform, showing what actions will be taken without making any changes to real resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_6
Language: Bash

```Bash
terraform plan
```

## Snippet: Initializing Terraform Project
Description: Command to initialize a Terraform working directory by downloading providers defined in the configuration files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_5
Language: Bash

```Bash
terraform init
```

## Snippet: Verifying Terraform Installation
Description: Command to verify that Terraform has been correctly installed by checking its version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_1
Language: Bash

```Bash
terraform --version
```

## Snippet: Applying Terraform Configuration
Description: Command to apply the Terraform configuration, creating the actual infrastructure resources defined in the configuration files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_7
Language: Bash

```Bash
terraform apply
```

## Snippet: Creating Docker Container with Terraform
Description: Terraform resource configuration that creates a Docker container from the previously defined Nginx image. It specifies the container name, exposed ports, and restart policy.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day13.md#2025-04-17_snippet_4
Language: HCL (Terraform)

```HCL (Terraform)
resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  name  = "tutorial"
  ports {
    internal = 80
    external = 8000
  }
}
```