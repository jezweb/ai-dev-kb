---
title: "Alpine.js $dispatch Method"
category: "misc"
tags:
  - alpinejs
  - magic-property
  - $dispatch
  - custom-events
  - event-handling
  - component-communication
  - event-propagation
  - window-modifier
  - $event
  - x-model
  - javascript
  - html
---

# Alpine.js $dispatch Method

**Summary:** This document explains the `$dispatch` magic property in Alpine.js, a convenient helper for dispatching custom browser events. Learn how to dispatch simple events, pass data payloads via the event's `detail` property, facilitate communication between components (including globally using the `.window` modifier), and even integrate with `x-model` for custom input scenarios.

---

## Cross-Component Communication with $dispatch in Alpine.js

**Description:** Demonstrates using `$dispatch` for communication between sibling or unrelated components. The button dispatches a `set-title` event with a data payload. Another component listens for this event *on the window* (`@set-title.window`) and updates its local `title` state using the data passed in `$event.detail`.

```html
<!-- Component displaying the title -->
<div
    x-data="{ title: 'Hello' }"
    @set-title.window="title = $event.detail"
>
    <h1 x-text="title"></h1>
</div>

<!-- Component dispatching the event -->
<div x-data>
    <button @click="$dispatch('set-title', 'Hello World!')">Set Title</button>
</div>
<!-- Clicking the button changes the h1 text to "Hello World!" -->
```

---

## Event Propagation Example with Alpine.js

**Description:** Illustrates how standard event bubbling works and why the `.window` modifier is often needed for cross-component communication with `$dispatch`. Without `.window`, the `notify` event dispatched by the button only bubbles up within its own `x-data` scope and isn't caught by the sibling `<span>`. Adding `.window` makes the listener global.

```html
<!-- 🚫 Won't work: Span doesn't catch event from sibling button -->
<div x-data>
    <span @notify="console.log('Notify received (sibling - wont work)')">Listener</span>
    <button @click="$dispatch('notify')">Notify Sibling</button>
</div>

<!-- ✅ Will work: Listener is attached to the window -->
<div x-data>
    <span @notify.window="console.log('Notify received (window)')">Listener (Window)</span>
    <button @click="$dispatch('notify')">Notify Window</button>
</div>
```

---

## Dispatching Basic Events in Alpine.js

**Description:** A simple example showing `$dispatch('eventName')` to create and dispatch a custom DOM event (`notify`). The event bubbles up and is caught by the `@notify` listener on the parent `div`, triggering an alert.

```html
<div @notify="alert('Notification Received!')">
    <button @click="$dispatch('notify')">
        Notify Parent
    </button>
</div>
```

---

## Passing Data with $dispatch in Alpine.js

**Description:** Demonstrates passing a data payload as the second argument to `$dispatch`. This data becomes accessible to event listeners via the `event.detail` property (accessed in Alpine expressions as `$event.detail`).

```html
<div @notify="alert($event.detail.message)"> <!-- Access data via $event.detail -->
    <button @click="$dispatch('notify', { message: 'Hello World!' })"> <!-- Pass data object -->
        Notify With Data
    </button>
</div>
```

---

## Using $dispatch with x-model in Alpine.js

**Description:** Shows an advanced technique for creating custom input components compatible with `x-model`. By dispatching a native `input` event with the desired value (`$dispatch('input', 'newValue')`), the `x-model` directive on a parent element will automatically pick up the change and update its bound data property (`title`). See also [[../api/understanding_x-model_directive_in_alpine.js.md|x-model]].

```html
<!-- Parent component using x-model -->
<div x-data="{ title: 'Hello' }">
    <p>Title: <span x-text="title"></span></p>

    <!-- Custom input-like component -->
    <span x-model="title"> <!-- x-model listens for 'input' event -->
        <button @click="$dispatch('input', 'Hello World!')">Set Title to 'Hello World!'</button>
        <!-- Clicking dispatches 'input', x-model updates 'title' -->
    </span>
</div>
```

---