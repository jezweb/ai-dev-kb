# Using Variables in Angular Templates

**Summary:** This file covers topics related to "Using Variables in Angular Templates". Key snippets include: Demonstrating @let Variable Scope in Angular Templates, Referencing Directives through exportAs in Angular Templates, Referencing Template Fragments with Variables in Angular, Declaring Local Template Variables with @let in Angular.

---

## Demonstrating @let Variable Scope in Angular Templates

**Description:** Example showing the scoping rules for @let variables in Angular templates. Variables are available in their own view and descendants, but not hoisted to parent or sibling views.

```angular-html
@let topLevel = value;

<div>
  @let insideDiv = value;
</div>

{{topLevel}} <!-- Valid -->
{{insideDiv}} <!-- Valid -->

@if (condition) {
  {{topLevel + insideDiv}} <!-- Valid -->

  @let nested = value;

  @if (condition) {
    {{topLevel + insideDiv + nested}} <!-- Valid -->
  }
}

<div *ngIf="condition">
  {{topLevel + insideDiv}} <!-- Valid -->

  @let nestedNgIf = value;

  <div *ngIf="condition">
     {{topLevel + insideDiv + nestedNgIf}} <!-- Valid -->
  </div>
</div>

{{nested}} <!-- Error, not hoisted from @if -->
{{nestedNgIf}} <!-- Error, not hoisted from *ngIf -->
```

---

## Referencing Directives through exportAs in Angular Templates

**Description:** Example showing how to reference an Angular directive instance in a template using the exportAs name. This allows direct access to directive properties and methods.

```angular-html
<!-- The `firstZone` variable refers to the `DropZone` directive instance. -->
<section dropZone #firstZone="dropZone"> ... </section>
```

---

## Referencing Template Fragments with Variables in Angular

**Description:** Example showing how to reference an Angular template fragment using template reference variables. The variable references a TemplateRef instance.

```angular-html
<!-- The `myFragment` variable is assigned the `TemplateRef` instance corresponding to this template fragment. -->
<ng-template #myFragment>
  <p>This is a template fragment</p>
</ng-template>
```

---

## Declaring Local Template Variables with @let in Angular

**Description:** Examples of declaring local template variables using Angular's @let syntax. These variables are bound to template expressions and automatically kept up-to-date by Angular.

```angular-html
@let name = user.name;
@let greeting = 'Hello, ' + name;
@let data = data$ | async;
@let pi = 3.1459;
@let coordinates = {x: 50, y: 100};
@let longExpression = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
                      'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
                      'Ut enim ad minim veniam...';
```

---