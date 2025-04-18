# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md
Language: multiple

## Snippet: Copying SSH Public Key to Linux Server
Description: Command to copy the SSH public key to a Linux server for key-based authentication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_4
Language: bash

```bash
ssh-copy-id vagrant@192.168.169.135
```

## Snippet: Installing Additional PHP Extensions for WordPress
Description: Command to install additional PHP extensions required for WordPress.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_16
Language: bash

```bash
sudo apt install php-curl php-gd php-mbstring php-xml php-xmlrpc php-soap php-intl php-zip
```

## Snippet: Editing Apache Directory Configuration in Linux
Description: Command to edit Apache's directory configuration file to prioritize PHP index files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_12
Language: bash

```bash
sudo nano /etc/apache2/mods-enabled/dir.conf
```

## Snippet: Installing PHP and Dependencies on Linux
Description: Command to install PHP and necessary dependencies for a LAMP stack on Linux.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_11
Language: bash

```bash
sudo apt-get install php libapache2-mod-php php-mysql
```

## Snippet: Generating SSH Key Pair on Windows
Description: Command to generate an ED25519 SSH key pair on a Windows system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_3
Language: bash

```bash
ssh-keygen -t ed25519
```

## Snippet: Editing SSH Configuration File in Linux
Description: Command to open and edit the SSH daemon configuration file to disable password authentication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_6
Language: bash

```bash
sudo nano /etc/ssh/sshd_config
```

## Snippet: MySQL Database and User Creation for WordPress
Description: MySQL commands to create a database and user for WordPress installation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_15
Language: sql

```sql
CREATE DATABASE wordpressdb;
CREATE USER 'admin-user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON wordpressdb.* TO 'admin-user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Snippet: Connecting to Linux Server via SSH
Description: Command to connect to a Linux server using SSH with a username and IP address.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_5
Language: bash

```bash
ssh vagrant@192.168.169.135
```

## Snippet: PHP Info Script
Description: PHP script to display PHP configuration information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_14
Language: php

```php
<?php
phpinfo();
?>
```

## Snippet: Checking SSH Server Status in Linux
Description: Command to verify if the SSH server is running on the Linux system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_0
Language: bash

```bash
sudo systemctl status ssh
```

## Snippet: Downloading and Extracting WordPress
Description: Commands to download and extract the latest WordPress package.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_17
Language: bash

```bash
cd /var/www
sudo curl -O https://wordpress.org/latest.tar.gz
sudo tar -xvf latest.tar.gz
sudo rm latest.tar.gz
```

## Snippet: Allowing SSH Through Firewall in Linux
Description: Command to allow SSH traffic through the UFW firewall on Linux.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_2
Language: bash

```bash
sudo ufw allow ssh
```

## Snippet: Creating PHP Info File in Linux
Description: Commands to create a PHP file that displays PHP configuration information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_13
Language: bash

```bash
sudo nano /var/www/html/90Days.php
```

## Snippet: Installing MySQL Server on Linux
Description: Command to install the MySQL database server on a Linux system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_10
Language: bash

```bash
sudo apt-get install mysql-server
```

## Snippet: Reloading SSH Service in Linux
Description: Command to reload the SSH service after configuration changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_7
Language: bash

```bash
sudo systemctl reload sshd
```

## Snippet: Installing SSH Server on Linux
Description: Command to install the OpenSSH server on a Linux system if not already present.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_1
Language: bash

```bash
sudo apt install openssh-server
```

## Snippet: Restarting Apache Service in Linux
Description: Command to restart the Apache2 service after installation or configuration changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_9
Language: bash

```bash
sudo service apache2 restart
```

## Snippet: Installing Apache Web Server on Linux
Description: Command to install the Apache2 web server on a Linux system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day18.md#2025-04-17_snippet_8
Language: bash

```bash
sudo apt-get install apache2
```