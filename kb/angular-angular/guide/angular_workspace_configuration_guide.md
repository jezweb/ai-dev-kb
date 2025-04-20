# Angular Workspace Configuration Guide

**Summary:** This file covers topics related to "Angular Workspace Configuration Guide". Key snippets include: Configuring Optimization Options in Angular.json, Configuring Styles and Scripts in Angular CLI JSON, Configuring Production Build with Conditional Optimization in Angular.

---

## Configuring Optimization Options in Angular.json

**Description:** Example of configuring optimization settings for scripts, styles, and fonts in an Angular application. This configuration enables script optimization, customizes CSS minification and critical CSS inlining, and enables font optimization.

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "optimization": {
              "scripts": true,
              "styles": {
                "minify": true,
                "inlineCritical": true
              },
              "fonts": true
            }
          }
        }
      }
    }
  }
}
```

---

## Configuring Styles and Scripts in Angular CLI JSON

**Description:** Illustrates how to configure styles and scripts as separate bundles with custom names and injection settings in the Angular CLI configuration file.

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "styles": [
              {
                "input": "src/external-module/styles.scss",
                "inject": false,
                "bundleName": "external-module"
              }
            ],
            "scripts": [
              {
                "input": "src/external-module/main.js",
                "inject": false,
                "bundleName": "external-module"
              }
            ]
          }
        }
      }
    }
  }
}
```

---

## Configuring Production Build with Conditional Optimization in Angular

**Description:** Example showing how to configure build options with environment-specific configurations. This sets up optimization to be disabled by default but enabled specifically for production builds.

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "optimization": false
          },
          "configurations": {
            "production": {
              "optimization": true
            }
          }
        }
      }
    }
  }
}
```

---