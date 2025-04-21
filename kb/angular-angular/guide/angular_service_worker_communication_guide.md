# Angular Service Worker Communication Guide

**Summary:** This file covers topics related to "Angular Service Worker Communication Guide". Key snippets include: Handling Version Updates with SwUpdate Service in Angular.

---

## Handling Version Updates with SwUpdate Service in Angular

**Description:** Demonstrates how to subscribe to version update events using the SwUpdate service. Handles different types of events including version detection, installation, and failure notifications.

```typescript
export class LogUpdateService {
  constructor(updates: SwUpdate) {
    updates.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
      }
    });
  }
}
```

---