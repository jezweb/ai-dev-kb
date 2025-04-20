---
title: "Alpine.js x-teleport Directive Documentation"
category: "api"
tags:
  - alpinejs
  - directive
  - x-teleport
  - dom-manipulation
  - modal
  - dropdown
  - notification
  - z-index
  - template-tag
  - event-forwarding
  - nesting
  - javascript
  - html
---

# Alpine.js x-teleport Directive Documentation

**Summary:** This document explains the `x-teleport` directive in Alpine.js, which allows you to render a piece of template markup in a different location within the DOM, typically at the end of the `<body>`. This is particularly useful for components like modals, dropdowns, or notifications that need to escape their parent's CSS stacking context or overflow constraints. It covers basic usage, nesting teleported elements, and handling events from teleported content.

---

## Nesting Modals with x-teleport in Alpine.js

**Description:** Illustrates how `x-teleport` facilitates nesting components like modals. Even though the second modal's template is nested within the first in the source markup, `x-teleport="body"` moves both modal `<div>` elements to become direct children of the `<body>`. This simplifies styling and z-index management by ensuring they render as siblings in the final DOM, not nested elements.

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Modal</button>

    <template x-teleport="body">
        <div x-show="open"> <!-- First Modal -->
            Modal contents...

            <div x-data="{ open: false }">
                <button @click="open = ! open">Toggle Nested Modal</button>

                <template x-teleport="body">
                    <div x-show="open"> <!-- Second Modal -->
                        Nested modal contents...
                    </div>
                </template>
            </div>
        </div>
    </template>
</div>
```

---

## Basic x-teleport Usage for Modal in Alpine.js

**Description:** Demonstrates the fundamental use of `x-teleport` to move modal markup from its original location within a component to the end of the `<body>` tag. This ensures the modal renders above other page content, regardless of its position in the initial HTML structure. The visibility is controlled using `x-show`. See also [[../api/alpine.js_x-show_directive_documentation.md|x-show]].

```html
<body>
    <div x-data="{ open: false }">
        <button @click="open = ! open">Toggle Modal</button>

        <template x-teleport="body">
            <div x-show="open" style="display: none;"> <!-- Modal content moved to end of body -->
                Modal contents...
            </div>
        </template>
    </div>

    <div>Some other content placed AFTER the modal markup in the source.</div>

    <!-- ... other body content ... -->

    <!-- The modal div will actually render here -->
</body>
```

---

## Event Forwarding with x-teleport in Alpine.js

**Description:** Shows that events originating from within teleported content still bubble up and can be handled by listeners within the original Alpine component's scope. By placing `@click="open = false"` on the `template` tag with `x-teleport`, clicks inside the teleported modal `<div>` will trigger the event handler in the parent `x-data` scope, effectively closing the modal.

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Modal</button>

    <template x-teleport="body" @click="open = false"> <!-- Event listener on template -->
        <div x-show="open" style="display: none;">
            Modal contents...
            (click anywhere inside to close)
        </div>
    </template>
</div>
```

---