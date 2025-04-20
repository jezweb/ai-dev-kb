# Angular Material 2 Theming Guide

**Summary:** This file covers topics related to "Angular Material 2 Theming Guide". Key snippets include: Customizing Strong Focus Indicators in Angular Material with SCSS, Applying Theme to All Components in SCSS, Creating a Complete Material Theme in SCSS.

---

## Customizing Strong Focus Indicators in Angular Material with SCSS

**Description:** This snippet shows how to customize the appearance of strong focus indicators by passing a configuration map to the strong-focus-indicators() mixin. It allows customizing properties like border-style, border-width, and border-radius, as well as using a custom color instead of a theme.

```scss
@use '@angular/material' as mat;

@include mat.strong-focus-indicators((
  border-style: dotted,
  border-width: 4px,
  border-radius: 2px,
));

$my-primary: mat.m2-define-palette(mat.$m2-indigo-palette, 500);
$my-accent: mat.m2-define-palette(mat.$m2-pink-palette, A200, A100, A400);

$my-theme: mat.m2-define-light-theme((
 color: (
   primary: $my-primary,
   accent: $my-accent,
 )
));

@include mat.all-component-themes($my-theme);
@include mat.strong-focus-indicators-theme(purple);
```

---

## Applying Theme to All Components in SCSS

**Description:** Example of applying a custom theme to all Angular Material components using the all-component-themes mixin.

```scss
@use '@angular/material' as mat;

$my-primary: mat.m2-define-palette(mat.$m2-indigo-palette, 500);
$my-accent: mat.m2-define-palette(mat.$m2-pink-palette, A200, A100, A400);

$my-theme: mat.m2-define-light-theme((
 color: (
   primary: $my-primary,
   accent: $my-accent,
 ),
 typography: mat.m2-define-typography-config(),
 density: 0,
));

@include mat.all-component-themes($my-theme);
```

---

## Creating a Complete Material Theme in SCSS

**Description:** Comprehensive example of creating a Material theme with custom palettes, typography, and density configurations.

```scss
@use '@angular/material' as mat;

$my-primary: mat.m2-define-palette(mat.$m2-indigo-palette, 500);
$my-accent: mat.m2-define-palette(mat.$m2-pink-palette, A200, A100, A400);

// The "warn" palette is optional and defaults to red if not specified.
$my-warn: mat.m2-define-palette(mat.$m2-red-palette);

$my-theme: mat.m2-define-light-theme((
 color: (
   primary: $my-primary,
   accent: $my-accent,
   warn: $my-warn,
 ),
 typography: mat.m2-define-typography-config(),
 density: 0,
));
```

---