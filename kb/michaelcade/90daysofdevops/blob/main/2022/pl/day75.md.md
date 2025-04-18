# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day75.md
Language: yaml

## Snippet: Super-Linter Implementation Workflow
Description: A workflow configuration that implements GitHub's Super-Linter for code quality checking. It runs on push events and uses the github/super-linter action to validate source code.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day75.md#2025-04-17_snippet_1
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

## Snippet: Basic GitHub Actions Workflow Example
Description: A basic example workflow that demonstrates the core components of GitHub Actions including events, jobs, runners, steps and actions. This workflow checks the bats version on push events.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day75.md#2025-04-17_snippet_0
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