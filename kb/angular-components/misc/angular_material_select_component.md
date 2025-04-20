# Angular Material Select Component

**Summary:** This file covers topics related to "Angular Material Select Component". Key snippets include: Handling Multiple Selection in Angular Material Select, Importing MatInputModule for Native Select in Angular.

---

## Handling Multiple Selection in Angular Material Select

**Description:** Demonstrates how to use the multiple attribute with mat-select to enable multiple selection mode.

```HTML
@if (isMultiple) {
  <mat-select multiple>
    ...
  </mat-select>
} @else {
  <mat-select>
    ...
  </mat-select>
}
```

---

## Importing MatInputModule for Native Select in Angular

**Description:** Shows how to import MatInputModule and use the matNativeControl attribute for native select elements within mat-form-field.

```TypeScript
@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
```

---