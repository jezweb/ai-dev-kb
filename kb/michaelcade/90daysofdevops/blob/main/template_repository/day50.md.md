# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day50.md
Language: yaml

## Snippet: Creating a Basic GitHub Actions CI/CD Workflow for a JavaScript Application
Description: A GitHub Actions workflow configuration that demonstrates a basic CI/CD pipeline. The workflow is triggered on push to the main branch, checks out the code, sets up Node.js, installs dependencies, runs tests, and deploys to a production environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day50.md#2025-04-17_snippet_0
Language: yaml

```yaml
name: Node.js CI/CD

on:
  push:
    branches: [ main ]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Deploy to production
      run: |
        # Commands to deploy to your production environment
        echo "Deploying to production..."
```