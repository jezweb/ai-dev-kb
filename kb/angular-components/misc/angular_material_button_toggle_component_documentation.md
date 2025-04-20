# Angular Material Button Toggle Component Documentation

**Summary:** This file covers topics related to "Angular Material Button Toggle Component Documentation". Key snippets include: Implementing Accessible Button Toggle with Icon in Angular Material.

---

## Implementing Accessible Button Toggle with Icon in Angular Material

**Description:** Example showing how to implement an accessible button toggle with an icon, demonstrating proper aria-label binding for dynamic accessibility labels. The toggle controls alert notifications with appropriate screen reader support.

```html
<mat-button-toggle [aria-label]="alertsEnabled ? 'Disable alerts' : 'Enable alerts'">
  <mat-icon>notifications</mat-icon>
</mat-button-toggle>
```

---