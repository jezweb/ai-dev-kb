---
title: "Alpine.js $refs Magic Property"
category: "api"
tags:
  - alpinejs
  - magic-property
  - $refs
  - directive
  - x-ref
  - dom-manipulation
  - element-access
  - x-for
  - dynamic-binding
  - limitation
  - javascript
---

# Alpine.js $refs Magic Property

**Summary:** This document details the `$refs` magic property in Alpine.js, which grants direct access to DOM elements marked with the `x-ref` directive within a component's scope. It demonstrates how `$refs` can be used for direct DOM manipulation, such as removing elements, and highlights a known limitation in V3 where `x-ref` cannot be dynamically bound within `x-for` loops.

---

## Using $refs to Remove an Element in Alpine.js

**Description:** This snippet demonstrates using the `$refs` magic property to directly access and manipulate a DOM element marked with `x-ref`. The button's click handler accesses the `<span>` element via `$refs.text` and calls its native `remove()` method. See also [[../api/alpine.js_x-ref_directive.md|x-ref]].

```html
<button @click="$refs.text.remove()">Remove Text</button>

<span x-ref="text">Hello 👋</span>
```

---

## Limitation of $refs with Dynamic Binding in Alpine.js V3

**Description:** This snippet illustrates a limitation in Alpine.js V3: the `x-ref` directive cannot be dynamically bound using `:x-ref` within an `x-for` loop. Attempting to do so results in `$refs` containing the literal string (e.g., 'item.name') rather than referencing the element based on the dynamic value. See also [[../api/alpine.js_x-ref_directive.md|x-ref]].

```html
<!-- Note: :x-ref="item.name" does NOT work as expected in V3 -->
<template x-for="item in items" :key="item.id" >
    <div :x-ref="item.name">
    some content ...
    </div>
</template>
```

---