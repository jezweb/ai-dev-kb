# Angular Component Lifecycle Hooks Documentation

**Summary:** This file covers topics related to "Angular Component Lifecycle Hooks Documentation". Key snippets include: Implementing ngOnChanges Hook in Angular TypeScript, Using DestroyRef in Angular TypeScript Component, Implementing Angular Lifecycle Interface, Implementing afterRender Phases in Angular Component.

---

## Implementing ngOnChanges Hook in Angular TypeScript

**Description:** Demonstrates how to implement the ngOnChanges lifecycle hook in an Angular component. This hook runs after any component inputs have changed and allows inspection of the changes.

```typescript
@Component({
  /* ... */
})
export class UserProfile {
  @Input() name: string = '';

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
```

---

## Using DestroyRef in Angular TypeScript Component

**Description:** Shows how to use DestroyRef as an alternative to ngOnDestroy for handling component destruction. This approach allows registering a callback to be invoked when the component is destroyed.

```typescript
@Component({
  /* ... */
})
export class UserProfile {
  constructor() {
    inject(DestroyRef).onDestroy(() => {
      console.log('UserProfile destruction');
    });
  }
}
```

---

## Implementing Angular Lifecycle Interface

**Description:** Shows how to implement an Angular lifecycle interface (OnInit) in a component to ensure correct method implementation.

```typescript
@Component({
  /* ... */
})
export class UserProfile implements OnInit {
  ngOnInit() {
    /* ... */
  }
}
```

---

## Implementing afterRender Phases in Angular Component

**Description:** Demonstrates how to use afterNextRender with write and read phases to optimize DOM operations and minimize layout thrashing. Shows phase communication through return values.

```typescript
import {Component, ElementRef, afterNextRender} from '@angular/core';

@Component({...})
export class UserProfile {
  private prevPadding = 0;
  private elementHeight = 0;

  constructor() {
    private elementRef = inject(ElementRef);
    const nativeElement = elementRef.nativeElement;

    afterNextRender({
      // Use the `Write` phase to write to a geometric property.
      write: () => {
        const padding = computePadding();
        const changed = padding !== this.prevPadding;
        if (changed) {
          nativeElement.style.padding = padding;
        }
        return changed; // Communicate whether anything changed to the read phase.
      },

      // Use the `Read` phase to read geometric properties after all writes have occurred.
      read: (didWrite) => {
        if (didWrite) {
          this.elementHeight = nativeElement.getBoundingClientRect().height;
        }
      }
    });
  }
}
```

---