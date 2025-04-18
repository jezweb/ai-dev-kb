# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day75.md
Language: yaml

## Snippet: Basic GitHub Actions Workflow Structure
Description: Demonstrates the basic structure of a GitHub Actions workflow file including events, jobs, runners, steps, and actions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day75.md#2025-04-17_snippet_0
Language: yaml

```yaml
name: 90DaysOfDevOps
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

## Snippet: Super-Linter Workflow Implementation
Description: A GitHub Actions workflow that implements the github/super-linter to perform code linting across multiple languages. Includes automatic token authentication and runs on code push.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day75.md#2025-04-17_snippet_1
Language: yaml

```yaml
name: Super-Linter

on: push

jobs:
  super-lint:
    name: Lint code base
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```