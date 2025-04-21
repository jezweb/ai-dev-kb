# Angular CDK Overlay Package Documentation

**Summary:** This file covers topics related to "Angular CDK Overlay Package Documentation". Key snippets include: Providing FullscreenOverlayContainer in Angular Module.

---

## Providing FullscreenOverlayContainer in Angular Module

**Description:** Demonstrates how to enable the FullscreenOverlayContainer by providing it in an Angular NgModule as a replacement for the standard OverlayContainer, supporting fullscreen mode.

```typescript
@NgModule({
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  // ...
})
export class MyModule { }
```

---