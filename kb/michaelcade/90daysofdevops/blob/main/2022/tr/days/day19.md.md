# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md
Language: multiple

## Snippet: Interactive User Account Creation Script
Description: A more interactive bash script that prompts for username and password input, creates the user account with a home directory, sets the password, and displays a success message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_17
Language: bash

```bash
#! /usr/bin/bash

echo "What is your intended username?"
read  username
echo "What is your password"
read  password

# Bir kullanıcı komut satırı argümanı olarak geçilebilir
echo "$1 user account being created."

# Argüman adıyla bir kullanıcı oluşturulur.
sudo useradd -m "$1"

# Bir şifre komut satırı argümanı olarak geçilebilir.
# Kullanıcı için şifre ayarlanır.
sudo chpasswd <<< "$1":"$2"

# Hesap oluşturma başarılı bir mesajı gösterilir.
echo "The Account for $username has successfully been created"
```

## Snippet: Comprehensive Bash Script with Conditional Logic
Description: A complete bash script demonstrating variables, user input, and conditional logic to track progress in the 90DaysOfDevOps challenge.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_7
Language: bash

```bash
#!/bin/bash
#   ___   ___  ____                   ___   __ ____              ___
#  / _ \ / _ \|  _ \  __ _ _   _ ___ / _ \ / _|  _ \  _____   __/ _ \ _ __  ___
# | (_) | | | | | | |/ _` | | | / __| | | | |_| | | |/ _ \ \ / / | | | '_ \/ __|
#  \__, | |_| | |_| | (_| | |_| \__ \ |_| |  _| |_| |  __/\ V /| |_| | |_) \__ \
#    /_/ \___/|____/ \__,_|\__, |___/\___/|_| |____/ \___| \_/  \___/| .__/|___/
#                           |___/                                    |_|
#
# This script is to demonstrate bash scripting!
#
# Variables to be defined

ChallengeName=#90DaysOfDevOps
TotalDays=90

# User Input

echo "Enter Your Name"
read name
echo "Welcome $name to $ChallengeName"
echo "How Many Days of the $ChallengeName challenge have you completed?"
read DaysCompleted

if [ $DaysCompleted -eq 90 ]
then
  echo "You have finished, well done"
elif [ $DaysCompleted -lt 90 ]
then
  echo "Keep going you are doing great"
else
  echo "You have entered the wrong amount of days"
fi
```

## Snippet: Using Variables in Bash Scripts
Description: Example of defining and using variables in a bash script to simplify code and make it more maintainable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_5
Language: bash

```bash
challenge="90DaysOfDevOps"
```

## Snippet: Checking and Changing File Permissions
Description: Commands to check file permissions and make a script executable using chmod.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_4
Language: shell

```shell
chmod +x 90DaysOfDevOps.sh
```

## Snippet: User Creation Bash Script
Description: A bash script that creates a user account with the name provided as a command-line argument. It includes notification of creation and uses the 'useradd' command with the '-m' flag to create a home directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_13
Language: bash

```bash
#! /usr/bin/bash

# Bir kullanıcı komut satırı argümanı olarak iletilmiş olmalıdır
echo "$1 user account being created."

# Kullanıcı Olusturma
sudo useradd -m "$1"
```

## Snippet: Checking User Account Creation in Linux
Description: A shell command using awk to filter and display all user accounts from the /etc/passwd file, which can be used to verify if a user account was successfully created.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_14
Language: shell

```shell
awk -F: '{ print $1}' /etc/passwd
```

## Snippet: User Input in Bash Scripts
Description: How to prompt for and capture user input in a bash script using echo and read commands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_6
Language: bash

```bash
echo "Enter your name"
read name
```

## Snippet: File Existence Check in Bash
Description: A script demonstrating how to check if a file exists and taking different actions based on the result.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_8
Language: bash

```bash
FILE="90DaysOfDevOps.txt"
if [ -f "$FILE" ]
then
  echo "$FILE is a file"
else
  echo "$FILE is not a file"
fi
```

## Snippet: Simple Directory and File Operations Script
Description: A basic bash script that creates a directory, changes to that directory, creates a file, and lists contents.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_3
Language: bash

```bash
mkdir 90DaysOfDevOps
cd 90DaysOfDevOps
touch Day19
ls
```

## Snippet: Setting Shebang Line in Bash Script
Description: The first line of a bash script that specifies the path to the bash interpreter. This is also known as SHEBANG, HASHBANG, or SHARPBANG.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_1
Language: bash

```bash
#!/usr/bin/bash
```

## Snippet: Initial Shebang Line for User Management Script
Description: The beginning of the user creation script with the shebang line.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_10
Language: bash

```bash
#! /usr/bin/bash
```

## Snippet: Finding Bash Interpreter Location
Description: Commands to locate the bash binary on your system, useful for setting the correct shebang line.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_2
Language: shell

```shell
whereis bash
```

## Snippet: Hiding Password Input in Bash
Description: A command that demonstrates how to hide password input in a bash script using the -s flag with the read command for enhanced security.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_18
Language: bash

```bash
read -s password
```

## Snippet: Creating a User Management Script
Description: Starting a script for automating user creation according to specified requirements.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_9
Language: shell

```shell
vim create_user.sh
```

## Snippet: Displaying Command-Line Arguments in Bash
Description: A simple bash script that demonstrates how to access and display the first command-line argument passed to the script using '$1'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_11
Language: bash

```bash
# Bir kullanıcı komut satırı argümanı olarak iletilmiş olmalıdır
echo "$1"
```

## Snippet: Executing User Creation Script with Password Parameter
Description: Example of running the user creation script with both username and password parameters, creating a user named '90DaysOfDevOps' with the password 'password'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_16
Language: shell

```shell
./create_user.sh 90DaysOfDevOps password
```

## Snippet: Running a Shell Script with Arguments
Description: Example of how to execute a shell script with a command-line argument, passing 'Michael' as the first parameter to the script.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_12
Language: shell

```shell
./create_user.sh Michael
```

## Snippet: Creating a Basic Shell Script File
Description: Commands to create and open a new shell script file using touch and nano editor.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_0
Language: shell

```shell
nano 90DaysOfDevOps.sh
```

## Snippet: User Creation with Password Setting
Description: An expanded bash script that creates a user account and sets a password. It takes the username as the first argument and password as the second, using chpasswd to set the password.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_15
Language: bash

```bash
#! /usr/bin/bash

# Bir kullanıcı komut satırı argümanı olarak iletilmiş olmalıdır.
echo "$1 user account being created."

# Kullanıcı olusturma.
sudo useradd -m "$1"

# Şifre komut satırı argümanı olarak geçilebilir.
# Kullanıcı için şifre ayarlanır.
sudo chpasswd <<< "$1":"$2"
```

## Snippet: Deleting a User Account in Linux
Description: A shell command that demonstrates how to delete a user account using the 'userdel' command with sudo privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/day19.md#2025-04-17_snippet_19
Language: bash

```bash
sudo userdel test_user
```