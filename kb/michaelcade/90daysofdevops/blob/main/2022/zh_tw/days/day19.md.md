# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md
Language: bash

## Snippet: Using Variables in Bash Scripts
Description: Shows how to define and use variables in a bash script, including user input.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_1
Language: bash

```bash
challenge="90DaysOfDevOps"
echo "Enter your name"
read name
```

## Snippet: Implementing Conditionals in Bash Scripts
Description: Demonstrates the use of if-else conditionals in a bash script to check the progress of a challenge.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_2
Language: bash

```bash
#!/bin/bash
#  ___   ___  ____                   ___   __ ____              ___
# / _ \ / _ \|  _ \  __ _ _   _ ___ / _ \ / _|  _ \  _____   __/ _ \ _ __  ___
#| (_) | | | | | | |/ _` | | | / __| | | | |_| | | |/ _ \ \ / / | | | '_ \/ __|
# \__, | |_| | |_| | (_| | |_| \__ \ |_| |  _| |_| |  __/\ V /| |_| | |_) \__ \
#   /_/ \___/|____/ \__,_|\__, |___/\___/|_| |____/ \___| \_/  \___/| .__/|___/
#                         |___/                                     |_|
#
# This script is to demonstrate bash scripting!

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

## Snippet: Implementing Interactive User Input for Account Creation
Description: This snippet modifies the script to use interactive user input for username and password, improving security and user experience.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_7
Language: bash

```bash
#! /usr/bin/bash

echo "What is your intended username?"
read  username
echo "What is your password"
read  password

#A user can be passed in as a command line argument
echo "$username user account being created."

#A user is created with the name of command line argument
sudo useradd -m $username

#A password can be parsed in as a command line argument.
sudo chpasswd <<< $username:$password
```

## Snippet: Adding Password Setting Functionality to User Creation Script
Description: This snippet further enhances the script by adding the ability to set a password for the newly created user account using command-line arguments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_6
Language: bash

```bash
#! /usr/bin/bash

#A user can be passed in as a command line argument
echo "$1 user account being created."

#A user is created with the name of command line argument
sudo useradd -m "$1"

#A password can be parsed in as a command line argument.
sudo chpasswd <<< "$1":"$2"
```

## Snippet: Finalizing User Creation Script with Success Message
Description: This snippet adds a success message to the script and implements password input masking for improved security.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_8
Language: bash

```bash
#! /usr/bin/bash

echo "What is your intended username?"
read username
echo "What is your password"
read -s password

#A user can be passed in as a command line argument
echo "$username user account being created."

#A user is created with the name of command line argument
sudo useradd -m $username

#A password can be parsed in as a command line argument.
sudo chpasswd <<< $username:$password

echo "Account has been created"
```

## Snippet: Implementing User Creation in Bash Script
Description: This snippet expands the script to create a user account using the useradd command with the name provided as a command-line argument.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_5
Language: bash

```bash
#! /usr/bin/bash

#A user can be passed in as a command line argument
echo "$1 user account being created."

#A user is created with the name of command line argument
sudo useradd -m "$1"
```

## Snippet: Checking File Existence in Bash Scripts
Description: Shows how to use file conditions in a bash script to check if a file exists and is a regular file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_3
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

## Snippet: Creating a Basic Bash Script
Description: Demonstrates how to create a simple bash script that creates a directory, changes into it, and creates a file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_0
Language: bash

```bash
#!/usr/bin/bash

mkdir 90DaysOfDevOps
cd 90DaysOfDevOps
touch Day19
ls
```

## Snippet: Initializing Basic User Creation Script in Bash
Description: This snippet creates a basic shell script that echoes a command-line argument, representing the first step in creating a user account.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day19.md#2025-04-17_snippet_4
Language: bash

```bash
#! /usr/bin/bash

#A user can be passed in as a command line argument
echo "$1"
```