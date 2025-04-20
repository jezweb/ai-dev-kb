# Reactive Forms in Angular

**Summary:** This file covers topics related to "Reactive Forms in Angular". Key snippets include: Implementing onSubmit Method in ProfileEditor Component, Injecting FormBuilder Service in Angular TypeScript, Displaying FormArray in Angular Template, Importing ReactiveFormsModule in Angular Component, Binding FormControl in Angular Template....

---

## Implementing onSubmit Method in ProfileEditor Component

**Description:** This TypeScript code defines the onSubmit() method in the ProfileEditor component, which logs the current value of the profileForm when submitted.

```typescript
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
```

---

## Injecting FormBuilder Service in Angular TypeScript

**Description:** This code demonstrates how to inject the FormBuilder service using the inject() function in an Angular component.

```typescript
private fb = inject(FormBuilder);
```

---

## Displaying FormArray in Angular Template

**Description:** HTML template code that uses formArrayName directive to bind the form array, with ngFor to iterate through controls and appropriate binding to each control.

```html
<div formArrayName="aliases">
  <h2>Aliases</h2>
  <button type="button" (click)="addAlias()">+ Add another alias</button>

  <div *ngFor="let alias of aliases.controls; let i=index">
    <!-- The repeated alias template -->
    <label for="alias-{{ i }}">Alias:</label>
    <input id="alias-{{ i }}" type="text" [formControlName]="i">
  </div>
</div>
```

---

## Importing ReactiveFormsModule in Angular Component

**Description:** Shows how to import the ReactiveFormsModule required for reactive forms functionality in an Angular component.

```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
```

---

## Binding FormControl in Angular Template

**Description:** Shows how to bind a FormControl to an input element in an Angular template using the formControl directive.

```html
<label for="name">Name: </label>
<input id="name" type="text" [formControl]="name">
```

---

## Importing Validators in Angular TypeScript

**Description:** This snippet shows how to import the Validators class from the @angular/forms package in an Angular component for form validation.

```typescript
import { Validators } from '@angular/forms';
```

---

## Creating Getter for FormArray Access in Angular

**Description:** Implementing a getter method to access the aliases FormArray from the parent form group, providing easier access to the form array control.

```typescript
get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}
```

---

## Comparing Manual Form Creation to FormBuilder in Angular TypeScript

**Description:** These snippets compare creating form controls manually versus using FormBuilder in an Angular component. They show two different approaches to achieve the same form structure.

```typescript
profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
});
```

```typescript
profileForm = this.fb.group({
  firstName: [''],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  })
});
```

---

## Generating Form Controls with FormBuilder in Angular TypeScript

**Description:** This snippet shows how to use the FormBuilder service to create form controls and form groups in an Angular component. It creates a profileForm with various fields including nested form groups.

```typescript
profileForm = this.fb.group({
  firstName: [''],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
});
```

---

## Generating Form Controls with FormBuilder in Angular TypeScript

**Description:** This snippet shows how to use the FormBuilder service to create form controls and form groups in an Angular component. It creates a profileForm with various fields including nested form groups.

```typescript
profileForm = this.fb.group({
  firstName: [''],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
});
```

---

## Creating FormGroup Instance in ProfileEditor Component

**Description:** This code creates a FormGroup instance called profileForm with two FormControl instances for firstName and lastName.

```typescript
profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
});
```

---

## Updating Form Model with patchValue in Angular TypeScript

**Description:** This snippet demonstrates how to use the patchValue() method to update specific parts of the form model in an Angular component. It updates the first name and street address for the user profile.

```typescript
updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}
```

---

## Displaying Form Status in Angular HTML Template

**Description:** This HTML snippet shows how to display the current status of the profileForm using interpolation in an Angular template.

```html
<p>Form Status: {{ profileForm.status }}</p>
```

---

## Creating Nested FormGroup in ProfileEditor Component

**Description:** This TypeScript code creates a nested FormGroup for address information within the main profileForm FormGroup.

```typescript
profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
});
```

---

## Associating FormGroup Model with View in ProfileEditor Template

**Description:** This HTML template binds the profileForm FormGroup to the form element and associates individual form controls with input elements.

```html
<form [formGroup]="profileForm">
  <label for="first-name">First Name: </label>
  <input id="first-name" type="text" formControlName="firstName">

  <label for="last-name">Last Name: </label>
  <input id="last-name" type="text" formControlName="lastName">
</form>
```

---

## Creating FormControl Instance in Angular

**Description:** Demonstrates creating a FormControl instance in an Angular component class to manage form input state.

```typescript
name = new FormControl('');
```

---

## Adding ngSubmit Event Listener to Form in ProfileEditor Template

**Description:** This HTML snippet adds an ngSubmit event listener to the form element, which calls the onSubmit() method when the form is submitted.

```html
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
```

---

## Displaying FormControl Value in Template

**Description:** Demonstrates how to display the current value of a FormControl using template interpolation.

```html
Value: {{ name.value }}
```

---

## Defining FormArray Control in Angular Component

**Description:** Creating a FormArray control named 'aliases' within a form group using FormBuilder. The array is initialized with a single control.

```typescript
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
  aliases: this.fb.array([
    this.fb.control('')
  ])
});
```

---

## Displaying Component in Angular Template

**Description:** Shows how to include the form component in a parent component's template.

```html
<app-name-editor></app-name-editor>
```

---

## Generating ProfileEditor Component in Angular CLI

**Description:** This command uses the Angular CLI to generate a new component called ProfileEditor.

```shell
ng generate component ProfileEditor
```

---

## Adding Required Validator to Form Control in Angular TypeScript

**Description:** This code demonstrates how to add a required validator to the firstName form control using the Validators.required method in an Angular component.

```typescript
firstName: ['', Validators.required],
```

---

## Updating Template for Nested FormGroup in ProfileEditor

**Description:** This HTML template shows how to structure the form inputs for a nested FormGroup, including the address fields.

```html
<div formGroupName="address">
  <h2>Address</h2>

  <label for="street">Street: </label>
  <input id="street" type="text" formControlName="street">

  <label for="city">City: </label>
  <input id="city" type="text" formControlName="city">

  <label for="state">State: </label>
  <input id="state" type="text" formControlName="state">

  <label for="zip">Zip Code: </label>
  <input id="zip" type="text" formControlName="zip">
</div>
```

---