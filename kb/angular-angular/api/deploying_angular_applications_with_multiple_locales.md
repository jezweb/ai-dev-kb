# Deploying Angular Applications with Multiple Locales

**Summary:** This file covers topics related to "Deploying Angular Applications with Multiple Locales". Key snippets include: Configuring Angular Workspace with i18n SubPath for Localization.

---

## Configuring Angular Workspace with i18n SubPath for Localization

**Description:** Example configuration in angular.json that sets up the subPath property for internationalization. This enables the CLI to adjust the base href for each localized version of the application.

```json
{
  "projects": {
    "angular.io-example": {
      "architect": {
        "build": {
          "options": {
            "localize": false,
            "i18nMissingTranslation": "warning"
          },
          "configurations": {
            "production": {
              "subPath": ""
            },
            "fr": {
              "localize": ["fr"]
            },
            "es": {
              "localize": ["es"]
            }
          }
        }
      }
    }
  }
}
```

---