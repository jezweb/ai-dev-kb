# Angular Material Theming Guide

**Summary:** This file covers topics related to "Angular Material Theming Guide". Key snippets include: Customizing Typography in Angular Material Theme, Implementing Basic Angular Material Theme with Sass, Adjusting Density in Angular Material Theme, Configuring Advanced Angular Material Theme with Color Map, Using Material Theme CSS Variables.

---

## Customizing Typography in Angular Material Theme

**Description:** This snippet shows how to customize typography settings in an Angular Material theme. It sets different font families for plain and brand text, and specifies custom font weights.

```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: mat.$violet-palette,
    typography: (
      plain-family: Roboto,
      brand-family: Open Sans,
      bold-weight: 900,
      medium-weight: 500,
      regular-weight: 300,
    ),
    density: 0,
  ));
}
```

---

## Implementing Basic Angular Material Theme with Sass

**Description:** This snippet shows how to create a basic theme file using Angular Material's mat.theme mixin. It applies a violet color palette, Roboto font, and standard density to the application's components.

```scss
@use '@angular/material' as mat;

html {
  color-scheme: light dark;
  @include mat.theme((
    color: mat.$violet-palette,
    typography: Roboto,
    density: 0
  ));
}
```

---

## Adjusting Density in Angular Material Theme

**Description:** This example demonstrates how to adjust the density setting in an Angular Material theme. It sets a density of -2, which reduces whitespace in component layouts.

```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: mat.$violet-palette,
    typography: Roboto,
    density: -2,
  ));
}
```

---

## Configuring Advanced Angular Material Theme with Color Map

**Description:** This example demonstrates how to create a more complex theme configuration using a color map. It sets different palettes for primary and tertiary colors, and explicitly sets the theme type to light.

```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: (
      primary: mat.$violet-palette,
      tertiary: mat.$orange-palette,
      theme-type: light,
    ),
    typography: Roboto,
    density: 0
  ));
}
```

---

## Using Material Theme CSS Variables

**Description:** Demonstrates how to use Material theme CSS variables for custom component styling.

```css
:host {
  background: var(--mat-sys-primary-container);
  color: var(--mat-sys-on-primary-container);
  border: 1px solid var(--mat-sys-outline-variant);
  font: var(--mat-sys-body-large);
}
```

---