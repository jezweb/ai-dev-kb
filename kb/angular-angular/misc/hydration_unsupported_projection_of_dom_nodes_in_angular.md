# Hydration Unsupported Projection of DOM Nodes in Angular

**Summary:** This file covers topics related to "Hydration Unsupported Projection of DOM Nodes in Angular". Key snippets include: Demonstrating Unsupported DOM Node Projection in Angular Components.

---

## Demonstrating Unsupported DOM Node Projection in Angular Components

**Description:** This code snippet shows two Angular components: DynamicComponent and SimpleComponent. The SimpleComponent creates DOM nodes outside of Angular's context and attempts to content-project them, which is unsupported and triggers an error during hydration.

```typescript
@Component({
  selector: 'dynamic',
  template: `
  <ng-content />
`,
})
class DynamicComponent {
}

@Component({
  selector: 'app',
  template: `<div #target></div>`,
})
class SimpleComponent {
  @ViewChild('target', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  envInjector = inject(EnvironmentInjector);

  ngAfterViewInit() {
    const div = document.createElement('div');
    const p = document.createElement('p');
    // In this test we create DOM nodes outside of Angular context
    // (i.e. not using Angular APIs) and try to content-project them.
    // This is an unsupported pattern and an exception will be thrown.
    const compRef = createComponent(DynamicComponent, {
      environmentInjector: this.envInjector,
      projectableNodes: [[div, p]]
    });
  }
}
```

---