---
title: "Alpine.js $watch Magic Method"
category: "misc"
tags:
  - alpinejs
  - magic-property
  - $watch
  - reactivity
  - watcher
  - state-change
  - callback
  - nested-properties
  - deep-watching
  - javascript
  - x-init
---

# Alpine.js $watch Magic Method

**Summary:** This document explains the `$watch` magic property in Alpine.js, which allows you to execute a callback function whenever a specific component data property changes. It covers watching top-level and nested properties, accessing both the new and old values within the callback, understanding how deep watching works for objects, and potential pitfalls like infinite loops.

---

## Watching a Component Property with $watch in Alpine.js

**Description:** Demonstrates the basic usage of `$watch` within an `x-init` directive. The first argument is the string name of the property to watch ('open'), and the second is a callback function that receives the new `value` whenever 'open' changes. See also [[../api/alpine.js_x-init_directive_documentation.md|x-init]].

```html
<div x-data="{ open: false }" x-init="$watch('open', value => console.log('Open changed to:', value))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

---

## Accessing Old Values in $watch Callback in Alpine.js

**Description:** Shows that the `$watch` callback function receives the previous value (`oldValue`) as its second argument, in addition to the new `value`. This allows for comparisons or logic based on the change itself.

```html
<div x-data="{ open: false }" x-init="$watch('open', (value, oldValue) => console.log('Open changed from', oldValue, 'to', value))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

---

## Watching Nested Properties with $watch in Alpine.js

**Description:** Illustrates watching a property nested within an object using dot notation (`'foo.bar'`). The callback triggers only when the specific nested property (`bar`) changes.

```html
<div x-data="{ foo: { bar: 'baz' }}" x-init="$watch('foo.bar', value => console.log('foo.bar changed to:', value))">
    <button @click="foo.bar = 'bob'">Change foo.bar</button>
</div>
```

---

## Deep Watching Objects with $watch in Alpine.js

**Description:** Demonstrates "deep" watching by targeting an object property (`'foo'`) directly. In this case, the `$watch` callback triggers whenever *any* property within the `foo` object (like `foo.bar`) changes. Importantly, the `value` and `oldValue` passed to the callback will be references to the entire `foo` object, not just the specific sub-property that changed.

```html
<div x-data="{ foo: { bar: 'baz' }}" x-init="$watch('foo', (value, oldValue) => console.log('foo object changed. New value:', value, 'Old value:', oldValue))">
    <button @click="foo.bar = 'bob'">Update foo.bar</button>
    <!-- Callback logs the entire foo object when foo.bar changes -->
</div>
```

---

## Avoiding Infinite Loops in $watch Callbacks in Alpine.js

**Description:** Highlights a potential pitfall: modifying a property of a deeply watched object *within* its own `$watch` callback can create an infinite loop. Here, watching `'foo'` and then setting `foo.bob` inside the callback causes the watcher to trigger itself repeatedly, leading to a browser error. Be cautious when modifying watched objects within their callbacks.

```html
<!-- 🚫 Potential Infinite loop: Watching 'foo' and modifying 'foo.bob' inside the callback -->
<div x-data="{ foo: { bar: 'baz', bob: 'lob' }}" x-init="$watch('foo', value => { console.log('Watcher triggered'); foo.bob = foo.bar; })">
    <button @click="foo.bar = 'bob'">Update</button>
</div>
```

---