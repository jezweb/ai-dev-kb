# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day60.md
Language: hcl

## Snippet: Deploying WordPress with MySQL using Terraform and Docker
Description: Terraform configuration for deploying WordPress and MySQL containers, equivalent to a docker-compose setup. It creates a Docker volume for database persistence, sets up a Docker network, and establishes the necessary connections between containers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day60.md#2025-04-17_snippet_1
Language: hcl

```hcl
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

## Snippet: Deploying Nginx Docker Container with Terraform
Description: Basic Terraform configuration to deploy an nginx container using the kreuzwerker/docker provider. The configuration exposes port 80 internally and maps it to port 8000 externally on the host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day60.md#2025-04-17_snippet_0
Language: hcl

```hcl
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

## Snippet: Using Terraform Provisioners with Docker Container
Description: Example of using local-exec provisioner with a Docker container to execute a command after resource creation. This demonstrates how to perform actions that cannot be handled declaratively in Terraform.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day60.md#2025-04-17_snippet_2
Language: hcl

```hcl
resource "docker_container" "db" {
  # ...

  provisioner "local-exec" {
    command = "echo The server's IP address is ${self.private_ip}"
  }
}
```