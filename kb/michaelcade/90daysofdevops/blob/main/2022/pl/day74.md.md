# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day74.md
Language: multiple

## Snippet: Dockerfile and HTML Source Code Structure
Description: Repository structure showing Dockerfile and index.html placement for the Jenkins pipeline build process
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day74.md#2025-04-17_snippet_0
Language: text

```text
Jenkins-HelloWorld/
  |- Dockerfile
  |- index.html
```

## Snippet: HTML Content Update Example
Description: Sample update to the index.html file demonstrating repository changes that trigger pipeline builds
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day74.md#2025-04-17_snippet_2
Language: html

```html
<html>
<body>
<h1>Welcome to 90DaysOfDevOps - v2</h1>
</body>
</html>
```

## Snippet: Jenkins Pipeline SCM Configuration
Description: Jenkins pipeline configuration showing the repository URL and SCM polling setup
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day74.md#2025-04-17_snippet_1
Language: text

```text
Repository URL: https://github.com/MichaelCade/Jenkins-HelloWorld.git
Poll SCM: * * * * *
```