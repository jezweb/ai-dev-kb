# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day18.md
Language: multiple

## Snippet: WordPress Installation Commands
Description: Bash commands for downloading and extracting WordPress files on an Ubuntu system with LAMP stack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day18.md#2025-04-17_snippet_2
Language: bash

```bash
cd /var/www
sudo curl -O https://wordpress.org/latest.tar.gz
sudo tar -xvf latest.tar.gz
sudo rm latest.tar.gz
```

## Snippet: Creating Simple PHP Info Page
Description: A basic PHP script to display PHP configuration information and verify PHP installation on the web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day18.md#2025-04-17_snippet_0
Language: php

```php
<?php
phpinfo();
?>
```

## Snippet: MySQL Database Setup Commands
Description: Series of MySQL commands to create a database, user, and set permissions for WordPress installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day18.md#2025-04-17_snippet_1
Language: sql

```sql
CREATE DATABASE wordpressdb;
CREATE USER 'admin-user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON wordpressdb.* TO 'admin-user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```