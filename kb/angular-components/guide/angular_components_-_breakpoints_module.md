# Angular Components - Breakpoints Module

**Summary:** This file covers topics related to "Angular Components - Breakpoints Module". Key snippets include: Using BreakpointObserver to Detect Handset Breakpoint in Angular.

---

## Using BreakpointObserver to Detect Handset Breakpoint in Angular

**Description:** Example of a component that injects BreakpointObserver to check if the current viewport matches the Handset breakpoint. The code subscribes to changes in the breakpoint state and calls different methods based on whether it matches or not.

```typescript
@Component({ ... })
export class MyWidget {
  isHandset: Observable<BreakpointState>;

  constructor(bm: BreakpointObserver) {
    bm.observe(Handset).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.makeEverythingFitOnSmallScreen();
      } else {
        this.expandEverythingToFillTheScreen();
      }
    });
  }
}
```

---