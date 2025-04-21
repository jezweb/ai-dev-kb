# Setting up Angular Router

**Summary:** This file covers topics related to "Setting up Angular Router". Key snippets include: Configuring Router Provider in Angular Application.

---

## Configuring Router Provider in Angular Application

**Description:** This code demonstrates how to set up the router provider in an Angular application's configuration file. It imports necessary functions and routes, then adds the router provider to the application config.

```typescript
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

---