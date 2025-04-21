---
title: "Alpine.js x-ref Directive"
category: "api"
tags:
  - alpinejs
  - directive
  - x-ref
  - $refs
  - dom-manipulation
  - element-access
  - javascript
  - html
---

# Alpine.js x-ref Directive

**Summary:** This document explains the `x-ref` directive in Alpine.js. This directive provides a way to assign a specific name to an element within an Alpine component, allowing you to easily access that DOM element directly from your JavaScript code using the `$refs` magic property.

---

## Using x-ref and $refs to Access DOM Elements in Alpine.js

**Description:** This snippet demonstrates the primary use case for `x-ref`: marking an element (the `<span>` with `x-ref="text"`) so it can be directly accessed via the `$refs` magic property. The button uses `$refs.text` to get a reference to the `<span>` element and then calls its native `remove()` method to manipulate the DOM. See also [[../api/alpine.js_$refs_magic_property.md|$refs]].

```html
<div x-data> <!-- x-data is required for $refs to work -->
    <button @click="$refs.text.remove()">Remove Text</button>

    <span x-ref="text">Hello 👋</span>
</div>
```

---