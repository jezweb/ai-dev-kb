# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day64.md
Language: shell

## Snippet: Building Terraform Provider
Description: Command to build the Terraform provider using Go, which creates a binary in the Go path's bin folder.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day64.md#2025-04-17_snippet_1
Language: shell

```shell
go build
```

## Snippet: Running Terraform Unit Tests
Description: Command to run Terraform unit tests for specific services and networks using the make utility.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day64.md#2025-04-17_snippet_0
Language: shell

```shell
make ACC tests service network test args run
```

## Snippet: Running Terraform Plan
Description: Command to execute Terraform plan and verify the custom data source functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day64.md#2025-04-17_snippet_2
Language: shell

```shell
terraform plan
```