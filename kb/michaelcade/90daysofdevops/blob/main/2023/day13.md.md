# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day13.md
Language: yaml

## Snippet: Implementing Gitleaks GitHub Action for Secret Scanning in Repositories
Description: This GitHub Actions workflow configures Gitleaks to scan repositories for sensitive information like credentials, tokens, and secrets. It runs on pull requests and pushes, and will fail if any secrets are detected in the codebase.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day13.md#2025-04-17_snippet_0
Language: yaml

```yaml
name: gitleaks
on:
  pull_request:
  push:
jobs:
  scan:
    name: gitleaks
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Snippet: Setting Up Hadolint GitHub Action for Dockerfile Linting
Description: This GitHub Actions workflow implements Hadolint for linting Dockerfiles to check for common mistakes and provide improvement suggestions. It runs on pushes to the main branch and analyzes the Dockerfile for best practices compliance.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day13.md#2025-04-17_snippet_1
Language: yaml

```yaml
name: Lint Dockerfile
on:
  push:
    branches:
      - main
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2 
      - uses: hadolint/hadolint-action@v2.1.0
        with:
          dockerfile: Dockerfile
```