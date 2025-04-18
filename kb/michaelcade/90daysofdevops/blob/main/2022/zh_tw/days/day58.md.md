# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day58.md
Language: multiple

## Snippet: Simple Terraform Hello World Example
Description: This snippet shows a basic Terraform configuration that outputs a 'Hello World' message. It demonstrates the simplest possible Terraform module.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day58.md#2025-04-17_snippet_3
Language: HCL

```HCL
terraform {
  required_version = ">= 0.12.26"
}

output "hello_world" {
  value = "Hello, 90DaysOfDevOps from Terraform"
}
```

## Snippet: Defining an AWS EC2 Instance Resource in HCL
Description: This snippet shows how to define an AWS EC2 instance resource in Terraform. It includes instance configuration, user data for installing a web server, and tags.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day58.md#2025-04-17_snippet_1
Language: HCL

```HCL
resource "aws_instance" "90daysofdevops" {
  ami               = data.aws_ami.instance_id.id
  instance_type     = "t2.micro"
  availability_zone = "us-west-2a"
  security_groups   = [aws_security_group.allow_web.name]
  user_data         = <<-EOF
                #! /bin/bash
                sudo yum update
                sudo yum install -y httpd
                sudo systemctl start httpd
                sudo systemctl enable httpd
                echo "<h1>Deployed via Terraform</h1>" | sudo tee /var/www/html/index.html
        EOF
  tags = {
    Name = "Created by Terraform"
  }
}
```

## Snippet: Complete Terraform Configuration for AWS EC2 Instance
Description: This snippet presents a complete Terraform configuration file for deploying an AWS EC2 instance with a web server. It includes provider configuration, resource definition, and user data script.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day58.md#2025-04-17_snippet_2
Language: HCL

```HCL
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

resource "aws_instance" "90daysofdevops" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"
  availability_zone = "us-west-2a"
    user_data         = <<-EOF
                #! /bin/bash
                sudo yum update
                sudo yum install -y httpd
                sudo systemctl start httpd
                sudo systemctl enable httpd
                echo "<h1>Deployed via Terraform</h1>" | sudo tee /var/www/html/index.html
        EOF
  tags = {
    Name = "Created by Terraform"
  }

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```

## Snippet: Defining Terraform AWS Provider in HCL
Description: This snippet demonstrates how to define the AWS provider in a Terraform configuration file. It specifies the required provider and its version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day58.md#2025-04-17_snippet_0
Language: HCL

```HCL
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-1" //region where resources need to be deployed
}
```

## Snippet: Examining a Terraform State File in JSON Format
Description: This snippet shows a basic example of a Terraform state file in JSON format. The state file represents the infrastructure managed by Terraform, including outputs and version information. This particular example shows a simple configuration with a 'hello_world' output but no resources defined yet.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day58.md#2025-04-17_snippet_4
Language: json

```json
{
  "version": 4,
  "terraform_version": "1.1.6",
  "serial": 1,
  "lineage": "a74296e7-670d-0cbb-a048-f332696ca850",
  "outputs": {
    "hello_world": {
      "value": "Hello, 90DaysOfDevOps from Terraform",
      "type": "string"
    }
  },
  "resources": []
}
```