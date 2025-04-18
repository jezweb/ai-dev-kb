# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day58.md
Language: multiple

## Snippet: Complete AWS EC2 Terraform Configuration
Description: A complete Terraform configuration file for deploying an EC2 instance in AWS, including provider configuration and resource definition with user data script.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day58.md#2025-04-17_snippet_3
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


  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```

## Snippet: Examining Basic Terraform State File Structure in JSON
Description: Example of a basic Terraform state file showing version, outputs and resources. This JSON structure represents Terraform's view of the managed infrastructure, including metadata like version numbers and unique identifiers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day58.md#2025-04-17_snippet_5
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

## Snippet: Terraform Hello World Example
Description: A simple Terraform configuration that outputs a hello world message. This example demonstrates the basic structure of a Terraform file with an output variable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day58.md#2025-04-17_snippet_4
Language: HCL

```HCL
terraform {
  # This module is now only being tested with Terraform 0.13.x. However, to make upgrading easier, we are setting
  # 0.12.26 as the minimum version, as that version added support for required_providers with source URLs, making it
  # forwards compatible with 0.13.x code.
  required_version = ">= 0.12.26"
}

# website::tag::1:: The simplest possible Terraform module: it just outputs "Hello, World!"
output "hello_world" {
  value = "Hello, 90DaysOfDevOps from Terraform"
}
```

## Snippet: Defining Terraform AWS Provider
Description: HCL code block showing how to define the AWS provider in Terraform. This specifies the version requirement and source for the AWS provider.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day58.md#2025-04-17_snippet_0
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
```

## Snippet: Configuring AWS Provider Region
Description: HCL code showing how to specify the AWS region where resources will be deployed using the provider block.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day58.md#2025-04-17_snippet_1
Language: HCL

```HCL
provider "aws" {
  region = "ap-southeast-1" //region where resources need to be deployed
}
```

## Snippet: Defining AWS EC2 Resource in Terraform
Description: HCL code defining an AWS EC2 instance resource with configuration for AMI, instance type, availability zone, security groups, and user data to install a web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day58.md#2025-04-17_snippet_2
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