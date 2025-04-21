---
title: "Using x-bind Directive in Alpine.js"
category: "api"
tags:
  - alpinejs
  - directive
  - x-bind
  - attribute-binding
  - class-binding
  - style-binding
  - boolean-attributes
  - shorthand
  - object-syntax
  - Alpine.data
  - javascript
  - html
  - css
---

# Using x-bind Directive in Alpine.js

**Summary:** This document explains the `x-bind` directive (and its shorthand `:`) in Alpine.js, used for dynamically binding HTML attributes to JavaScript expressions within your component's scope. It covers binding standard attributes like `placeholder`, conditionally applying CSS classes using string or object syntax, binding inline styles, handling boolean attributes, and even binding multiple directives/attributes simultaneously using an object.

---

## Basic x-bind Usage in Alpine.js

**Description:** Demonstrates the fundamental use of `x-bind` to dynamically set the value of an HTML attribute. Here, the `placeholder` attribute of the input element is bound to the `placeholder` data property.

```html
<div x-data="{ placeholder: 'Type here...' }">
    <input type="text" x-bind:placeholder="placeholder">
</div>
```

---

## Class Object Syntax in Alpine.js

**Description:** Shows the powerful object syntax for conditionally applying CSS classes with `x-bind:class` (or `:class`). Each key in the object is a class name, and its corresponding value is a boolean expression. The class is applied only if the expression evaluates to `true`. Alpine intelligently merges these classes with any existing static classes on the element.

```html
<!-- The 'hidden' class is applied only if 'show' is false -->
<div x-data="{ show: true }" :class="{ 'hidden': ! show }">
    Content visible when show is true.
</div>

<!-- Merges with existing static classes -->
<div x-data="{ show: false }" class="block" :class="{ 'hidden': ! show }">
    Content hidden when show is false (class="block hidden").
</div>
```

---

## Shorthand Syntax for x-bind in Alpine.js

**Description:** Introduces the convenient shorthand syntax for `x-bind`. Instead of writing `x-bind:attribute`, you can simply use `:attribute`. This is the most common way `x-bind` is used.

```html
<div x-data="{ placeholder: 'Shorthand example' }">
    <!-- :placeholder is shorthand for x-bind:placeholder -->
    <input type="text" :placeholder="placeholder">
</div>
```

---

## Binding Styles with x-bind in Alpine.js

**Description:** Demonstrates binding inline CSS styles using `:style` with an object syntax. Each key-value pair in the object corresponds to a CSS property and its value. Alpine merges these dynamic styles with any existing static `style` attributes. You can also bind a pre-defined style object from your component data.

```html
<!-- Basic object syntax -->
<div x-data :style="{ color: 'red', display: 'flex' }">Red Flex Content</div>

<!-- Conditional style object -->
<div x-data="{ isRed: true }" x-bind:style="isRed && { color: 'red' }">Conditionally Red</div>

<!-- Merging with static styles -->
<div x-data :style="{ color: 'blue' }" style="padding: 1rem; font-weight: bold;">
    Blue Bold Padded Content
</div>

<!-- Binding to a data property -->
<div x-data="{ styles: { color: 'green', border: '1px solid green' } }">
    <div :style="styles">Green Bordered Content</div>
</div>
```

---

## Binding Classes with x-bind in Alpine.js (Conditional String)

**Description:** Illustrates conditionally applying CSS classes using a JavaScript ternary expression within `:class`. If `open` is true, an empty string is applied (no class added); otherwise, the 'hidden' class is applied.

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div :class="open ? '' : 'hidden'"> <!-- Applies 'hidden' class when open is false -->
        Dropdown Contents...
    </div>
</div>
```

---

## Binding Alpine Directives Directly in Alpine.js

**Description:** Shows an advanced technique where `x-bind` (or `:`) binds an entire object containing multiple attributes and directives to an element. This is useful for creating reusable sets of behaviors defined in JavaScript, often within an `Alpine.data` component definition. Note the use of bracket notation for directive names like `['@click']` and `['x-show']`. See also [[../api/alpine.js_x-data_directive_documentation.md#creating-reusable-components-with-alpinedata|Alpine.data]].

```html
<div x-data="dropdown">
    <button x-bind="trigger">Open Dropdown</button>

    <span x-bind="dialogue">Dropdown Contents</span>
</div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            open: false,

            trigger: { // Object defining attributes/directives for the button
                ['x-ref']: 'trigger', // See x-ref
                ['@click']() {        // See x-on
                    this.open = true
                },
            },

            dialogue: { // Object defining attributes/directives for the dropdown content
                ['x-show']() {        // See x-show
                    return this.open
                },
                ['@click.outside']() { // See x-on modifiers
                    this.open = false
                },
            },
        }))
    })
</script>
```

---

## Shorthand Conditionals for Class Binding in Alpine.js

**Description:** Demonstrates using JavaScript's logical OR (`||`) and AND (`&&`) operators for concise conditional class binding. `show || 'hidden'` applies 'hidden' only if `show` is falsy. `closed && 'hidden'` applies 'hidden' only if `closed` is truthy.

```html
<!-- Apply 'hidden' if 'show' is false/null/undefined -->
<div x-data="{ show: false }" :class="show || 'hidden'">Content</div>

<!-- Apply 'hidden' if 'closed' is true -->
<div x-data="{ closed: true }" :class="closed && 'hidden'">Content</div>
```

---