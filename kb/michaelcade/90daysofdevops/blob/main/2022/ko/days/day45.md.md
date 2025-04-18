# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day45.md
Language: dockerfile

## Snippet: Basic Ubuntu Nginx Dockerfile
Description: A simple Dockerfile that creates an image based on Ubuntu 18.04 with nginx and curl installed. The image is optimized by cleaning up apt lists after installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day45.md#2025-04-17_snippet_0
Language: dockerfile

```dockerfile
# 공식 우분투 18.04를 기본으로 사용하세요.
FROM ubuntu:18.04
# nginx 및 curl 설치
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y nginx curl
RUN rm -rf /var/lib/apt/lists/*
```