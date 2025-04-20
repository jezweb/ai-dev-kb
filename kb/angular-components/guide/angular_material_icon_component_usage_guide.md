# Angular Material Icon Component Usage Guide

**Summary:** This file covers topics related to "Angular Material Icon Component Usage Guide". Key snippets include: Displaying a Font Icon with Ligature in Angular Material, Displaying an SVG Icon from a Named Icon Set in Angular Material, Implementing Accessible Icon with Hidden Text in Angular Material, Using Font Awesome Icon with CSS Classes in Angular Material, Configuring RTL-Mirrored Icon in Angular Material.

---

## Displaying a Font Icon with Ligature in Angular Material

**Description:** This snippet demonstrates how to use a ligature-based font icon with the mat-icon component. The text content of the component represents the icon to be displayed.

```html
<mat-icon>home</mat-icon>
```

---

## Displaying an SVG Icon from a Named Icon Set in Angular Material

**Description:** This snippet illustrates how to use an SVG icon that has been registered with MatIconRegistry. The svgIcon input is set to the name of the icon, optionally prefixed with a namespace.

```html
<mat-icon svgIcon="thumbs-up"></mat-icon>
```

---

## Implementing Accessible Icon with Hidden Text in Angular Material

**Description:** This example shows how to make an icon accessible by providing hidden text that describes the icon's meaning. The cdk-visually-hidden class hides the text visually while keeping it available for screen readers.

```html
<mat-icon aria-hidden="true">check</mat-icon>
<span class="cdk-visually-hidden">Task completed</span>
```

---

## Using Font Awesome Icon with CSS Classes in Angular Material

**Description:** This example shows how to use a Font Awesome icon by setting the fontSet and fontIcon inputs on the mat-icon component. The fontSet specifies the font's CSS class, while fontIcon indicates the specific icon class.

```html
<mat-icon fontSet="fa" fontIcon="fa-home"></mat-icon>
```

---

## Configuring RTL-Mirrored Icon in Angular Material

**Description:** This snippet demonstrates how to use the mat-icon-rtl-mirror CSS class to mirror an icon in RTL layouts. The icon will be displayed normally in LTR layouts and mirrored in RTL layouts.

```html
<mat-icon class="mat-icon-rtl-mirror" svgIcon="thumb-up"></mat-icon>
```

---