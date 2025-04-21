---
title: "Alpine.js Anchor Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - anchor
  - x-anchor
  - positioning
  - floating-ui
  - dropdown
  - tooltip
  - popover
  - modifier
  - offset
  - $anchor
  - $refs
  - javascript
  - html
  - css
---

# Alpine.js Anchor Plugin Documentation

**Summary:** This document describes the Alpine.js Anchor plugin (`@alpinejs/anchor`), which simplifies positioning floating elements (like dropdowns, tooltips) relative to other elements using the `x-anchor` directive. It leverages Floating UI for robust positioning logic and provides modifiers for placement (e.g., `.bottom-start`), offsets, and manual styling control via the `$anchor` magic property.

---

## Installing Alpine.js Anchor Plugin via NPM

**Description:** Shows the steps to install the Anchor plugin using NPM and register it with Alpine when using a JavaScript bundler. Import the plugin and use `Alpine.plugin(anchor)` before calling `Alpine.start()`.

```shell
npm install @alpinejs/anchor
```

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor' // Import the plugin

Alpine.plugin(anchor) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---

## Customizing Anchor Positioning with Modifiers in Alpine.js

**Description:** Demonstrates using placement modifiers with `x-anchor`. The `.bottom-start` modifier positions the anchored `<div>` below the `$refs.button` element, aligned to the start (left edge). Many other placement modifiers based on Floating UI are available (e.g., `.top`, `.left-end`, `.right`).

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <!-- Position below and aligned to the start (left) of the button -->
    <div x-show="open" x-anchor.bottom-start="$refs.button" style="display: none; border: 1px solid black; padding: 5px;">
        Dropdown content
    </div>
</div>
```

---

## Using x-anchor Directive for Dropdown Positioning in Alpine.js

**Description:** Shows the basic usage of the `x-anchor` directive. It dynamically positions the `<div>` relative to the element referenced by `$refs.button`. By default, it tries to find the best position (usually bottom-start). See also [[../api/alpine.js_$refs_magic_property.md|$refs]].

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <!-- Anchors the div to the button, default positioning -->
    <div x-show="open" x-anchor="$refs.button" style="display: none; border: 1px solid black; padding: 5px;">
        Dropdown content
    </div>
</div>
```

---

## Installing Alpine.js Anchor Plugin via CDN

**Description:** Shows how to include the Anchor plugin via a CDN `<script>` tag. Crucially, the plugin script must be included *before* the core Alpine.js script.

```html
<!-- Include Anchor plugin BEFORE Alpine core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/anchor@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---

## Adding Offset to Anchored Elements in Alpine.js

**Description:** Demonstrates the `.offset` modifier, which adds spacing (in pixels) between the anchor element and the floating element. `x-anchor.offset.10` adds a 10px offset.

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <!-- Positions with a 10px gap from the button -->
    <div x-show="open" x-anchor.offset.10="$refs.button" style="display: none; border: 1px solid black; padding: 5px;">
        Dropdown content
    </div>
</div>
```

---

## Manual Styling of Anchored Elements in Alpine.js

**Description:** Shows how to disable the plugin's automatic styling using `.no-style` and manually apply positioning using the `$anchor` magic property. `$anchor.x` and `$anchor.y` provide the calculated coordinates from Floating UI, allowing custom style application via `x-bind:style`. See also [[../misc/magic_properties_overview.md|$anchor]].

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div
        x-show="open"
        x-anchor.no-style="$refs.button"
        x-bind:style="{ position: 'absolute', top: $anchor.y+'px', left: $anchor.x+'px' }"
        style="display: none; border: 1px solid black; padding: 5px;"
    >
        Dropdown content (Manual Position)
    </div>
</div>
```

---

## Anchoring to an Element by ID in Alpine.js

**Description:** Demonstrates anchoring to an element referenced by its ID using standard JavaScript `document.getElementById()`. The result of this function call (the DOM element) is passed to `x-anchor`.

```html
<div x-data="{ open: false }">
    <button id="myTriggerButton" @click="open = ! open">Toggle</button>

    <!-- Anchors to the button using its ID -->
    <div x-show="open" x-anchor="document.getElementById('myTriggerButton')" style="display: none; border: 1px solid black; padding: 5px;">
        Dropdown content
    </div>
</div>
```

---