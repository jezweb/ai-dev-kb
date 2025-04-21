# Angular Route Lazy Loading Migration Guide

**Summary:** This file covers topics related to "Angular Route Lazy Loading Migration Guide". Key snippets include: Lazy Loaded Route Configuration Example.

---

## Lazy Loaded Route Configuration Example

**Description:** Example showing the route configuration after migration to lazy loading, demonstrating the use of loadComponent

```typescript
// app.module.ts
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        // ↓ HomeComponent is now lazy loaded
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      },
    ]),
  ],
})
export class AppModule {}
```

---