---
title: "Alpine.js x-transition Directive"
category: "api"
tags:
  - alpinejs
  - directive
  - x-transition
  - animation
  - css
  - transition
  - x-show
  - modifier
  - duration
  - delay
  - scale
  - opacity
  - origin
  - enter
  - leave
  - tailwind-css
  - javascript
  - html
---

# Alpine.js x-transition Directive

**Summary:** This document explains the `x-transition` directive in Alpine.js, used to apply CSS transitions to elements when they are shown or hidden, typically in conjunction with `x-show`. It covers the default fade/scale transition, customization options using modifiers (`.duration`, `.delay`, `.opacity`, `.scale`, `.origin`), applying different transitions for enter and leave phases, and advanced control using specific CSS classes for each stage of the transition.

---

## Basic x-transition Usage with Alpine.js

**Description:** A simple example demonstrating how `x-transition` adds default fade and scale animations when an element's visibility is toggled using `x-show`. This provides a quick way to add smooth visual feedback. See also [[../api/alpine.js_x-show_directive_documentation.md|x-show]].

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div x-show="open" x-transition style="display: none;"> <!-- Initially hidden -->
        Hello 👋
    </div>
</div>
```

---

## Customizing Transition Duration in Alpine.js

**Description:** Shows how to control the speed of the transition using the `.duration` modifier. This example sets both the enter and leave transitions to take 500 milliseconds.

```html
<!-- Sets both enter and leave duration to 500ms -->
<div x-show="open" x-transition.duration.500ms style="display: none;">...</div>
```

---

## Setting Different Enter and Leave Durations in Alpine.js

**Description:** Demonstrates specifying distinct durations for the enter (element appearing) and leave (element disappearing) phases using the `:enter` and `:leave` modifiers combined with `.duration`.

```html
<div x-show="open"
    x-transition:enter.duration.500ms <!-- Enter takes 500ms -->
    x-transition:leave.duration.400ms <!-- Leave takes 400ms -->
    style="display: none;"
>...</div>
```

---

## Adding Transition Delay in Alpine.js

**Description:** Shows how to introduce a pause before the transition begins using the `.delay` modifier. This example delays both the enter and leave transitions by 50 milliseconds.

```html
<!-- Delays both enter and leave by 50ms -->
<div x-show="open" x-transition.delay.50ms style="display: none;">...</div>
```

---

## Advanced Class-Based Transitions in Alpine.js

**Description:** A comprehensive example leveraging specific CSS classes (compatible with frameworks like Tailwind CSS) for granular control over each stage of the enter and leave transitions. This allows defining exact styles for the start and end states of both phases.

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div
        x-show="open"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 scale-90"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-90"
        style="display: none;"
    >Hello 👋</div>
</div>
```

---

## Different Scale Values for Enter and Leave in Alpine.js

**Description:** Demonstrates applying different scaling amounts for the enter and leave transitions using the `.scale` modifier with `:enter` and `:leave`. The element scales from 80% on enter and scales down to 90% on leave.

```html
<div x-show="open"
    x-transition:enter.scale.80 <!-- Enter scales from 80% -->
    x-transition:leave.scale.90 <!-- Leave scales to 90% -->
    style="display: none;"
>...</div>
```

---

## Customizing Scale Origin in Alpine.js

**Description:** Shows how to change the transformation origin for scale transitions using the `.origin` modifier. This example makes the element scale out from the top edge instead of the default center.

```html
<!-- Scales from the top edge -->
<div x-show="open" x-transition.scale.origin.top style="display: none;">...</div>
```

---

## Customizing Scale Value in Alpine.js

**Description:** Demonstrates adjusting the amount of scaling applied during the default transition using the `.scale` modifier followed by a percentage value (without the % sign). This example scales from/to 80%.

```html
<!-- Scales from/to 80% -->
<div x-show="open" x-transition.scale.80 style="display: none;">...</div>
```

---

## Scale-Only Transition in Alpine.js

**Description:** Shows how to apply only the scaling part of the default transition, omitting the fade effect, by using the `.scale` modifier without a value.

```html
<!-- Only applies scale, no opacity change -->
<div x-show="open" x-transition.scale style="display: none;">...</div>
```

---

## Opacity-Only Transition in Alpine.js

**Description:** Example of applying only the opacity (fade) part of the default transition, omitting the scale effect, by using the `.opacity` modifier.

```html
<!-- Only applies opacity fade, no scaling -->
<div x-show="open" x-transition.opacity style="display: none;">...</div>
```

---