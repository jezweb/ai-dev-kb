---
title: "Alpine.js $nextTick Documentation"
category: "api"
tags:
  - alpinejs
  - magic-property
  - $nexttick
  - dom-update
  - async
  - await
  - promise
  - callback
  - timing
  - javascript
---

# Alpine.js $nextTick Documentation

**Summary:** This document explains the `$nextTick` magic property in Alpine.js, which allows executing code *after* Alpine has finished making its reactive DOM updates. It covers using `$nextTick` with both traditional callback functions and modern `async/await` syntax for managing timing-sensitive operations dependent on the latest DOM state.

---

## Promise-based $nextTick Usage in Alpine.js

**Description:** Shows how to use `$nextTick` as a promise combined with `async/await` syntax. This approach allows pausing execution within an event handler until after Alpine completes its DOM updates, providing a clean way to interact with the updated DOM state sequentially.

```html
<div x-data="{ title: 'Hello' }">
    <button
        @click="
            title = 'Hello World!';
            await $nextTick();
            // Now the DOM reflects 'Hello World!', so we can access the updated text
            console.log($el.innerText);
        "
        x-text="title"
    >Hello</button> <!-- Initial text -->
</div>
```

---

## Basic $nextTick Usage with Callback in Alpine.js

**Description:** Demonstrates the traditional callback-based approach for `$nextTick`. The provided callback function is executed only after Alpine.js finishes updating the DOM based on reactive data changes triggered within the same execution tick.

```html
<div x-data="{ title: 'Hello' }">
    <button
        @click="
            title = 'Hello World!';
            // The callback runs after the button's text is updated
            $nextTick(() => { console.log($el.innerText) });
        "
        x-text="title"
    >Hello</button> <!-- Initial text -->
</div>
```

---