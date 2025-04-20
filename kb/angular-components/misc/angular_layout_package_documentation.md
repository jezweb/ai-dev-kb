# Angular Layout Package Documentation

**Summary:** This file covers topics related to "Angular Layout Package Documentation". Key snippets include: Observing Viewport Changes with BreakpointObserver in TypeScript, Using Predefined Breakpoints with BreakpointObserver in TypeScript, Checking Viewport Size with BreakpointObserver in TypeScript.

---

## Observing Viewport Changes with BreakpointObserver in TypeScript

**Description:** Shows how to use BreakpointObserver's observe method to react to viewport orientation changes through an observable stream.

```typescript
const layoutChanges = breakpointObserver.observe([
  '(orientation: portrait)',
  '(orientation: landscape)',
]);

layoutChanges.subscribe(result => {
  updateMyLayoutForOrientationChange();
});
```

---

## Using Predefined Breakpoints with BreakpointObserver in TypeScript

**Description:** Demonstrates using Angular Material's predefined breakpoints with BreakpointObserver to detect specific device layouts.

```typescript
breakpointObserver.observe([
  Breakpoints.HandsetLandscape,
  Breakpoints.HandsetPortrait
]).subscribe(result => {
  if (result.matches) {
    this.activateHandsetLayout();
  }
});
```

---

## Checking Viewport Size with BreakpointObserver in TypeScript

**Description:** Demonstrates how to use BreakpointObserver's isMatched method to check if the current viewport matches a specific media query condition.

```typescript
const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
```

---