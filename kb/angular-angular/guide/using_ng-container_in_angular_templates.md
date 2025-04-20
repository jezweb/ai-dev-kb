# Using ng-container in Angular Templates

**Summary:** This file covers topics related to "Using ng-container in Angular Templates". Key snippets include: Rendering Template Fragments with NgTemplateOutlet in Angular, Using ng-container for Dependency Injection Context in Angular, Using Structural Directives with ng-container in Angular.

---

## Rendering Template Fragments with NgTemplateOutlet in Angular

**Description:** This example shows how to use <ng-container> with the NgTemplateOutlet directive to dynamically render different template fragments based on a condition. It selects between admin and basic templates based on the isAdmin input.

```typescript
@Component({
  template: `
    <h2>Your profile</h2>
    <ng-container [ngTemplateOutlet]="profileTemplate()" />

    <ng-template #admin>This is the admin profile</ng-template>
    <ng-template #basic>This is the basic profile</ng-template>
  `
})
export class UserProfile {
  isAdmin = input(false);
  adminTemplate = viewChild('admin', {read: TemplateRef});
  basicTemplate = viewChild('basic', {read: TemplateRef});
  profileTemplate = computed(() => this.isAdmin() ? this.adminTemplate() : this.basicTemplate());
}
```

---

## Using ng-container for Dependency Injection Context in Angular

**Description:** This example shows how to use <ng-container> with a directive to provide a context (theme in this case) that descendant components can inject. It demonstrates defining a Theme directive and applying it to <ng-container> to affect child components.

```typescript
@Directive({
  selector: '[theme]',
})
export class Theme {
  // Create an input that accepts 'light' or 'dark`, defaulting to 'light'.
  mode = input<'light' | 'dark'>('light');
}
```

```html
<ng-container theme="dark">
  <profile-pic />
  <user-bio />
</ng-container>
```

---

## Using Structural Directives with ng-container in Angular

**Description:** This example demonstrates applying structural directives to <ng-container> elements. It shows how to conditionally render content with *ngIf and iterate through items with *ngFor without adding extra DOM elements.

```html
<ng-container *ngIf="permissions == 'admin'">
  <h1>Admin Dashboard</h1>
  <admin-infographic></admin-infographic>
</ng-container>

<ng-container *ngFor="let item of items; index as i; trackBy: trackByFn">
  <h2>{{ item.title }}</h2>
  <p>{{ item.description }}</p>
</ng-container>
```

---