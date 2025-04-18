# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day47.md
Language: multiple

## Snippet: Creating a Dockerfile with Non-Root User for Container Security
Description: This Dockerfile template creates a non-root user (basicuser) in an Ubuntu 18.04 container to improve security. It updates the system packages, creates a user group and user with ID 1000, and sets this user as the default for container operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day47.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# 공식 Ubuntu 18.04를 기본으로 사용하세요.
FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y
RUN groupadd -g 1000 basicuser && useradd -r -u 1000 -g basicuser basicuser
USER basicuser
```

## Snippet: Running NGINX Container with Port Mapping
Description: This command creates and runs an NGINX container named 'web1' in detached mode, mapping port 8080 on the host to port 80 in the container to allow external access to the web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day47.md#2025-04-17_snippet_3
Language: bash

```bash
docker run --name web1 -d -p 8080:80 nginx
```

## Snippet: Running Docker Container with Non-Root User
Description: This command runs an Ubuntu container with a specific non-root user ID (1009), overriding any user specified in the Dockerfile to improve security by using the principle of least privilege.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day47.md#2025-04-17_snippet_4
Language: bash

```bash
docker run --user 1009 ubuntu
```

## Snippet: Installing Ping Utility in Docker Container
Description: This command updates the package repository and installs the iputils-ping package in an Ubuntu container to enable network testing functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day47.md#2025-04-17_snippet_2
Language: bash

```bash
apt-get update && apt-get install -y iputils-ping
```

## Snippet: Running Docker Container with Sleep Command
Description: This command creates and runs a new Ubuntu container in detached mode with a sleep infinity command to keep the container running in the background for testing and inspection purposes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day47.md#2025-04-17_snippet_1
Language: bash

```bash
docker run -dt ubuntu sleep infinity
```