---
title: "Using x-html Directive in Alpine.js"
category: "api"
tags:
  - alpinejs
  - directive
  - x-html
  - innerhtml
  - dom-manipulation
  - security
  - html-injection
  - javascript
  - html
---

# Using x-html Directive in Alpine.js

**Summary:** This document explains the `x-html` directive in Alpine.js, which allows you to dynamically set the `innerHTML` property of an element based on a JavaScript expression. This is useful for rendering raw HTML content stored in your component's data, but should be used cautiously due to potential security risks if the HTML source is not trusted.

---

## Displaying User Username with x-html in Alpine.js

**Description:** This snippet demonstrates using `x-html` to render HTML content stored in the `username` data property. The `<strong>` tags within the `username` string are interpreted as HTML, resulting in the username being displayed in bold. Be cautious when using `x-html` with user-provided content to avoid potential cross-site scripting (XSS) vulnerabilities.

```html
<div x-data="{ username: '<strong>calebporzio</strong>' }">
    Username: <span x-html="username"></span> <!-- Renders as: Username: <strong>calebporzio</strong> -->
</div>
```

---