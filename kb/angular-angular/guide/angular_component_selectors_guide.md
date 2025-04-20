# Angular Component Selectors Guide

**Summary:** This file covers topics related to "Angular Component Selectors Guide". Key snippets include: Using Multiple Comma-Separated Selectors, Combining Multiple Selector Types, Defining Basic Component Selector in Angular, Using Component Selector in Template, Using Not Pseudo-Class in Component Selector.

---

## Using Multiple Comma-Separated Selectors

**Description:** Demonstrates how to specify multiple alternative selectors for a component using comma separation. Allows component to match different selector patterns.

```angular-ts
@Component({
  selector: 'drop-zone, [dropzone]',
  ...
})
export class DropZone { }
```

---

## Combining Multiple Selector Types

**Description:** Shows how to combine element and attribute selectors for more specific component matching. Uses both element name and attribute selector together.

```angular-ts
@Component({
  selector: 'button[type="reset"]',
  ...
})
export class ResetButton { }
```

---

## Defining Basic Component Selector in Angular

**Description:** Demonstrates how to define a basic component with a custom element selector. Shows the basic structure of an Angular component decorator with a selector property.

```angular-ts
@Component({
  selector: 'profile-photo',
  ...
})
export class ProfilePhoto { }
```

---

## Using Component Selector in Template

**Description:** Shows how to use a component's selector in another component's template. Demonstrates the usage of a custom element in an Angular template.

```angular-ts
@Component({
  template: `
    <profile-photo />
    <button>Upload a new profile photo</button>`,
  ...,
})
export class UserProfile { }
```

---

## Using Not Pseudo-Class in Component Selector

**Description:** Demonstrates how to use the :not pseudo-class in a component selector to exclude specific elements from matching. Shows attribute selector with exclusion.

```angular-ts
@Component({
  selector: '[dropzone]:not(textarea)',
  ...
})
export class DropZone { }
```

---