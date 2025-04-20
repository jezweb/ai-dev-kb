# Angular Event Binding Function Invocation

**Summary:** This file covers topics related to "Angular Event Binding Function Invocation". Key snippets include: Correct Function Invocation in Angular Event Binding.

---

## Correct Function Invocation in Angular Event Binding

**Description:** This snippet shows the correct way to use a function in an Angular event binding. The function is properly invoked, ensuring it will execute when the event is triggered.

```typescript
import {Component} from '@angular/core';

@Component({
  template: `<button (click)="onClick()">Click me</button>`,
})
class MyComponent {
  onClick() {
    console.log('clicked');
  }
}
```

---