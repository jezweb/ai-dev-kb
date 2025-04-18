# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day47.md
Language: multiple

## Snippet: Running Docker Container with Non-Root User
Description: This command demonstrates how to run a Docker container with a specified non-root user ID, overriding any user specified in the Dockerfile for improved security.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day47.md#2025-04-17_snippet_1
Language: bash

```bash
docker run --user 1009 ubuntu
```

## Snippet: Creating a Non-Root User in Dockerfile
Description: This Dockerfile creates a non-root user 'basicuser' with a specific user ID and group ID, promoting better security practices in container execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day47.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# Use the official Ubuntu 18.04 as base
FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y
RUN groupadd -g 1000 basicuser && useradd -r -u 1000 -g basicuser basicuser
USER basicuser
```

## Snippet: Starting NGINX Container with Port Mapping
Description: This command starts an NGINX container and maps port 8080 on the host to port 80 in the container, allowing external access to the web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day47.md#2025-04-17_snippet_2
Language: bash

```bash
docker run --name web1 -d -p 8080:80 nginx
```