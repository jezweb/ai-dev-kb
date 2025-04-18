# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day48.md
Language: bash

## Snippet: Installing Podman Repository on Ubuntu 20.04
Description: Commands to add the Podman repository to Ubuntu 20.04 package sources. This adds the OpenSUSE repository for libcontainers to the system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day48.md#2025-04-17_snippet_0
Language: bash

```bash
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_20.04/ /" |
sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
```

## Snippet: Adding Podman GPG Key
Description: Command to add the GPG key for the Podman repository to ensure package authenticity.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day48.md#2025-04-17_snippet_1
Language: bash

```bash
curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_20.04/Release.key" | sudo apt-key add -
```