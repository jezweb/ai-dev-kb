# Angular Material Sort Component Documentation

**Summary:** This file covers topics related to "Angular Material Sort Component Documentation". Key snippets include: Accessible Sort Header Implementation.

---

## Accessible Sort Header Implementation

**Description:** Example demonstrating how to implement accessible sorting with proper ARIA attributes and LiveAnnouncer service for screen reader support.

```typescript
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'sort-overview-example',
  templateUrl: 'sort-overview-example.html',
})
export class SortOverviewExample {
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
```

---