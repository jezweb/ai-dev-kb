# Resolving Zone Pollution in Angular Applications

**Summary:** This file covers topics related to "Resolving Zone Pollution in Angular Applications". Key snippets include: Initializing Third-Party Libraries Outside NgZone in Angular.

---

## Initializing Third-Party Libraries Outside NgZone in Angular

**Description:** Shows how to initialize a third-party library (Plotly.js) outside of Angular's zone to prevent unnecessary change detection cycles triggered by the library's internal operations.

```typescript
import { Component, NgZone, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';

@Component(...)
class AppComponent implements OnInit {
  private ngZone = inject(NgZone);

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      Plotly.newPlot('chart', data);
    });
  }
}
```

---