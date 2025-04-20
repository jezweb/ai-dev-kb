# Angular Inject Migration Guide

**Summary:** This file covers topics related to "Angular Inject Migration Guide". Key snippets include: Basic Inject Migration Example - After.

---

## Basic Inject Migration Example - After

**Description:** Migrated component using the inject() function instead of constructor injection

```typescript
import { Component, inject } from '@angular/core';
import { MyService } from './service';
import { DI_TOKEN } from './token';

@Component({})
export class MyComp {
  private service = inject(MyService);
  readonly token = inject(DI_TOKEN, { optional: true });
}
```

---