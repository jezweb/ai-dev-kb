# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day60.md
Language: terraform

## Snippet: Deploying NGINX Container with Terraform
Description: A basic Terraform configuration to deploy an NGINX web server as a Docker container and expose it on port 8000. This example demonstrates Terraform initialization, Docker provider configuration, and resource definition for Docker images and containers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day60.md#2025-04-17_snippet_0
Language: terraform

```terraform
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

## Snippet: Deploying WordPress and MySQL with Terraform
Description: A more complex Terraform configuration that deploys WordPress with MySQL database as Docker containers. It creates a Docker volume for persistent database storage, sets up a Docker network, and configures environment variables for container communication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day60.md#2025-04-17_snippet_1
Language: terraform

```terraform
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.16.0"
    }
  }
}

provider "docker" {}

variable wordpress_port {
  default = "8080"
}

resource "docker_volume" "db_data" {
  name = "db_data"
}

resource "docker_network" "wordpress_net" {
  name = "wordpress_net"
}

resource "docker_container" "db" {
  name  = "db"
  image = "mysql:5.7"
  restart = "always"
  network_mode = "wordpress_net"
  env = [
     "MYSQL_ROOT_PASSWORD=wordpress",
     "MYSQL_PASSWORD=wordpress",
     "MYSQL_USER=wordpress",
     "MYSQL_DATABASE=wordpress"
  ]
  mounts {
    type = "volume"
    target = "/var/lib/mysql"
    source = "db_data"
    }
}

resource "docker_container" "wordpress" {
  name  = "wordpress"
  image = "wordpress:latest"
  restart = "always"
  network_mode = "wordpress_net"
  env = [
    "WORDPRESS_DB_HOST=db:3306",
    "WORDPRESS_DB_USER=wordpress",
    "WORDPRESS_DB_NAME=wordpress",
    "WORDPRESS_DB_PASSWORD=wordpress"
  ]
  ports {
    internal = "80"
    external = "${var.wordpress_port}"
  }
}
```

## Snippet: Using Provisioners in Terraform for Non-Declarative Actions
Description: An example of using a local-exec provisioner in Terraform to run commands that cannot be expressed declaratively. This example shows how to execute a local command to output a container's IP address.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day60.md#2025-04-17_snippet_2
Language: terraform

```terraform
resource "docker_container" "db" {
  # ...

  provisioner "local-exec" {
    command = "echo The server's IP address is ${self.private_ip}"
  }
}
```