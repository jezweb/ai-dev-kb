# Angular Material Menu Component Documentation

**Summary:** This file covers topics related to "Angular Material Menu Component Documentation". Key snippets include: Toggling Angular Material Menu Programmatically in TypeScript, Implementing Lazy Rendering for Angular Material Menu in HTML.

---

## Toggling Angular Material Menu Programmatically in TypeScript

**Description:** Demonstrates how to programmatically open a menu using the MatMenuTrigger API. This requires attaching the menu to a trigger element in the DOM using the matMenuTriggerFor directive.

```typescript
class MyComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
}
```

---

## Implementing Lazy Rendering for Angular Material Menu in HTML

**Description:** Shows how to defer initialization of menu content until the menu is opened. This is achieved by providing the content as an ng-template with the matMenuContent attribute.

```html
<mat-menu #appMenu="matMenu">
  <ng-template matMenuContent>
    <button mat-menu-item>Settings</button>
    <button mat-menu-item>Help</button>
  </ng-template>
</mat-menu>

<button matIconButton [matMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

---