# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day11.md
Language: yaml

## Snippet: Integrating OWASP Dependency Check with GitHub Actions Workflow
Description: This YAML configuration sets up a GitHub Actions workflow to run OWASP Dependency Check on every push to the main branch. It downloads the tool, scans the project, generates a report, and uploads it as an artifact.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day11.md#2025-04-17_snippet_0
Language: yaml

```yaml
name: Dependency-Check
on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  dependency-check:
    name: Dependency-Check
    runs-on: ubuntu-latest
    steps: 
      - name: Download OWASP Dependency Check
        run: |
          VERSION=$(curl -s https://jeremylong.github.io/DependencyCheck/current.txt)
          curl -sL "https://github.com/jeremylong/DependencyCheck/releases/download/v$VERSION/dependency-check-$VERSION-release.zip" --output dependency-check.zip
          unzip dependency-check.zip
      - name: Run Dependency Check
        run: |
          ./dependency-check/bin/dependency-check.sh --out report.html --scan .
          rm -rf dependency-check*

      - name: Upload Artifacts
        uses: actions/upload-artifact@v2
        with:
          name: artifacts
          path: report.html
```