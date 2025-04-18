# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day09.md
Language: yaml

## Snippet: Configuring SonarCloud Properties for NodeJS Project
Description: This snippet shows the configuration for sonar-project.properties file that needs to be added to the root directory of the repository. It defines the project key, organization, and contains commented optional settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day09.md#2025-04-17_snippet_0
Language: yaml

```yaml
sonar.projectKey=prateekjaindev_nodejs-todo-app-demo
sonar.organization=prateekjaindev

# This is the name and version displayed in the SonarCloud UI.
#sonar.projectName=nodejs-todo-app-demo
#sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
#sonar.sources=.

# Encoding of the source code. Default is default system encoding
#sonar.sourceEncoding=UTF-8
```

## Snippet: GitHub Actions Workflow for SonarCloud Scanning
Description: This GitHub Actions workflow configuration runs SonarCloud analysis on code pushes to the main branch and pull requests. It uses the SonarSource/sonarcloud-github-action and requires GITHUB_TOKEN and SONAR_TOKEN secrets.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day09.md#2025-04-17_snippet_1
Language: yaml

```yaml
name: SonarScan
on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0  # Shallow clones should be disabled for a better relevancy of analysis
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```