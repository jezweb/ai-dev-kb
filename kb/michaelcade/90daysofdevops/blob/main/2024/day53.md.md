# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day53.md
Language: yaml

## Snippet: Configuring Gickup YAML Settings
Description: YAML configuration structure for Gickup, defining source repositories, destination locations, and backup settings for Git repository management
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day53.md#2025-04-17_snippet_0
Language: yaml

```yaml
source:
  platform: "github"
destination:
  type: "local"
  format: "structured"
  createOrg: true
```