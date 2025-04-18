# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day19.md
Language: bash

## Snippet: Adding Variables to a Bash Script
Description: Example of defining and using variables in a bash script to make the code more flexible and reusable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day19.md#2025-04-17_snippet_1
Language: bash

```bash
challenge="90DaysOfDevOps"
```

## Snippet: Creating and Executing a Basic Bash Script in Linux
Description: A simple bash script that creates a directory, changes into it, creates a file, and lists the contents.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day19.md#2025-04-17_snippet_0
Language: bash

```bash
mkdir 90DaysOfDevOps
cd 90DaysOfDevOps
touch Day19
ls
```

## Snippet: Comprehensive DevOps Challenge Tracking Script
Description: A more complex bash script that includes ASCII art header, variable definitions, user input collection, and conditional logic to give feedback based on days completed.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day19.md#2025-04-17_snippet_2
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

## Snippet: Creating Basic User Account Script in Bash
Description: This script creates a user account based on command-line arguments. It demonstrates how to add a user, set a password, and display confirmation messages.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day19.md#2025-04-17_snippet_4
Language: bash

```bash
#! /usr/bin/bash

#A user can be passed in as a command line argument
echo "$1 user account being created."

#A user is created with the name of the command line argument
sudo useradd -m "$1"

#A password can be parsed as a command line argument.
sudo chpasswd <<< "$1":"$2"
```

## Snippet: Interactive User Account Creation Script in Bash
Description: This enhanced script prompts for username and password interactively. It creates a user account, sets the password, and provides feedback on successful creation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day19.md#2025-04-17_snippet_5
Language: bash

```bash
#! /usr/bin/bash

echo "What is your intended username?"
read  username
echo "What is your password"
read -s password

#A user can be passed in as a command line argument
echo "$username user account being created."

#A user is created with the name of the command line argument
sudo useradd -m $username

#A password can be parsed as a command line argument.
sudo chpasswd <<< $username:$password

echo "Account has been created"
```

## Snippet: File Existence Checking in Bash
Description: A script that demonstrates file condition testing in bash, checking if a specified file exists and providing appropriate feedback.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day19.md#2025-04-17_snippet_3
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