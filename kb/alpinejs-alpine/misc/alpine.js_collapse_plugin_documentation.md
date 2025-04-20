---
title: "Alpine.js Collapse Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - collapse
  - x-collapse
  - animation
  - transition
  - height
  - accordion
  - x-show
  - modifier
  - duration
  - min
  - javascript
  - html
  - css
---

# Alpine.js Collapse Plugin Documentation

**Summary:** This document describes the Alpine.js Collapse plugin (`@alpinejs/collapse`), which provides the `x-collapse` directive to smoothly animate the height of an element when it's shown or hidden, typically using `x-show`. It covers basic usage, installation via CDN or NPM, and customization using modifiers like `.duration` and `.min` for partial collapsing.

---

## Basic Usage of x-collapse Directive in Alpine.js

**Description:** Demonstrates the fundamental use of `x-collapse` in conjunction with `x-show`. When the `expanded` state changes, `x-show` toggles the element's display, and `x-collapse` automatically animates the element's height for a smooth transition instead of an abrupt appearance/disappearance. See also [[../api/alpine.js_x-show_directive_documentation.md|x-show]].

```html
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content</button>

    <p x-show="expanded" x-collapse style="overflow: hidden; display: none;"> <!-- Initially hidden -->
        Lorem ipsum dolor sit amet...
    </p>
</div>
```

---

## Using Duration Modifier with Alpine.js Collapse Plugin

**Description:** Shows how to customize the animation speed using the `.duration` modifier followed by a time value (e.g., `.1000ms`). This sets the duration for both the expand and collapse animations.

```html
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content (1s duration)</button>

    <p x-show="expanded" x-collapse.duration.1000ms style="overflow: hidden; display: none;">
        This transition takes 1 second...
    </p>
</div>
```

---

## Using Min Modifier with Alpine.js Collapse Plugin

**Description:** Demonstrates the `.min` modifier, which sets a minimum height (in pixels, e.g., `.min.50px`) for the element when it's in the collapsed state. Instead of collapsing to zero height, the element animates down to the specified minimum height, creating a "preview" or "cut-off" effect.

```html
<div x-data="{ expanded: false }">
    <button @click="expanded = ! expanded">Toggle Content (Min height 50px)</button>

    <p x-show="expanded" x-collapse.min.50px style="overflow: hidden; display: none;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</div>
```

---

## Installing Alpine.js Collapse Plugin via CDN in HTML

**Description:** Explains how to include the Collapse plugin using a `<script>` tag from a CDN. It's crucial that the plugin script is included *before* the core Alpine.js script tag in your HTML's `<head>`.

```html
<!-- Include Collapse plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---

## Initializing Alpine.js Collapse Plugin in JavaScript Bundle

**Description:** Shows how to import and register the Collapse plugin when using Alpine.js with a build tool (like Vite, Webpack) after installing it via NPM. Use `Alpine.plugin(collapse)` before calling `Alpine.start()`.

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse' // Import the plugin

Alpine.plugin(collapse) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---

## Installing Alpine.js Collapse Plugin via NPM

**Description:** Provides the command-line instruction for installing the Collapse plugin using the Node Package Manager (NPM).

```shell
npm install @alpinejs/collapse
```

---