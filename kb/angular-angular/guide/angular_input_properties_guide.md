# Angular Input Properties Guide

**Summary:** This file covers topics related to "Angular Input Properties Guide". Key snippets include: Input Alias Usage in Template, Basic Input Property Declaration in Angular, Basic Input Binding in Angular Template, Input Property with Built-in Transforms, Input with Getter and Setter in Angular....

---

## Input Alias Usage in Template

**Description:** Shows how to use an aliased input name in an Angular template.

```angular-html
<custom-slider [sliderValue]="50" />
```

---

## Basic Input Property Declaration in Angular

**Description:** Shows how to declare a basic input property in an Angular component using the input() function with a default value.

```typescript
import {Component, input} from '@angular/core';

@Component({/*...*/})
export class CustomSlider {
  // Declare an input named 'value' with a default value of zero.
  value = input(0);
}
```

---

## Basic Input Binding in Angular Template

**Description:** Shows how to bind a value to a component input in an Angular template.

```angular-html
<custom-slider [value]="50" />
```

---

## Input Property with Built-in Transforms

**Description:** Shows usage of Angular's built-in transform functions for boolean and number inputs.

```typescript
import {Component, input, booleanAttribute, numberAttribute} from '@angular/core';

@Component({/*...*/})
export class CustomSlider {
  disabled = input(false, {transform: booleanAttribute}); 
  value = input(0, {transform: numberAttribute}); 
}
```

---

## Input with Getter and Setter in Angular

**Description:** Demonstrates implementing an input property using getter and setter methods for custom value handling.

```typescript
export class CustomSlider {
  @Input()
  get value(): number {
    return this.internalValue;
  }

set value(newValue: number) { this.internalValue = newValue; }

private internalValue = 0; }
```

---

## Using Input Property in Angular Template

**Description:** Demonstrates how to bind a value to an input property in an Angular template.

```angular-html
<custom-slider [value]="50" />
```

---

## Required Input Property Declaration

**Description:** Shows how to declare a required input property using input.required.

```typescript
@Component({/*...*/})
export class CustomSlider {
  // Declare a required input named value. Returns an `InputSignal<number>`.
  value = input.required<number>();
}
```

---

## Computed Values from Input Properties

**Description:** Demonstrates how to create computed values based on input properties using signals.

```typescript
import {Component, input} from '@angular/core';

@Component({/*...*/})
export class CustomSlider {
  // Declare an input named 'value' with a default value of zero. 
  value = input(0);

  // Create a computed expression that reads the value input
  label = computed(() => `The slider's value is ${this.value()}`); 
}
```

---

## Input Transform Function in Angular

**Description:** Shows how to implement an input transform function to modify input values before they're set.

```typescript
@Component({
  selector: 'custom-slider',
  ...
})
export class CustomSlider {
  @Input({transform: trimString}) label = '';
}

function trimString(value: string | undefined) { return value?.trim() ?? ''; }
```

---

## Input Property with Transform Function

**Description:** Example of using a transform function to modify input values before they are set.

```typescript
@Component({
  selector: 'custom-slider',
  /*...*/
})
export class CustomSlider {
  label = input('', {transform: trimString});
}

function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}
```

---

## Basic Input Declaration with @Input Decorator in Angular

**Description:** Demonstrates the basic usage of @Input decorator to declare a component input property with a default value.

```typescript
@Component({...})
export class CustomSlider {
  @Input() value = 0;
}
```

---

## Input Alias in @Component Decorator

**Description:** Demonstrates how to specify an input alias using the @Component decorator's inputs array.

```typescript
@Component({
  ...,
  inputs: ['disabled: sliderDisabled'],
})
export class CustomSlider extends BaseSlider { }
```

---

## Optional Input Property Declaration

**Description:** Shows how to declare an optional input property without a default value.

```typescript
@Component({/*...*/})
export class CustomSlider {
  // Produces an InputSignal<number | undefined> because `value` may not be set.
  value = input<number>();
}
```

---

## Model Input with Two-way Binding

**Description:** Demonstrates how to implement two-way binding using model inputs in Angular components.

```typescript
@Component({ /* ... */})
export class CustomSlider {
  // Define a model input named "value".
  value = model(0);

  increment() {
    // Update the model input with a new value, propagating the value to any bindings. 
    this.value.update(oldValue => oldValue + 10);
  }
}
```

---

## Input Declaration in @Component Decorator

**Description:** Shows how to declare inputs in the @Component decorator, useful for inherited properties.

```typescript
@Component({
  ...,
  inputs: ['disabled'],
})
export class CustomSlider extends BaseSlider { }
```

---

## Input Property with Type Inference

**Description:** Example showing TypeScript type inference for input properties with default values.

```typescript
@Component({/*...*/})
export class CustomSlider {
  // TypeScript infers that this input is a number, returning InputSignal<number>.
  value = input(0);
}
```

---