# Angular Material matInput Directive

**Summary:** This file covers topics related to "Angular Material matInput Directive". Key snippets include: Configuring Global Error State Matcher in Angular Material.

---

## Configuring Global Error State Matcher in Angular Material

**Description:** This code snippet demonstrates how to set up a global error state matcher by providing the ErrorStateMatcher at the module level. It specifically uses ShowOnDirtyErrorStateMatcher to display input errors when the input is dirty and invalid.

```typescript
@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
```

---