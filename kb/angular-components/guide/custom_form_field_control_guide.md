# Custom Form Field Control Guide

**Summary:** This file covers topics related to "Custom Form Field Control Guide". Key snippets include: Implementing Error State for Custom Angular Form Field Control, Implementing Disabled State for Custom Angular Form Field Control, Using Custom Angular Form Field Control in Template, Registering Component as MatFormFieldControl, Implementing setDescribedByIds for Custom Angular Form Field Control....

---

## Implementing Error State for Custom Angular Form Field Control

**Description:** This snippet demonstrates how to implement the error state for a custom form field control. It includes a simple getter for the error state and a more complex implementation that handles parent form submissions and updates the error state on every change detection cycle.

```typescript
get errorState(): boolean {
  return this.parts.invalid && this.touched;
}
```

```typescript
/** Whether the component is in an error state. */
errorState: boolean = false;

constructor(
  ...,
  @Optional() private _parentForm: NgForm,
  @Optional() private _parentFormGroup: FormGroupDirective
) {
...
}

ngDoCheck() {
  if (this.ngControl) {
    this.updateErrorState();
  }
}

private updateErrorState() {
  const parentSubmitted = this._parentFormGroup?.submitted || this._parentForm?.submitted;
  const touchedOrParentSubmitted = this.touched || parentSubmitted;

  const newState = (this.ngControl?.invalid || this.parts.invalid) && touchedOrParentSubmitted;

  if (this.errorState !== newState) {
    this.errorState = newState;
    this.stateChanges.next(); // Notify listeners of state changes.
  }
}
```

---

## Implementing Disabled State for Custom Angular Form Field Control

**Description:** This snippet shows how to implement the disabled state for a custom form field control. It uses a getter and setter to handle the disabled property, coercing the input to a boolean and updating the form parts accordingly.

```typescript
@Input()
get disabled(): boolean { return this._disabled; }
set disabled(value: BooleanInput) {
  this._disabled = coerceBooleanProperty(value);
  this._disabled ? this.parts.disable() : this.parts.enable();
  this.stateChanges.next();
}
private _disabled = false;
```

---

## Using Custom Angular Form Field Control in Template

**Description:** These snippets show how to use the custom form field control (example-tel-input) within a mat-form-field in an Angular template, including additional features like placeholders, icons, and hints.

```html
<mat-form-field>
  <example-tel-input></example-tel-input>
</mat-form-field>
```

```html
<mat-form-field>
  <example-tel-input placeholder="Phone number" required></example-tel-input>
  <mat-icon matPrefix>phone</mat-icon>
  <mat-hint>Include area code</mat-hint>
</mat-form-field>
```

---

## Registering Component as MatFormFieldControl

**Description:** Implementation showing how to register the custom input component as a MatFormFieldControl provider.

```typescript
@Component({
  ...
  providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],
})
export class MyTelInput implements MatFormFieldControl<MyTel> {
  ...
}
```

---

## Implementing setDescribedByIds for Custom Angular Form Field Control

**Description:** This snippet demonstrates how to implement the setDescribedByIds method required by MatFormFieldControl. It updates the aria-describedby attribute of the control element with the provided ids.

```typescript
@Input('aria-describedby') userAriaDescribedBy: string;

setDescribedByIds(ids: string[]) {
  const controlElement = this._elementRef.nativeElement
    .querySelector('.example-tel-input-container')!;
  controlElement.setAttribute('aria-describedby', ids.join(' '));
}
```

---

## Implementing Basic Phone Input Component in TypeScript

**Description:** Initial implementation of a phone number input component that splits the number into area code, exchange, and subscriber parts using separate inputs managed by FormGroup.

```typescript
class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}

@Component({
  selector: 'example-tel-input',
  template: `
    <div role="group" [formGroup]="parts">
      <input class="area" formControlName="area" maxlength="3">
      <span>&ndash;</span>
      <input class="exchange" formControlName="exchange" maxlength="3">
      <span>&ndash;</span>
      <input class="subscriber" formControlName="subscriber" maxlength="4">
    </div>
  `,
  styles: [`
    div {
      display: flex;
    }
    input {
      border: none;
      background: none;
      padding: 0;
      outline: none;
      font: inherit;
      text-align: center;
      color: currentColor;
    }
  `],
})
export class MyTelInput {
  parts: FormGroup;

  @Input()
  get value(): MyTel | null {
    let n = this.parts.value;
    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});
  }

  constructor(fb: FormBuilder) {
    this.parts =  fb.group({
      'area': '',
      'exchange': '',
      'subscriber': '',
    });
  }
}
```

---