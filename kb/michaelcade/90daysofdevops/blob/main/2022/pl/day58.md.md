# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day58.md
Language: multiple

## Snippet: Simple Terraform Hello World Output
Description: This snippet demonstrates a simple Terraform configuration that outputs a 'Hello World' message, showcasing the basic structure of a Terraform file with an output block.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day58.md#2025-04-17_snippet_4
Language: HCL

```HCL
terraform {
  required_version = ">= 0.12.26"
}

output "hello_world" {
  value = "Hello, 90DaysOfDevOps from Terraform"
}
```

## Snippet: Complete Terraform Configuration for AWS EC2 Instance
Description: This snippet provides a complete Terraform configuration file for deploying an AWS EC2 instance with a web server, including provider configuration and resource definition.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day58.md#2025-04-17_snippet_3
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

## Snippet: Specifying AWS Region in Terraform
Description: This snippet demonstrates how to specify the AWS region for resource deployment in a Terraform configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day58.md#2025-04-17_snippet_1
Language: HCL

```HCL
provider "aws" {
  region = "ap-southeast-1" //region where resources need to be deployed
}
```

## Snippet: Examining Terraform State File Structure in JSON
Description: A sample Terraform state file in JSON format that stores the current state of infrastructure. This example shows a simple state with an output variable but no resources. The state file contains metadata about the Terraform version, lineage, and outputs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day58.md#2025-04-17_snippet_5
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

## Snippet: Defining AWS Provider in Terraform
Description: This snippet shows how to define the AWS provider in a Terraform configuration file, specifying the required provider source and version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day58.md#2025-04-17_snippet_0
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

## Snippet: Defining AWS EC2 Instance Resource in Terraform
Description: This snippet shows how to define an AWS EC2 instance resource in Terraform, including instance type, AMI, availability zone, and user data for installing a web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day58.md#2025-04-17_snippet_2
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