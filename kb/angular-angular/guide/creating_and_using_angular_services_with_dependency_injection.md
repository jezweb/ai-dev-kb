# Creating and Using Angular Services with Dependency Injection

**Summary:** This file covers topics related to "Creating and Using Angular Services with Dependency Injection". Key snippets include: Generating an Angular Service Using CLI, Injecting and Using Housing Service in Component, Importing Angular Core in Home Component.

---

## Generating an Angular Service Using CLI

**Description:** Command to generate a new Angular service named 'housing' without test files using the Angular CLI.

```shell
ng generate service housing --skip-tests
```

---

## Injecting and Using Housing Service in Component

**Description:** Code to inject the HousingService into the HomeComponent and initialize the housingLocationList data by calling the service's method.

```typescript
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
```

---

## Importing Angular Core in Home Component

**Description:** Import statement that includes the 'inject' function from Angular core, which is needed for dependency injection.

```typescript
import { Component, inject } from '@angular/core';
```

---