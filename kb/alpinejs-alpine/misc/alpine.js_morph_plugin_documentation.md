---
title: "Alpine.js Morph Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - morph
  - Alpine.morph
  - dom-diffing
  - state-preservation
  - ui-update
  - lifecycle-hooks
  - key
  - lookahead
  - javascript
  - html
---

# Alpine.js Morph Plugin Documentation

**Summary:** This document describes the Alpine.js Morph plugin (`@alpinejs/morph`), which provides the `Alpine.morph()` utility. This function intelligently updates existing DOM elements to match a new HTML structure, preserving the state of Alpine components and minimizing disruptive DOM changes. It's useful for updating parts of the page fetched from the server without losing client-side interactivity. The plugin offers lifecycle hooks and configuration options for fine-grained control.

---

## Alpine.js Morph Basic Usage Example

**Description:** Demonstrates the core functionality of `Alpine.morph(existingElement, newHtml)`. When the button is clicked, the `Alpine.morph()` function compares the current `<div>` structure with the `newHtml` string. It intelligently adds the `<h2>` elements while preserving the existing `<div>`, `<input>`, and `<span>` and, crucially, maintaining the current value of the `message` property in the component's state.

```html
<div x-data="{ message: 'Change me, then press the button!' }">
    <input type="text" x-model="message">
    <span x-text="message"></span>
</div>

<button id="morphButton">Run Morph</button>

<script>
    document.getElementById('morphButton').addEventListener('click', () => {
        let el = document.querySelector('div[x-data]'); // Target the existing element

        let newHtml = `
            <div x-data="{ message: 'This initial message is ignored!' }">
                <h2>New Heading Added</h2>
                <input type="text" x-model="message">
                <span x-text="message"></span>
                <h2>Another New Heading</h2>
            </div>
        `;

        // Morph the existing element to match the new structure
        Alpine.morph(el, newHtml);
        // The input and span will retain the user-modified 'message' value.
    });
</script>
```

---

## Alpine.js Morph Lifecycle Hooks Configuration

**Description:** Shows the available configuration options object that can be passed as the third argument to `Alpine.morph()`. These hooks (`updating`, `updated`, `removing`, `removed`, `adding`, `added`) allow intercepting and modifying the morphing process at different stages. The `key` function defines how elements are matched (defaulting to the `key` attribute), and `lookahead` enables a more advanced diffing mode.

```javascript
Alpine.morph(el, newHtml, {
    // Called before an element is updated
    updating(el, toEl, childrenOnly, skip) {
        // el: Current element
        // toEl: New element state
        // childrenOnly: If true, only children will be morphed
        // skip(): Function to skip morphing this element
        // Example: skip() if el.hasAttribute('data-no-morph')
    },
    // Called after an element is updated
    updated(el, toEl) {
        // ...
    },
    // Called before an element is removed
    removing(el, skip) {
        // skip(): Function to prevent removal
        // Example: Add fade-out animation, then call skip() until done
    },
    // Called after an element has been removed
    removed(el) {
        // ...
    },
    // Called before a new element is added
    adding(el, skip) {
        // skip(): Function to prevent addition
    },
    // Called after a new element has been added
    added(el) {
        // Example: Add fade-in animation
    },
    // Function to determine the key for matching elements
    key(el) {
        // Default uses 'key' attribute, fallback to id
        return el.getAttribute('key') || el.id;
    },
    // Enables a more sophisticated diffing algorithm (default: false)
    lookahead: false,
})
```

---

## Installing Alpine.js Morph via CDN

**Description:** Explains how to include the Morph plugin using a `<script>` tag from a CDN. The plugin script (`@alpinejs/morph`) must be included *before* the core Alpine.js script.

```html
<!-- Include Morph plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/morph@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---

## Initializing Alpine.js Morph Plugin

**Description:** Shows how to import and register the Morph plugin when using Alpine.js with a build tool (like Vite, Webpack) after installing it via NPM. Use `Alpine.plugin(morph)` before calling `Alpine.start()`.

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import morph from '@alpinejs/morph' // Import the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.plugin(morph) // Register the plugin

Alpine.start()
```

---

## Installing Alpine.js Morph via NPM

**Description:** Provides the command-line instruction for installing the Morph plugin using the Node Package Manager (NPM).

```shell
npm install @alpinejs/morph
```

---