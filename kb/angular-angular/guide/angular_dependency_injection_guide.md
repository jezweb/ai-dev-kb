# Angular Dependency Injection Guide

**Summary:** This file covers topics related to "Angular Dependency Injection Guide". Key snippets include: Root-Level Service Provider Configuration, Basic Injectable Service Declaration in TypeScript, Creating Injectable Service in Angular TypeScript, Dependency Injection Usage Example, Component-Level Service Provider Configuration....

---

## Root-Level Service Provider Configuration

**Description:** Shows how to configure a service to be provided at the root level using providedIn property, enabling tree-shaking optimization

```typescript
@Injectable({
  providedIn: 'root'
})
class HeroService {}
```

---

## Basic Injectable Service Declaration in TypeScript

**Description:** Demonstrates how to declare a basic injectable service class using the @Injectable decorator

```typescript
@Injectable()
class HeroService {}
```

---

## Creating Injectable Service in Angular TypeScript

**Description:** Demonstrates how to create a basic Calculator service using the @Injectable decorator. The service provides a simple add method and is configured to be available throughout the application using providedIn: 'root'.

```typescript
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Calculator {
  add(x: number, y: number) {
    return x + y;
  }
}
```

---

## Dependency Injection Usage Example

**Description:** Demonstrates how to use the inject function to consume dependencies in an Angular component

```typescript
import {inject, Component} from 'angular/core'; 

@Component({/* ... */})
export class UserProfile {
  // You can use the `inject` function in property initializers.
  private userClient = inject(UserClient);
  
  constructor() {
    // You can also use the `inject` function in a constructor.
    const logger = inject(Logger);
  }
}
```

---

## Component-Level Service Provider Configuration

**Description:** Demonstrates how to provide a service at the component level using the providers array in the @Component decorator

```typescript
@Component({
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}
```

---

## Angular Dependency Injection Documentation Header

**Description:** HTML markup for the documentation header section that introduces dependency injection in Angular, including a decorative image and title.

```html
<docs-decorative-header title="Dependency injection in Angular" imgSrc="adev/src/assets/images/dependency_injection.svg"> <!-- markdownlint-disable-line -->
"DI" is a design pattern and mechanism for creating and delivering some parts of an app to other parts of an app that require them.
</docs-decorative-header>
```

---

## Bootstrap Application Configuration

**Description:** Shows how to bootstrap an Angular application with configuration

```typescript
bootstrapApplication(AppComponent, appConfig)
```

---