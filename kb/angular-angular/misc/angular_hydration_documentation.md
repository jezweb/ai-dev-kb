# Angular Hydration Documentation

**Summary:** This file covers topics related to "Angular Hydration Documentation". Key snippets include: Enabling Hydration in Angular Application with bootstrapApplication, Enabling Event Replay in Angular Application, Setting ngSkipHydration as a Host Binding in Angular TypeScript, Enabling I18n Support for Hydration in Angular TypeScript.

---

## Enabling Hydration in Angular Application with bootstrapApplication

**Description:** This snippet demonstrates how to enable hydration in an Angular application using bootstrapApplication. It imports provideClientHydration and adds it to the providers list.

```typescript
import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
...

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()]
});
```

---

## Enabling Event Replay in Angular Application

**Description:** This snippet demonstrates how to enable the Event Replay feature in an Angular application. It imports provideClientHydration and withEventReplay, then adds them to the providers list in bootstrapApplication.

```typescript
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';

bootstrapApplication(App, {
  providers: [
    provideClientHydration(withEventReplay())
  ]
});
```

---

## Setting ngSkipHydration as a Host Binding in Angular TypeScript

**Description:** This code shows how to set the ngSkipHydration attribute as a host binding in an Angular component. This method skips hydration for the entire component and its children, causing it to behave as if hydration is not enabled.

```typescript
@Component({
  ...
  host: {ngSkipHydration: 'true'},
})
class ExampleComponent {}
```

---

## Enabling I18n Support for Hydration in Angular TypeScript

**Description:** This snippet demonstrates how to enable hydration for i18n blocks by adding withI18nSupport to the provideClientHydration call when bootstrapping an Angular application. This feature is currently in developer preview.

```typescript
import {
  bootstrapApplication,
  provideClientHydration,
  withI18nSupport,
} from '@angular/platform-browser';
...

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration(withI18nSupport())]
});
```

---