---
title: "Asynchronous Functions in Alpine.js"
category: "guide"
tags:
  - alpinejs
  - asynchronous
  - async
  - await
  - promise
  - fetch
  - x-text
  - javascript
  - guide
---

# Asynchronous Functions in Alpine.js

**Summary:** This guide explains how Alpine.js interacts with both synchronous and asynchronous JavaScript functions, especially within directives like `x-text`. It demonstrates defining `async` functions (e.g., for fetching data), and shows how Alpine can implicitly handle the returned Promise or how you can explicitly use `await` within the directive's expression to wait for the Promise to resolve before updating the DOM.

---

## Defining Asynchronous Function in JavaScript

**Description:** This snippet defines a standard JavaScript `async function` named `getLabel`. It uses `fetch` to make an asynchronous network request and `await` to pause execution until the request completes and the response body is read as text. The function implicitly returns a Promise that resolves with the fetched text.

```javascript
async function getLabel() {
    // Example: Fetch a label from an API endpoint
    let response = await fetch('/api/label'); // Pauses here until fetch completes
    return await response.text(); // Pauses here until text is read, then resolves Promise
}
```

---

## Using Asynchronous Function in Alpine.js Without Parentheses (Implicit Await)

**Description:** This Alpine.js snippet demonstrates a convenience feature: when an `async function` (like `getLabel`) is passed directly to `x-text` *without* parentheses, Alpine implicitly awaits the returned Promise and sets the element's text content to the resolved value once available. See also [[../api/using_x-text_directive_in_alpine.js.md|x-text]].

```html
<!-- Alpine implicitly awaits the Promise returned by getLabel -->
<span x-text="getLabel">Loading...</span>
```

---

## Using Synchronous Function in Alpine.js x-text Directive

**Description:** This snippet shows the standard usage of a *synchronous* function with `x-text`. The function `getLabel()` is called immediately, and its return value ('Hello World!') is used to set the text content.

```html
<!-- Assumes getLabel is the synchronous version defined below -->
<span x-text="getLabel()"></span> <!-- Displays 'Hello World!' immediately -->
```

---

## Defining Synchronous Function in JavaScript

**Description:** This snippet shows a simple *synchronous* function that directly returns a string value. This contrasts with the asynchronous version shown earlier.

```javascript
function getLabel() {
    // Directly returns a string, no Promise involved
    return 'Hello World!';
}
```

---

## Using Asynchronous Function in Alpine.js x-text Directive (Explicit Await)

**Description:** This Alpine.js snippet demonstrates explicitly using the `await` keyword within the `x-text` directive's expression to handle the Promise returned by the `async function` `getLabel()`. This achieves the same result as the implicit await example but makes the asynchronous nature more explicit in the template.

```html
<!-- Explicitly await the Promise returned by getLabel() -->
<span x-text="await getLabel()">Loading...</span>
```

---