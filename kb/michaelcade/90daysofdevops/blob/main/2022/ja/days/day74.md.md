# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day74.md
Language: text

## Snippet: GitHub Repository Structure Example
Description: Shows the basic structure of the GitHub repository containing Dockerfile and index.html files used in the Jenkins pipeline.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day74.md#2025-04-17_snippet_0
Language: text

```text
Jenkins-HelloWorld/
  ├── Dockerfile
  ├── index.html
  └── Jenkinsfile
```

## Snippet: Poll SCM Configuration
Description: Jenkins SCM polling configuration to check for repository changes every minute using cron syntax.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day74.md#2025-04-17_snippet_1
Language: text

```text
* * * * *
```

## Snippet: Repository URL Configuration
Description: Git repository URL used in the Jenkins pipeline configuration for source code management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day74.md#2025-04-17_snippet_2
Language: text

```text
https://github.com/MichaelCade/Jenkins-HelloWorld.git
```