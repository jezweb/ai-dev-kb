# Angular Structural Directives Guide

**Summary:** This file covers topics related to "Angular Structural Directives Guide". Key snippets include: Typing Generic Directive Context in Angular with Template Context Guards, Implementing Type Narrowing with a Template Guard Function in Angular, Using Structural Directive Shorthand Syntax in Angular HTML, Setting Up a Structural Directive in Angular TypeScript, Implementing Business Logic in Structural Directive.

---

## Typing Generic Directive Context in Angular with Template Context Guards

**Description:** This snippet demonstrates how to properly type a directive's context for templates when using generics. It implements the ngTemplateContextGuard static method to correctly infer and propagate the generic type from the directive to the template context.

```typescript
// Declare an interface for the template context:
export interface SelectTemplateContext<T> {
  $implicit: T;
}

@Directive(...)
export class SelectDirective<T> {
  // The directive's generic type `T` will be inferred from the `DataSource` type
  // passed to the input.
  @Input({required: true}) selectFrom!: DataSource<T>;

  // Narrow the type of the context using the generic type of the directive.
  static ngTemplateContextGuard<T>(dir: SelectDirective<T>, ctx: any): ctx is SelectTemplateContext<T> {
    // As before the guard body is not used at runtime, and included only to avoid
    // TypeScript errors.
    return true;
  }
}
```

---

## Implementing Type Narrowing with a Template Guard Function in Angular

**Description:** This snippet demonstrates how to narrow an input expression's type using a static ngTemplateGuard method. It creates a directive that only renders its template if the actor is a User, narrowing the type from User|Robot to User within the template.

```typescript
// This directive only renders its template if the actor is a user.
// You want to assert that within the template, the type of the `actor`
// expression is narrowed to `User`.
@Directive(...)
class ActorIsUser {
  @Input() actor: User|Robot;

  static ngTemplateGuard_actor(dir: ActorIsUser, expr: User|Robot): expr is User {
    // The return statement is unnecessary in practice, but included to
    // prevent TypeScript errors.
    return true;
  }
}
```

---

## Using Structural Directive Shorthand Syntax in Angular HTML

**Description:** Example of using the '*select' shorthand syntax to apply the structural directive directly to an element. This demonstrates the microsyntax pattern for structural directives.

```html
<p *select="let data from source">The data is: {{data}}</p>
```

---

## Setting Up a Structural Directive in Angular TypeScript

**Description:** Initial setup for a structural directive in Angular, injecting TemplateRef and ViewContainerRef which are required for manipulating the template.

```typescript
import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[select]',
})
export class SelectDirective {
  private templateRef = inject(TemplateRef);
  private ViewContainerRef = inject(ViewContainerRef);
}
```

---

## Implementing Business Logic in Structural Directive

**Description:** Implementation of ngOnInit lifecycle hook in a structural directive that loads data from a source and creates an embedded view with the data in the context.

```typescript
export class SelectDirective {
  // ...

  async ngOnInit() {
    const data = await this.selectFrom.load();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      // Create the embedded view with a context object that contains
      // the data via the key `$implicit`.
      $implicit: data,
    });
  }
}
```

---