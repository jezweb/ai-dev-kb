---
title: "Alpine.js $root Magic Property"
category: "misc"
tags:
  - alpinejs
  - magic-property
  - $root
  - dom-manipulation
  - element-access
  - root-element
  - component-scope
  - dataset
  - javascript
  - html
---

# Alpine.js $root Magic Property

**Summary:** This document explains the `$root` magic property in Alpine.js. Introduced in V3, `$root` provides direct access to the root DOM element of the current Alpine component (the element with the `x-data` directive). This is useful for accessing attributes or properties of the main component element from within nested elements or event handlers.

---

## Accessing Root Element Data with $root in Alpine.js

**Description:** This example demonstrates using `$root` to access the `dataset` property of the component's root `<div>` element from within a nested `<button>`. When the button is clicked, `$root.dataset.message` retrieves the value of the `data-message` attribute from the `<div>`, allowing the event handler to use it.

```html
<!-- The div is the root element of this component -->
<div x-data data-message="Hello World!">
    <!-- $root refers to the div above -->
    <button @click="alert($root.dataset.message)">Say Hi From Root Data</button>
</div>
```

---