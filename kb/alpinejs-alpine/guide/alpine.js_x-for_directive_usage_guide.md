---
title: "Alpine.js x-for Directive Usage Guide"
category: "guide"
tags:
  - alpinejs
  - directive
  - x-for
  - looping
  - iteration
  - arrays
  - objects
  - range
  - keys
  - :key
  - index
  - template-tag
  - dom-manipulation
  - javascript
  - html
---

# Alpine.js x-for Directive Usage Guide

**Summary:** This guide explains the `x-for` directive in Alpine.js, used for iterating over data collections (arrays, objects, or numeric ranges) to render elements dynamically. It covers the basic syntax using `<template>`, the importance of using `:key` for performance and stability, accessing item indexes, and the requirement of having a single root element within the template.

---

## Iterating Through Arrays with x-for in Alpine.js

**Description:** Demonstrates the fundamental usage of `x-for` to loop through an array (`colors`). For each `color` in the `colors` array, the content within the `<template>` tag (a list item displaying the color) is rendered. `x-for` must be placed on a `<template>` tag.

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="color in colors">
        <li x-text="color"></li>
    </template>
</ul>
```

---

## Using Keys with x-for in Alpine.js

**Description:** Highlights the importance of providing a unique `:key` binding when using `x-for`, especially when the list items might be reordered, added, or removed. Binding `:key` to a unique property (like `color.id`) helps Alpine efficiently track and update the correct DOM elements, preventing potential issues.

```html
<ul x-data="{ colors: [
    { id: 1, label: 'Red' },
    { id: 2, label: 'Orange' },
    { id: 3, label: 'Yellow' },
]}">
    <template x-for="color in colors" :key="color.id">
        <li x-text="color.label"></li>
    </template>
</ul>
```

---

## Accessing Indexes in x-for Iterations in Alpine.js

**Description:** Shows how to access the zero-based index of the current item during an `x-for` loop by using the `(item, index)` syntax. This allows you to display or use the item's position within the iteration.

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="(color, index) in colors">
        <li>
            <span x-text="index + ': '"></span> <!-- Display the index -->
            <span x-text="color"></span>
        </li>
    </template>
</ul>
```

---

## Iterating Through Objects with x-for in Alpine.js

**Description:** Demonstrates iterating over the properties of a JavaScript object using `x-for`. The `(value, key)` syntax provides access to both the property's value and its key (name) within each iteration. Note that object property order is not guaranteed in JavaScript.

```html
<ul x-data="{ car: { make: 'Jeep', model: 'Grand Cherokee', color: 'Black' } }">
    <template x-for="(value, key) in car">
        <li>
            <span x-text="key"></span>: <span x-text="value"></span>
        </li>
    </template>
    <!-- Output might be: make: Jeep, model: Grand Cherokee, color: Black -->
</ul>
```

---

## Iterating Over a Numeric Range with x-for in Alpine.js

**Description:** Shows a convenient way to use `x-for` to repeat a template a fixed number of times by iterating over an integer. `x-for="i in 10"` will loop 10 times, with `i` taking values from 1 to 10.

```html
<ul>
    <template x-for="i in 10">
        <li x-text="i"></li> <!-- Creates list items 1 through 10 -->
    </template>
</ul>
```

---

## Valid Template Structure in Alpine.js x-for

**Description:** Emphasizes that the `<template>` tag used with `x-for` must contain exactly one root element. If multiple elements need to be rendered per iteration, they must be wrapped within a single parent element (like the `<p>` tag in this example).

```html
<!-- Valid: Single <p> root element inside template -->
<div x-data="{ colors: ['Red', 'Orange'] }">
    <template x-for="color in colors">
        <p>
            <span>The next color is </span><span x-text="color"></span>
        </p>
    </template>
</div>
```

---

## Using Index as Key in x-for in Alpine.js

**Description:** Demonstrates using the loop `index` as the `:key`. While possible, this is generally discouraged if the list can be reordered, as the index itself is not a stable identifier for the item's data. It's better to use a unique ID from the data itself if available.

```html
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <!-- Using index as key: use with caution -->
    <template x-for="(color, index) in colors" :key="index">
         <li x-text="color"></li>
    </template>
</ul>
```

---

## Invalid Template Structure in Alpine.js x-for

**Description:** Shows an incorrect `x-for` structure. The `<template>` contains multiple root elements (`<span>` and `<span>`), which is not allowed by Alpine.js and will result in errors or unexpected behavior. These elements should be wrapped in a single parent element.

```html
<!-- Invalid: Multiple root elements inside template -->
<div x-data="{ colors: ['Red', 'Orange'] }">
    <template x-for="color in colors">
        <span>The next color is </span><span x-text="color"></span> <!-- Error! -->
    </template>
</div>
```

---