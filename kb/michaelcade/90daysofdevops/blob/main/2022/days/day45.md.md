# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day45.md
Language: multiple

## Snippet: Simple Ubuntu Nginx Dockerfile
Description: A basic Dockerfile that creates an Ubuntu 18.04 image with nginx and curl installed. It demonstrates the use of FROM and RUN commands while maintaining a clean image by removing apt cache.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day45.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# Use the official Ubuntu 18.04 as base
FROM ubuntu:18.04
# Install nginx and curl
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y nginx curl
RUN rm -rf /var/lib/apt/lists/*
```

## Snippet: Docker Build Command
Description: Command to build a Docker image with a specific tag from the current directory
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day45.md#2025-04-17_snippet_1
Language: bash

```bash
docker build -t 90daysofdevops:0.1 .
```