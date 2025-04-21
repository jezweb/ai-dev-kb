---
title: "Alpine.store: Global State Management"
category: "guide"
tags:
  - alpinejs
  - state-management
  - global-state
  - Alpine.store
  - $store
  - reactivity
  - component-communication
  - init-method
  - alpine:init
  - javascript
  - html
---

# Alpine.store: Global State Management

**Summary:** This guide details Alpine.js's global state management solution using `Alpine.store()`. Learn how to define reactive global stores (either objects with properties and methods or simple primitive values), register them during initialization, and access/modify them from any component using the `$store` magic property. It also covers store initialization logic using the `init()` method and external access via JavaScript.

---

## Registering an Alpine Store using script tag

**Description:** Shows the standard method for defining an `Alpine.store()` when including Alpine via a `<script>` tag. The store definition (e.g., `Alpine.store('darkMode', {...})`) must be placed within an event listener for the `alpine:init` event, which fires before Alpine starts initializing components.

```html
<script>
    document.addEventListener('alpine:init', () => {
        // Define the 'darkMode' store
        Alpine.store('darkMode', {
            on: false, // Initial state property

            toggle() { // Method to modify state
                this.on = ! this.on
            }
        })
    })
</script>
```

---

## Registering an Alpine Store from a bundle

**Description:** Demonstrates defining an `Alpine.store()` when using Alpine as an imported module in a build process (e.g., with Vite or Webpack). In this setup, stores are typically defined after importing `Alpine` but *before* calling `Alpine.start()`.

```javascript
// In your main JS bundle (e.g., app.js)
import Alpine from 'alpinejs'

// Define the store before starting Alpine
Alpine.store('darkMode', {
    on: false,

    toggle() {
        this.on = ! this.on
    }
})

// Make Alpine available globally (optional)
window.Alpine = Alpine

// Start Alpine AFTER defining stores
Alpine.start()
```

---

## Accessing Alpine store data in components

**Description:** Shows how to access properties from a registered global store within component directives using the `$store` magic property (e.g., `$store.darkMode.on`). Changes in the store property will reactively update the component. See also [[../misc/magic_properties_overview.md|$store]].

```html
<!-- This div's class changes reactively based on the store's 'on' property -->
<div x-data :class="$store.darkMode.on && 'bg-black text-white'">
    Content area
</div>
```

---

## Modifying Alpine store properties with reactive updates

**Description:** Demonstrates modifying global store state from a component. Calling a method (like `$store.darkMode.toggle()`) or directly setting a property (`$store.darkMode.on = true`) within an event handler updates the global store, and all components accessing that store data will react accordingly.

```html
<button x-data @click="$store.darkMode.toggle()">Toggle Dark Mode</button>
```

---

## Initializing Alpine stores with the init() method

**Description:** Illustrates using a special `init()` method within a store definition. This method runs automatically when the store is initialized, allowing for setup logic like reading initial values from `localStorage` or browser APIs (like `window.matchMedia` shown here).

```javascript
// Inside 'alpine:init' listener or before Alpine.start() in a bundle
Alpine.store('darkMode', {
    init() {
        // Set initial state based on user's OS preference
        this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
    },

    on: false, // Default value before init runs

    toggle() {
        this.on = ! this.on
    }
})
```

---

## Creating and using single-value Alpine stores

**Description:** Shows that `Alpine.store()` can also hold simple primitive values (like booleans, strings, or numbers) directly, not just objects. This provides a lightweight way to manage simple global flags or settings.

```html
<!-- Component toggling the boolean store -->
<button x-data @click="$store.darkMode = ! $store.darkMode">Toggle Dark Mode</button>

<!-- Component reacting to the boolean store -->
<div x-data :class="$store.darkMode && 'bg-black text-white'">
    ...
</div>


<script>
    // Inside 'alpine:init' listener or before Alpine.start()
    // Define 'darkMode' store directly as a boolean
    Alpine.store('darkMode', false)
</script>
```

---

## Accessing Alpine store externally from JavaScript

**Description:** Demonstrates how to interact with a registered Alpine store from regular JavaScript code outside of Alpine components. Calling `Alpine.store('storeName')` *without* a second argument returns the reactive store object (or primitive value), allowing you to read or modify it.

```javascript
// Example: Toggling the darkMode store from external JS
// Ensure this runs after the store has been registered
function externalToggle() {
    if (Alpine.store('darkMode')) { // Check if store exists
        // If it's an object with a method:
        // Alpine.store('darkMode').toggle();

        // If it's a primitive boolean store:
        Alpine.store('darkMode', !Alpine.store('darkMode'));
        console.log('Dark mode toggled externally:', Alpine.store('darkMode'));
    }
}
// externalToggle(); // Call this function when needed
```

---