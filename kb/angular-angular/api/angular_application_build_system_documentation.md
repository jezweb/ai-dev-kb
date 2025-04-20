# Angular Application Build System Documentation

**Summary:** This file covers topics related to "Angular Application Build System Documentation". Key snippets include: Executing Angular CLI Update for New Build System, Importing SVG Content Using File Extension Loader, Configuring Import Conditions in Package.json for Development/Production, Correct Default Import Example in TypeScript, Configuring Import Conditions in Package.json for Browser/Server.

---

## Executing Angular CLI Update for New Build System

**Description:** Command to run the automated migration to the new application builder using the Angular CLI.

```shell
ng update @angular/cli --name use-application-builder
```

---

## Importing SVG Content Using File Extension Loader

**Description:** Example of importing an SVG file as text content after configuring the loader option. The imported content is available as a string via the default export.

```typescript
import contents from './some-file.svg';

console.log(contents); // <svg>...</svg>
```

---

## Configuring Import Conditions in Package.json for Development/Production

**Description:** Package.json configuration for subpath imports that maps '#logger' to different files based on the development or production condition. This enables environment-specific code loading.

```json
{
  ...
  "imports": {
    "#logger": {
      "development": "./src/logging/debug.ts",
      "default": "./src/logging/noop.ts"
    }
  }
}
```

---

## Correct Default Import Example in TypeScript

**Description:** The proper way to import the 'moment' package using default import syntax, which conforms to ECMAScript specifications. This requires enabling the esModuleInterop option in tsconfig.

```typescript
import moment from 'moment';

console.log(moment().format());
```

---

## Configuring Import Conditions in Package.json for Browser/Server

**Description:** Package.json configuration for subpath imports that maps '#crashReporter' to different files based on the browser or server environment. This is useful for SSR applications that need different implementations.

```json
{
  ...
  "imports": {
    "#crashReporter": {
      "browser": "./src/browser-logger.ts",
      "default": "./src/server-logger.ts"
    }
  }
}
```

---