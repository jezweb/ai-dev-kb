---
title: "Alpine.js Resize Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - resize
  - x-resize
  - resize-observer
  - element-size
  - width
  - height
  - $width
  - $height
  - modifier
  - document
  - javascript
  - html
---

# Alpine.js Resize Plugin Documentation

**Summary:** This document describes the Alpine.js Resize plugin (`@alpinejs/resize`), which provides the `x-resize` directive. This directive allows you to execute JavaScript code whenever an element's size changes, leveraging the browser's Resize Observer API for efficient detection. It provides `$width` and `$height` magic properties within the expression and includes a `.document` modifier to observe the entire document's size.

---

## Using x-resize Directive in Alpine.js

**Description:** This example demonstrates the basic usage of `x-resize`. The expression `width = $width; height = $height` runs whenever the `<div>` element changes size. The magic properties `$width` and `$height` provide the element's current dimensions (excluding padding and borders) within the expression, allowing the component's `width` and `height` data properties to be updated reactively.

```html
<!-- Make the div resizable for demonstration -->
<div
    x-data="{ width: 0, height: 0 }"
    x-resize="width = $width; height = $height"
    style="resize: both; overflow: auto; border: 1px solid black; min-width: 100px; min-height: 50px;"
>
    <p>Resize this box!</p>
    <p x-text="'Current Width: ' + width + 'px'"></p>
    <p x-text="'Current Height: ' + height + 'px'"></p>
</div>
```

---

## Using x-resize with .document Modifier in Alpine.js

**Description:** Shows the `.document` modifier for `x-resize`. Instead of observing the element the directive is placed on, `x-resize.document` observes changes to the size of the entire HTML document's root element (`<html>`). This can be useful for reacting to overall page layout changes.

```html
<!-- Expression runs when the document size changes -->
<div x-data x-resize.document="console.log('Document resized!', $width, $height)">
    Listening for document resize...
</div>
```

---

## Installing Alpine.js Resize Plugin via CDN

**Description:** Explains how to include the Resize plugin using a `<script>` tag from a CDN. The plugin script must be included *before* the core Alpine.js script in your HTML.

```html
<!-- Include Resize plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/resize@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---

## Installing Alpine.js Resize Plugin via NPM

**Description:** Demonstrates installing the Resize plugin using NPM and registering it with Alpine in a bundled JavaScript setup using `Alpine.plugin(resize)`.

```shell
npm install @alpinejs/resize
```

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import resize from '@alpinejs/resize' // Import the plugin

Alpine.plugin(resize) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---