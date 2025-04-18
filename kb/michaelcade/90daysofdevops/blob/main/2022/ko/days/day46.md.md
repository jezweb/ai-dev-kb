# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day46.md
Language: yaml

## Snippet: Defining Multi-Container Application with Docker Compose
Description: This YAML file defines a WordPress application with a MySQL database using Docker Compose. It specifies the services, images, volumes, and environment variables needed to run the application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day46.md#2025-04-17_snippet_0
Language: yaml

```yaml
version: '3.9'

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
      - '8000:80'
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