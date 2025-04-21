---
title: "Alpine.js Sort Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - sort
  - x-sort
  - sortablejs
  - drag-and-drop
  - list-sorting
  - x-sort:item
  - x-sort:handle
  - x-sort:group
  - x-sort:config
  - $item
  - $position
  - ghost-element
  - javascript
  - html
  - css
---

# Alpine.js Sort Plugin Documentation

**Summary:** This document describes the Alpine.js Sort plugin (`@alpinejs/sort`), which integrates the SortableJS library to enable drag-and-drop sorting of elements. It covers basic usage with `x-sort` and `x-sort:item`, using drag handles (`x-sort:handle`), sorting between groups (`x-sort:group`), reacting to sort changes using handlers and magic variables (`$item`, `$position`), customizing SortableJS options via `x-sort:config`, and styling helper elements like ghosts.

---

## Implementing Sorting Groups in Alpine.js Sort Plugin

**Description:** Demonstrates how to enable dragging items between different lists by assigning the same `x-sort:group` name ('todos') to multiple `x-sort` containers (`<ul>` and `<ol>`). Items can be dragged from one list and dropped into the other.

```html
<div class="flex space-x-4">
    <ul x-sort x-sort:group="todos" class="border p-2 w-1/2">
        <h3>List 1</h3>
        <li x-sort:item="1" class="border p-1 m-1 cursor-grab">Item 1 (foo)</li>
        <li x-sort:item="2" class="border p-1 m-1 cursor-grab">Item 2 (bar)</li>
        <li x-sort:item="3" class="border p-1 m-1 cursor-grab">Item 3 (baz)</li>
    </ul>

    <ol x-sort x-sort:group="todos" class="border p-2 w-1/2">
        <h3>List 2</h3>
        <li x-sort:item="4" class="border p-1 m-1 cursor-grab">Item 4 (foo)</li>
        <li x-sort:item="5" class="border p-1 m-1 cursor-grab">Item 5 (bar)</li>
        <li x-sort:item="6" class="border p-1 m-1 cursor-grab">Item 6 (baz)</li>
    </ol>
</div>
```

---

## Basic Usage of Alpine.js Sort Plugin

**Description:** Shows the minimal setup for making list items sortable. The `x-sort` directive is added to the parent container (`<ul>`), and `x-sort:item` is added to each child element (`<li>`) that should be draggable.

```html
<ul x-sort class="border p-2">
    <li x-sort:item class="border p-1 m-1 cursor-grab">foo</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">bar</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">baz</li>
</ul>
```

---

## Using Drag Handles in Alpine.js Sort Plugin

**Description:** Demonstrates restricting the draggable area of a sortable item using `x-sort:handle`. Only the element marked with `x-sort:handle` (the `<span>` in this case) can be used to initiate dragging the parent `x-sort:item` (`<li>`).

```html
<ul x-sort class="border p-2">
    <li x-sort:item class="border p-1 m-1">
        <span x-sort:handle class="cursor-move pr-2">☰</span>foo
    </li>
    <li x-sort:item class="border p-1 m-1">
        <span x-sort:handle class="cursor-move pr-2">☰</span>bar
    </li>
    <li x-sort:item class="border p-1 m-1">
        <span x-sort:handle class="cursor-move pr-2">☰</span>baz
    </li>
</ul>
```

---

## Configuring SortableJS Options in Alpine.js

**Description:** Shows how to pass configuration options directly to the underlying SortableJS library using `x-sort:config`. This example disables the default drag animation by setting `{ animation: 0 }`. Refer to SortableJS documentation for all available options.

```html
<!-- Disable drag animation -->
<ul x-sort x-sort:config="{ animation: 0 }" class="border p-2">
    <li x-sort:item class="border p-1 m-1 cursor-grab">foo</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">bar</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">baz</li>
</ul>
```

---

## Using Sort Handlers in Alpine.js Sort Plugin

**Description:** Demonstrates how to execute code when an item's position changes using a handler expression in the `x-sort` directive. The expression can access magic variables `$item` (the value from `x-sort:item`) and `$position` (the new 1-based index). Alternatively, you can pass the name of a function available in the component's scope.

```html
<!-- Using magic variables directly -->
<ul x-sort="alert('Item ' + $item + ' moved to position ' + $position)" class="border p-2">
    <li x-sort:item="1" class="border p-1 m-1 cursor-grab">foo</li>
    <li x-sort:item="2" class="border p-1 m-1 cursor-grab">bar</li>
    <li x-sort:item="3" class="border p-1 m-1 cursor-grab">baz</li>
</ul>

<!-- Using a component method -->
<div x-data="{ handleSort(item, position) { console.log('Item', item, 'moved to', position); } }">
    <ul x-sort="handleSort" class="border p-2 mt-2">
        <li x-sort:item="A" class="border p-1 m-1 cursor-grab">foo A</li>
        <li x-sort:item="B" class="border p-1 m-1 cursor-grab">bar B</li>
        <li x-sort:item="C" class="border p-1 m-1 cursor-grab">baz C</li>
    </ul>
</div>
```

---

## Styling Ghost Elements in Alpine.js Sort Plugin

**Description:** Shows how to style the placeholder "ghost" element that appears where the dragged item will be dropped. Add the `.ghost` modifier to `x-sort` and then target the `.sortable-ghost` class in your CSS.

```html
<style>
.sortable-ghost {
    opacity: 0.3 !important;
    background-color: lightblue !important;
}
</style>

<ul x-sort.ghost class="border p-2"> <!-- Add .ghost modifier -->
    <li x-sort:item class="border p-1 m-1 cursor-grab">foo</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">bar</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">baz</li>
</ul>
```

---

## Implementing Ghost Elements in Alpine.js Sort Plugin

**Description:** Demonstrates enabling the ghost element feature by adding the `.ghost` modifier to the `x-sort` directive. This provides visual feedback during the drag operation, showing where the item will land.

```html
<ul x-sort.ghost class="border p-2"> <!-- Add .ghost modifier -->
    <li x-sort:item class="border p-1 m-1 cursor-grab">foo</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">bar</li>
    <li x-sort:item class="border p-1 m-1 cursor-grab">baz</li>
</ul>
```

---

## Installing Alpine.js Sort Plugin via CDN

**Description:** Explains how to include the Sort plugin using a `<script>` tag from a CDN. The plugin script must be included *before* the core Alpine.js script.

```html
<!-- Include Sort plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/sort@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---

## Interactive Example of SortableJS Configuration in Alpine.js

**Description:** Provides a functional example combining `x-sort` with `x-sort:config` to disable the drag animation (`{ animation: 0 }`). It also adds basic styling for clarity.

```html
<div x-data>
    <h3>Sortable List (No Animation)</h3>
    <ul x-sort x-sort:config="{ animation: 0 }" class="border p-2">
        <li x-sort:item class="cursor-grab border p-1 m-1">foo</li>
        <li x-sort:item class="cursor-grab border p-1 m-1">bar</li>
        <li x-sort:item class="cursor-grab border p-1 m-1">baz</li>
    </ul>
</div>
```

---

## Fixing CSS Hover Bug in Alpine.js Sort Plugin

**Description:** Demonstrates a CSS workaround for a browser bug (primarily Chrome/Safari) where `:hover` styles might persist incorrectly during drag operations. Using Tailwind CSS's arbitrary variants (`[body:not(.sorting)_&]:hover:...`), hover styles are only applied when the `<body>` does *not* have the `.sorting` class (which SortableJS adds during drag).

```html
<!-- Requires Tailwind CSS with JIT enabled -->
<div x-sort class="border p-2">
    <div x-sort:item class="border p-1 m-1 cursor-grab [body:not(.sorting)_&]:hover:bg-gray-200">foo</div>
    <div x-sort:item class="border p-1 m-1 cursor-grab [body:not(.sorting)_&]:hover:bg-gray-200">bar</div>
    <div x-sort:item class="border p-1 m-1 cursor-grab [body:not(.sorting)_&]:hover:bg-gray-200">baz</div>
</div>
```

---

## Installing Alpine.js Sort Plugin via NPM

**Description:** Shows how to install the Sort plugin using NPM and register it with Alpine in a bundled JavaScript setup using `Alpine.plugin(sort)`.

```shell
npm install @alpinejs/sort
```

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import sort from '@alpinejs/sort' // Import the plugin

Alpine.plugin(sort) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---