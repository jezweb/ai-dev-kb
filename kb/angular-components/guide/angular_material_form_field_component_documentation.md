# Angular Material Form Field Component Documentation

**Summary:** This file covers topics related to "Angular Material Form Field Component Documentation". Key snippets include: Configuring Default Form Field Appearance in Angular, Configuring Default Floating Label Behavior in Angular Form Fields.

---

## Configuring Default Form Field Appearance in Angular

**Description:** This snippet demonstrates how to configure the default appearance for all mat-form-field components in an Angular application using a global provider. It sets the default appearance to 'outline' instead of the default 'fill'.

```typescript
@NgModule({
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
```

---

## Configuring Default Floating Label Behavior in Angular Form Fields

**Description:** This snippet shows how to globally configure the floating label behavior for all mat-form-field components in an Angular application. It sets the floatLabel option to 'always' so labels will always float above the input field regardless of content.

```typescript
@NgModule({
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ]
})
```

---