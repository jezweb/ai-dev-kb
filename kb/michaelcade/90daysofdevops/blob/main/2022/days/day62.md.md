# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day62.md
Language: bash

## Snippet: Running a Terratest Application in Go
Description: A sequence of commands to clone, initialize, and run a Terratest application for testing Terraform infrastructure code. Includes steps to initialize Go modules and execute the test.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day62.md#2025-04-17_snippet_0
Language: bash

```bash
git clone #repo_url# 
cd test  
go mod init "<MODULE_NAME>"  
**MODULE_NAME would be github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>**  
go mod init github.com/<FOLDER-PATH>  
go run
```