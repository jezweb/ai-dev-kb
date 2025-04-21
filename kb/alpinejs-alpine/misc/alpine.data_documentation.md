---
title: "Alpine.data Documentation"
category: "misc"
tags:
  - alpinejs
  - Alpine.data
  - reusable-components
  - component-registration
  - x-data
  - parameters
  - init-method
  - destroy-method
  - lifecycle
  - magic-properties
  - $watch
  - x-bind
  - encapsulation
  - javascript
  - html
  - alpine:init
---

# Alpine.data Documentation

**Summary:** This document explains `Alpine.data()`, a core feature for creating reusable, named component logic in Alpine.js. Learn how to register components globally (typically within `alpine:init`), instantiate them using `x-data="componentName"`, pass parameters for customization, access magic properties and lifecycle hooks (`init`, `destroy`) within the component definition, and encapsulate directives using `x-bind`.

---

## Creating a Reusable Dropdown Component with Alpine.data

**Description:** Demonstrates the basic pattern for defining a reusable component named 'dropdown' using `Alpine.data()`. The function returns an object containing the component's initial state (`open: false`) and methods (`toggle`). This component can then be attached to any HTML element using `x-data="dropdown"`. Registration typically occurs within an `alpine:init` event listener.

```html
<!-- Instantiate the dropdown component -->
<div x-data="dropdown">
    <button @click="toggle">Toggle Dropdown</button>
    <div x-show="open" style="display: none;">Dropdown Content</div>
</div>

<script>
    // Register the component logic
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            open: false,
            toggle() {
                this.open = ! this.open
            }
        }))
    })
</script>
```

---

## Defining a Dropdown Component in a Separate File

**Description:** Shows how to organize reusable component logic by defining the component function in a separate JavaScript file (`./dropdown.js`) and exporting it. This promotes modularity, especially in projects using a build process.

```javascript
// ./dropdown.js
// Defines the logic for the dropdown component
export default () => ({
    open: false,
    toggle() {
        this.open = ! this.open
    }
})
```

---

## Passing Parameters to Alpine.data Components

**Description:** Illustrates how to make `Alpine.data` components configurable by defining the registration function to accept parameters. When instantiating the component with `x-data="dropdown(true)"`, the provided value (`true`) is passed as an argument (`initialOpenState`) to the registration function, allowing customization of the initial state.

```html
<!-- Pass 'true' to set the initial open state -->
<div x-data="dropdown(true)">
    <button @click="toggle">Initially Open Dropdown</button>
    <div x-show="open">Content</div>
</div>
```

```javascript
// In alpine:init listener or before Alpine.start()
Alpine.data('dropdown', (initialOpenState = false) => ({ // Accept parameter with default
    open: initialOpenState, // Use parameter to set initial state
    toggle() { this.open = !this.open }
}))
```

---

## Using Magic Properties in Alpine.data Components

**Description:** Demonstrates that magic properties and methods (like `$watch`, `$el`, `$refs`, `$dispatch`, etc.) are accessible within the component object returned by `Alpine.data()` using the `this` keyword (e.g., `this.$watch`). This example uses `$watch` inside the `init` lifecycle hook. See also [[../misc/magic_properties_overview.md|Magic Properties]].

```javascript
// In alpine:init listener or before Alpine.start()
Alpine.data('dropdown', () => ({
    open: false,
    init() {
        // Access $watch via 'this'
        this.$watch('open', (value) => {
            console.log(`Dropdown open state changed to: ${value}`);
        })
    },
    toggle() { this.open = !this.open }
}))
```

---

## Registering Alpine Components from a Bundle

**Description:** Shows the process of registering components defined in separate files when using Alpine.js with a module bundler (like Vite, Webpack). Import the component logic and then register it using `Alpine.data('componentName', importedLogic)` *before* calling `Alpine.start()`.

```javascript
// main.js (or your bundle entry point)
import Alpine from 'alpinejs'
import dropdown from './dropdown.js' // Import component logic

// Register the imported logic
Alpine.data('dropdown', dropdown)

// Optional: Make Alpine global
window.Alpine = Alpine

// Start Alpine AFTER registration
Alpine.start()
```

---

## Using Init Functions in Alpine.data Components

**Description:** Explains the `init()` lifecycle hook within an `Alpine.data` component. This function is automatically executed by Alpine when the component is initialized, providing a dedicated place for setup logic that needs to run before rendering. See also [[../guide/alpine.js_lifecycle_documentation.md|Lifecycle Events]].

```javascript
// In alpine:init listener or before Alpine.start()
Alpine.data('dropdown', () => ({
    init() {
        // Runs automatically when x-data="dropdown" is initialized
        console.log('Dropdown component initializing...');
    },
    open: false,
    toggle() { this.open = !this.open }
}))
```

---

## Implementing Component Cleanup with Destroy Functions

**Description:** Demonstrates the `destroy()` lifecycle hook, which runs when an Alpine component is removed from the DOM (e.g., by `x-if` or manual removal). It's crucial for cleaning up resources like event listeners or timers (like `setInterval` shown here) to prevent memory leaks. See also [[../guide/alpine.js_lifecycle_documentation.md|Lifecycle Events]].

```javascript
// In alpine:init listener or before Alpine.start()
Alpine.data('timer', () => ({
    timer: null,
    counter: 0,
    init() {
      console.log('Timer init');
      this.timer = setInterval(() => {
        console.log('Increased counter to', ++this.counter);
      }, 1000);
    },
    destroy() {
        // Clean up the interval when the component is removed
        console.log('Timer destroy, clearing interval');
        clearInterval(this.timer);
    },
}))
```

---

## Encapsulating Directives with x-bind in Alpine Components

**Description:** Shows an advanced pattern using `x-bind` to apply multiple attributes and directives defined within the `Alpine.data` object. This allows encapsulating complex behavior (like trigger logic and dialogue visibility/closing) within the JavaScript definition, keeping the HTML cleaner and more declarative. See also [[../api/using_x-bind_directive_in_alpine.js.md|x-bind]].

```html
<div x-data="dropdown">
    <button x-bind="trigger">Toggle Dropdown</button>
    <div x-bind="dialogue" style="display: none; border: 1px solid black; padding: 10px; margin-top: 5px;">Dropdown Content</div>
</div>
```

```javascript
// In alpine:init listener or before Alpine.start()
Alpine.data('dropdown', () => ({
    open: false,
    trigger: { // Object for the button
        ['@click']() {
            this.open = ! this.open
        },
        ['aria-expanded']() { return this.open }, // Example attribute binding
        ['aria-controls']: 'dropdown-content' // Example static attribute
    },
    dialogue: { // Object for the dropdown content
        ['x-show']() {
            return this.open
        },
        ['@click.outside']() {
             this.open = false
        },
        id: 'dropdown-content' // Example static attribute
    },
}))
```

---

## Component Destruction Example with x-if

**Description:** Provides a practical example of when the `destroy()` lifecycle hook (shown in a previous snippet for the 'timer' component) would be triggered. When the `enabled` property becomes false, the `<template x-if="enabled">` removes the `<div>` containing the `x-data="timer"` component from the DOM, causing Alpine to call its `destroy()` method. See also [[../api/alpine.js_x-if_directive_documentation.md|x-if]].

```html
<div x-data="{ enabled: true }">
    <button @click="enabled = !enabled">Toggle Timer Component</button>

    <template x-if="enabled">
        <!-- The 'timer' component's init() runs when added, destroy() runs when removed -->
        <div x-data="timer">Timer Count: <span x-text="counter"></span></div>
    </template>
</div>

<!-- Assume 'timer' component with init/destroy is registered as shown previously -->
```

---