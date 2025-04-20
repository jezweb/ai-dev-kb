# Angular Material Toolbar Component Documentation

**Summary:** This file covers topics related to "Angular Material Toolbar Component Documentation". Key snippets include: Implementing Multiple Toolbar Rows with mat-toolbar-row in Angular Material, Positioning Toolbar Content with Flexbox in Angular Material, Styling Toolbar Content with CSS Flexbox.

---

## Implementing Multiple Toolbar Rows with mat-toolbar-row in Angular Material

**Description:** This snippet demonstrates how to create a toolbar with multiple rows using the `<mat-toolbar-row>` element inside a `<mat-toolbar>`. Content must be placed inside row elements when using this approach.

```html
<mat-toolbar-row>
  <span>First Row</span>
  <span class="example-spacer"></span>
  <mat-icon class="example-icon" aria-hidden="false" aria-label="Example user verified icon">verified_user</mat-icon>
</mat-toolbar-row>
<mat-toolbar-row>
  <span>Second Row</span>
  <span class="example-spacer"></span>
  <mat-icon class="example-icon" aria-hidden="false" aria-label="Example heart icon">favorite</mat-icon>
</mat-toolbar-row>
```

---

## Positioning Toolbar Content with Flexbox in Angular Material

**Description:** This HTML snippet shows how to position content within a toolbar using flexbox, demonstrating a common pattern of placing a title on the left with actions on the right.

```html
<mat-toolbar>
  <span>My Application</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
</mat-toolbar>
```

---

## Styling Toolbar Content with CSS Flexbox

**Description:** This CSS snippet provides the styling needed to position content within a toolbar using flexbox, with a spacer element that pushes content to opposite sides of the toolbar.

```css
.example-spacer {
  flex: 1 1 auto;
}
```

---