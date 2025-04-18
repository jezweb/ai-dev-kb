# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day38.md
Language: bash

## Snippet: Configuring AWS Root Credentials for Vault
Description: Command to provide AWS access credentials to Vault so it can interact with your AWS account. These credentials allow Vault to create and manage dynamic credentials on your behalf.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day38.md#2025-04-17_snippet_1
Language: bash

```bash
vault write aws/config/root \
    access_key=AKIAIOSFODNN7EXAMPLE \
   secret_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY \
    region=us-east-1
```

## Snippet: Creating a Developer Role for AWS in Vault
Description: Command to create a role for developers that grants read-only access to EC2 in AWS. This role defines what permissions the dynamic credentials will have when generated.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day38.md#2025-04-17_snippet_2
Language: bash

```bash
vault write aws/roles/developer \
    policy_arns=arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess \
   credential_type=iam_user
```

## Snippet: Generating Dynamic AWS Credentials
Description: Command to request dynamic credentials for AWS based on the previously created developer role. This generates temporary credentials with the permissions defined in the role.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day38.md#2025-04-17_snippet_3
Language: bash

```bash
vault read aws/creds/developer
```

## Snippet: Enabling AWS Secrets Engine in Vault
Description: Command to enable the AWS secrets engine on a specific path in Vault. This is the first step in setting up dynamic credential generation for AWS.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day38.md#2025-04-17_snippet_0
Language: bash

```bash
vault secrets engine -path=cloud aws
```

## Snippet: Rotating Vault's Root AWS Credentials
Description: Command to rotate the credentials Vault uses to access AWS. This is a security best practice to ensure that even the credentials Vault uses are not static for long periods.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day38.md#2025-04-17_snippet_4
Language: bash

```bash
vault write -f aws/config/rotate-root
```