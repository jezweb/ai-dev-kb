---
title: "Understanding x-model Directive in Alpine.js"
category: "api"
tags:
  - alpinejs
  - directive
  - x-model
  - data-binding
  - two-way-binding
  - input
  - textarea
  - select
  - checkbox
  - radio
  - range
  - form
  - modifier
  - lazy
  - debounce
  - throttle
  - number
  - boolean
  - javascript
  - html
---

# Understanding x-model Directive in Alpine.js

**Summary:** This document provides a comprehensive guide to the `x-model` directive in Alpine.js, which enables seamless two-way data binding between component state and various form input elements. It covers binding text inputs, textareas, select dropdowns (single and multiple), checkboxes (single boolean and multiple array-bound), radio buttons, and range sliders. Additionally, it explains modifiers like `.lazy`, `.debounce`, `.throttle`, `.number`, and `.boolean` for controlling update behavior and type casting, as well as programmatic access via `_x_model`.

---

## Basic Text Input Binding with x-model in Alpine.js

**Description:** A fundamental example demonstrating two-way data binding with `x-model`. As the user types into the text input, the `message` property in the `x-data` scope updates reactively, and this updated value is immediately reflected in the `<span>` element via `x-text`. See also [[../api/alpine.js_x-data_directive_documentation.md|x-data]] and [[../api/using_x-text_directive_in_alpine.js.md|x-text]].

```html
<div x-data="{ message: '' }">
    <input type="text" x-model="message">

    <span x-text="message"></span>
</div>
```

---

## Text Input Binding with x-model in Alpine.js

**Description:** A concise illustration of binding a text input's value directly to an Alpine.js data property (`message`) using `x-model`. The `<span>` displays the real-time value of `message` as the input changes.

```html
<!-- Assumes 'message' is defined in a parent x-data scope -->
<input type="text" x-model="message">

<span x-text="message"></span>
```

---

## Radio Input Binding in Alpine.js

**Description:** Shows how `x-model` binds a group of radio buttons to a single data property (`answer`). When a radio button is selected, its `value` attribute is assigned to the `answer` property.

```html
<div x-data="{ answer: '' }">
    <input type="radio" value="yes" x-model="answer"> Yes
    <input type="radio" value="no" x-model="answer"> No

    <p>Answer: <span x-text="answer"></span></p>
</div>
```

---

## Dynamically Populated Select Options in Alpine.js

**Description:** Demonstrates using `x-for` to dynamically generate `<option>` elements within a `<select>` dropdown. `x-model` binds the selected option's value to the `color` data property. See also [[../guide/looping_-_x-for.md|x-for]].

```html
<div x-data="{ color: '', availableColors: ['Red', 'Orange', 'Yellow'] }">
    <select x-model="color">
        <option value="" disabled>Select a color</option>
        <template x-for="c in availableColors" :key="c">
            <option :value="c" x-text="c"></option>
        </template>
    </select>

    <p>Selected Color: <span x-text="color"></span></p>
</div>
```

---

## Two-way Data Binding with Button Update in Alpine.js

**Description:** Highlights the two-way nature of `x-model`. Clicking the button programmatically changes the `message` data property, and `x-model` ensures this change is reflected back in the value of the input field.

```html
<div x-data="{ message: 'Initial' }">
    <input type="text" x-model="message">

    <button x-on:click="message = 'changed by button'">Change Message</button>
</div>
```

---

## Multiple Checkboxes Bound to Array in Alpine.js

**Description:** Illustrates binding multiple checkboxes with the same `x-model` target (`colors`) to an array. Checking a box adds its `value` to the array, and unchecking removes it.

```html
<div x-data="{ colors: [] }">
    <input type="checkbox" value="red" x-model="colors"> Red
    <input type="checkbox" value="orange" x-model="colors"> Orange
    <input type="checkbox" value="yellow" x-model="colors"> Yellow

    <p>Selected Colors: <span x-text="colors.join(', ')"></span></p>
</div>
```

---

## Number Modifier with x-model in Alpine.js

**Description:** Shows the `.number` modifier, which automatically casts the input's value to a JavaScript `Number` type before storing it in the bound data property (`age`), instead of the default string type.

```html
<div x-data="{ age: null }">
    <input type="text" x-model.number="age" placeholder="Enter age">
    <p>Type of 'age': <span x-text="typeof age"></span></p>
</div>
```

---

## Textarea Binding with x-model in Alpine.js

**Description:** Demonstrates binding the content of a `<textarea>` element to an Alpine data property (`message`) using `x-model`, enabling real-time updates as the user types multi-line text.

```html
<div x-data="{ message: '' }">
    <textarea x-model="message" placeholder="Enter message..."></textarea>

    <p>Message: <span x-text="message"></span></p>
</div>
```

---

## Single Select Dropdown Binding in Alpine.js

**Description:** Example of binding a standard single-selection `<select>` dropdown. `x-model` binds the value of the chosen `<option>` to the `color` data property.

```html
<div x-data="{ color: '' }">
    <select x-model="color">
        <option value="" disabled>Select a color</option>
        <option>Red</option>
        <option>Orange</option>
        <option>Yellow</option>
    </select>

    <p>Selected Color: <span x-text="color"></span></p>
</div>
```

---

## Single Checkbox with Boolean Binding in Alpine.js

**Description:** Shows binding a single checkbox directly to a boolean data property (`show`). `x-model` automatically handles toggling the boolean value between `true` and `false` based on the checkbox's checked state.

```html
<div x-data="{ show: false }">
    <input type="checkbox" id="checkbox" x-model="show">
    <label for="checkbox">Show</label>

    <p>Value: <span x-text="show"></span></p>
</div>
```

---

## Lazy Modifier with x-model in Alpine.js

**Description:** Demonstrates the `.lazy` modifier. Instead of updating the bound property (`username`) on every keystroke (`input` event), `.lazy` syncs the value only when the element loses focus (`change` event). This is useful for delaying actions like validation until the user finishes typing.

```html
<div x-data="{ username: '' }">
    <input type="text" x-model.lazy="username" placeholder="Username (max 20 chars)">
    <span x-show="username.length > 20" style="color: red;">The username is too long.</span>
</div>
```

---

## Range Input Binding in Alpine.js

**Description:** Example of binding an `<input type="range">` slider. `x-model` updates the `range` data property in real-time as the user drags the slider.

```html
<div x-data="{ range: 0.5 }">
    <input type="range" x-model="range" min="0" max="1" step="0.1">
    <span x-text="range"></span>
</div>
```

---

## Multiple Select Binding in Alpine.js

**Description:** Demonstrates binding a `<select multiple>` dropdown. `x-model` binds the selected options' values to the `colors` array. Selecting multiple options adds their values to the array.

```html
<div x-data="{ colors: [] }">
    <select x-model="colors" multiple>
        <option>Red</option>
        <option>Orange</option>
        <option>Yellow</option>
    </select>

    <p>Selected Colors: <span x-text="colors.join(', ')"></span></p>
</div>
```

---

## Select Dropdown with Placeholder in Alpine.js

**Description:** Shows how to include a non-selectable placeholder option in a dropdown bound with `x-model`. The `disabled` attribute prevents the placeholder from being selected, and setting its `value` to `""` ensures the bound property (`color`) is initially empty or matches the desired default state.

```html
<div x-data="{ color: '' }">
    <select x-model="color">
        <option value="" disabled>Select A Color</option>
        <option>Red</option>
        <option>Orange</option>
        <option>Yellow</option>
    </select>

    <p>Selected Color: <span x-text="color"></span></p>
</div>
```

---

## Debounce Modifier with x-model in Alpine.js

**Description:** Shows the `.debounce` modifier, which delays updating the bound property (`search`) until a certain amount of time has passed since the last user input (defaulting to 250ms). This is useful for performance-intensive tasks triggered by input, like live search requests.

```html
<div x-data="{ search: '' }">
    <input type="text" x-model.debounce="search" placeholder="Search...">
    <!-- Search results could be updated based on 'search' -->
</div>
```

---

## Boolean Modifier with x-model in Alpine.js

**Description:** Demonstrates the `.boolean` modifier, used primarily with `<select>` elements to ensure the bound value (`isActive`) is stored as a true JavaScript boolean (`true`/`false`) rather than the string representation ("true"/"false") from the option values.

```html
<div x-data="{ isActive: false }">
    <select x-model.boolean="isActive">
        <option value="true">Yes</option>
        <option value="false">No</option>
    </select>
    <p>Type of 'isActive': <span x-text="typeof isActive"></span></p>
</div>
```

---

## Custom Debounce Timing with x-model in Alpine.js

**Description:** Example of customizing the debounce delay by appending a time value (e.g., `.500ms`) to the `.debounce` modifier. This waits for 500 milliseconds of inactivity before updating the `search` property.

```html
<div x-data="{ search: '' }">
    <input type="text" x-model.debounce.500ms="search" placeholder="Search (500ms debounce)...">
</div>
```

---

## Custom Throttle Timing with x-model in Alpine.js

**Description:** Demonstrates the `.throttle` modifier with a custom interval (`.500ms`). This limits the frequency of updates to the bound property (`search`), ensuring it updates at most once every 500 milliseconds, regardless of how rapidly the input changes.

```html
<div x-data="{ search: '' }">
    <input type="text" x-model.throttle.500ms="search" placeholder="Search (500ms throttle)...">
</div>
```

---

## Demonstrating Programmatic Access to x-model in Alpine.js

**Description:** This snippet reveals the internal `_x_model` property available on elements with `x-model`. It allows programmatic getting (`.get()`) and setting (`.set()`) of the modeled value, providing an escape hatch for more complex interactions or integration with external JavaScript. Use with caution as it relies on internal implementation details. See also [[../api/alpine.js_x-ref_directive.md|x-ref]].

```html
<div x-data="{ username: 'calebporzio' }">
    <div x-ref="userDiv" x-model="username"></div> <!-- Note: x-model on a div is unusual, usually for inputs -->

    <button @click="$refs.userDiv._x_model.set('phantomatrix')">
        Change username to: 'phantomatrix'
    </button>

    <p>Current Value: <span x-text="$refs.userDiv._x_model.get()"></span></p>
    <p>Data Prop Value: <span x-text="username"></span></p>
</div>
```

---