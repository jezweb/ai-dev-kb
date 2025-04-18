# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day47.md
Language: multiple

## Snippet: Creating Non-Root User Dockerfile
Description: A Dockerfile example showing how to create a non-root user for running containers securely. It creates a basic user with specific group and user IDs to avoid running containers with root privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day47.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# Use the official Ubuntu 18.04 as base
FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y
RUN groupadd -g 1000 basicuser && useradd -r -u 1000 -g basicuser basicuser
USER basicuser
```

## Snippet: Docker Container Network Inspection Commands
Description: Collection of Docker commands for inspecting and managing container networks, including listing networks, inspecting bridge networks, and running containers with network configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day47.md#2025-04-17_snippet_1
Language: bash

```bash
docker network
docker network list
docker network inspect bridge
docker run -dt ubuntu sleep infinity
docker exec -it 3a99af449ca2 bash
apt-get update && apt-get install -y iputils-ping
ping -c5 www.90daysofdevops.com
docker run --name web1 -d -p 8080:80 nginx
docker run --user 1009 ubuntu
```