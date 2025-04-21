# Angular Template Whitespace Handling Guide

**Summary:** This file covers topics related to "Angular Template Whitespace Handling Guide". Key snippets include: Preserving Whitespace in Angular Component, Multiple Whitespace Example in Template.

---

## Preserving Whitespace in Angular Component

**Description:** Example of using preserveWhitespaces option in Component decorator to maintain whitespace in templates.

```angular-ts
@Component({
  /* ... */,
  preserveWhitespaces: true,
  template: `
    <p>Hello         world</p>
  `
})
```

---

## Multiple Whitespace Example in Template

**Description:** Shows how multiple consecutive spaces appear in the template source.

```angular-html
<!-- What it looks like in the template -->
<p>Hello         world</p>
```

---