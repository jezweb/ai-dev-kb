# Creating Custom Pipes in Angular

**Summary:** This file covers topics related to "Creating Custom Pipes in Angular". Key snippets include: Marking a Class as a Pipe in Angular.

---

## Marking a Class as a Pipe in Angular

**Description:** This snippet demonstrates how to define a basic pipe class using the @Pipe decorator. The example creates a simple 'greet' pipe with proper naming conventions following Angular style guidelines.

```typescript
import { Pipe } from '@angular/core';

@Pipe({
  name: 'greet',
})
export class GreetPipe {}
```

---