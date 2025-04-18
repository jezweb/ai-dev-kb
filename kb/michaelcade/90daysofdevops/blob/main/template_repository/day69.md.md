# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day69.md
Language: yaml

## Snippet: Configuring GitHub Actions Workflow for README Update in YAML
Description: This YAML configuration defines a GitHub Actions workflow that triggers on push events to the main branch. It sets up a Python environment, installs dependencies, and runs a Python script to update the README.md file. The updated file is then committed and pushed back to the repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day69.md#2025-04-17_snippet_0
Language: yaml

```yaml
name: Update README

on:
  push:
    branches:
      - main
    paths-ignore:
      - README.md

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install PyGithub
      - name: Update README
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: python update_readme.py
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add README.md
          git commit -m "Update README" || echo "No changes to commit"
          git push
```