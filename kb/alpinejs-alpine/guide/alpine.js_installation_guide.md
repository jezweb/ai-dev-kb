---
title: "Alpine.js Installation Guide"
category: "guide"
tags:
  - alpinejs
  - installation
  - setup
  - cdn
  - npm
  - module
  - import
  - script-tag
  - defer
  - versioning
  - javascript
  - html
---

# Alpine.js Installation Guide

**Summary:** This guide explains the primary methods for installing and setting up Alpine.js in your project. It covers including Alpine via a simple script tag using a CDN (Content Delivery Network), installing it as an NPM package for use with bundlers like Vite or Webpack, and how to import and initialize it as an ES module. Pinning to specific versions via CDN for production stability is also discussed.

---

## Including Alpine.js via CDN Script Tag

**Description:** Shows the simplest way to add Alpine.js to an HTML page. A `<script>` tag pointing to the Alpine.js CDN build is included in the `<head>`, typically with the `defer` attribute to ensure it executes after the DOM is parsed but before the `DOMContentLoaded` event. The `3.x.x` allows using the latest v3 release.

```html
<html>
    <head>
        <!-- Other head elements -->

        <!-- Include AlpineJS -->
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </head>
    <body>
        <!-- Your Alpine components here -->
    </body>
</html>
```

---

## Installing Alpine.js via NPM

**Description:** Provides the command-line instruction for installing Alpine.js using the Node Package Manager (NPM). This method is used when integrating Alpine.js into a project that uses a JavaScript bundler (like Vite, Webpack, Rollup, etc.).

```shell
npm install alpinejs
```

---

## Importing and Initializing Alpine.js as a Module

**Description:** Demonstrates the necessary JavaScript code when using Alpine.js installed via NPM. First, `Alpine` is imported from the package. Optionally, it's assigned to the `window` object for global accessibility (useful for plugins or debugging). Finally, `Alpine.start()` must be called to initialize Alpine and make it process the directives in your HTML.

```javascript
// In your main JavaScript bundle file (e.g., app.js)
import Alpine from 'alpinejs'

// Optional: Make Alpine available globally
window.Alpine = Alpine

// Start Alpine
Alpine.start()
```

---

## Using Specific Alpine.js Version via CDN

**Description:** Shows how to link to a specific version of Alpine.js via the CDN (e.g., `3.14.9`). This is recommended for production environments to prevent unexpected breaking changes that might occur if using a floating version like `@3.x.x`.

```html
<!-- Pinning to a specific version for stability -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.9/dist/cdn.min.js"></script>
```

---