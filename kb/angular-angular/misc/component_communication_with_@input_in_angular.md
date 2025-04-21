# Component Communication with @Input in Angular

**Summary:** This file covers topics related to "Component Communication with @Input in Angular". Key snippets include: Using @Input Property in Angular Template, Defining @Input Property in TypeScript.

---

## Using @Input Property in Angular Template

**Description:** This example shows how to pass a value to an Input property in an Angular component's template using attribute syntax.

```angular-ts
@Component({
  ...
  template: `<app-user occupation="Angular Developer"></app-user>`
})
class AppComponent {}
```

---

## Defining @Input Property in TypeScript

**Description:** This snippet demonstrates how to create an Input property using the @Input decorator in a TypeScript class for an Angular component.

```typescript
class UserComponent {
  @Input() occupation = '';
}
```

---