# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day48.md
Language: Shell

## Snippet: Adding Podman GPG Key on Ubuntu 20.04 (WSL2)
Description: This snippet adds the GPG key for the Podman repository to ensure package authenticity. It's a crucial step in the Podman installation process on Ubuntu 20.04 in WSL2.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day48.md#2025-04-17_snippet_1
Language: Shell

```Shell
curl -L "https://download.opensuse.org/repositories/devel:/kubic:\
/libcontainers:/stable/xUbuntu_20.04/Release.key" | sudo apt-key add -
```

## Snippet: Installing Podman Repository on Ubuntu 20.04 (WSL2)
Description: This snippet adds the Podman repository to the APT sources list on Ubuntu 20.04 running on WSL2. It's the first step in installing Podman as an alternative to Docker.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day48.md#2025-04-17_snippet_0
Language: Shell

```Shell
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_20.04/ /" |
sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
```