# Angular Material Checkbox Documentation

**Summary:** This file covers topics related to "Angular Material Checkbox Documentation". Key snippets include: Configuring MatCheckbox Click Behavior in Angular.

---

## Configuring MatCheckbox Click Behavior in Angular

**Description:** Example showing how to customize the checkbox click behavior by providing MAT_CHECKBOX_DEFAULT_OPTIONS token. Sets the click action to 'noop' to prevent default toggling behavior.

```typescript
providers: [
  {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}
]
```

---