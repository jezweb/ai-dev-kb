# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day46.md
Language: multiple

## Snippet: Defining WordPress and MySQL Services in Docker Compose YAML
Description: A docker-compose.yml file that defines a WordPress application with a MySQL database. It includes volume configuration for persistent storage, network settings, environment variables for database credentials, and port mapping.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day46.md#2025-04-17_snippet_0
Language: yaml

```yaml
version: "3.9"
    
services:
  DB:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: somewordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    volumes:
      - wordpress_data:/var/www/html
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
volumes:
  db_data: {}
  wordpress_data: {}
```

## Snippet: Listing Running Docker Containers
Description: Command to view currently running Docker containers, useful for verifying that containers from a docker-compose deployment are running properly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day46.md#2025-04-17_snippet_2
Language: bash

```bash
docker ps
```

## Snippet: Starting Multi-Container Applications with Docker Compose
Description: Terminal commands for managing Docker Compose applications, including how to start containers in detached mode, list running containers, and shut down the application with or without removing volumes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day46.md#2025-04-17_snippet_1
Language: bash

```bash
docker-compose up -d
```

## Snippet: Shutting Down Docker Compose Applications with Volume Removal
Description: Command to completely remove a Docker Compose application including containers and associated volumes, useful for complete cleanup when persistence is not needed.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day46.md#2025-04-17_snippet_4
Language: bash

```bash
docker-compose down --volumes
```

## Snippet: Shutting Down Docker Compose Applications
Description: Command to stop and remove containers defined in a docker-compose.yml file while preserving volumes for data persistence.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day46.md#2025-04-17_snippet_3
Language: bash

```bash
docker-compose down
```