# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day46.md
Language: multiple

## Snippet: Defining Docker Compose Configuration for WordPress and MySQL
Description: This YAML configuration defines two services (WordPress and MySQL) with their respective images, volumes, environment variables, and port mappings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day46.md#2025-04-17_snippet_0
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

## Snippet: Running Docker Compose in Detached Mode
Description: This command starts the Docker Compose services defined in the YAML file in detached mode, running the containers in the background.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day46.md#2025-04-17_snippet_1
Language: bash

```bash
docker-compose up -d
```

## Snippet: Stopping Docker Compose Services and Removing Volumes
Description: This command stops the running Docker Compose services and also removes the associated volumes, completely cleaning up the environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day46.md#2025-04-17_snippet_3
Language: bash

```bash
docker-compose down --volumes
```

## Snippet: Stopping Docker Compose Services
Description: This command stops the running Docker Compose services without removing the volumes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day46.md#2025-04-17_snippet_2
Language: bash

```bash
docker-compose down
```