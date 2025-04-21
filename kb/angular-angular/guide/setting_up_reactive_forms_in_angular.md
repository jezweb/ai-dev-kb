# Setting Up Reactive Forms in Angular

**Summary:** This file covers topics related to "Setting Up Reactive Forms in Angular". Key snippets include: Importing ReactiveFormsModule in Angular Component, Creating FormGroup with FormControls in Angular, Handling Form Submission in Angular Component.

---

## Importing ReactiveFormsModule in Angular Component

**Description:** Import ReactiveFormsModule from @angular/forms and add it to the imports array of the component. This step is necessary to use reactive forms in the component.

```typescript
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <label>Name
        <input type="text" />
      </label>
      <label>Email
        <input type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
```

---

## Creating FormGroup with FormControls in Angular

**Description:** Create a FormGroup object with FormControls for name and email fields. This sets up the structure for the reactive form in the component class.

```typescript
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
...
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}
```

---

## Handling Form Submission in Angular Component

**Description:** Add a handleSubmit method to the component class to handle form submission. This method accesses form values and displays them in an alert.

```typescript
handleSubmit() {
  alert(
    this.profileForm.value.name + ' | ' + this.profileForm.value.email
  );
}
```

---