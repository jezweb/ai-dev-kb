---
title: "Using x-cloak directive in Alpine.js"
category: "api"
tags:
  - alpinejs
  - directive
  - x-cloak
  - fouc
  - flicker
  - initialization
  - css
  - display-none
  - x-show
  - x-text
  - template-tag
  - x-if
  - html
---

# Using x-cloak directive in Alpine.js

**Summary:** This document explains the `x-cloak` directive in Alpine.js, a utility attribute used to prevent the "flash of unstyled content" (FOUC) or flickering that can occur before Alpine fully initializes and takes control of elements. It works by hiding elements marked with `x-cloak` via a global CSS rule until initialization is complete, after which Alpine removes the attribute. An alternative using `<template>` and `x-if` is also presented.

---

## Using x-cloak with x-text binding

**Description:** Demonstrates applying `x-cloak` alongside `x-text`. This prevents the element from being visible until Alpine initializes and populates its content with the `message` data, avoiding a brief flash of an empty element or placeholder content. Requires the global `[x-cloak] { display: none !important; }` CSS rule. See also [[../api/using_x-text_directive_in_alpine.js.md|x-text]].

```html
<!-- Assumes 'message' is defined in x-data -->
<span x-cloak x-text="message"></span>
```

---

## Basic x-cloak usage with x-show

**Description:** Shows how `x-cloak` prevents an element, intended to be initially hidden by `x-show="false"`, from briefly appearing on screen before Alpine evaluates the `x-show` condition. Requires the global `[x-cloak] { display: none !important; }` CSS rule. See also [[../api/alpine.js_x-show_directive_documentation.md|x-show]].

```html
<!-- This span will remain hidden both before and after Alpine initializes -->
<span x-cloak x-show="false">This will not 'blip' onto screen at any point</span>
```

---

## Configuring CSS for x-cloak functionality

**Description:** This essential CSS rule must be included globally (typically in your main stylesheet or `<head>`) for the `x-cloak` directive to function correctly. It hides any element with the `x-cloak` attribute until Alpine removes the attribute upon initialization.

```css
[x-cloak] { display: none !important; }
```

---

## Alternative template-based approach

**Description:** Presents an alternative method to prevent FOUC without relying on the global `x-cloak` CSS rule. By wrapping content in a `<template>` tag with an `x-if` directive that evaluates to true, the content is only added to the DOM after Alpine initializes and evaluates the condition. See also [[../api/alpine.js_x-if_directive_documentation.md|x-if]].

```html
<!-- This content is only added to the DOM after Alpine initializes -->
<template x-if="true">
    <span x-text="message"></span>
</template>
```

---