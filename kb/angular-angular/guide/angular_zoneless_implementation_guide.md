# Angular Zoneless Implementation Guide

**Summary:** This file covers topics related to "Angular Zoneless Implementation Guide". Key snippets include: Configuring Zoneless Bootstrap in Angular.

---

## Configuring Zoneless Bootstrap in Angular

**Description:** Example showing how to enable zoneless change detection in both standalone and NgModule-based Angular applications.

```typescript
// standalone bootstrap
bootstrapApplication(MyApp, {providers: [
  provideExperimentalZonelessChangeDetection(),
]});

// NgModule bootstrap
platformBrowser().bootstrapModule(AppModule);
@NgModule({
  providers: [provideExperimentalZonelessChangeDetection()]
})
export class AppModule {}
```

---