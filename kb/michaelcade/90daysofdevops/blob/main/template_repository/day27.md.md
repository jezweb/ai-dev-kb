# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md
Language: multiple

## Snippet: Using Docker Security Scanning with Trivy
Description: Demonstrates how to scan a Docker image for vulnerabilities using Trivy. This security scanning tool helps identify security issues in container images before deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_6
Language: bash

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/Library/Caches:/root/.cache/ aquasec/trivy:0.36.0 image nginx:latest
```

## Snippet: Setting Non-Root User in Dockerfile
Description: Shows how to configure a non-root user in a Dockerfile for better security. This implements the principle of least privilege by avoiding running containers as root.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_9
Language: bash

```bash
FROM nginx:latest
RUN useradd -r -u 1000 -g nginx nginx
USER nginx
```

## Snippet: Setting Combined Resource Limits with Docker CLI
Description: Demonstrates setting both memory and CPU limits simultaneously for a Docker container using the Docker CLI. This ensures comprehensive resource limitation for the container.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_2
Language: bash

```bash
docker run -d --name nginx --memory="500m" --cpus="0.5" nginx
```

## Snippet: Installing Trivy Security Scanner
Description: Shows the command to install Trivy scanner using Homebrew package manager. Trivy is a tool for finding vulnerabilities in container images and filesystems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_7
Language: bash

```bash
brew install trivy
```

## Snippet: Setting Container User in Docker Compose
Description: Shows how to specify a non-root user for a container in a Docker Compose file. This implements security best practices when using Docker Compose for orchestration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_11
Language: yaml

```yaml
version: "3.9"

services:
  nginx:
    image: nginx:latest
    user: "1000"
```

## Snippet: Confirming Running Container Resource Limits
Description: Demonstrates how to verify resource limits for a running container using Docker inspect command. This allows administrators to confirm that limits have been properly applied.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_4
Language: bash

```bash
docker inspect nginx
```

## Snippet: Running Docker Container with Non-Root User
Description: Demonstrates how to run a Docker container with a specific non-root user. This provides an alternative to setting the user in the Dockerfile.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_10
Language: bash

```bash
docker run -d --name nginx --user=1000 nginx
```

## Snippet: Configuring Container Resource Limits in Docker Compose
Description: Shows how to set memory and CPU limits for a Docker container using Docker Compose. This approach is useful for multi-container applications where consistent resource management is required.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_3
Language: yaml

```yaml
version: "3.9"

services:
  redis:
    image: redis:alpine
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 500M
```

## Snippet: Direct Scanning with Installed Trivy
Description: Demonstrates how to use Trivy directly from the command line to scan a Docker image. This approach is simpler than using the Docker container version once Trivy is installed.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_8
Language: bash

```bash
trivy image nginx:latest
```

## Snippet: Setting CPU Limits with Docker CLI
Description: Shows how to set CPU limits for a Docker container using the Docker CLI. This allocates a specific amount of CPU resources to the container, preventing CPU exhaustion on the host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_1
Language: bash

```bash
docker run -d --name nginx --cpus="0.5" nginx
```

## Snippet: Setting Memory Limits with Docker CLI
Description: Demonstrates how to set memory limits for a Docker container using the Docker CLI. This helps prevent excessive memory consumption that could lead to denial of service on the host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d --name nginx --memory="500m" nginx
```

## Snippet: Viewing Container Memory Usage Statistics
Description: Shows how to check memory usage statistics for Docker containers using the stats command. This provides real-time monitoring of container resource consumption.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day27.md#2025-04-17_snippet_5
Language: bash

```bash
docker stats
```