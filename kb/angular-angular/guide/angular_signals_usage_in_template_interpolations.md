# Angular Signals Usage in Template Interpolations

**Summary:** This file covers topics related to "Angular Signals Usage in Template Interpolations". Key snippets include: Disabling the interpolatedSignalNotInvoked Diagnostic in tsconfig.json.

---

## Disabling the interpolatedSignalNotInvoked Diagnostic in tsconfig.json

**Description:** This configuration example shows how to disable the 'interpolatedSignalNotInvoked' diagnostic in the project's tsconfig.json file when it cannot be avoided.

```json
{
  "angularCompilerOptions": {
    "extendedDiagnostics": {
      "checks": {
        "interpolatedSignalNotInvoked": "suppress"
      }
    }
  }
}
```

---