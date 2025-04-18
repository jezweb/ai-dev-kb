# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day75.md
Language: yaml

## Snippet: Basic GitHub Actions Workflow for Super-Linter
Description: A YAML configuration for a GitHub Actions workflow that uses the Super-Linter action to lint code in a repository. It runs on push events and uses the ubuntu-latest runner.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day75.md#2025-04-17_snippet_0
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