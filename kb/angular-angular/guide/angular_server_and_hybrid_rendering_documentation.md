# Angular Server and Hybrid Rendering Documentation

**Summary:** This file covers topics related to "Angular Server and Hybrid Rendering Documentation". Key snippets include: Configuring Static Site Generation in Angular.json, Configuring Server Routes in Angular, Creating New SSR Angular Project, Configuring Fallback Strategies for Prerendered Routes in Angular, Accessing Request Object via Dependency Injection in Angular Components.

---

## Configuring Static Site Generation in Angular.json

**Description:** Shows how to configure Angular to generate a fully static application without a server file by setting the outputMode to 'static' in the angular.json configuration.

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "prerender": {
          "options": {
            "outputMode": "static"
          }
        }
      }
    }
  }
}
```

---

## Configuring Server Routes in Angular

**Description:** TypeScript configuration for server routes defining different rendering modes (CSR, SSG, SSR) for various application paths.

```typescript
// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', // This renders the "/" route on the client (CSR)
    renderMode: RenderMode.Client,
  },
  {
    path: 'about', // This page is static, so we prerender it (SSG)
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'profile', // This page requires user-specific data, so we use SSR
    renderMode: RenderMode.Server,
  },
  {
    path: '**', // All other routes will be rendered on the server (SSR)
    renderMode: RenderMode.Server,
  },
];
```

---

## Creating New SSR Angular Project

**Description:** Command to create a new Angular project with server-side rendering enabled using Angular CLI.

```shell
ng new --ssr
```

---

## Configuring Fallback Strategies for Prerendered Routes in Angular

**Description:** Shows how to specify a fallback strategy for prerendered routes. This example demonstrates setting a client-side rendering fallback for paths that weren't prerendered at build time.

```typescript
// app.routes.server.ts
import { RenderMode, PrerenderFallback, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'post/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client, // Fallback to CSR if not prerendered
    async getPrerenderParams() {
      // This function returns an array of objects representing prerendered posts at the paths:
      // `/post/1`, `/post/2`, and `/post/3`.
      // The path `/post/4` will utilize the fallback behavior if it's requested.
      return [{ id: 1 }, { id: 2 }, { id: 3 }];
    },
  },
];
```

---

## Accessing Request Object via Dependency Injection in Angular Components

**Description:** Shows how to access the HTTP request object in an Angular component during server-side rendering using the REQUEST token from @angular/core.

```typescript
import { inject, REQUEST } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `<h1>My Component</h1>`,
})
export class MyComponent {
  constructor() {
    const request = inject(REQUEST);
    console.log(request?.url);
  }
}
```

---