# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day30.md
Language: bash

## Snippet: Complete Bash Script for DevOps Environment Setup
Description: This Bash script automates the setup of a development environment by creating users, installing packages, configuring default shell settings, and creating project directories. It includes error handling, user feedback, and demonstrates common shell scripting patterns for system administration tasks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day30.md#2025-04-17_snippet_0
Language: bash

```bash
#!/bin/bash

#######################################
# DevOps Scenario - The company has just hired a new developer and 
# we need to get their system ready for them to start. 
#######################################

#######################################
# Setting up username variable
#######################################
echo "What is the new developer's name?"
read name
echo "Setting up development environment for $name"

#######################################
# Setting up username variable for the system
#######################################
username=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
echo "Creating system username: $username"
sleep 2

#######################################
# Checking if user exists
#######################################
if id "$username" &>/dev/null; then
    echo "User $username already exists!"
    exit 1
fi

#######################################
# Creating the user
#######################################
echo "Creating user: $username"
useradd -m -s /bin/bash "$username"
echo "Created user: $username"
sleep 2

#######################################
# Installing required packages
#######################################
echo "Installing development tools and packages..."
packages=("git" "vscode" "docker" "nodejs")

for package in "${packages[@]}"; do
    echo "Installing $package..."
    # This is where you would put your actual install commands
    # For example: apt-get install -y $package
    # We're simulating the installation for this exercise
    sleep 1
    echo "$package installed successfully!"
done

#######################################
# Configuring default shell settings
#######################################
echo "Configuring shell preferences..."

# Create .bashrc with some helpful aliases and settings
cat > /home/$username/.bashrc << EOF
# .bashrc for $name

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

# User specific environment
PATH=\$HOME/.local/bin:\$HOME/bin:\$PATH

# Aliases
alias ll='ls -la'
alias gh='history | grep'

# Git aliases
alias gs='git status'
alias gc='git commit'
alias gp='git pull'
alias gpush='git push'

# Docker aliases
alias dps='docker ps'
alias di='docker images'

# Welcome message
echo "Welcome to your development environment, $name!"
EOF

# Set correct ownership
chown $username:$username /home/$username/.bashrc

#######################################
# Creating project directories
#######################################
echo "Setting up project directories..."

mkdir -p /home/$username/projects
mkdir -p /home/$username/projects/personal
mkdir -p /home/$username/projects/work
mkdir -p /home/$username/projects/test

# Set correct ownership
chown -R $username:$username /home/$username/projects

#######################################
# Finishing up
#######################################
echo "============================================"
echo "Setup complete for $name!"
echo "Username: $username"
echo "Home directory: /home/$username"
echo "Project directories initialized"
echo "Development tools installed: ${packages[*]}"
echo "============================================"
echo "The system is ready for the new developer to start!"
```