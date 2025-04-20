---
title: "Alpine.js x-init Directive Documentation"
category: "api"
tags:
  - alpinejs
  - directive
  - x-init
  - initialization
  - lifecycle
  - async
  - await
  - fetch
  - Alpine.data
  - $nexttick
  - javascript
  - component
---

# Alpine.js x-init Directive Documentation

**Summary:** This document explains the `x-init` directive in Alpine.js, which allows executing JavaScript code once an element is initialized. It covers various use cases, including basic setup tasks, fetching data asynchronously using `await`, running code after the initial render with `$nextTick`, and its relationship with the special `init()` method within `x-data` or `Alpine.data` definitions.

---

## Async Data Fetching with x-init in Alpine.js

**Description:** Shows how `x-init` can be used with `async/await` to fetch external data (like JSON from an API endpoint) and populate the component's `x-data` state immediately upon initialization. This pattern is useful for loading initial data required by the component.

```html
<div
    x-data="{ posts: [] }"
    x-init="posts = await (await fetch('/posts')).json()"
>
    <!-- Component content using 'posts' -->
</div>
```

---

## Basic x-init Usage in Alpine.js

**Description:** Demonstrates the fundamental use of the `x-init` directive to run a simple JavaScript expression, like logging to the console, as soon as the Alpine component element is initialized.

```html
<div x-init="console.log('I\'m being initialized!')"></div>
```

---

## Auto-evaluated init() Method in Alpine.js Components

**Description:** Introduces the special `init()` method within an `x-data` object. Alpine automatically calls this method during component initialization, providing an alternative, often cleaner way to organize initialization logic compared to placing complex code directly in `x-init`.

```html
<div x-data="{
    init() {
        // This code runs automatically on initialization
        console.log('I am called automatically')
    }
}">
    ...
</div>
```

---

## Standalone x-init Usage in Alpine.js

**Description:** Illustrates that `x-init` can be placed on any element, not just the root element with `x-data`. It can also be used on elements outside an `x-data` scope, running its code when that specific element is processed by Alpine.

```html
<div x-data>
    <!-- x-init inside an x-data scope -->
    <span x-init="console.log('I can initialize')"></span>
</div>

<!-- x-init outside an x-data scope -->
<span x-init="console.log('I can initialize too')"></span>
```

---

## Using $nextTick in Alpine.js with x-init

**Description:** Demonstrates combining `x-init` with the `$nextTick` magic property. This ensures the code within `$nextTick` executes only *after* Alpine has completed its initial DOM rendering pass for the component, useful for interacting with the fully rendered DOM state. See also [[../api/alpine.js_$nexttick_documentation.md|$nextTick]].

```html
<div x-init="$nextTick(() => { console.log('DOM is ready') })"></div>
```

---

## Alpine.data() Component Registration with init()

**Description:** Shows the usage of the `init()` method within a reusable component defined using `Alpine.data()`. The `init()` method will be executed every time a component instance using `x-data="dropdown"` is initialized.

```javascript
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        init() {
            console.log('Initializing a dropdown component instance.');
        },
        // other properties and methods...
    }));
});
```

---

## Combined init() and x-init Usage in Alpine.js

**Description:** Clarifies the execution order when both an `init()` method (within `x-data`) and an `x-init` directive are present on the same element. The `init()` method runs first, followed by the expression in the `x-init` directive.

```html
<div
    x-data="{
        init() {
            console.log('I am called first'); // Runs first
        }
    }"
    x-init="console.log('I am called second')" // Runs second
>
    ...
</div>
```

---