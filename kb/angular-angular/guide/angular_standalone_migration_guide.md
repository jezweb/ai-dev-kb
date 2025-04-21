# Angular Standalone Migration Guide

**Summary:** This file covers topics related to "Angular Standalone Migration Guide". Key snippets include: Example of Angular Modules After NgModule Removal.

---

## Example of Angular Modules After NgModule Removal

**Description:** Shows the result after removing unnecessary NgModules, where the ImporterModule is deleted and references to it are marked with TODO comments for manual cleanup.

```typescript
// configurer.module.ts
console.log(/* TODO(standalone-migration): clean up removed NgModule reference manually */ ImporterModule);

@NgModule({
  imports: [],
  exports: [],
  providers: [{provide: FOO, useValue: 123}]
})
export class ConfigurerModule {}
```

```typescript
// index.ts
export {ConfigurerModule} from './modules/index';
```

---