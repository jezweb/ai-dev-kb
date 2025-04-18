# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day48.md
Language: Shell

## Snippet: Adding GPG Key for Podman Repository
Description: Command to download and add the GPG key for the Podman repository to ensure secure package verification during installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day48.md#2025-04-17_snippet_1
Language: Shell

```Shell
curl -L "https://download.opensuse.org/repositories/devel:/kubic:\
/libcontainers:/stable/xUbuntu_20.04/Release.key" | sudo apt-key add -
```

## Snippet: Installing Podman Repository in Ubuntu 20.04 WSL
Description: Command to add the Podman repository to Ubuntu 20.04's apt sources list in WSL2. This first step allows the system to locate and download Podman packages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day48.md#2025-04-17_snippet_0
Language: Shell

```Shell
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_20.04/ /" |
sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
```