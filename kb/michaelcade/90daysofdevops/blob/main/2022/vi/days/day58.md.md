# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day58.md
Language: multiple

## Snippet: Creating a Hello World Output in Terraform HCL
Description: A simple Terraform module that outputs a welcome message. This is the most basic Terraform configuration that demonstrates how to define an output variable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day58.md#2025-04-17_snippet_0
Language: hcl

```hcl
# website::tag::1:: The simplest possible Terraform module: it just outputs "Hello, World!"
output "hello_world" {
  value = "Hello, 90DaysOfDevOps from Terraform"
}
```

## Snippet: Example Terraform State File in JSON
Description: This is an example of a Terraform state file generated after applying the Hello World configuration. The state file is a JSON document that records the current state of all resources managed by Terraform.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day58.md#2025-04-17_snippet_1
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