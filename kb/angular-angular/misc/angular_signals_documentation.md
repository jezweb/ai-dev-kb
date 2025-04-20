# Angular Signals Documentation

**Summary:** This file covers topics related to "Angular Signals Documentation". Key snippets include: Creating a Computed Signal in TypeScript, Creating an Effect with Injector in TypeScript, Creating a Conditional Computed Signal in TypeScript, Updating a Writable Signal's Value in TypeScript, Creating and Reading a Writable Signal in TypeScript....

---

## Creating a Computed Signal in TypeScript

**Description:** This snippet shows how to create a computed signal that derives its value from another signal using the 'computed' function.

```typescript
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
```

---

## Creating an Effect with Injector in TypeScript

**Description:** This snippet demonstrates creating an effect outside the constructor by passing an Injector via options.

```typescript
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  private injector = inject(Injector);

  initializeLogging(): void {
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    }, {injector: this.injector});
  }
}
```

---

## Creating a Conditional Computed Signal in TypeScript

**Description:** This snippet demonstrates creating a computed signal with dynamic dependencies based on conditions.

```typescript
const showCount = signal(false);
const count = signal(0);
const conditionalCount = computed(() => {
  if (showCount()) {
    return `The count is ${count()}.`;
  } else {
    return 'Nothing to see here!';
  }
});
```

---

## Updating a Writable Signal's Value in TypeScript

**Description:** This snippet demonstrates how to update a writable signal's value based on its previous value using the '.update()' method.

```typescript
// Increment the count by 1.
count.update(value => value + 1);
```

---

## Creating and Reading a Writable Signal in TypeScript

**Description:** This snippet demonstrates how to create a writable signal using the 'signal' function and read its value by calling the getter function.

```typescript
const count = signal(0);

// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
```

---

## Creating a Signal with Custom Equality Function in TypeScript

**Description:** This snippet shows how to create a signal with a custom equality function for value comparison.

```typescript
import _ from 'lodash';

const data = signal(['test'], {equal: _.isEqual});

// Even though this is a different array instance, the deep equality
// function will consider the values to be equal, and the signal won't
// trigger any updates.
data.set(['test']);
```

---

## Setting a Writable Signal's Value in TypeScript

**Description:** This snippet shows how to directly set the value of a writable signal using the '.set()' method.

```typescript
count.set(3);
```

---

## Using Untracked with External Code in an Effect in TypeScript

**Description:** This snippet shows how to use 'untracked' to prevent external code from being treated as a dependency in an effect.

```typescript
effect(() => {
  const user = currentUser();
  untracked(() => {
    // If the `loggingService` reads signals, they won't be counted as
    // dependencies of this effect.
    this.loggingService.log(`User set to ${user}`);
  });
});
```

---

## Creating a Named Effect as a Component Field in TypeScript

**Description:** This snippet shows how to create a named effect by assigning it to a component field.

```typescript
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);

  private loggingEffect = effect(() => {
    console.log(`The count is: ${this.count()}`);
  });
}
```

---

## Implementing Effect Cleanup in Angular

**Description:** Demonstrates how to use the onCleanup function in Angular effects to cancel long-running operations. The example shows setting up a timer that logs a message after 1 second, and clearing the timeout when the effect is cleaned up.

```typescript
effect((onCleanup) => {
  const user = currentUser();

  const timer = setTimeout(() => {
    console.log(`1 second ago, the user became ${user}`);
  }, 1000);

  onCleanup(() => {
    clearTimeout(timer);
  });
});
```

---