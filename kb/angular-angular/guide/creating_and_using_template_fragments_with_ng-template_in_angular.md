# Creating and Using Template Fragments with ng-template in Angular

**Summary:** This file covers topics related to "Creating and Using Template Fragments with ng-template in Angular". Key snippets include: Declaring Parameters in Angular Template Fragment, Using Structural Directive Syntax in Angular, Querying Multiple Template Fragments in Angular Component.

---

## Declaring Parameters in Angular Template Fragment

**Description:** Demonstrates how to declare parameters in a template fragment using let- prefix in Angular.

```angular-html
<ng-template let-pizzaTopping="topping">
  <p>You selected: {{pizzaTopping}}</p>
</ng-template>
```

---

## Using Structural Directive Syntax in Angular

**Description:** Shows the shorthand syntax for applying a structural directive to an element in Angular.

```angular-html
<section *myDirective>
  <p>This is a fragment</p>
</section>
```

---

## Querying Multiple Template Fragments in Angular Component

**Description:** Demonstrates how to query for multiple named template fragments using @ViewChild in an Angular component.

```angular-ts
@Component({
  /* ... */,
  template: `
    <p>This is a normal element</p>

    <ng-template #fragmentOne>
      <p>This is one template fragment</p>
    </ng-template>

    <ng-template #fragmentTwo>
      <p>This is another template fragment</p>
    </ng-template>
  `,
})
export class ComponentWithFragment {
  @ViewChild('fragmentOne', {read: TemplateRef}) fragmentOne: TemplateRef<unknown> | undefined;
  @ViewChild('fragmentTwo', {read: TemplateRef}) fragmentTwo: TemplateRef<unknown> | undefined;
}
```

---