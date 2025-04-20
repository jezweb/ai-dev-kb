# Adding Routes to Angular Application

**Summary:** This file covers topics related to "Adding Routes to Angular Application". Key snippets include: Configuring Router in Angular Bootstrap, Adding RouterModule to Angular Component Imports, Implementing Router Outlet in Angular Component Template.

---

## Configuring Router in Angular Bootstrap

**Description:** Update the bootstrapApplication call to include the routing configuration in main.ts.

```typescript
bootstrapApplication(AppComponent,
    {
      providers: [
        provideProtractorTestingSupport(),
        provideRouter(routes)
      ]
    }
  ).catch(err => console.error(err));
```

---

## Adding RouterModule to Angular Component Imports

**Description:** Include RouterModule in the @Component metadata imports for the AppComponent.

```typescript
imports: [RouterModule],
```

---

## Implementing Router Outlet in Angular Component Template

**Description:** Replace the home component tag with router-outlet directive and add a link to the home page in the AppComponent template.

```typescript
template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
```

---