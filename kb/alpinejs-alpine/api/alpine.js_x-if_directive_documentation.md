---
title: "Alpine.js x-if Directive Documentation"
category: "api"
tags:
  - alpinejs
  - directive
  - x-if
  - conditional-rendering
  - dom-manipulation
  - template-tag
  - javascript
  - html
---

# Alpine.js x-if Directive Documentation

**Summary:** This document explains the `x-if` directive in Alpine.js, which is used for conditionally rendering elements. Unlike `x-show` which toggles visibility via CSS, `x-if` completely adds or removes the element (and its children) from the DOM based on the truthiness of a JavaScript expression. It must be used on a `<template>` tag.

---

## Using x-if directive with template tag in Alpine.js

**Description:** This snippet demonstrates the required usage of the `x-if` directive on a `<template>` tag for conditional DOM rendering. The `<div>` element inside the template will only be present in the DOM when the `open` variable evaluates to true. If `open` is false, the `<div>` is completely removed. Note that `x-if` relies on a parent element having an `x-data` scope where `open` is defined.

```html
<template x-if="open">
    <div>Conditionally Rendered Contents...</div>
</template>
```

---