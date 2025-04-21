# Angular CDK Observers Package Documentation

**Summary:** This file covers topics related to "Angular CDK Observers Package Documentation". Key snippets include: Implementing cdkObserveContent Directive in Angular HTML Template.

---

## Implementing cdkObserveContent Directive in Angular HTML Template

**Description:** This snippet demonstrates how to use the cdkObserveContent directive in an Angular template. It attaches the directive to a div element wrapping ng-content, triggering a function when the content changes.

```html
<div class="projected-content-wrapper" (cdkObserveContent)="projectContentChanged()">
  <ng-content></ng-content>
</div>
```

---