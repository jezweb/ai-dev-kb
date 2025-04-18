# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day18.md
Language: multiple

## Snippet: Downloading and Extracting WordPress
Description: Commands to navigate to the web directory, download the latest WordPress package, extract it, and clean up the downloaded archive file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day18.md#2025-04-17_snippet_3
Language: bash

```bash
cd /var/www

sudo curl -O https://wordpress.org/latest.tar.gz

sudo tar -xvf latest.tar.gz

sudo rm latest.tar.gz
```

## Snippet: MySQL Database Configuration for WordPress
Description: A series of MySQL commands to create a database for WordPress, create a user with appropriate permissions, and configure database access for the WordPress installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day18.md#2025-04-17_snippet_1
Language: bash

```bash
sudo mysql -u root -p

CREATE DATABASE wordpressdb;

CREATE USER 'admin-user'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON wordpressdb.* TO 'admin-user'@'localhost';

FLUSH PRIVILEGES;

EXIT;
```

## Snippet: Installing PHP Extensions for WordPress
Description: Command to install additional PHP extensions required by WordPress, followed by restarting the Apache service to apply changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day18.md#2025-04-17_snippet_2
Language: bash

```bash
sudo apt install php-curl php-gd php-mbstring php-xml php-xmlrpc php-soap php-intl php-zip

sudo systemctl restart apache2
```

## Snippet: Creating a Simple PHP Info Script for Testing
Description: A minimal PHP script that displays PHP configuration information. This script is used to verify that PHP is correctly installed and configured with Apache.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day18.md#2025-04-17_snippet_0
Language: php

```php
<?php
phpinfo();
?>
```