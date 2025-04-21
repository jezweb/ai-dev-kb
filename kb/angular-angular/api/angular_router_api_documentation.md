# Angular Router API Documentation

**Summary:** This file covers topics related to "Angular Router API Documentation". Key snippets include: Defining ROUTES InjectionToken in TypeScript, Implementing Scroll Event Class in TypeScript.

---

## Defining ROUTES InjectionToken in TypeScript

**Description:** InjectionToken for providing route configurations to the Router. It accepts an array of Route arrays, allowing routes to be provided from multiple sources.

```typescript
export const ROUTES: InjectionToken<Route[][]>;
```

---

## Implementing Scroll Event Class in TypeScript

**Description:** Class that represents a scroll event in the Router, triggered after navigation. It includes the router event that caused the scroll, the position to scroll to, and an optional anchor element.

```typescript
export class Scroll {
    constructor(
    routerEvent: NavigationEnd | NavigationSkipped,
    position: [number, number] | null,
    anchor: string | null);
    // (undocumented)
    readonly anchor: string | null;
    // (undocumented)
    readonly position: [number, number] | null;
    // (undocumented)
    readonly routerEvent: NavigationEnd | NavigationSkipped;
    // (undocumented)
    toString(): string;
    // (undocumented)
    readonly type = EventType.Scroll;
}
```

---