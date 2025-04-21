# Using ng-content for Content Projection in Angular

**Summary:** This file covers topics related to "Using ng-content for Content Projection in Angular". Key snippets include: Defining a BaseButton Component with ng-content in Angular.

---

## Defining a BaseButton Component with ng-content in Angular

**Description:** This snippet defines a BaseButton component that uses ng-content to accept and render any markup from its parent component. It demonstrates the basic structure of a component using content projection.

```angular-ts
// ./base-button/base-button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'button[baseButton]',
  template: `
      <ng-content />
  `,
})
export class BaseButton {}
```

---