---
title: "Getting Started with Alpine.js"
category: "guide"
tags:
  - alpinejs
  - getting-started
  - introduction
  - tutorial
  - x-data
  - x-text
  - x-on
  - "@click"
  - x-show
  - "@click.outside"
  - x-model
  - x-for
  - computed-properties
  - getters
  - cdn
  - javascript
  - html
---

# Getting Started with Alpine.js

**Summary:** This guide provides a quick introduction to Alpine.js, showcasing its core concepts through practical examples. Learn how to set up Alpine using a CDN, create basic interactive components like counters and dropdowns using directives like `x-data`, `x-on`, `x-text`, and `x-show`, handle user input with `x-model`, iterate over data with `x-for`, and implement computed properties using JavaScript getters for dynamic filtering.

---

## Building a Counter Component with Alpine.js

**Description:** A classic introductory example demonstrating Alpine's core reactivity. `x-data` initializes a `count` state variable. `@click` (shorthand for `x-on:click`) increments the count when the button is pressed. `x-text` reactively displays the current value of `count` in the `<span>`.

```html
<div x-data="{ count: 0 }">
    <button @click="count++">Increment</button>

    Count: <span x-text="count"></span>
</div>
```

---

## Creating a Toggle Dropdown with Alpine.js

**Description:** Shows how to build a common UI pattern: a dropdown menu that toggles visibility. `x-data` holds the `open` state. `@click` toggles the `open` state. `x-show` conditionally displays the dropdown content based on `open`. `@click.outside` adds the behavior to close the dropdown when clicking anywhere outside of it. See also [[../api/alpine.js_x-show_directive_documentation.md|x-show]] and [[../guide/alpine.js_event_handling_guide.md#outside-click-handler-in-alpinejs|@click.outside]].

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Dropdown</button>

    <div x-show="open" @click.outside="open = false" style="display: none; border: 1px solid black; padding: 10px; margin-top: 5px;">
        Dropdown Contents...
    </div>
</div>
```

---

## Setting Up Alpine.js Basic HTML Template

**Description:** Provides the minimal HTML structure required to start using Alpine.js via the CDN method. It includes the necessary `<script>` tag in the `<head>` (with `defer`) and a simple `<h1>` tag demonstrating `x-data` and `x-text` to display a message. See also [[../guide/alpine.js_installation_guide.md|Installation Guide]].

```html
<html>
<head>
    <title>Alpine.js Starter</title>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
</body>
</html>
```

---

## Implementing Computed Properties with Getters in Alpine.js

**Description:** Introduces the concept of computed properties in Alpine using native JavaScript getters within the `x-data` object. The `filteredItems` getter provides a derived value based on the `items` array and the `search` string, automatically recalculating when its dependencies (`items` or `search`) change.

```javascript
// Inside an x-data object
{
    search: '', // Input model
    items: ['foo', 'bar', 'baz'], // Original data

    // Getter acts as a computed property
    get filteredItems() {
        // Filters items based on the current search value
        return this.items.filter(
            i => i.startsWith(this.search)
        )
    }
}
```

---

## Implementing a Filtered Search with Alpine.js

**Description:** A practical example combining several Alpine features to create a live search filter. `x-model` binds the input field to the `search` property. The `filteredItems` getter (computed property) dynamically calculates the filtered list based on `search`. `x-for` iterates over `filteredItems` to display the results. See also [[../api/understanding_x-model_directive_in_alpine.js.md|x-model]] and [[../guide/alpine.js_x-for_directive_usage_guide.md|x-for]].

```html
<div
    x-data="{
        search: '',
        items: ['foo', 'bar', 'baz'],
        get filteredItems() {
            return this.items.filter(
                i => i.startsWith(this.search)
            )
        }
    }"
>
    <input x-model="search" placeholder="Search...">

    <ul>
        <template x-for="item in filteredItems" :key="item">
            <li x-text="item"></li>
        </template>
        <template x-if="filteredItems.length === 0">
            <li>No results found.</li>
        </template>
    </ul>
</div>
```

---

## Looping Elements with x-for in Alpine.js

**Description:** Focuses specifically on the `x-for` directive used within the filtered search example. It iterates over the `filteredItems` array (provided by the getter) and renders a `<li>` element for each item using the `<template>` tag. See also [[../guide/alpine.js_x-for_directive_usage_guide.md|x-for]].

```html
<!-- Part of the filtered search example -->
<ul>
    <template x-for="item in filteredItems" :key="item">
        <li x-text="item"></li>
    </template>
</ul>
```

---

## Filtering Items in Alpine.js Computed Property

**Description:** Isolates the JavaScript logic within the `filteredItems` getter from the search example. It uses the standard JavaScript `filter` and `startsWith` methods to create a new array containing only the items that match the current `search` term.

```javascript
// Inside the 'get filteredItems()' getter
return this.items.filter(
    i => i.startsWith(this.search)
)
```

---