---
title: "Extending Alpine.js"
category: "misc"
tags:
  - alpinejs
  - extending
  - custom-directives
  - Alpine.directive
  - custom-magics
  - Alpine.magic
  - plugins
  - Alpine.plugin
  - alpine:init
  - reactivity
  - evaluate
  - evaluateLater
  - effect
  - cleanup
  - javascript
  - html
  - npm
  - cdn
---

# Extending Alpine.js

**Summary:** This guide explores the mechanisms for extending Alpine.js's core functionality. Learn how to create custom directives using `Alpine.directive()` to interact with elements, define custom magic properties via `Alpine.magic()` for reusable utilities, and package these extensions into plugins using `Alpine.plugin()`. It covers registering extensions via script tags (`alpine:init`) or NPM modules, evaluating expressions, creating reactive directives with `effect`, and managing cleanup logic.

---

## Creating Reactive Alpine.js Custom Directives

**Description:** Demonstrates creating a custom directive (`x-log`) that reactively logs a component's data property (`message`) whenever it changes. It uses `evaluateLater` to get a function that retrieves the expression's value and `effect` to automatically re-run the logging logic when the dependencies (in this case, `message`) change.

```html
<div x-data="{ message: 'Hello World!' }">
    <div x-log="message"></div> <!-- Logs 'Hello World!', then 'yolo' -->
    <button @click="message = 'yolo'">Change</button>
</div>
```

```javascript
// Register the directive (typically in alpine:init)
Alpine.directive('log', (el, { expression }, { evaluateLater, effect }) => {
    // Get a function to evaluate the expression later
    let getThingToLog = evaluateLater(expression);

    // Run the effect now and whenever dependencies change
    effect(() => {
        // Evaluate the expression and log the result
        getThingToLog(thingToLog => {
            console.log(thingToLog);
        });
    });
});
```

---

## Extending Alpine.js via Script Tag

**Description:** Shows the standard method for registering custom Alpine extensions (like directives or magics) when including Alpine via a `<script>` tag. The registration code must be placed within an event listener for the `alpine:init` event, which fires after Alpine loads but before it initializes components.

```html
<html>
<head>
    <script src="/js/alpine.js" defer></script>
</head>
<body>
    <div x-data x-foo></div> <!-- Use the custom directive -->

    <script>
        // Register custom extensions within alpine:init
        document.addEventListener('alpine:init', () => {
            Alpine.directive('foo', (el) => {
                console.log('x-foo directive initialized on:', el);
                // ... directive logic ...
            });
            // Alpine.magic(...)
            // Alpine.data(...)
        });
    </script>
</body>
</html>
```

---

## Evaluating Expressions in Alpine.js Custom Directives

**Description:** Example demonstrating how a custom directive (`x-log`) can access and evaluate the JavaScript expression provided to it (e.g., `message`) using the `evaluate` utility function passed to the directive callback. This allows the directive to get the current value of component data.

```html
<div x-data="{ message: 'Hello World!' }">
    <div x-log="message"></div> <!-- Logs 'Hello World!' once on init -->
</div>
```

```javascript
// Register the directive
Alpine.directive('log', (el, { expression }, { evaluate }) => {
    // expression === 'message'
    let currentValue = evaluate(expression); // Evaluate the expression in the current scope
    console.log(currentValue); // Logs 'Hello World!'
});
```

---

## Implementing Magic Time Property in Alpine.js

**Description:** Creates a custom magic property `$now` using `Alpine.magic()`. When `$now` is accessed within an Alpine expression (like in `x-text`), the provided callback function executes, returning the current time formatted as a localized string.

```javascript
// Register the magic property (typically in alpine:init)
Alpine.magic('now', () => {
    // This function runs each time $now is accessed
    return (new Date).toLocaleTimeString();
});
```

```html
<!-- Display the current time, updating whenever Alpine re-evaluates the expression -->
<div x-data>
    Current time: <span x-text="$now"></span>
</div>
```

---

## Creating Alpine.js Plugin as NPM Module

**Description:** Demonstrates structuring an Alpine extension as an NPM module. The module exports a function that accepts the `Alpine` object as an argument. Inside this function, directives and magics are registered using `Alpine.directive()` and `Alpine.magic()`. The consuming application imports the module and registers it using `Alpine.plugin()`.

```javascript
// my-alpine-plugin.js (Example NPM module)
export default function (Alpine) {
    // Register directives and magics using the passed Alpine instance
    Alpine.directive('foo', (el) => { /* ... */ });
    Alpine.magic('foo', (el) => { /* ... */ });
    // ... other extensions ...
}
```

```javascript
// main.js (Consuming application bundle)
import Alpine from 'alpinejs';
import myAlpinePlugin from './my-alpine-plugin.js'; // Import the plugin

Alpine.plugin(myAlpinePlugin); // Register the plugin

window.Alpine = Alpine;
Alpine.start();
```

---

## Implementing a Simple Alpine.js Custom Directive

**Description:** A basic example creating a custom directive `x-uppercase`. When Alpine initializes an element with this directive, the provided callback function executes, accessing the element (`el`) and modifying its `textContent` to be uppercase.

```javascript
// Register the directive (typically in alpine:init)
Alpine.directive('uppercase', el => {
    el.textContent = el.textContent.toUpperCase();
});
```

```html
<div x-data>
    <span x-uppercase>Hello World!</span> <!-- Renders as "HELLO WORLD!" -->
</div>
```

---

## Controlling Directive Execution Order in Alpine.js

**Description:** Shows how to influence when a custom directive runs relative to others using `.before()`. By default, custom directives run after Alpine's core directives. `.before('bind')` ensures the `x-foo` directive runs *before* `x-bind` (and its shorthand `:`) directives on the same element, which might be necessary if `x-bind` depends on changes made by `x-foo` (like adding scope).

```javascript
// Register the directive to run before 'bind'
Alpine.directive('foo', (el, { value, modifiers, expression }, { Alpine }) => {
    // Example: Add data to the element's scope
    Alpine.addScopeToNode(el, { foo: 'bar' });
}).before('bind'); // Specify execution order
```

```html
<div x-data>
    <!-- x-foo runs first, adding 'foo' to the scope, then x-bind uses it -->
    <span x-foo :title="foo">Hover me</span> <!-- title will be "bar" -->
</div>
```

---

## Alpine.js Custom Directive Method Signature

**Description:** Outlines the full signature of the callback function provided to `Alpine.directive()`. It receives the element (`el`), an object with directive details (`value`, `modifiers`, `expression`), and a utilities object containing `Alpine`, `effect`, `cleanup`, `evaluate`, and `evaluateLater`.

```javascript
Alpine.directive('[name]', (el, { value, modifiers, expression }, { Alpine, effect, cleanup, evaluate, evaluateLater }) => {
    // el: The DOM element the directive is on.
    // value: The part after the first colon (e.g., 'bar' in x-foo:bar).
    // modifiers: Array of strings after dots (e.g., ['baz'] in x-foo.baz).
    // expression: The string expression in the attribute value (e.g., 'message' in x-foo="message").
    // Alpine: The global Alpine object.
    // effect: Function to create reactive effects.
    // cleanup: Function to register cleanup logic for when the element is removed.
    // evaluate: Function to evaluate an expression in the current scope immediately.
    // evaluateLater: Function that returns a function to evaluate an expression later.
});
```

---

## Alpine.js Custom Magic Method Signature

**Description:** Outlines the full signature of the callback function provided to `Alpine.magic()`. It receives the element (`el`) where the magic property is being accessed and a utilities object containing the global `Alpine` object. The function should return the value or function that the magic property represents.

```javascript
Alpine.magic('[name]', (el, { Alpine }) => {
    // el: The DOM element where the magic property is being accessed.
    // Alpine: The global Alpine object.
    // Return the value or function for the magic property.
    // Example: return 'someValue';
    // Example: return (arg) => { /* do something with arg */ };
});
```

---

## Including External Alpine.js Extensions

**Description:** Illustrates the correct order for including external Alpine extension scripts via `<script>` tags. Extension scripts (like `foo.js` containing `Alpine.directive` or `Alpine.magic` calls within an `alpine:init` listener) must be loaded *before* the core Alpine.js script (`alpine.js`) to ensure they can register themselves correctly.

```html
<html>
<head>
    <!-- Load Extension FIRST -->
    <script src="/js/foo.js" defer></script>
    <!-- Load Alpine Core SECOND -->
    <script src="/js/alpine.js" defer></script>
</head>
<body>
    <!-- Use the custom directive/magic from foo.js -->
    <div x-data x-foo></div>
</body>
</html>
```

---

## Cleaning Up Resources in Alpine.js Custom Directives

**Description:** Demonstrates using the `cleanup` utility function within a custom directive. The callback passed to `cleanup()` is executed when the element with the directive is removed from the DOM. This is crucial for removing event listeners, clearing intervals/timeouts, or releasing other resources to prevent memory leaks.

```javascript
Alpine.directive('example', (el, {}, { cleanup }) => {
    // Example: Add a window event listener
    let handler = () => { console.log('Window clicked'); };
    window.addEventListener('click', handler);

    // Register cleanup logic
    cleanup(() => {
        console.log('Cleaning up example directive: removing listener');
        window.removeEventListener('click', handler);
    });
});
```

---

## Creating Alpine.js Plugin via Script Tag

**Description:** Shows how to structure a simple plugin within a separate script file (`foo.js`) intended for inclusion via `<script>` tag. The plugin code wraps its registrations (`Alpine.directive`, `Alpine.magic`) inside an `alpine:init` event listener. The HTML file includes the plugin script before the core Alpine script.

```html
<!-- index.html -->
<html>
<head>
    <!-- Plugin Script -->
    <script src="/js/foo.js" defer></script>
    <!-- Alpine Core -->
    <script src="/js/alpine.js" defer></script>
</head>
<body>
    <div x-data x-init="$foo()" x-foo="'hello world'">
        <!-- Using the plugin's directive and magic -->
    </div>
</body>
</html>
```

```javascript
// /js/foo.js (Plugin File)
document.addEventListener('alpine:init', () => {
    // Register directive
    window.Alpine.directive('foo', (el, { expression }, { evaluate }) => {
        console.log('x-foo value:', evaluate(expression));
        el.style.border = '1px solid red';
    });

    // Register magic
    window.Alpine.magic('foo', (el) => {
        return () => {
            console.log('$foo magic called on:', el);
        };
    });
});
```

---

## Registering Alpine.js Extensions via NPM Module

**Description:** Example showing how to register extensions directly onto the imported `Alpine` object when using an NPM setup *before* calling `Alpine.start()`. This is an alternative to creating a separate plugin file if the extensions are closely tied to the main application bundle.

```javascript
// main.js
import Alpine from 'alpinejs';

// Register extensions directly
Alpine.directive('foo', (el) => { /* ... */ });
Alpine.magic('bar', (el) => { /* ... */ });

// Make global (optional) and start
window.Alpine = Alpine;
Alpine.start();
```

---

## Creating Clipboard Magic Function in Alpine.js

**Description:** Implements a reusable `$clipboard` magic property. It returns a function that accepts a string (`subject`) and uses the browser's asynchronous `navigator.clipboard.writeText()` API to copy the provided text to the user's clipboard.

```javascript
// Register the magic property (typically in alpine:init)
Alpine.magic('clipboard', () => {
    return subject => {
        navigator.clipboard.writeText(subject)
            .then(() => console.log(`Copied "${subject}" to clipboard`))
            .catch(err => console.error('Failed to copy:', err));
    }
});

// Alternative shorter syntax
// Alpine.magic('clipboard', () => subject => navigator.clipboard.writeText(subject));
```

```html
<!-- Example Usage -->
<div x-data="{ textToCopy: 'Copy me!' }">
    <input type="text" x-model="textToCopy">
    <button @click="$clipboard(textToCopy)">Copy Text</button>
    <button @click="$clipboard('Static text')">Copy "Static text"</button>
</div>
```

---