# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day47.md
Language: multiple

## Snippet: Creating a Non-Root User in Dockerfile for Container Security
Description: This Dockerfile example creates a non-root user for running applications securely. It uses Ubuntu 18.04 as the base image, updates packages, creates a user group and user with specific UID/GID, and sets this user as the default for running container processes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day47.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# Use the official Ubuntu 18.04 as base
FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y
RUN groupadd -g 1000 basicuser && useradd -r -u 1000 -g basicuser basicuser
USER basicuser
```

## Snippet: Running Container with Non-Root User via Docker Run Command
Description: This command demonstrates how to run a container with a specific non-root user (UID 1009) regardless of what user might be specified in the Dockerfile, providing an additional security measure to ensure least privilege access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day47.md#2025-04-17_snippet_1
Language: bash

```bash
docker run --user 1009 ubuntu
```