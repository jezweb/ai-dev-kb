---
title: "Templating in Alpine.js"
category: "misc"
tags:
  - alpinejs
  - templating
  - directives
  - x-data
  - x-if
  - x-for
  - x-show
  - x-text
  - x-html
  - x-bind
  - x-transition
  - conditional-rendering
  - looping
  - attribute-binding
  - class-binding
  - style-binding
  - animation
  - javascript
  - html
---

# Templating in Alpine.js

**Summary:** This document provides an overview of Alpine.js's core templating capabilities, focusing on directives used to manipulate the DOM and display data. It covers conditional rendering (`x-if`, `x-show`), looping (`x-for`), displaying text (`x-text`) and HTML (`x-html`), binding attributes (`x-bind`), and adding transitions (`x-transition`).

---

## Conditional Rendering with x-if in Alpine.js

**Description:** Demonstrates `x-if` for conditionally adding or removing elements from the DOM. The content inside the `<template>` tag is only rendered when the `open` property is true. See also [[../api/alpine.js_x-if_directive_documentation.md|x-if]].

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Expand</button>

    <template x-if="open">
        <div>Conditionally Rendered Content...</div>
    </template>
</div>
```

---

## Looping Elements with x-for in Alpine.js

**Description:** Illustrates iterating over an array (`statuses`) using `x-for` on a `<template>` tag. For each `status` in the array, a `<div>` displaying the status is created. See also [[../guide/alpine.js_x-for_directive_usage_guide.md|x-for]].

```html
<div x-data="{ statuses: ['open', 'closed', 'archived'] }">
    <template x-for="status in statuses" :key="status">
        <div x-text="status"></div>
    </template>
</div>
```

---

## Toggling Elements with x-show in Alpine.js

**Description:** Shows how `x-show` toggles the visibility of an element by adding or removing `display: none;` based on the boolean `open` property. Unlike `x-if`, the element remains in the DOM when hidden. See also [[../api/alpine.js_x-show_directive_documentation.md|x-show]].

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Expand</button>

    <div x-show="open" style="display: none;">
        Content...
    </div>
</div>
```

---

## Using JavaScript Expressions with x-text in Alpine.js

**Description:** Demonstrates that `x-text` can evaluate arbitrary JavaScript expressions. Here, it calculates `1 + 2` and displays the result '3' as the text content. See also [[../api/using_x-text_directive_in_alpine.js.md|x-text]].

```html
<!-- Displays "3" -->
<span x-text="1 + 2"></span>
```

---

## Binding Attributes with x-bind in Alpine.js

**Description:** Shows dynamic attribute binding using `x-bind` (or the `:` shorthand). The `class` attribute is conditionally set to 'bg-red' based on the boolean `red` property. See also [[../api/using_x-bind_directive_in_alpine.js.md|x-bind]].

```html
<button
    x-data="{ red: false }"
    :class="red ? 'bg-red' : ''"
    @click="red = ! red"
    style="padding: 5px; border: 1px solid black;"
    class="" <!-- Initial class -->
>
    Toggle Red
</button>
```

---

## Setting Text Content with x-text in Alpine.js

**Description:** Demonstrates binding an element's `innerText` to a data property (`title`) using `x-text`. The `<h1>`'s content updates reactively when `title` changes. See also [[../api/using_x-text_directive_in_alpine.js.md|x-text]].

```html
<div x-data="{ title: 'Start Here' }">
    <h1 x-text="title"></h1> <!-- Displays "Start Here" -->
</div>
```

---

## Adding Transitions with x-transition in Alpine.js

**Description:** Shows how `x-transition` works with `x-show` to add smooth fade/scale animations when the element's visibility is toggled. See also [[../api/alpine.js_x-transition_directive.md|x-transition]].

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Expand</button>

    <div x-show="open" x-transition style="display: none;">
        Content...
    </div>
</div>
```

---

## Toggling Classes with Object Syntax in Alpine.js

**Description:** Demonstrates the object syntax for `:class` binding. The 'hidden' class is applied only when the `open` property is falsy. This syntax is useful for toggling multiple classes based on different conditions. See also [[../api/using_x-bind_directive_in_alpine.js.md#class-object-syntax-in-alpinejs|Class Object Syntax]].

```html
<div x-data="{ open: true }">
    <span :class="{ 'hidden': ! open }">Visible when open is true</span>
</div>
```

---

## Setting Inner HTML with Alpine.js x-html Directive

**Description:** Shows how `x-html` sets an element's `innerHTML` based on a data property containing HTML markup. Use with caution if the source of the HTML is not trusted. See also [[../api/using_x-html_directive_in_alpine.js.md|x-html]].

```html
<div x-data="{ title: '<h1>Start Here</h1>' }">
    <div x-html="title"></div> <!-- Renders the h1 element inside the div -->
</div>
```

---

## Customizing Transition Duration in Alpine.js

**Description:** Demonstrates customizing the animation duration for `x-transition` using the `.duration` modifier. See also [[../api/alpine.js_x-transition_directive.md|x-transition]].

```html
<!-- Transition takes 500ms -->
<div x-show="open" x-transition.duration.500ms>...</div>
```

---

## Using Transition Classes for Fine-grained Control in Alpine.js

**Description:** Shows using specific CSS classes with `x-transition` modifiers (`enter`, `enter-start`, `enter-end`, `leave`, `leave-start`, `leave-end`) for detailed control over transition phases, often used with CSS frameworks like Tailwind CSS. See also [[../api/alpine.js_x-transition_directive.md|x-transition]].

```html
<div
    x-show="open"
    x-transition:enter="transition ease-out duration-300"
    x-transition:enter-start="opacity-0 transform scale-90"
    x-transition:enter-end="opacity-100 transform scale-100"
    x-transition:leave="transition ease-in duration-300"
    x-transition:leave-start="opacity-100 transform scale-100"
    x-transition:leave-end="opacity-0 transform scale-90"
>...</div>
```

---

## Specifying Different Enter and Leave Transition Durations in Alpine.js

**Description:** Shows setting different durations for the enter and leave phases of a transition using specific modifiers. See also [[../api/alpine.js_x-transition_directive.md|x-transition]].

```html
<div
    x-show="open"
    x-transition:enter.duration.500ms <!-- Enter duration -->
    x-transition:leave.duration.1000ms <!-- Leave duration -->
>...</div>
```

---

## Transitioning Specific Properties in Alpine.js

**Description:** Illustrates using modifiers like `.opacity` or `.scale` with `x-transition` to apply only specific parts of the default transition effect. See also [[../api/alpine.js_x-transition_directive.md|x-transition]].

```html
<!-- Only fade, no scale -->
<div x-show="open" x-transition.opacity>...</div>
```

---