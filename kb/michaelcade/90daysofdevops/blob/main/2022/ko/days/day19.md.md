# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md
Language: bash

## Snippet: Creating a Basic Bash Script in Linux
Description: A simple bash script that creates a directory, navigates into it, creates a file, and lists the contents. This demonstrates the basics of bash scripting execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md#2025-04-17_snippet_0
Language: bash

```bash
mkdir 90DaysOfDevOps
cd 90DaysOfDevOps
touch Day19
ls
```

## Snippet: User Creation Script with Command Line Arguments
Description: A bash script that creates a new user with a password based on command line arguments, demonstrating practical automation for system administration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md#2025-04-17_snippet_5
Language: bash

```bash
#! /usr/bin/bash

# 사용자 이름이 커맨드 라인 인수로 전달될 수 있습니다.
echo "$1 user account being created."

# 커맨드 라인 인수의 이름으로 사용자가 생성됩니다.
sudo useradd -m "$1"

# password가 커맨드 라인 인수로 전달될 수 있습니다.
sudo chpasswd <<< "$1":"$2"
```

## Snippet: Conditional Logic in Bash with Challenge Progress Check
Description: A complete bash script that welcomes users to the 90DaysOfDevOps challenge, collects information about their progress, and provides feedback based on conditional logic.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md#2025-04-17_snippet_3
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
# 이 스크립트는 bash 스크립팅을 시연하기 위한 것입니다!

# 정의할 변수

ChallengeName=#90DaysOfDevOps
TotalDays=90

# 사용자 입력

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

## Snippet: User Input Collection in Bash Scripts
Description: Code snippet showing how to prompt for and collect user input to use as variables in a bash script.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md#2025-04-17_snippet_2
Language: bash

```bash
echo "Enter your name"
read name
```

## Snippet: Interactive User Creation Script with Input Prompts
Description: An enhanced version of the user creation script that prompts for username and password interactively rather than using command line arguments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md#2025-04-17_snippet_6
Language: bash

```bash
#! /usr/bin/bash

echo "What is your intended username?"
read  username
echo "What is your password"
read  password

# 사용자 이름이 커맨드 라인 인수로 전달될 수 있습니다.
echo "$username user account being created."

# 커맨드 라인 인수의 이름으로 사용자가 생성됩니다.
sudo useradd -m $username

# password가 커맨드 라인 인수로 전달될 수 있습니다.
sudo chpasswd <<< $username:$password
```

## Snippet: Using Variables in Bash Scripts
Description: A bash script demonstrating how to define and use variables to store values that can be referenced throughout the script.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md#2025-04-17_snippet_1
Language: bash

```bash
challenge="90DaysOfDevOps"
```

## Snippet: File Existence Check in Bash
Description: A script that checks if a specific file exists in the directory using bash file condition tests.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day19.md#2025-04-17_snippet_4
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