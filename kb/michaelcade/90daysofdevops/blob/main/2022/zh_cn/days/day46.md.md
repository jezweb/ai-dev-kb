# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day46.md
Language: multiple

## Snippet: Docker Compose Configuration for WordPress and MySQL
Description: A docker-compose.yml file that defines a multi-container application with WordPress and MySQL. It configures volumes for data persistence, environment variables for database connection, and port mapping for accessing the WordPress site.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day46.md#2025-04-17_snippet_0
Language: yaml

```yaml
version: "3.9"
    
services:
  db:
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

## Snippet: Docker Compose Commands for Application Management
Description: A collection of essential Docker Compose commands for starting, stopping, and managing multi-container applications. Includes commands for detached mode deployment, checking running containers, and proper cleanup with volume removal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day46.md#2025-04-17_snippet_1
Language: bash

```bash
docker-compose down --volumes
```