---
title: "x-id Directive in Alpine.js"
category: "api"
tags:
  - alpinejs
  - directive
  - x-id
  - $id
  - scope
  - unique-id
  - accessibility
  - component
  - html
  - javascript
---

# x-id Directive in Alpine.js

**Summary:** This document explains the `x-id` directive in Alpine.js. It is used to define a scope for generating unique IDs within a component, working in conjunction with the `$id` magic property. This is essential for creating accessible forms and components, ensuring that elements like labels and inputs can be correctly associated even when the component is used multiple times on the same page.

---

## Creating Unique IDs with x-id and $id in Alpine.js

**Description:** This example demonstrates how `x-id="['text-input']"` establishes a scope for ID generation. Within this scope, calls to `$id('text-input')` will generate unique IDs prefixed with 'text-input'. Even though two identical component structures are used, `x-id` ensures that the IDs generated within each scope (e.g., `text-input-1`, `text-input-2`) are unique across the page, allowing correct association between labels and inputs. See also [[../api/alpine.js_$id_utility.md|$id]].

```html
<div x-id="['text-input']">
    <label :for="$id('text-input')">Username</label>
    <!-- Generates unique ID like "text-input-1" -->

    <input type="text" :id="$id('text-input')">
    <!-- Generates the same unique ID "text-input-1" -->
</div>

<div x-id="['text-input']">
    <label :for="$id('text-input')">Password</label>
    <!-- Generates unique ID like "text-input-2" -->

    <input type="password" :id="$id('text-input')">
    <!-- Generates the same unique ID "text-input-2" -->
</div>
```

---