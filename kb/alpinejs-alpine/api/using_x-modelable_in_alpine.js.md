---
title: "Using x-modelable in Alpine.js"
category: "api"
tags:
  - alpinejs
  - directive
  - x-modelable
  - x-model
  - data-binding
  - two-way-binding
  - component-communication
  - parent-child
  - state-sync
  - javascript
  - html
---

# Using x-modelable in Alpine.js

**Summary:** This document explains the `x-modelable` directive in Alpine.js. This directive allows a specific data property within a child component to be targeted by an `x-model` directive on the child component's root element, enabling two-way data binding between a parent component's state and a child component's internal state.

---

## Binding Variables with x-modelable in Alpine.js

**Description:** This snippet demonstrates how `x-modelable="count"` on the inner `<div>` designates the `count` property as the target for `x-model`. The `x-model="number"` directive then binds the outer scope's `number` property to the inner scope's `count` property. When the button increments `count`, the change is automatically reflected in the parent's `number` property due to this two-way binding established by `x-modelable` and `x-model`. See also [[../api/understanding_x-model_directive_in_alpine.js.md|x-model]].

```html
<div x-data="{ number: 5 }">
    <!-- Parent component -->
    Parent Number: <span x-text="number"></span>

    <!-- Child component -->
    <div x-data="{ count: 0 }" x-modelable="count" x-model="number">
        <button @click="count++">Increment Child Count</button>
        Child Count: <span x-text="count"></span>
    </div>
</div>
```

---