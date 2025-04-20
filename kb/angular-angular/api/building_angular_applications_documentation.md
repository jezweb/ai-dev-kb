# Building Angular Applications Documentation

**Summary:** This file covers topics related to "Building Angular Applications Documentation". Key snippets include: Configuring CommonJS Dependencies in Angular JSON, Configuring Production Size Budgets in Angular.json.

---

## Configuring CommonJS Dependencies in Angular JSON

**Description:** This JSON snippet shows how to suppress warnings for CommonJS dependencies by adding them to the 'allowedCommonJsDependencies' array in the project's angular.json file. This example specifically allows the 'lodash' package.

```json
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
     "allowedCommonJsDependencies": [
        "lodash"
     ]
     …
   }
   …
},
```

---

## Configuring Production Size Budgets in Angular.json

**Description:** Example configuration showing how to set size budgets for production builds in angular.json. The snippet demonstrates setting initial bundle size thresholds with warning at 250kb and error at 500kb.

```json
{
  "configurations": {
    "production": {
      "budgets": [
        {
          "type": "initial",
          "maximumWarning": "250kb",
          "maximumError": "500kb"
        }
      ]
    }
  }
}
```

---