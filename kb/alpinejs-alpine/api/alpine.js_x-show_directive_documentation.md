---
title: "Alpine.js x-show Directive Documentation"
category: "api"
tags:
  - alpinejs
  - directive
  - x-show
  - visibility
  - toggle
  - conditional-display
  - css
  - display-none
  - x-transition
  - animation
  - modifier
  - important
  - javascript
  - html
---

# Alpine.js x-show Directive Documentation

**Summary:** This document explains the `x-show` directive in Alpine.js, used to toggle the visibility of an element by manipulating its `display: none;` CSS style. Based on the truthiness of a JavaScript expression, `x-show` adds or removes the style. It also integrates seamlessly with `x-transition` for smooth animations and offers an `.important` modifier to handle CSS specificity conflicts.

---

## Basic x-show Usage in Alpine.js

**Description:** Demonstrates the fundamental use of `x-show` to conditionally display an element. The `<div>`'s visibility is toggled by adding or removing an inline `display: none;` style based on the boolean value of the `open` state property.

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show="open" style="display: none;"> <!-- Initially hidden -->
        Dropdown Contents...
    </div>
</div>
```

---

## x-show with Transitions in Alpine.js

**Description:** Shows how `x-show` works in conjunction with the `x-transition` directive. Alpine manages the transition classes during the show/hide process, allowing for smooth, animated appearances and disappearances instead of abrupt toggling. See also [[../api/alpine.js_x-transition_directive.md|x-transition]].

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show="open" x-transition style="display: none;"> <!-- Initially hidden -->
        Dropdown Contents...
    </div>
</div>
```

---

## x-show with Important Modifier in Alpine.js

**Description:** Illustrates the use of the `.important` modifier with `x-show`. This modifier adds `!important` to the inline `display: none !important;` style, ensuring that `x-show` can hide the element even if other CSS rules with `!important` are trying to force it to display.

```html
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <!-- Use .important if another style like .d-block !important conflicts -->
    <div x-show.important="open" style="display: none;">
        Dropdown Contents...
    </div>
</div>
```

---