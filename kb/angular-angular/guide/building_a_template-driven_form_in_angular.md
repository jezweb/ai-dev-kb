# Building a Template-Driven Form in Angular

**Summary:** This file covers topics related to "Building a Template-Driven Form in Angular". Key snippets include: Toggling Form Visibility in Angular Template, Adding New Actor Method in Angular Component, Implementing Conditional Error Messages in Angular Forms, Using Template Reference Variables with NgForm in Angular, Binding Input Control to Name Property with ngModel....

---

## Toggling Form Visibility in Angular Template

**Description:** This HTML snippet demonstrates how to hide the form when it's submitted and show a different view instead.

```HTML
<div [hidden]="submitted">
  <!-- Form content here -->
</div>
```

---

## Adding New Actor Method in Angular Component

**Description:** This snippet shows the implementation of the newActor() method in the ActorFormComponent. It creates a new Actor instance with default values.

```TypeScript
newActor() {
  this.model = new Actor(42, '', '');
}
```

---

## Implementing Conditional Error Messages in Angular Forms

**Description:** Using template reference variables with ngModel to access control state and conditionally display validation error messages based on control states (valid, pristine, etc.).

```html
<div [hidden]="name.valid || name.pristine"
     class="alert alert-danger">
</div>
```

---

## Using Template Reference Variables with NgForm in Angular

**Description:** Setting up a template reference variable (#actorForm) to access the NgForm directive instance that governs the form, enabling tracking of overall form status.

```html
<form #actorForm="ngForm">
</form>
```

---

## Binding Input Control to Name Property with ngModel

**Description:** This snippet shows how to bind an input form control to the name property in the data model using ngModel directive with two-way data binding syntax.

```html
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name" required [(ngModel)]="model.name" name="name">
  <!-- TODO: remove this: {{model.name}} -->
</div>
```

---

## Complete Input Field with Validation Error Message in Angular

**Description:** Implementation of an input field with two-way data binding and conditional validation error message that shows only when the field is invalid and not pristine.

```html
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name"
         required
         [(ngModel)]="model.name" name="name"
         #name="ngModel">

  <div [hidden]="name.valid || name.pristine"
       class="alert alert-danger">
    Name is required
  </div>
</div>
```

---

## Importing Angular FormsModule

**Description:** This snippet shows the import statements needed to enable Angular's Forms feature by importing the FormsModule, which provides directives like NgModel.

```typescript
import { Component } from '@angular/core';

import { Actor } from '../actor';
```

---

## Implementing Two-Way Data Binding with ngModel in Angular Forms

**Description:** Setting up two-way data binding on form input elements using [(ngModel)] with the required name attribute to register each control with NgForm.

```html
<form #actorForm="ngForm">
  {{model | json}}
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name"
           required
           [(ngModel)]="model.name" name="name">
  </div>

  <div class="form-group">
    <label for="studio">Studio</label>
    <input type="text" class="form-control" id="studio"
           [(ngModel)]="model.studio" name="studio">
  </div>

  <div class="form-group">
    <label for="skill">Skill</label>
    <select class="form-control" id="skill"
            required
            [(ngModel)]="model.skill" name="skill">
      <option *ngFor="let pow of skills" [value]="pow">{{pow}}</option>
    </select>
  </div>
</form>
```

---

## Binding Form Submission in Angular Template

**Description:** This HTML snippet demonstrates how to bind the form's ngSubmit event to the onSubmit() method of the component.

```HTML
<form (ngSubmit)="onSubmit()" #actorForm="ngForm">
```

---

## Disabling Submit Button Based on Form Validity in Angular

**Description:** This HTML snippet shows how to disable the submit button when the form is invalid by binding to the form's validity state.

```HTML
<button type="submit" class="btn btn-primary" [disabled]="!actorForm.form.valid">Submit</button>
```

---

## Resetting Form on New Actor Creation in Angular Template

**Description:** This HTML snippet shows how to reset the form when creating a new actor, clearing all form fields and restoring the pristine state.

```HTML
<button type="button" class="btn btn-default" (click)="newActor(); actorForm.reset()">New Actor</button>
```

---

## Defining Actor Data Model Class in TypeScript

**Description:** The Actor class defines the data model that will be reflected in the form, including properties for name, studio, and skill.

```typescript
export class Actor {

  constructor(
    public id: number,
    public name: string,
    public studio: string,
    public skill: string
  ) {  }

}
```

---

## Implementing Skill Selection Dropdown with NgForOf

**Description:** This template code creates a dropdown selection element for skills using Angular's NgForOf directive to iterate over available skills.

```html
<div class="form-group">
  <label for="skill">Skill</label>
  <select class="form-control" id="skill" required [(ngModel)]="model.skill" name="skill">
    <option *ngFor="let skill of skills" [value]="skill">{{skill}}</option>
  </select>
</div>
```

---