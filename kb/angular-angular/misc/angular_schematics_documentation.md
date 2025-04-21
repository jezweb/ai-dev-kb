# Angular Schematics Documentation

**Summary:** This file covers topics related to "Angular Schematics Documentation". Key snippets include: Basic Schema Definition for Schematic Options.

---

## Basic Schema Definition for Schematic Options

**Description:** Defines a JSON schema for a Hello World schematic with name and useColor options. The schema includes type definitions and default values for the options.

```json
{
    "properties": {
        "name": {
            "type": "string",
            "minLength": 1,
            "default": "world"
        },
        "useColor": {
            "type": "boolean"
        }
    }
}
```

---