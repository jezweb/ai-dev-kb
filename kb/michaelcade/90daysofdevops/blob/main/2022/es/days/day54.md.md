# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day54.md
Language: Shell

## Snippet: Installing Helm using Shell Script
Description: This snippet demonstrates how to download and install Helm using a shell script. It downloads the installation script, makes it executable, and then runs it to install the latest version of Helm.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day54.md#2025-04-17_snippet_0
Language: Shell

```Shell
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3

chmod 700 get_helm.sh

./get_helm.sh
```