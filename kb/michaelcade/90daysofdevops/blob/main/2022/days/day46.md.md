# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day46.md
Language: multiple

## Snippet: WordPress and MySQL Docker Compose Configuration
Description: Docker Compose YAML configuration for deploying WordPress with a MySQL database. Defines services, volumes, environment variables, and networking for a complete WordPress stack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day46.md#2025-04-17_snippet_0
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

## Snippet: Docker Compose Terminal Commands
Description: Essential Docker Compose commands for managing the application lifecycle, including starting containers in detached mode, stopping containers, and managing volumes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day46.md#2025-04-17_snippet_1
Language: bash

```bash
docker-compose up -d
docker ps
docker-compose down
docker-compose down --volumes
```