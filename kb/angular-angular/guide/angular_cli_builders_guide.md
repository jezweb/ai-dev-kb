# Angular CLI Builders Guide

**Summary:** This file covers topics related to "Angular CLI Builders Guide". Key snippets include: Configuring Angular Builder Target in angular.json.

---

## Configuring Angular Builder Target in angular.json

**Description:** Example of configuring a builder target in angular.json file with build configurations for production and default options.

```json
"myApp": {
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/myApp",
        "index": "src/index.html"
      },
      "configurations": {
        "production": {
          "fileReplacements": [
            {
              "replace": "src/environments/environment.ts",
              "with": "src/environments/environment.prod.ts"
            }
          ],
          "optimization": true,
          "outputHashing": "all"
        }
      }
    }
  }
}
```

---