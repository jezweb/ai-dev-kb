---
title: "Alpine.js $id Utility"
category: "api"
tags:
  - alpinejs
  - magic-property
  - $id
  - directive
  - x-id
  - utility
  - accessibility
  - unique-id
  - scope
  - nesting
  - looping
  - x-for
  - component
  - html
  - javascript
---

# Alpine.js $id Utility

**Summary:** This document explains Alpine.js's `$id` magic property, a utility for generating unique IDs within components, essential for accessibility attributes like `for` and `aria-activedescendant`. It covers basic usage, creating scoped IDs using the `x-id` directive, nesting scopes, using keyed IDs within loops (`x-for`), and storing generated IDs in component data.

---

## Grouping IDs with x-id Directive in Alpine.js

**Description:** Illustrates how the `x-id` directive creates a distinct ID scope, enabling multiple elements within a component to share a base ID name while ensuring unique generated IDs across different component instances. This is useful for linking related elements like labels and inputs within reusable components. See also [[../api/x-id_directive_in_alpine.js.md|x-id]].

```html
<div x-id="['text-input']">
    <label :for="$id('text-input')">Label 1</label> <!-- "text-input-1" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-1" -->
</div>

<div x-id="['text-input']">
    <label :for="$id('text-input')">Label 2</label> <!-- "text-input-2" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-2" -->
</div>
```

---

## Nesting ID Scopes with x-id in Alpine.js

**Description:** Demonstrates the ability to nest `x-id` scopes. Each nested scope maintains its own independent sequence for generating unique IDs, facilitating organized ID management within complex components. See also [[../api/x-id_directive_in_alpine.js.md|x-id]].

```html
<div x-id="['text-input']">
    <label :for="$id('text-input')">Outer Label</label> <!-- "text-input-1" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-1" -->

    <div x-id="['text-input']">
        <label :for="$id('text-input')">Inner Label</label> <!-- "text-input-2" -->
        <input type="text" :id="$id('text-input')"> <!-- "text-input-2" -->
    </div>
</div>
```

---

## Basic Usage of $id in Alpine.js

**Description:** Shows the fundamental use of the `$id` magic property to generate unique IDs for elements. Calling `$id` repeatedly with the same name automatically appends an incrementing numeric suffix for uniqueness across the page or component scope.

```html
<input type="text" :id="$id('text-input')">
<!-- id="text-input-1" -->

<input type="text" :id="$id('text-input')">
<!-- id="text-input-2" -->
```

---

## Using Keyed IDs for Looping in Alpine.js

**Description:** Explains how to provide an optional second argument (a key) to `$id` for generating predictable, unique IDs within loops (`x-for`), crucial for scenarios like managing `aria-activedescendant` in dynamic lists or associating elements related to specific loop items.

```html
<ul
    x-id="['list-item']"
    :aria-activedescendant="$id('list-item', activeItem.id)"
>
    <template x-for="item in items" :key="item.id">
        <li :id="$id('list-item', item.id)">...</li>
    </template>
</ul>
```

---

## Using Stored IDs in Alpine.js Components

**Description:** Presents a pattern for storing an ID generated by `$id` within the component's `x-data` scope. This allows the same unique ID to be referenced multiple times, for instance, when linking a `<label>`'s `for` attribute to an `<input>`'s `id`, ensuring proper association. See also [[../api/alpine.js_x-data_directive_documentation.md|x-data]].

```html
<div x-data="{ id: $id('text-input') }">
    <label :for="id">Label 1</label> <!-- "text-input-1" -->
    <input type="text" :id="id"> <!-- "text-input-1" -->
</div>

<div x-data="{ id: $id('text-input') }">
    <label :for="id">Label 2</label> <!-- "text-input-2" -->
    <input type="text" :id="id"> <!-- "text-input-2" -->
</div>
```

---