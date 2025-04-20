# Angular Signal Queries Migration Guide

**Summary:** This file covers topics related to "Angular Signal Queries Migration Guide". Key snippets include: Angular Component Before Signal Query Migration, Angular Component After Signal Query Migration.

---

## Angular Component Before Signal Query Migration

**Description:** Example of a component using traditional @ContentChild decorator for querying elements

```typescript
import {Component, ContentChild} from '@angular/core';

@Component({
  template: `Has ref: {{someRef ? 'Yes' : 'No'}}`
})
export class MyComponent {
  @ContentChild('someRef') ref: ElementRef|undefined = undefined;

  someMethod() {
    if (this.ref) {
      this.ref.nativeElement;
    }
  }
}
```

---

## Angular Component After Signal Query Migration

**Description:** Example of a component using the new signal-based contentChild query API

```typescript
import {Component, contentChild} from '@angular/core';

@Component({
  template: `Has ref: {{someRef() ? 'Yes' : 'No'}}`
})
export class MyComponent {
  readonly ref = contentChild<ElementRef>('someRef');

  someMethod() {
    const ref = this.ref();
    if (ref) {
      ref.nativeElement;
    }
  }
}
```

---