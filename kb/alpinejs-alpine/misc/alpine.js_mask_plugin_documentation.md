---
title: "Alpine.js Mask Plugin Documentation"
category: "misc"
tags:
  - alpinejs
  - plugin
  - mask
  - x-mask
  - input-masking
  - input-formatting
  - date
  - credit-card
  - money
  - dynamic-masking
  - $money
  - javascript
  - html
---

# Alpine.js Mask Plugin Documentation

**Summary:** This document describes the Alpine.js Mask plugin (`@alpinejs/mask`), which provides the `x-mask` directive for automatically formatting user input in form fields. It covers installation via CDN or NPM, basic mask patterns (like dates), dynamic masking based on input values (like credit cards), and using the built-in `$money` helper for currency formatting.

---

## Dynamic Credit Card Input Masking

**Description:** Implements dynamic masking for credit card inputs using `x-mask:dynamic`. The mask pattern changes based on the input value (`$input`), applying an American Express format ('9999 999999 99999') if the input starts with '34' or '37', and a standard 16-digit format otherwise.

```html
<input x-mask:dynamic="
    $input.startsWith('34') || $input.startsWith('37')
        ? '9999 999999 99999' : '9999 9999 9999 9999'
" placeholder="Enter credit card number">
```

---

## Function-based Dynamic Credit Card Masking

**Description:** Shows an alternative approach to dynamic masking where the logic is encapsulated within a reusable JavaScript function (`creditCardMask`). The `x-mask:dynamic` directive then simply references this function name.

```html
<input x-mask:dynamic="creditCardMask" placeholder="Enter credit card number">

<script>
    function creditCardMask(input) {
        // AMEX format
        if (input.startsWith('34') || input.startsWith('37')) {
            return '9999 999999 99999';
        }
        // Default 16-digit format
        return '9999 9999 9999 9999';
    }
</script>
```

---

## Initializing Alpine Mask Plugin in JavaScript Bundle

**Description:** Demonstrates how to import and register the Mask plugin when using Alpine.js with a build tool after installing via NPM. Use `Alpine.plugin(mask)` before `Alpine.start()`.

```javascript
// In your main JS bundle
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask' // Import the plugin

Alpine.plugin(mask) // Register the plugin

// Optional: Make Alpine global
window.Alpine = Alpine

Alpine.start()
```

---

## Basic Date Input Masking with Alpine.js

**Description:** A simple example applying a fixed mask pattern (`99/99/9999`) to an input field using `x-mask`. This forces the user input to conform to the MM/DD/YYYY date format.

```html
<input x-mask="99/99/9999" placeholder="MM/DD/YYYY">
```

---

## Installing Alpine Mask Plugin via CDN

**Description:** Shows how to include the Mask plugin via a CDN `<script>` tag. The plugin script must be included *before* the core Alpine.js script in your HTML.

```html
<!-- Include Mask plugin BEFORE Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/mask@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

---

## Installing Alpine Mask Plugin via NPM

**Description:** Provides the command-line instruction for installing the Mask plugin using the Node Package Manager (NPM).

```shell
npm install @alpinejs/mask
```

---

## Money Input Formatting Examples

**Description:** Illustrates using the built-in `$money` magic helper within `x-mask:dynamic` for currency formatting. It automatically handles thousand separators and decimal points. Optional arguments allow customization of the decimal character, thousands separator, and precision (number of decimal places). See also [[../misc/magic_properties_overview.md|$money]].

```html
<!-- Default: $1,234.56 -->
<input x-mask:dynamic="$money($input)" placeholder="Amount">

<!-- Custom decimal separator: $1.234,56 -->
<input x-mask:dynamic="$money($input, ',')" placeholder="Amount (comma decimal)">

<!-- Custom decimal and thousands separators: $1 234.56 -->
<input x-mask:dynamic="$money($input, '.', ' ')" placeholder="Amount (space thousands)">

<!-- Custom separators and precision (4 decimal places): $1 234,5678 -->
<input x-mask:dynamic="$money($input, ',', ' ', 4)" placeholder="Amount (4 decimals)">
```

---