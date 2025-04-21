# Separate Compilation Design Doc for Angular Ivy

**Summary:** This file covers topics related to "Separate Compilation Design Doc for Angular Ivy". Key snippets include: Component Metadata JSON for Ivy, Compiled Directive in JavaScript with Ivy.

---

## Component Metadata JSON for Ivy

**Description:** Shows the transformed metadata structure for the component in Ivy, which includes static fields for the component definition and selector information needed for module scope compilation.

```json
{
  "__symbolic": "module",
  "version": 4,
  "metadata": {
    "MyComponent": {
      "__symbolic": "class",
      "statics": {
        "ɵcmp": {},
        "ngSelector": "my-comp"
      }
    }
  }
}
```

---

## Compiled Directive in JavaScript with Ivy

**Description:** Shows how the example directive is transformed after Ivy compilation, where the decorator is replaced with a static field containing the directive definition.

```javascript
export class MyDirective {
  constructor() {
    this.dirId = 'some id';
  }
  static ɵdir = ɵɵdefineDirective({...});
}
```

---