# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day48.md
Language: bash

## Snippet: Installing Podman on Ubuntu 20.04 WSL2 - Adding Repository
Description: Command to add the OpenSUSE repository for Podman installation on Ubuntu 20.04 running in WSL2. This adds the necessary package source to the APT sources list.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day48.md#2025-04-17_snippet_0
Language: bash

```bash
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_20.04/ /" |
sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
```

## Snippet: Installing Podman on Ubuntu 20.04 WSL2 - Adding GPG Key
Description: Command to add the GPG key for the Podman repository, which is required to verify the authenticity of the packages being installed from the OpenSUSE repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day48.md#2025-04-17_snippet_1
Language: bash

```bash
curl -L "https://download.opensuse.org/repositories/devel:/kubic:\
/libcontainers:/stable/xUbuntu_20.04/Release.key" | sudo apt-key add -
```