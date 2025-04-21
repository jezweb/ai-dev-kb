# Angular Components Scroll Strategies

**Summary:** This file covers topics related to "Angular Components Scroll Strategies". Key snippets include: Configuring Overlay with a Scroll Strategy in Angular.

---

## Configuring Overlay with a Scroll Strategy in Angular

**Description:** Demonstrates how to associate an overlay with a scroll strategy by passing a function that returns a scroll strategy to the OverlayConfig. This example shows using the 'block' strategy which prevents scrolling while an overlay is open.

```typescript
let overlayConfig = new OverlayConfig({
  scrollStrategy: overlay.scrollStrategies.block()
});

this._overlay.create(overlayConfig).attach(yourPortal);
```

---