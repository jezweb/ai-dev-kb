# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day46.md
Language: multiple

## Snippet: Defining Multi-Container Application with Docker Compose YAML
Description: This YAML file defines a WordPress application with a MySQL database using Docker Compose. It specifies services, images, volumes, environment variables, and port mappings for both WordPress and MySQL containers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day46.md#2025-04-17_snippet_0
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

## Snippet: Stopping Docker Compose Application and Removing Containers and Volumes
Description: This command stops the running Docker Compose application, removes the containers, and also removes the associated volumes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day46.md#2025-04-17_snippet_3
Language: bash

```bash
docker-compose down --volumes
```

## Snippet: Starting Docker Compose Application in Detached Mode
Description: This command starts the Docker Compose application defined in the docker-compose.yml file in detached mode, allowing it to run in the background.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day46.md#2025-04-17_snippet_1
Language: bash

```bash
docker-compose up -d
```

## Snippet: Stopping Docker Compose Application and Removing Containers
Description: This command stops the running Docker Compose application and removes the containers, but preserves the volumes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day46.md#2025-04-17_snippet_2
Language: bash

```bash
docker-compose down
```