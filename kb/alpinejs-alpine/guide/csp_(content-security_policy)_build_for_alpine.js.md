---
title: "CSP (Content-Security Policy) Build for Alpine.js"
category: "guide"
tags:
  - alpinejs
  - csp
  - content-security-policy
  - security
  - build
  - installation
  - cdn
  - npm
  - Alpine.data
  - x-data
  - nonce
  - javascript
  - html
---

# CSP (Content-Security Policy) Build for Alpine.js

**Summary:** This guide explains how to use the Content Security Policy (CSP) compliant build of Alpine.js (`@alpinejs/csp`). This build avoids the use of `eval()` and `new Function()`, making it suitable for environments with strict CSP rules that disallow 'unsafe-eval'. It requires defining components using `Alpine.data()` instead of inline `x-data` objects and necessitates proper CSP header configuration, often using nonces.

---

## Complete HTML Example with Alpine.js CSP Build and Content-Security-Policy

**Description:** Provides a full HTML example demonstrating the setup required for the Alpine.js CSP build. Key elements include:
1.  A `Content-Security-Policy` meta tag (or HTTP header) allowing scripts only via a specific `nonce`.
2.  Including the `@alpinejs/csp` build via CDN, ensuring the `<script>` tag has the matching `nonce` attribute.
3.  Defining the component logic using `Alpine.data('counter', ...)` within a separate `<script>` tag, also marked with the correct `nonce`.
4.  Referencing the component in HTML using `x-data="counter"`.

```html
<html>
    <head>
        <!-- Example CSP Header (Nonce should be server-generated) -->
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'nonce-a23gbfz9e'">

        <!-- Include Alpine CSP build with nonce -->
        <script defer nonce="a23gbfz9e" src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js"></script>
    </head>

    <body>
        <!-- Reference component defined in script below -->
        <div x-data="counter">
            <button x-on:click="increment">Increment</button>
            Count: <span x-text="count"></span>
        </div>

        <!-- Define component logic in script with nonce -->
        <script nonce="a23gbfz9e">
            document.addEventListener('alpine:init', () => {
                Alpine.data('counter', () => {
                    return {
                        count: 1,
                        increment() {
                            this.count++;
                        },
                    }
                })
            })
        </script>
    </body>
</html>
```

---

## Valid Component Declaration with Alpine.js CSP Build (HTML)

**Description:** Shows the correct way to instantiate a component in HTML when using the CSP build. You must reference the component name (defined using `Alpine.data()`) as a string in `x-data`. Inline object declarations (`x-data="{...}"`) are **not** allowed.

```html
<!-- Correct: Reference component by name -->
<div x-data="counter">
    <button @click="increment">Increment</button>
    <span x-text="count"></span>
</div>
```

---

## Installing Alpine.js CSP Build via NPM

**Description:** Provides the command to install the separate CSP-compatible build of Alpine.js using NPM for use in bundled projects.

```shell
npm install @alpinejs/csp
```

---

## Invalid Inline Component with Alpine.js CSP Build

**Description:** Highlights an **incorrect** approach when using the CSP build. Defining component data directly as an inline object within `x-data="{ count: 1 }"` relies on mechanisms blocked by strict CSP rules and will not work with the `@alpinejs/csp` package.

```html
<!-- Incorrect for CSP build: Inline object declaration -->
<div x-data="{ count: 1 }">
    <button @click="count++">Increment</button>
    <span x-text="count"></span>
</div>
```

---

## Initializing Alpine.js CSP Build in JavaScript

**Description:** Demonstrates how to import and initialize the CSP build when installed via NPM. Note that you import from `'@alpinejs/csp'` instead of `'alpinejs'`.

```javascript
// Import the CSP build
import Alpine from '@alpinejs/csp'

// Optional: Make Alpine global
window.Alpine = Alpine

// Define components using Alpine.data() here...
// Alpine.data('counter', () => ({ ... }));

// Start Alpine
Alpine.start()
```

---

## Installing Alpine.js CSP Build via CDN

**Description:** Shows the correct CDN URL to include the CSP-compatible build directly in an HTML file via a `<script>` tag. Remember to include a `nonce` if required by your CSP header.

```html
<!-- Include Alpine's CSP-friendly Core via CDN -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js"></script>
```

---

## Valid Component Registration with Alpine.js CSP Build (JavaScript)

**Description:** Shows the required method for defining component logic when using the CSP build. All data and methods must be encapsulated within a function returned by `Alpine.data('componentName', () => ({...}))`. This registration typically happens within an `alpine:init` listener or before `Alpine.start()` in a bundled setup.

```javascript
// Inside 'alpine:init' listener or before Alpine.start()
Alpine.data('counter', () => ({
    count: 1,

    increment() {
        this.count++
    },
}))
```

---

## Accessing Nested Properties with Alpine.js CSP Build (HTML)

**Description:** Confirms that accessing nested properties (like `foo.count`) and methods (like `foo.increment`) defined within an `Alpine.data()` registration works as expected in the HTML template when using the CSP build.

```html
<!-- Accessing nested properties/methods works -->
<div x-data="counter">
    <button @click="foo.increment">Increment Nested Count</button>
    <span x-text="foo.count"></span>
</div>
```

---

## Registering Components with Nested Properties for Alpine.js CSP Build

**Description:** Shows how to structure the `Alpine.data()` registration when your component logic involves nested objects containing properties and methods. This structure is fully compatible with the CSP build.

```javascript
// Inside 'alpine:init' listener or before Alpine.start()
Alpine.data('counter', () => ({
    foo: { // Nested object
        count: 1,

        increment() {
            this.count++
        },
    },
    // other top-level properties/methods...
}))
```

---