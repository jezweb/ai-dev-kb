---
title: "Alpine.js $data Magic Property"
category: "misc"
tags:
  - alpinejs
  - magic-property
  - $data
  - scope
  - data-access
  - component-state
  - inheritance
  - javascript
  - html
---

# Alpine.js $data Magic Property

**Summary:** This document explains the `$data` magic property in Alpine.js. It provides access to the current component's combined data scope, including properties inherited from parent `x-data` scopes. This is primarily useful for passing the entire reactive data context of a component to external JavaScript functions.

---

## Accessing Alpine.js Data Scope with $data

**Description:** This snippet demonstrates using the `$data` magic property to retrieve the current element's combined data scope (merging `{ greeting: 'Hello' }` and `{ name: 'Caleb' }`) and pass it as an argument to an external JavaScript function (`sayHello`). This allows external functions to interact with the component's full data context.

```html
<div x-data="{ greeting: 'Hello' }">
    <div x-data="{ name: 'Caleb' }">
        <!-- $data here resolves to { greeting: 'Hello', name: 'Caleb' } -->
        <button @click="sayHello($data)">Say Hello</button>
    </div>
</div>

<script>
    // External function accepting the data scope object
    function sayHello(dataScope) { // Using destructuring: function sayHello({ greeting, name })
        alert(dataScope.greeting + ' ' + dataScope.name + '!');
    }
</script>
```

---