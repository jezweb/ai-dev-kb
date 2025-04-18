# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day57.md
Language: yaml

## Snippet: Configuring GitHub Actions Workflow for Infrastructure Testing
Description: This YAML snippet defines a GitHub Actions workflow for testing infrastructure code. It includes jobs for linting, validation, policy checks, security scanning, and functional testing using tools like Terraform, Bicep, Azure Policies, Snyk, and Pester.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day57.md#2025-04-17_snippet_0
Language: yaml

```yaml
name: Infrastructure CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run linter
        run: # Add linting commands here

  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate Terraform
        run: terraform validate
      - name: Validate Bicep
        uses: azure/arm-deploy@v1
        with:
          deploymentName: preflight
          template-file: ./main.bicep

  policy-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Azure Policy checks
        uses: microsoft/ps-rule@v1
        with:
          inputPath: './'
          outputFormat: NUnit3
          outputPath: ps-rule-results.xml

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Snyk Security Scan
        uses: snyk/actions/iac@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  pester-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Pester Tests
        shell: pwsh
        run: |
          Install-Module -Name Pester -Force
          Invoke-Pester -Path ./tests -OutputFile test-results.xml -OutputFormat NUnitXml

  deploy:
    needs: [lint, validate, policy-check, security-scan, pester-tests]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy Infrastructure
        run: # Add deployment commands here

  post-deploy-tests:
    needs: deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Post-Deployment Tests
        run: # Add post-deployment test commands here
```