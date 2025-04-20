---
title: "Alpine.js Intersect Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - intersect
  - x-intersect
  - intersection-observer
  - viewport
  - scroll
  - lazy-loading
  - animation-trigger
  - modifier
  - once
  - enter
  - leave
  - half
  - full
  - threshold
  - margin
  - javascript
  - html
---

# Alpine.js Intersect Plugin Documentation

**Summary:** This document describes the Alpine.js Intersect plugin (`@alpinejs/intersect`), which provides the `x-intersect` directive to trigger JavaScript expressions when an element enters or leaves the browser's viewport. It leverages the browser's Intersection Observer API for efficient detection and offers various modifiers (`.once`, `.half`, `.full`, `.threshold`, `.margin`) to customize the intersection criteria.

---

## Using x-intersect:enter and x-intersect:leave in Alpine.js

**Description:** Shows the specific `:enter` and `:leave` variations of the `x-intersect` directive. `x-intersect:enter` (which is the default behavior if no suffix is provided) triggers the expression when the element enters the viewport. `x-intersect:leave` triggers when the element leaves the viewport.

```html
<!-- Trigger when element enters viewport -->
<div x-intersect:enter="console.log('Element entered viewport')">...</div>

<!-- Trigger when element leaves viewport -->
<div x-intersect:leave="console.log('Element left viewport')">...</div>
```

---

## Using x-intersect Directive in Alpine.js

**Description:** Demonstrates a common use case for `x-intersect`: triggering an animation or state change when an element scrolls into view. Here, `x-intersect="shown = true"` sets the `shown` property to true when the element enters the viewport, which in turn makes the inner `<div>` visible via `x-show` (potentially with an `x-transition`).

```html
<div x-data="{ shown: false }" x-intersect="shown = true" style="margin-top: 150vh; height: 100px; border: 1px solid black;"> <!-- Add margin/height for scrolling -->
    Scroll down...
    <div x-show="shown" x-transition style="display: none;">
        I'm in the viewport!
    </div>
</div>
```

---

## Using Modifiers with x-intersect in Alpine.js

**Description:** Illustrates various modifiers to fine-tune the intersection behavior:
- `.once`: Triggers the expression only the first time the element intersects.
- `.half`: Triggers when at least 50% of the element is visible.
- `.full`: Triggers only when 100% of the element is visible.
- `.threshold.[0-1]`: Triggers when a specific percentage (e.g., `.threshold.75` for 75%) of the element is visible.
- `.margin.[value]`: Adjusts the viewport boundary for intersection calculation (e.g., `.margin.200px` triggers 200px before the element actually enters, useful for pre-loading). Negative margins (`.margin.-100px`) can also be used. Complex margins (top/right/bottom/left) are supported.

```html
<!-- Trigger only once -->
<div x-intersect.once="console.log('Intersected once!')">...</div>

<!-- Trigger when 50% visible -->
<div x-intersect.half="console.log('At least half visible!')">...</div>

<!-- Trigger when 100% visible -->
<div x-intersect.full="console.log('Fully visible!')">...</div>

<!-- Trigger when 50% visible (alternative syntax) -->
<div x-intersect.threshold.50="console.log('Threshold 0.5 reached!')">...</div>

<!-- Trigger 200px before entering viewport -->
<div x-intersect.margin.200px="console.log('Approaching viewport (200px margin)!')">...</div>

<!-- Trigger with complex margin (top 10%, right/left 25px, bottom 25%) when leaving -->
<div x-intersect:leave.margin.10%.25px.25.25px="console.log('Leaving with complex margin')">...</div>

<!-- Trigger when element is 100px inside the viewport (negative margin) -->
<div x-intersect.margin.-100px="console.log('Intersecting with negative margin')">...</div>
```

---

## Installing Alpine.js Intersect Plugin via NPM

**Description:** Shows how to install the Intersect plugin using NPM and register it with Alpine in a bundled JavaScript environment using `Alpine.plugin(intersect)`.

```shell
npm install @alpinejs/intersect
```

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect' // Import the plugin

Alpine.plugin(intersect) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---

## Installing Alpine.js Intersect Plugin via CDN

**Description:** Explains how to include the Intersect plugin via a CDN `<script>` tag. The plugin script must be included *before* the core Alpine.js script.

```html
<!-- Include Intersect plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/intersect@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---