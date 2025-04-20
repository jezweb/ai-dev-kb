---
title: "Using $store in Alpine.js"
category: "misc"
tags:
  - alpinejs
  - magic-property
  - $store
  - global-state
  - state-management
  - Alpine.store
  - reactivity
  - component-communication
  - javascript
  - html
---

# Using $store in Alpine.js

**Summary:** This document explains the `$store` magic property, Alpine.js's primary mechanism for accessing global state defined using `Alpine.store()`. Learn how to read store properties (e.g., `$store.storeName.property`) and call store methods (e.g., `$store.storeName.method()`) within your components to create reactive UIs and enable communication across different parts of your application. Examples cover both object-based and single-value stores. See also [[../guide/alpine.store_global_state_management.md|Alpine.store]].

---

## Using Object-Based Store with $store for Dark Mode Toggle in Alpine.js

**Description:** This example demonstrates accessing an object-based global store named `darkMode` (registered via `Alpine.store('darkMode', {...})`). The button uses `@click` to call the store's `toggle` method (`$store.darkMode.toggle()`). The `div` uses `:class` to reactively bind a CSS class based on the store's `on` property (`$store.darkMode.on`).

```html
<!-- Assumes 'darkMode' store is registered as an object -->

<!-- Button calls a method on the store -->
<button x-data @click="$store.darkMode.toggle()">Toggle Dark Mode</button>

...

<!-- Div reactively binds class based on a store property -->
<div x-data :class="$store.darkMode.on && 'bg-black text-white'">
    Content Area
</div>


<script>
    // Store registration (typically in alpine:init)
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', {
            on: false,
            toggle() {
                this.on = ! this.on
            }
        })
    })
</script>
```

---

## Using Single-Value Store with $store for Dark Mode Toggle in Alpine.js

**Description:** This example shows accessing a simpler, single-value global store (registered via `Alpine.store('darkMode', false)`). The button directly toggles the boolean value using `$store.darkMode = ! $store.darkMode`. The `div` reactively binds its class directly to the boolean value accessed via `$store.darkMode`.

```html
<!-- Assumes 'darkMode' store is registered as a boolean -->

<!-- Button directly toggles the store's boolean value -->
<button x-data @click="$store.darkMode = ! $store.darkMode">Toggle Dark Mode</button>

...

<!-- Div reactively binds class based on the store's boolean value -->
<div x-data :class="$store.darkMode && 'bg-black text-white'">
    Content Area
</div>


<script>
    // Store registration (typically in alpine:init)
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', false) // Registering a primitive value
    })
</script>
```

---