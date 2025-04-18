# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day58.md
Language: multiple

## Snippet: Simple Terraform Hello World Example
Description: This snippet demonstrates a simple Terraform configuration that outputs a 'Hello World' message, showcasing basic Terraform syntax and output definition.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day58.md#2025-04-17_snippet_4
Language: HCL

```HCL
terraform {
  # 이 모듈은 현재 Terraform 0.13.x에서만 테스트 중입니다. 그러나 더 쉽게 업그레이드할 수 있도록 다음과 같이 설정하고 있습니다.
  # 0.12.26을 최소 버전으로 설정했는데, 이 버전은 소스 URL이 있는 required_providers에 대한 지원이 추가되었기 때문입니다.
  # 0.13.x 코드와 호환됩니다.
  required_version = ">= 0.12.26"
}

# website::tag::1:: 가장 간단한 Terraform 모듈: "Hello, World!"를 출력하기만 하면 됩니다.
output "hello_world" {
  value = "Hello, 90DaysOfDevOps from Terraform"
}
```

## Snippet: Complete Terraform Configuration for AWS EC2 Instance
Description: This code snippet presents a complete Terraform configuration file for deploying an AWS EC2 instance with a simple web server setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day58.md#2025-04-17_snippet_3
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

## Snippet: Defining EC2 Instance Resource in Terraform
Description: This snippet shows how to define an AWS EC2 instance resource in Terraform, including instance type, AMI, and user data for initial setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day58.md#2025-04-17_snippet_2
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
                echo "
<h1>Deployed via Terraform</h1>

" | sudo tee /var/www/html/index.html
        EOF
  tags = {
    Name = "Created by Terraform"
  }
}
```

## Snippet: Defining AWS Provider in Terraform
Description: This snippet shows how to define the AWS provider in a Terraform configuration file. It specifies the required provider source and version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day58.md#2025-04-17_snippet_0
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

## Snippet: Example Terraform State File
Description: This JSON snippet shows an example of a Terraform state file, which represents the current state of the managed infrastructure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day58.md#2025-04-17_snippet_5
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

## Snippet: Specifying AWS Region in Terraform
Description: This code snippet demonstrates how to specify the AWS region for resource deployment in a Terraform configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day58.md#2025-04-17_snippet_1
Language: HCL

```HCL
provider "aws" {
  region = "ap-southeast-1" //리소스를 배포해야 하는 지역
}
```