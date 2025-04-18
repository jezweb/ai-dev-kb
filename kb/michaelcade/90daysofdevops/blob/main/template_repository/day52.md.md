# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day52.md
Language: yaml

## Snippet: Basic Docker Compose YAML Structure
Description: This is a simple Docker Compose YAML file structure that defines a minimal web service using Nginx with port mapping and volume mounting.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day52.md#2025-04-17_snippet_0
Language: yaml

```yaml
version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./app:/usr/share/nginx/html
```

## Snippet: WordPress with MySQL Docker Compose Configuration
Description: A Docker Compose configuration for deploying WordPress with a MySQL database. It sets up environment variables, volume mappings, and port configurations to create a working WordPress installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day52.md#2025-04-17_snippet_2
Language: yaml

```yaml
version: '3.8'
services:
  wordpress:
    image: wordpress:latest
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress_data:/var/www/html
    depends_on:
      - db

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - db_data:/var/lib/mysql

volumes:
  wordpress_data:
  db_data:
```

## Snippet: Multi-Container Docker Compose Configuration
Description: A more complex Docker Compose configuration defining multiple services including a Node.js application, MongoDB database, and Redis cache with interconnected dependencies.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day52.md#2025-04-17_snippet_1
Language: yaml

```yaml
version: '3.8'
services:
  app:
    build: ./app
    ports:
      - "3000:3000"
    depends_on:
      - mongo
      - redis
    environment:
      - NODE_ENV=production
      - MONGO_URL=mongodb://mongo:27017/myapp
      - REDIS_URL=redis://redis:6379
    volumes:
      - ./app:/app
    networks:
      - webnet

  mongo:
    image: mongo:latest
    volumes:
      - mongodb_data:/data/db
    networks:
      - webnet

  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data
    networks:
      - webnet

volumes:
  mongodb_data:
  redis_data:

networks:
  webnet:
```