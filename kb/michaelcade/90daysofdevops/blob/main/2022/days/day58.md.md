# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day58.md
Language: multiple

## Snippet: Creating AWS EC2 Instance Resource
Description: Defines an AWS EC2 instance with Apache web server installation via user data script.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day58.md#2025-04-17_snippet_2
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

## Snippet: Complete AWS EC2 Deployment Configuration
Description: Full Terraform configuration combining provider setup and EC2 instance deployment with web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day58.md#2025-04-17_snippet_3
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

## Snippet: Configuring AWS Provider in Terraform
Description: Defines the AWS provider configuration with version requirements and source location.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day58.md#2025-04-17_snippet_0
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

## Snippet: Hello World Terraform Configuration
Description: Simple Terraform configuration that outputs a hello world message. Demonstrates basic output functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day58.md#2025-04-17_snippet_4
Language: hcl

```hcl
terraform {
  required_version = ">= 0.12.26"
}

output "hello_world" {
  value = "Hello, 90DaysOfDevOps from Terraform"
}
```

## Snippet: Setting AWS Region in Terraform
Description: Specifies the AWS region for resource deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day58.md#2025-04-17_snippet_1
Language: hcl

```hcl
provider "aws" {
  region = "ap-southeast-1" //region where resources need to be deployed
}
```

## Snippet: Displaying Terraform State File Structure in JSON
Description: This snippet shows the structure of a Terraform state file in JSON format. It includes version information, outputs, and an empty resources array.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day58.md#2025-04-17_snippet_5
Language: JSON

```JSON
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