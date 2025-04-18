# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day47.md
Language: multiple

## Snippet: Running Container with Non-Root User
Description: Command to run a container with a specific non-root user ID, overriding any user specified in the Dockerfile for enhanced security.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day47.md#2025-04-17_snippet_1
Language: bash

```bash
docker run --user 1009 ubuntu
```

## Snippet: Running NGINX Container with Port Mapping
Description: Command to run an NGINX container with port mapping from host port 8080 to container port 80, enabling external access to the web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day47.md#2025-04-17_snippet_2
Language: bash

```bash
docker run --name web1 -d -p 8080:80 nginx
```

## Snippet: Creating Non-Root User Dockerfile
Description: A Dockerfile example showing how to create a non-root user for running containers securely. Creates a basic user with specific user and group IDs to avoid running containers with root privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day47.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# Use the official Ubuntu 18.04 as base
FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y
RUN groupadd -g 1000 basicuser && useradd -r -u 1000 -g basicuser basicuser
USER basicuser
```