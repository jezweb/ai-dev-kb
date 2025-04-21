# Using Signals in Angular

**Summary:** This file covers topics related to "Using Signals in Angular". Key snippets include: Implementing Signals in Angular Components, Creating and Manipulating Signals in TypeScript.

---

## Implementing Signals in Angular Components

**Description:** This snippet illustrates how to use signals and computed signals within an Angular component. It shows the creation of multiple signals and a computed signal that depends on them, along with a method to update a signal's value.

```typescript
@Component({/* ... */})
export class UserProfile {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  activateTrial() {
    this.isTrial.set(true);
  }
}
```

---

## Creating and Manipulating Signals in TypeScript

**Description:** This snippet demonstrates how to create a signal, read its value, and update it using both set and update methods. It shows the basic operations available for signals in Angular.

```typescript
import {signal} from '@angular/core';

// Create a signal with the `signal` function.
const firstName = signal('Morgan');

// Read a signal value by calling it— signals are functions.
console.log(firstName());

// Change the value of this signal by calling its `set` method with a new value.
firstName.set('Jaime');

// You can also use the `update` method to change the value
// based on the previous value.
firstName.update(name => name.toUpperCase());
```

---