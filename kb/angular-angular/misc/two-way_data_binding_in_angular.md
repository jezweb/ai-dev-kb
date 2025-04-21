# Two-way Data Binding in Angular

**Summary:** This file covers topics related to "Two-way Data Binding in Angular". Key snippets include: Simplified Parent Component with Two-way Binding in Angular, Implementing Two-way Binding with Form Controls in Angular, Parent Component Setup for Two-way Binding in Angular, Child Counter Component with Two-way Binding in Angular, Child Counter Component with Two-way Binding in Angular.

---

## Simplified Parent Component with Two-way Binding in Angular

**Description:** Demonstrates the minimal setup required in a parent component to enable two-way binding with a child component.

```angular-ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <main>
      <app-counter [(count)]="initialCount"></app-counter>
    </main>
  `,
})
export class AppComponent {
  initialCount = 18;
}
```

---

## Implementing Two-way Binding with Form Controls in Angular

**Description:** Demonstrates how to set up two-way binding between a component and a form input using ngModel. Shows dynamic updates of component state based on user input.

```angular-ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  template: `
    <main>
      <h2>Hello {{ firstName }}!</h2>
      <input type="text" [(ngModel)]="firstName" />
    </main>
  `
})
export class AppComponent {
  firstName = 'Ada';
}
```

---

## Parent Component Setup for Two-way Binding in Angular

**Description:** Shows the parent component configuration for two-way binding with a child counter component. Demonstrates how to bind the initial count and handle updates.

```angular-ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <main>
      <h1>Counter: {{ initialCount }}</h1>
      <app-counter [(count)]="initialCount"></app-counter>
    </main>
  `,
})
export class AppComponent {
  initialCount = 18;
}
```

---

## Child Counter Component with Two-way Binding in Angular

**Description:** Implements a counter component using the model property for two-way binding. Shows how to update the counter value and propagate changes to the parent.

```angular-ts
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="updateCount(-1)">-</button>
    <span>{{ count() }}</span>
    <button (click)="updateCount(+1)">+</button>
  `,
})
export class CounterComponent {
  count = model<number>(0);

  updateCount(amount: number): void {
    this.count.update(currentCount => currentCount + amount);
  }
}
```

---

## Child Counter Component with Two-way Binding in Angular

**Description:** Implements a counter component using the model property for two-way binding. Shows how to update the counter value and propagate changes to the parent.

```angular-ts
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="updateCount(-1)">-</button>
    <span>{{ count() }}</span>
    <button (click)="updateCount(+1)">+</button>
  `,
})
export class CounterComponent {
  count = model<number>(0);

  updateCount(amount: number): void {
    this.count.update(currentCount => currentCount + amount);
  }
}
```

---