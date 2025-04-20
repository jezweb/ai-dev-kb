---
title: "Alpine.js Persist Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - persist
  - $persist
  - state-persistence
  - localstorage
  - sessionstorage
  - cookies
  - custom-storage
  - Alpine.store
  - Alpine.data
  - javascript
  - html
---

# Alpine.js Persist Plugin Documentation

**Summary:** This document describes the Alpine.js Persist plugin (`@alpinejs/persist`), which provides the `$persist` magic helper to automatically save component or store data to browser storage (localStorage by default) and restore it on page load. It covers basic usage within `x-data`, installation via CDN/NPM, using custom storage keys with `.as()`, switching to `sessionStorage` or custom storage mechanisms with `.using()`, and integrating with `Alpine.store()` and `Alpine.data()`.

---

## Using Alpine.$persist Global with Alpine.store

**Description:** Demonstrates using the globally available `Alpine.$persist` function (available after the plugin is registered) to persist properties within an `Alpine.store()`. This allows global state to persist across page loads. The `.as()` modifier provides a specific key for localStorage. See also [[../guide/alpine.store_global_state_management.md|Alpine.store]].

```javascript
// Inside 'alpine:init' or before Alpine.start()
Alpine.store('darkMode', {
    // Persist the 'on' property under the key 'darkMode_on' in localStorage
    on: Alpine.$persist(false).as('darkMode_on')
});
```

---

## Implementing Custom Storage for Persistence in Alpine.js

**Description:** Shows how to define a custom storage object adhering to the `getItem(key)` / `setItem(key, value)` interface (using cookies in this example) and instruct `$persist` to use it via the `.using(storageObject)` modifier. This allows persisting data in places other than localStorage or sessionStorage.

```html
<script>
    // Simple cookie storage implementation (for demonstration)
    window.cookieStorage = {
        getItem(key) {
            let cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].split("=");
                if (key == cookie[0].trim()) {
                    // Attempt to parse JSON, fallback to raw value
                    try { return JSON.parse(decodeURIComponent(cookie[1])); } catch (e) { return decodeURIComponent(cookie[1]); }
                }
            }
            return null;
        },
        setItem(key, value) {
            // Store as JSON string
            document.cookie = key + '=' + encodeURIComponent(JSON.stringify(value));
        }
    };
</script>

<!-- Use the custom cookieStorage with .using() -->
<div x-data="{ count: $persist(0).using(cookieStorage) }">
    <button x-on:click="count++">Increment (Cookie)</button>
    <span x-text="count"></span>
</div>
```

---

## Basic Usage of $persist Method in Alpine.js

**Description:** Demonstrates the simplest use of the `$persist` magic helper within `x-data`. It wraps the initial value (`0`) for the `count` property. Alpine will automatically save the `count` value to `localStorage` whenever it changes and restore it when the page loads. The default storage key is '_x_count'.

```html
<div x-data="{ count: $persist(0) }">
    <button x-on:click="count++">Increment (localStorage)</button>
    <span x-text="count"></span>
</div>
```

---

## Using sessionStorage for Persistence in Alpine.js

**Description:** Shows how to use the `.using()` modifier to specify `sessionStorage` instead of the default `localStorage`. Data persisted in `sessionStorage` is cleared when the browser tab/session ends.

```html
<div x-data="{ count: $persist(0).using(sessionStorage) }">
    <button x-on:click="count++">Increment (sessionStorage)</button>
    <span x-text="count"></span>
</div>
```

---

## Using Custom Keys for Persisted Values in Alpine.js

**Description:** Demonstrates the `.as()` modifier, which allows you to define a custom key ('other-count') under which the data will be stored in localStorage. This is essential if you have multiple components on the same page that might otherwise try to persist a property with the same name (like 'count').

```html
<!-- First counter using default key '_x_count' -->
<div x-data="{ count: $persist(0) }">
    <button x-on:click="count++">Increment Default</button>
    <span x-text="count"></span>
</div>

<!-- Second counter using custom key 'other-count' -->
<div x-data="{ count: $persist(0).as('other-count') }">
    <button x-on:click="count++">Increment Other</button>
    <span x-text="count"></span>
</div>
```

---

## Importing and Initializing Alpine.js Persist in JavaScript Bundle

**Description:** Shows how to import and register the Persist plugin when using Alpine.js with a build tool after installing via NPM. Use `Alpine.plugin(persist)` before calling `Alpine.start()`.

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist' // Import the plugin

Alpine.plugin(persist) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---

## Installing Alpine.js Persist Plugin via CDN

**Description:** Explains how to include the Persist plugin via a CDN `<script>` tag. The plugin script must be included *before* the core Alpine.js script.

```html
<!-- Include Persist plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---

## Using $persist with Alpine.data in Alpine.js

**Description:** Demonstrates the correct way to use `$persist` within a reusable component defined using `Alpine.data()`. It's important to use a standard `function` declaration (not an arrow function) for the `Alpine.data` callback to ensure `this` correctly refers to the Alpine component instance where `$persist` is available. See also [[../misc/alpine.data_documentation.md|Alpine.data]].

```javascript
// Inside 'alpine:init' or before Alpine.start()
Alpine.data('dropdown', function () { // Use standard function for correct 'this'
    return {
        // Persist the 'open' state for this component type
        open: this.$persist(false).as('dropdown_open') // Use this.$persist
    }
})
```

---

## Installing Alpine.js Persist Plugin via NPM

**Description:** Provides the command-line instruction for installing the Persist plugin using the Node Package Manager (NPM).

```shell
npm install @alpinejs/persist
```

---