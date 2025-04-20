# Angular Directive Composition API Documentation

**Summary:** This file covers topics related to "Angular Directive Composition API Documentation". Key snippets include: Binding Host Directive Inputs and Outputs in Angular HTML Template, Aliasing Inputs and Outputs from Host Directives in Angular Component, Including Inputs and Outputs from Host Directives in Angular Component.

---

## Binding Host Directive Inputs and Outputs in Angular HTML Template

**Description:** Demonstrates how to bind inputs and outputs from host directives in an Angular HTML template after they have been explicitly included in the component's API.

```angular-html
<admin-menu menuId="top-menu" (menuClosed)="logMenuClosed()">
```

---

## Aliasing Inputs and Outputs from Host Directives in Angular Component

**Description:** Shows how to alias inputs and outputs from host directives to customize the API of a component in Angular.

```typescript
@Component({
  selector: 'admin-menu',
  template: 'admin-menu.html',
  hostDirectives: [{
    directive: MenuBehavior,
    inputs: ['menuId: id'],
    outputs: ['menuClosed: closed'],
  }],
})
export class AdminMenu { }
```

---

## Including Inputs and Outputs from Host Directives in Angular Component

**Description:** Shows how to explicitly include inputs and outputs from host directives in a component's API by expanding the entry in the hostDirectives property.

```typescript
@Component({
  selector: 'admin-menu',
  template: 'admin-menu.html',
  hostDirectives: [{
    directive: MenuBehavior,
    inputs: ['menuId'],
    outputs: ['menuClosed'],
  }],
})
export class AdminMenu { }
```

---