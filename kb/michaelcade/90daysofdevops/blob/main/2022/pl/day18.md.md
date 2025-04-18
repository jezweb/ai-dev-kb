# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day18.md
Language: multiple

## Snippet: Creating a Simple PHP Info Page in Apache
Description: A minimal PHP script that displays the PHP configuration information on the server. This is commonly used to verify that PHP is correctly installed and configured on a web server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day18.md#2025-04-17_snippet_0
Language: php

```php
<?php
phpinfo();
?>
```

## Snippet: Installing WordPress Dependencies and Downloading WordPress
Description: Bash commands to install PHP extensions required by WordPress, restart the Apache server, and download and extract the latest WordPress package to the web directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day18.md#2025-04-17_snippet_2
Language: bash

```bash
sudo apt install php-curl php-gd php-mbstring php-xml php-xmlrpc php-soap php-intl php-zip

sudo systemctl restart apache2

cd /var/www

sudo curl -O https://wordpress.org/latest.tar.gz

sudo tar -xvf latest.tar.gz

sudo rm latest.tar.gz
```

## Snippet: MySQL Database Setup Commands for WordPress
Description: A series of MySQL commands to create a new database for WordPress, create a user with appropriate permissions, and configure access control. These commands prepare the database environment needed for WordPress installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day18.md#2025-04-17_snippet_1
Language: bash

```bash
sudo mysql -u root -p

CREATE DATABASE wordpressdb;

CREATE USER 'admin-user'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON wordpressdb.* TO 'admin-user'@'localhost';

FLUSH PRIVILEGES;

EXIT;
```