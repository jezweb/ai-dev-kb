# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day45.md
Language: multiple

## Snippet: Docker Build Command
Description: Command to build a Docker image with a specific tag and name. The -t flag is used to tag the image with a name and version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day45.md#2025-04-17_snippet_1
Language: bash

```bash
docker build -t 90daysofdevops:0.1 .
```

## Snippet: Docker Build Command with Username
Description: Command structure for building a Docker image that can be pushed to DockerHub, including username in the image name.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day45.md#2025-04-17_snippet_2
Language: bash

```bash
docker build -t {{username}}/{{imagename}}:{{version}}
```

## Snippet: Basic Ubuntu Nginx Dockerfile
Description: A Dockerfile that creates an image based on Ubuntu 18.04, installs nginx and curl, and performs cleanup. It demonstrates basic Dockerfile commands and best practices for creating a minimal container image.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day45.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# Use the official Ubuntu 18.04 as base
FROM ubuntu:18.04
# Install nginx and curl
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y nginx curl
RUN rm -rf /var/lib/apt/lists/*
```