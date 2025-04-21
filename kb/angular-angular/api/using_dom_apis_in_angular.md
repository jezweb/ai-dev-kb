# Using DOM APIs in Angular

**Summary:** This file covers topics related to "Using DOM APIs in Angular". Key snippets include: Accessing Host Element with ElementRef in Angular Component.

---

## Accessing Host Element with ElementRef in Angular Component

**Description:** This snippet demonstrates how to inject and use ElementRef to access a component's host element in the constructor.

```typescript
@Component({...})
export class ProfilePhoto {
  constructor() {
    const elementRef = inject(ElementRef);
    console.log(elementRef.nativeElement);
  }
}
```

---