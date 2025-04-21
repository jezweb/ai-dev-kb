# Migrating Angular Projects to Standalone Components

**Summary:** This file covers topics related to "Migrating Angular Projects to Standalone Components". Key snippets include: Converting Angular Component to Standalone (After).

---

## Converting Angular Component to Standalone (After)

**Description:** Example of a standalone Angular component and its updated NgModule after migration.

```typescript
// shared.module.ts
@NgModule({
  imports: [CommonModule, GreeterComponent],
  exports: [GreeterComponent]
})
export class SharedModule {}
```

```typescript
// greeter.component.ts
@Component({
  selector: 'greeter',
  template: '<div *ngIf="showGreeting">Hello</div>',
  imports: [NgIf]
})
export class GreeterComponent {
  showGreeting = true;
}
```

---