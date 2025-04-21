# Accessibility in Angular

**Summary:** This file covers topics related to "Accessibility in Angular". Key snippets include: Using ARIA attribute binding in Angular templates.

---

## Using ARIA attribute binding in Angular templates

**Description:** Demonstrates the proper syntax for binding to ARIA attributes in Angular templates using the attr. prefix, which is necessary because ARIA relies on HTML attributes rather than DOM properties.

```html
<!-- Use attr. when binding to an ARIA attribute -->
<button [attr.aria-label]="myActionLabel">…</button>
```

---