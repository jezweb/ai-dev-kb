# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day47.md
Language: multiple

## Snippet: Running Docker Container with Non-Root User
Description: This command shows how to run a Docker container with a specific non-root user ID. This method overrides any user specified in the Dockerfile, ensuring the container runs with least privilege.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day47.md#2025-04-17_snippet_1
Language: bash

```bash
docker run --user 1009 ubuntu
```

## Snippet: Creating a Non-Root User in Dockerfile
Description: This Dockerfile snippet demonstrates how to create a non-root user for running containers securely. It creates a user group and a user, then sets the user as the default for running commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day47.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# Use the official Ubuntu 18.04 as base
FROM ubuntu:18.04
RUN apt-get update && apt-get upgrade -y
RUN groupadd -g 1000 basicuser && useradd -r -u 1000 -g basicuser basicuser
USER basicuser
```