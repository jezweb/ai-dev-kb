# Angular Control Flow Features

**Summary:** This file covers topics related to "Angular Control Flow Features". Key snippets include: Implementing List Iteration with @for in Angular Templates, Using Variable Assignment in Angular @if Blocks, Implementing Empty State Handling with @for and @empty, Using Contextual Variables with let in @for Blocks, Creating Conditional Chains with @if, @else-if, and @else in Angular....

---

## Implementing List Iteration with @for in Angular Templates

**Description:** Shows how to use the @for block to loop through a collection, displaying each item. The track expression is required to help Angular optimize rendering performance.

```angular-html
@for (item of items; track item.id) {
  {{ item.name }}
}
```

---

## Using Variable Assignment in Angular @if Blocks

**Description:** Demonstrates saving the result of a conditional expression into a variable with the 'as' keyword for reuse inside the block. This helps with longer expressions to improve readability.

```angular-html
@if (user.profile.settings.startDate; as startDate) {
  {{ startDate }}
}
```

---

## Implementing Empty State Handling with @for and @empty

**Description:** Shows how to provide a fallback content with the @empty block when there are no items in the collection being iterated over by the @for block.

```angular-html
@for (item of items; track item.name) {
  <li> {{ item.name }}</li>
} @empty {
  <li aria-hidden="true"> There are no items. </li>
}
```

---

## Using Contextual Variables with let in @for Blocks

**Description:** Demonstrates how to use and alias contextual variables like $index and $even in @for blocks using the let segment. These aliases are useful especially when nesting @for blocks.

```angular-html
@for (item of items; track item.id; let idx = $index, e = $even) {
  <p>Item #{{ idx }}: {{ item.name }}</p>
}
```

---

## Creating Conditional Chains with @if, @else-if, and @else in Angular

**Description:** Shows how to chain multiple conditions together with @if, @else-if, and @else blocks to handle different scenarios based on the comparison between variables a and b.

```angular-html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
```

---

## Implementing Multi-branch Conditionals with @switch in Angular

**Description:** Demonstrates using the @switch block for multi-branch conditional rendering based on a value. The example shows different dashboard components displayed based on user permissions.

```angular-html
@switch (userPermissions) {
  @case ('admin') {
    <app-admin-dashboard />
  }
  @case ('reviewer') {
    <app-reviewer-dashboard />
  }
  @case ('editor') {
    <app-editor-dashboard />
  }
  @default {
    <app-viewer-dashboard />
  }
}
```

---