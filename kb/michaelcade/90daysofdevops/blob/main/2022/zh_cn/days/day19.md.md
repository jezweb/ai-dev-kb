# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md
Language: bash

## Snippet: File Existence Check Script
Description: A bash script that checks if a specific file exists and outputs appropriate messages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_3
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

## Snippet: Interactive User Creation Shell Script with User Input
Description: An improved shell script that prompts the user for username and password interactively rather than taking them as command-line arguments, providing a more user-friendly experience.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_7
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

## Snippet: Comprehensive DevOps Challenge Progress Script
Description: A complete bash script that includes variables, user input, and conditional statements to track progress in the 90DaysOfDevOps challenge.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_2
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

## Snippet: Basic Directory and File Operations Script
Description: A simple bash script that creates a directory, changes into it, and creates a new file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_0
Language: bash

```bash
mkdir 90DaysOfDevOps
cd 90DaysOfDevOps
touch Day19
ls
```

## Snippet: User Creation Shell Script with Password Setting
Description: A shell script that takes both username and password as command-line arguments, creates a user account, and sets the password using the chpasswd command. Note that this approach is not secure for production use.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_6
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

## Snippet: Variable Usage in Bash Script
Description: Demonstrates how to declare and use variables in a bash script
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_1
Language: bash

```bash
challenge="90DaysOfDevOps"
```

## Snippet: Basic User Creation Shell Script with Command-Line Arguments
Description: A basic shell script that takes a username as a command-line argument and displays it. This demonstrates the first step in creating a user account automation script.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_4
Language: bash

```bash
#! /usr/bin/bash

#A user can be passed in as a command line argument
echo "$1"
```

## Snippet: Interactive User Creation Shell Script with Password Masking
Description: The final version of the shell script that prompts for username and password interactively, masks the password input for security, and confirms successful account creation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_8
Language: bash

```bash
#! /usr/bin/bash

echo "What is your intended username?"
read  username
echo "What is your password"
read -s password

#A user can be passed in as a command line argument
echo "$username user account being created."

#A user is created with the name of command line argument
sudo useradd -m $username

#A password can be parsed in as a command line argument.
sudo chpasswd <<< $username:$password

echo "$username user created successfully!"
```

## Snippet: User Creation Shell Script with Account Setup
Description: An expanded shell script that takes a username as a command-line argument, displays a message, and creates a user account with a home directory using the useradd command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day19.md#2025-04-17_snippet_5
Language: bash

```bash
#! /usr/bin/bash

#A user can be passed in as a command line argument
echo "$1 user account being created."

#A user is created with the name of command line argument
sudo useradd -m "$1"
```