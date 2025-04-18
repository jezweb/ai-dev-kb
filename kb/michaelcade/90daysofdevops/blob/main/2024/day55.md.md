# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day55.md
Language: bash

## Snippet: Validating Terraform Configuration
Description: This command checks the syntax of the Terraform configuration files to ensure they are valid before attempting to deploy the infrastructure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day55.md#2025-04-17_snippet_1
Language: bash

```bash
terraplan validate
```

## Snippet: Applying Terraform Infrastructure Changes
Description: This command executes the Terraform plan and actually creates or modifies the infrastructure resources as defined in the configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day55.md#2025-04-17_snippet_3
Language: bash

```bash
terraform apply
```

## Snippet: Planning Terraform Infrastructure Deployment
Description: This command analyzes the Terraform configuration and shows what changes would be made to the infrastructure without actually applying them.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day55.md#2025-04-17_snippet_2
Language: bash

```bash
terraform plan
```

## Snippet: Visualizing Ansible Inventory Graph
Description: This command uses Ansible to generate a graphical representation of the inventory file, which helps in debugging and visualizing the host connections and variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day55.md#2025-04-17_snippet_0
Language: bash

```bash
ansible-inventory -g graph
```