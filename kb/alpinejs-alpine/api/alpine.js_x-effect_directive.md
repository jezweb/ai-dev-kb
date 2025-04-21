---
title: "Alpine.js x-effect Directive"
category: "api"
tags:
  - alpinejs
  - directive
  - x-effect
  - reactivity
  - side-effect
  - dependency-tracking
  - watch
  - javascript
---

# Alpine.js x-effect Directive

**Summary:** This document explains the `x-effect` directive in Alpine.js. This directive allows you to run a specific JavaScript expression immediately when the component initializes, and then automatically re-run it whenever any reactive data properties used within that expression change. It's useful for creating side effects that need to react to state updates, similar to watchers in other frameworks.

---

## Using x-effect to Monitor Property Changes in Alpine.js

**Description:** This example demonstrates the core functionality of `x-effect`. The expression `console.log(label)` is executed once initially. Because `label` is a reactive property accessed within the expression, Alpine tracks it as a dependency. When the button click modifies `label`, `x-effect` automatically re-runs the `console.log` statement with the updated value.

```html
<div x-data="{ label: 'Hello' }" x-effect="console.log(label)">
    <button @click="label += ' World!'">Change Message</button>
</div>
```

---