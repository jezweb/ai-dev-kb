# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md
Language: multiple

## Snippet: Configuring Terraform Remote State with AWS S3 Backend
Description: Configuration for storing Terraform state remotely in an AWS S3 bucket. This setup specifies the bucket name, key path, and AWS region, enabling team collaboration and safer state management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md#2025-04-17_snippet_1
Language: hcl

```hcl
terraform {
  backend "s3" {
    bucket = "mybucket"
    key    = "path/to/my/key"
    region = "us-east-1"
  }
}
```

## Snippet: Using Terraform Workspaces to Manage Multiple Environments
Description: Example of creating and switching between Terraform workspaces to manage different environments. The workspace name is used to differentiate resources, allowing for environment-specific configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md#2025-04-17_snippet_5
Language: bash

```bash
terraform workspace new dev
terraform workspace new staging
terraform workspace new prod
terraform workspace select dev
```

## Snippet: Setting Up Terraform Remote State with AWS S3 and DynamoDB
Description: A more comprehensive remote state configuration using AWS S3 for storage and DynamoDB for state locking. This setup enhances the basic remote state by adding locking capabilities to prevent concurrent modifications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md#2025-04-17_snippet_2
Language: hcl

```hcl
terraform {
  backend "s3" {
    bucket         = "mybucket"
    key            = "path/to/my/key"
    region         = "us-east-1"
    dynamodb_table = "terraform_locks"
    encrypt        = true
  }
}
```

## Snippet: Creating a Basic Terraform Configuration with AWS Provider
Description: A simple Terraform configuration file that initializes the AWS provider for the eu-west-1 region. This snippet demonstrates the basic structure of a Terraform file that would be used to manage AWS resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md#2025-04-17_snippet_0
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

provider "aws" {
  region = "eu-west-1"
}
```

## Snippet: Displaying Terraform Outputs for Remote State Resources
Description: Terraform outputs that expose important information about the created remote state resources. These outputs provide the bucket name, DynamoDB table name, and ARNs which can be referenced in other configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md#2025-04-17_snippet_4
Language: hcl

```hcl
output "s3_bucket_arn" {
  value       = aws_s3_bucket.terraform_state.arn
  description = "The ARN of the S3 bucket"
}

output "dynamodb_table_name" {
  value       = aws_dynamodb_table.terraform_locks.name
  description = "The name of the DynamoDB table"
}
```

## Snippet: Creating S3 Bucket and DynamoDB Table for Terraform Remote State
Description: Terraform configuration to create the AWS infrastructure required for remote state management. This code defines an S3 bucket with versioning enabled and a DynamoDB table with a LockID primary key to handle state locking.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md#2025-04-17_snippet_3
Language: hcl

```hcl
provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = var.bucket_name

  # Prevent accidental deletion of this S3 bucket
  lifecycle {
    prevent_destroy = true
  }

  # Enable versioning so we can see the full revision history of our
  # state files
  versioning {
    enabled = true
  }

  # Enable server-side encryption by default
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_dynamodb_table" "terraform_locks" {
  name         = var.table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}
```

## Snippet: Configuring Resources with Terraform Workspace Names
Description: Terraform configuration that uses the workspace name to create environment-specific resources. This example creates an EC2 instance with tags that include the workspace name, enabling clear resource identification across environments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day64.md#2025-04-17_snippet_6
Language: hcl

```hcl
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name        = "example-instance-${terraform.workspace}"
    Environment = terraform.workspace
  }
}
```