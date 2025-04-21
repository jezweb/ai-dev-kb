---
title: "Alpine.js $el Property Documentation"
category: "misc"
tags:
  - alpinejs
  - magic-property
  - $el
  - dom-manipulation
  - element-access
  - current-element
  - javascript
  - html
---

# Alpine.js $el Property Documentation

**Summary:** This document explains the `$el` magic property in Alpine.js. `$el` provides direct access to the current DOM element within which an Alpine expression is being evaluated. This allows for direct manipulation of the element using standard JavaScript DOM properties and methods.

---

## Using $el to Modify DOM Content in Alpine.js

**Description:** This snippet demonstrates using `$el` within an event handler (`@click`) to directly modify the `innerHTML` of the button element itself when it is clicked. `$el` provides a convenient reference to the element the directive is attached to.

```html
<!-- Clicking the button replaces its own text content -->
<button @click="$el.innerHTML = 'Hello World!'">Replace me with "Hello World!"</button>
```

---