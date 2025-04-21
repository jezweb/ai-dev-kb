# Material 3 Custom Theme Schematic Documentation

**Summary:** This file covers topics related to "Material 3 Custom Theme Schematic Documentation". Key snippets include: Applying High Contrast Overrides with Media Queries in Sass.

---

## Applying High Contrast Overrides with Media Queries in Sass

**Description:** Example of how to apply high contrast theme overrides using media queries. This snippet shows how to use the generated high-contrast-overrides mixin with the prefers-contrast media feature.

```scss
@media (prefers-contrast: more) {
  @include my-theme.high-contrast-overrides(light);
}
```

---