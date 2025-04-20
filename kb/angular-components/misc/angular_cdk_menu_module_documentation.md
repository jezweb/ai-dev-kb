# Angular CDK Menu Module Documentation

**Summary:** This file covers topics related to "Angular CDK Menu Module Documentation". Key snippets include: Implementing a Context Menu in Angular CDK, Creating Nested Context Menus in Angular CDK, Implementing Radio Menu Items in Angular CDK, Creating a Checkbox Menu Item in Angular CDK.

---

## Implementing a Context Menu in Angular CDK

**Description:** Demonstrates how to create a context menu that appears on right-click using cdkContextMenuTriggerFor directive to associate a container with a menu template.

```html
<div class="example-context-container" [cdkContextMenuTriggerFor]="contextMenu">
  Right click anywhere in this box to open the context menu
</div>

<ng-template #contextMenu>
  <div class="example-menu" cdkMenu>
    <button class="example-menu-item" cdkMenuItem>Open</button>
    <button class="example-menu-item" cdkMenuItem>Save</button>
    <hr>
    <button class="example-menu-item" cdkMenuItem>Delete</button>
  </div>
</ng-template>
```

---

## Creating Nested Context Menus in Angular CDK

**Description:** Shows how to implement nested context menu containers where right-clicking in different areas opens different context menus.

```html
<div class="example-context-container outer" [cdkContextMenuTriggerFor]="outerMenu">
  Outer context menu

  <div class="example-context-container inner" [cdkContextMenuTriggerFor]="innerMenu">
    Inner context menu
  </div>
</div>
```

---

## Implementing Radio Menu Items in Angular CDK

**Description:** Demonstrates how to create radio button menu items for exclusive selection using cdkMenuItemRadio directive with state binding.

```html
<button
  class="example-menu-item"
  cdkMenuItemRadio
  [cdkMenuItemChecked]="size === 'small'"
  (cdkMenuItemTriggered)="size = 'small'">Small text</button>
<button
  class="example-menu-item"
  cdkMenuItemRadio
  [cdkMenuItemChecked]="size === 'normal'"
  (cdkMenuItemTriggered)="size = 'normal'">Normal text</button>
<button
  class="example-menu-item"
  cdkMenuItemRadio
  [cdkMenuItemChecked]="size === 'large'"
  (cdkMenuItemTriggered)="size = 'large'">Large text</button>
```

---

## Creating a Checkbox Menu Item in Angular CDK

**Description:** Shows how to implement a toggleable checkbox menu item using cdkMenuItemCheckbox directive with state binding.

```html
<button
  class="example-menu-item"
  cdkMenuItemCheckbox
  [cdkMenuItemChecked]="bold"
  (cdkMenuItemTriggered)="bold = !bold">Bold</button>
```

---