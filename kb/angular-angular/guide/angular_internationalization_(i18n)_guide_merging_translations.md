# Angular Internationalization (i18n) Guide: Merging Translations

**Summary:** This file covers topics related to "Angular Internationalization (i18n) Guide: Merging Translations". Key snippets include: Configuration for Building Production French Version, Building Production Version for a Specific Locale, Enabling Localization for All Defined Locales in angular.json.

---

## Configuration for Building Production French Version

**Description:** Angular.json configuration that combines production settings with French localization using the 'configurations' object.

```json
"configurations": {
  "fr": {
    "localize": ["fr"]
  },
  "production": {
    "optimization": true,
    "outputHashing": "all",
    "sourceMap": false,
    "namedChunks": false,
    "extractLicenses": true,
    "vendorChunk": false,
    "buildOptimizer": true,
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "2mb",
        "maximumError": "5mb"
      }
    ]
  }
}
```

---

## Building Production Version for a Specific Locale

**Description:** Command to build a production version specifically for the French locale using configuration composition.

```bash
ng build --configuration=production,fr
```

---

## Enabling Localization for All Defined Locales in angular.json

**Description:** Configuration in angular.json that sets the 'localize' option to true, instructing the CLI to build versions for all locales defined in the build configuration.

```json
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "localize": true,
    "aot": true,
    "outputPath": "dist/my-project",
    "index": "src/index.html",
    "main": "src/main.ts",
    "polyfills": "src/polyfills.ts",
    "tsConfig": "tsconfig.app.json"
  }
}
```

---