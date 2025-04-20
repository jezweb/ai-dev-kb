---
title: "Alpine.js Focus Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - focus
  - x-trap
  - $focus
  - accessibility
  - keyboard-navigation
  - focus-trapping
  - modal
  - dialog
  - modifier
  - inert
  - noreturn
  - noscroll
  - javascript
  - html
---

# Alpine.js Focus Plugin Documentation

**Summary:** This document describes the Alpine.js Focus plugin (`@alpinejs/focus`), providing tools for managing browser focus and enhancing keyboard navigation accessibility. It introduces the `x-trap` directive for trapping focus within elements (like modals) and the `$focus` magic property for programmatically controlling focus, including navigating between elements, wrapping focus, and targeting specific elements within a scope.

---

## Advanced Focus Control with Custom Triggers in Alpine.js

**Description:** Demonstrates advanced focus management using `$focus`. Buttons trigger focusing the first or last focusable element within a specific scope (`$refs.buttons`) using `$focus.within(...).first()` and `$focus.within(...).last()`. Additionally, it implements wrap-around arrow key navigation within that same scope using `$focus.wrap().next()` and `$focus.wrap().previous()`. See also [[../misc/magic_properties_overview.md|$focus]].

```html
<div x-data>
    <button @click="$focus.within($refs.buttons).first()">Focus "First"</button>
    <button @click="$focus.within($refs.buttons).last()">Focus "Last"</button>

    <div
        x-ref="buttons"
        @keydown.right.prevent="$focus.wrap().next()"
        @keydown.left.prevent="$focus.wrap().previous()"
        class="mt-2 border p-2"
    >
        <button class="border p-1 m-1">First</button>
        <button class="border p-1 m-1">Second</button>
        <button class="border p-1 m-1">Third</button>
    </div>
</div>
```

---

## Using x-trap Directive in Alpine.js

**Description:** Illustrates the basic use of `x-trap` to constrain focus within a specific element (like a modal or dialog) when it's active (`open` is true). When `x-trap` is active, pressing Tab or Shift+Tab cycles focus only among the focusable elements inside the trapped element, preventing focus from escaping to the rest of the page.

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Dialog</button>

    <div x-show="open" x-trap="open" style="display: none; border: 1px solid black; padding: 10px; margin-top: 5px;">
        <p>Focus is trapped here when open.</p>
        <input type="text" placeholder="Some input...">
        <input type="text" placeholder="Some other input...">
        <button @click="open = false">Close Dialog</button>
    </div>
</div>
```

---

## Basic Focus Navigation with Arrow Keys in Alpine.js

**Description:** Demonstrates implementing simple keyboard navigation using the `$focus` magic property. `@keydown.right` calls `$focus.next()` to move focus to the next focusable element, and `@keydown.left` calls `$focus.previous()` to move to the previous one within the current scope. See also [[../misc/magic_properties_overview.md|$focus]].

```html
<div
    @keydown.right.prevent="$focus.next()"
    @keydown.left.prevent="$focus.previous()"
    class="border p-2"
>
    <button class="border p-1 m-1">First</button>
    <button class="border p-1 m-1">Second</button>
    <button class="border p-1 m-1">Third</button>
</div>
```

---

## Wrap-Around Focus Navigation with Arrow Keys in Alpine.js

**Description:** Enhances the basic arrow key navigation by adding the `.wrap()` modifier to `$focus`. Now, pressing the right arrow key on the last element wraps focus back to the first, and pressing the left arrow key on the first element wraps focus to the last. See also [[../misc/magic_properties_overview.md|$focus]].

```html
<div
    @keydown.right.prevent="$focus.wrap().next()"
    @keydown.left.prevent="$focus.wrap().previous()"
    class="border p-2"
>
    <button class="border p-1 m-1">First</button>
    <button class="border p-1 m-1">Second</button>
    <button class="border p-1 m-1">Third</button>
</div>
```

---

## Nesting Dialogs with x-trap in Alpine.js

**Description:** Shows that `x-trap` correctly handles nested focus traps. When the nested dialog is opened, focus is trapped within it. Closing the nested dialog returns focus control to the outer dialog's trap, until it is also closed.

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Dialog</button>

    <div x-show="open" x-trap="open" style="display: none; border: 1px solid blue; padding: 10px; margin: 5px;">
        Outer Dialog Content
        <div x-data="{ open: false }">
            <button @click="open = true">Open Nested Dialog</button>

            <div x-show="open" x-trap="open" style="display: none; border: 1px solid green; padding: 10px; margin: 5px;">
                Nested Dialog Content
                <button @click="open = false">Close Nested Dialog</button>
            </div>
        </div>
        <button @click="open = false">Close Dialog</button>
    </div>
</div>
```

---

## Using .inert Modifier with x-trap in Alpine.js

**Description:** Demonstrates the `.inert` modifier for `x-trap`. When the trap is active (`open` is true), this modifier adds `aria-hidden="true"` to all sibling elements outside the trap, effectively hiding them from assistive technologies like screen readers, improving accessibility for modal dialogs.

```html
<!-- When 'open' is false: -->
<body x-data="{ open: false }">
    <div x-trap.inert="open" style="border: 1px solid black; padding: 5px;">
        Dialog Area (Initially hidden content)
    </div>
    <div style="border: 1px solid grey; padding: 5px;">
        Other page content
    </div>
</body>

<!-- When 'open' is true: -->
<body x-data="{ open: true }">
    <div x-trap.inert="open" style="border: 1px solid black; padding: 5px;">
        Dialog Area (Visible and trapping focus)
    </div>
    <!-- 'inert' adds aria-hidden="true" to this sibling div -->
    <div aria-hidden="true" style="border: 1px solid grey; padding: 5px;">
        Other page content (Hidden from screen readers)
    </div>
</body>
```

---

## Using .noreturn Modifier with x-trap in Alpine.js

**Description:** Illustrates the `.noreturn` modifier. By default, when an `x-trap` becomes inactive, focus returns to the element that was focused before the trap was activated. Adding `.noreturn` prevents this default behavior, leaving focus wherever it naturally lands after the trap is disabled (often the element that triggered the deactivation).

```html
<div x-data="{ open: false }">
    <input type="search" @focus="open = true" placeholder="Search (focus here first)">

    <div x-show="open" x-trap.noreturn="open" style="display: none; border: 1px solid black; padding: 10px;">
        Search results
        <button @click="open = false">Close (Focus won't return to input)</button>
    </div>
</div>
```

---

## Using .noscroll Modifier with x-trap in Alpine.js

**Description:** Shows the `.noscroll` modifier, which prevents the user from scrolling the page background (`<body>`) while the `x-trap` is active. This is common behavior for modal dialogs to keep the user focused on the modal content.

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Dialog (Disables Body Scroll)</button>

    <div x-show="open" x-trap.noscroll="open" style="display: none; border: 1px solid black; padding: 10px; position: fixed; top: 50px; left: 50px; background: white;">
        Dialog Contents
        <button @click="open = false">Close Dialog</button>
    </div>
    <!-- Add lots of content here to make the body scrollable -->
    <div style="height: 200vh;">Scrollable background content</div>
</div>
```

---

## Installing Alpine.js Focus Plugin via NPM

**Description:** Demonstrates installing the Focus plugin (`@alpinejs/focus`) using NPM and registering it with Alpine in a bundled JavaScript setup using `Alpine.plugin(focus)`.

```shell
npm install @alpinejs/focus
```

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus' // Import the plugin

Alpine.plugin(focus) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---

## Installing Alpine.js Focus Plugin via CDN

**Description:** Shows how to include the Focus plugin via a CDN `<script>` tag. The plugin script must be included *before* the core Alpine.js script.

```html
<!-- Include Focus plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---