# Angular Signal Inputs Migration Guide

**Summary:** This file covers topics related to "Angular Signal Inputs Migration Guide". Key snippets include: Angular Component Before Signal Input Migration, Executing Signal Input Migration Command in Angular CLI.

---

## Angular Component Before Signal Input Migration

**Description:** Example of a component using traditional @Input decorator before migration

```typescript
import {Component, Input} from '@angular/core';

@Component({
  template: `Name: {{name ?? ''}}`
})
export class MyComponent {
  @Input() name: string|undefined = undefined;

  someMethod(): number {
    if (this.name) {
      return this.name.length;
    }
    return -1;
  }
}
```

---

## Executing Signal Input Migration Command in Angular CLI

**Description:** Command to run the automated migration schematic for converting @Input decorators to signal inputs

```bash
ng generate @angular/core:signal-input-migration
```

---