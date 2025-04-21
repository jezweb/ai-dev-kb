# Angular Material Bi-directionality Documentation

**Summary:** This file covers topics related to "Angular Material Bi-directionality Documentation". Key snippets include: Implementing Directionality in Angular Components.

---

## Implementing Directionality in Angular Components

**Description:** This snippet demonstrates how to inject and use the Directionality service in a custom Angular component. It shows how to read the current text direction and subscribe to direction changes to update the component accordingly.

```typescript
@Component({ /* ... */ })
export class MyCustomComponent {
  private dir: Direction;

  constructor(directionality: Directionality) {
    this.dir = directionality.value;

    directionality.change.subscribe(() => {
      this.dir = directionality.value;
    });
  }
}
```

---