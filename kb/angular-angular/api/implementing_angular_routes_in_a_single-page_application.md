# Implementing Angular Routes in a Single-Page Application

**Summary:** This file covers topics related to "Implementing Angular Routes in a Single-Page Application". Key snippets include: Styling Active Route Links, Adding Redirect Route in Angular TypeScript, Defining Angular Routes.

---

## Styling Active Route Links

**Description:** Adds CSS styles for active navigation links in the app component.

```css
/* No CSS provided in the original text */
```

---

## Adding Redirect Route in Angular TypeScript

**Description:** This snippet shows how to add a redirect route to the '/heroes-list' path when the application root is accessed. It uses an empty string path with 'redirectTo' and 'pathMatch' properties.

```typescript
{path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
```

---

## Defining Angular Routes

**Description:** Creates and exports a routes array with paths for crisis-list and heroes-list components.

```typescript
import {Routes} from '@angular/router';

export const routes = [];

{path: 'crisis-list', component: CrisisListComponent},
{path: 'heroes-list', component: HeroesListComponent},
```

---