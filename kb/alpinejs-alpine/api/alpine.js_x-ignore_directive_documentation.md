---
title: "Alpine.js x-ignore Directive Documentation"
category: "api"
tags:
  - alpinejs
  - directive
  - x-ignore
  - performance
  - optimization
  - third-party-integration
  - server-rendered
  - html
---

# Alpine.js x-ignore Directive Documentation

**Summary:** This document explains the `x-ignore` directive in Alpine.js. This directive instructs Alpine to completely skip processing an element and all its descendants, preventing initialization and reactivity within that specific DOM tree section. It's useful for optimizing performance or integrating with other libraries that manage their own DOM updates.

---

## Using x-ignore Directive in Alpine.js

**Description:** Demonstrates how `x-ignore` prevents Alpine.js from initializing or updating a specific DOM section. Even though the inner `<span>` has an `x-text` directive referencing the `label` property from the parent `x-data` scope, `x-ignore` on the containing `<div>` stops Alpine from processing it, leaving the `<span>` empty.

```html
<div x-data="{ label: 'From Alpine' }">
    <div x-ignore>
        <!-- Alpine will not process this span or its x-text directive -->
        <span x-text="label"></span> <!-- This will remain empty -->
    </div>
</div>
```

---