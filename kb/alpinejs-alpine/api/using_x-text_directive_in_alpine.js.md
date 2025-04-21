---
title: "Using x-text Directive in Alpine.js"
category: "api"
tags:
  - alpinejs
  - directive
  - x-text
  - text-content
  - innertext
  - dom-manipulation
  - data-binding
  - javascript
  - html
---

# Using x-text Directive in Alpine.js

**Summary:** This document explains the `x-text` directive in Alpine.js. This directive dynamically updates an element's `innerText` property with the result of a JavaScript expression, providing a simple way to display reactive data as text content within your components.

---

## Setting Text Content with x-text in Alpine.js

**Description:** This snippet demonstrates the basic usage of `x-text`. It binds the `innerText` of the `<strong>` element to the `username` property defined in the parent `x-data` scope. Any changes to the `username` property will automatically update the displayed text content.

```html
<div x-data="{ username: 'calebporzio' }">
    Username: <strong x-text="username"></strong> <!-- Displays 'calebporzio' -->
</div>
```

---