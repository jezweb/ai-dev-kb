# Validating Form Input in Angular

**Summary:** This file covers topics related to "Validating Form Input in Angular". Key snippets include: Implementing Reactive Form Validation in Angular TypeScript, Implementing Custom Validator Directive in Angular TypeScript, Implementing Template-Driven Form Validation in Angular HTML, Adding a Cross-Field Validator to a FormGroup in Angular, Implementing a Cross-Field Validator Function in Angular....

---

## Implementing Reactive Form Validation in Angular TypeScript

**Description:** This code snippet shows how to set up validation for a reactive form in the component class. It demonstrates the use of built-in validators and a custom validator function within the FormGroup configuration.

```TypeScript
this.actorForm = new FormGroup({
  name: new FormControl(this.actor.name, [
    Validators.required,
    Validators.minLength(4),
    forbiddenNameValidator(/bob/i)
  ]),
  power: new FormControl(this.actor.power, Validators.required)
});
```

---

## Implementing Custom Validator Directive in Angular TypeScript

**Description:** This code defines a custom validator directive that can be used in template-driven forms. It wraps the forbiddenNameValidator function and integrates with Angular's form validation system.

```TypeScript
@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                               : null;
  }
}
```

---

## Implementing Template-Driven Form Validation in Angular HTML

**Description:** This snippet demonstrates how to add validation to a template-driven form using HTML attributes and Angular directives. It includes examples of built-in validators and custom validators, along with error message display logic.

```HTML
<input id="name" name="name" class="form-control"
       required minlength="4" appForbiddenName="bob"
       [(ngModel)]="actor.name" #name="ngModel">

<div *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert">

  <div *ngIf="name.errors?.['required']">
    Name is required.
  </div>
  <div *ngIf="name.errors?.['minlength']">
    Name must be at least 4 characters long.
  </div>
  <div *ngIf="name.errors?.['forbiddenName']">
    Name cannot be Bob.
  </div>

</div>
```

---

## Adding a Cross-Field Validator to a FormGroup in Angular

**Description:** Demonstrates how to add a cross-field validator to a FormGroup by passing it as the second argument when creating the form group, enabling validation across multiple form controls.

```javascript
const actorForm = new FormGroup({
  'name': new FormControl(),
  'role': new FormControl(),
  'skill': new FormControl()
}, { validators: unambiguousRoleValidator });
```

---

## Implementing a Cross-Field Validator Function in Angular

**Description:** Creates a custom validator function that compares the values of name and role fields to ensure they don't match, returning validation errors when appropriate.

```typescript
export const unambiguousRoleValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const actorName = control.get('name');
  const actorRole = control.get('role');

  return actorName && actorRole && actorName.value === actorRole.value
    ? { ambiguousRole: true }
    : null;
};
```

---

## Implementing an Asynchronous Validator in Angular

**Description:** Creates a custom async validator that checks if an actor role is already taken by making an asynchronous service call, implementing the AsyncValidator interface.

```typescript
@Injectable({ providedIn: 'root' })
export class UniqueRoleValidator implements AsyncValidator {
  constructor(private actorsService: ActorsService) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.actorsService.isRoleTaken(control.value).pipe(
      map(isTaken => (isTaken ? { uniqueRole: true } : null)),
      catchError(() => of(null))
    );
  }
}
```

---

## Creating a Cross-Validation Directive for Template-Driven Forms

**Description:** Implements a directive that wraps the cross-field validator function for use in template-driven forms, providing it to Angular's NG_VALIDATORS token.

```typescript
@Directive({
  selector: '[appUnambiguousRole]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: UnambiguousRoleValidatorDirective, multi: true }
  ]
})
export class UnambiguousRoleValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return unambiguousRoleValidator(control);
  }
}
```

---

## UpdateOn Option in Template-Driven Forms - HTML

**Description:** Shows how to configure the updateOn option in template-driven forms to optimize async validator performance.

```html
<input [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}">
```

---

## Applying Async Validator to FormControl - TypeScript

**Description:** Demonstrates how to apply an async validator to a FormControl in reactive forms by passing it to the asyncValidators option.

```typescript
const roleControl = new FormControl('', {
  asyncValidators: this.roleValidator.validate.bind(this.roleValidator)
});
```

---