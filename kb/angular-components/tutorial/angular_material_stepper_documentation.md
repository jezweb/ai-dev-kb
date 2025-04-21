# Angular Material Stepper Documentation

**Summary:** This file covers topics related to "Angular Material Stepper Documentation". Key snippets include: Displaying Form Validation Errors in Angular Material Stepper, Implementing a Vertical Linear Stepper with Multiple Forms in Angular Material, Implementing a Linear Stepper with Single Form in Angular Material, Configuring Stepper Global Options for Error Display in Angular.

---

## Displaying Form Validation Errors in Angular Material Stepper

**Description:** Demonstrates how to show form validation errors in an Angular Material Stepper using mat-error within mat-form-field for accessibility support.

```html
<mat-error>
```

---

## Implementing a Vertical Linear Stepper with Multiple Forms in Angular Material

**Description:** Creates a vertical linear stepper where each step has its own separate form. This approach allows for independent form validation and submission for each step in the stepper workflow.

```html
<mat-stepper orientation="vertical" linear>
  <mat-step [stepControl]="formGroup1">
    <form [formGroup]="formGroup1">
      ...
    </form>
  </mat-step>
  <mat-step [stepControl]="formGroup2">
    <form [formGroup]="formGroup2">
      ...
    </form>
  </mat-step>
</mat-stepper>
```

---

## Implementing a Linear Stepper with Single Form in Angular Material

**Description:** Creates a linear stepper using a single form with FormArray where each step corresponds to a form group within the array. The stepper controls navigation between steps and validates each step before proceeding.

```html
<form [formGroup]="formGroup">
  <mat-stepper formArrayName="formArray" linear>
    <mat-step formGroupName="0" [stepControl]="formArray.get([0])">
      ...
      <div>
        <button matButton matStepperNext type="button">Next</button>
      </div>
    </mat-step>
    <mat-step formGroupName="1" [stepControl]="formArray.get([1])">
      ...
      <div>
        <button matButton matStepperPrevious type="button">Back</button>
        <button matButton matStepperNext type="button">Next</button>
      </div>
    </mat-step>
    ...
  </mat-stepper>
</form>
```

---

## Configuring Stepper Global Options for Error Display in Angular

**Description:** Sets up global configuration to show error messages in steppers. This enables error state display for all non-linear steppers in the application when steps contain invalid inputs.

```typescript
@NgModule({
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
```

---