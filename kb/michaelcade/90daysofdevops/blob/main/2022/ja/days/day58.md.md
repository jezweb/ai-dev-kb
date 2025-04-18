# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day58.md
Language: multiple

## Snippet: Hello World Terraform Example
Description: Simple Terraform configuration demonstrating basic output functionality with version constraints.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day58.md#2025-04-17_snippet_4
Language: hcl

```hcl
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

## Snippet: Configuring AWS Provider in Terraform
Description: Basic AWS provider configuration block specifying the source and version requirements for the AWS provider.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day58.md#2025-04-17_snippet_0
Language: hcl

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
```

## Snippet: Examining a Basic Terraform State File in JSON
Description: Example of a simple Terraform state file in JSON format that includes version information, outputs, and an empty resources array. State files contain the world representation according to Terraform and should be handled carefully as they may contain sensitive data.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day58.md#2025-04-17_snippet_5
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

## Snippet: Setting AWS Region in Terraform
Description: Provider block specifying the AWS region for resource deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day58.md#2025-04-17_snippet_1
Language: hcl

```hcl
provider "aws" {
  region = "ap-southeast-1" //region where resources need to be deployed
}
```

## Snippet: Complete AWS EC2 Deployment Configuration
Description: Full Terraform configuration combining provider setup and EC2 instance deployment with web server installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day58.md#2025-04-17_snippet_3
Language: hcl

```hcl
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
                echo "
<h1>Deployed via Terraform</h1>

" | sudo tee /var/www/html/index.html
        EOF
  tags = {
    Name = "Created by Terraform"


  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```

## Snippet: Creating AWS EC2 Instance Resource
Description: Resource block defining an AWS EC2 instance with user data for installing and configuring a web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day58.md#2025-04-17_snippet_2
Language: hcl

```hcl
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
                echo "
<h1>Deployed via Terraform</h1>

" | sudo tee /var/www/html/index.html
        EOF
  tags = {
    Name = "Created by Terraform"
  }
}
```