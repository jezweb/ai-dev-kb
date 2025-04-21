# Angular Component Host Elements Guide

**Summary:** This file covers topics related to "Angular Component Host Elements Guide". Key snippets include: Rendered DOM with Angular Component, Binding to Host Element in Angular Component, Defining Host Bindings in Angular Component, Using @HostBinding in Angular Component, Using an Angular Component in HTML Template....

---

## Rendered DOM with Angular Component

**Description:** This HTML snippet illustrates how the Angular component is rendered in the DOM. The component's content is inserted inside its host element.

```html
<h3>Your profile photo</h3>
<profile-photo>
  <img src="profile-photo.jpg" alt="Your profile photo" />
</profile-photo>
<button>Upload a new profile photo</button>
```

---

## Binding to Host Element in Angular Component

**Description:** This TypeScript snippet demonstrates how to bind properties, attributes, and events to a component's host element using the 'host' property in the @Component decorator.

```typescript
@Component({
  ...,
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
export class CustomSlider {
  value: number = 0;
  disabled: boolean = false;
  isActive = signal(false);
  updateValue(event: KeyboardEvent) { /* ... */ }

  /* ... */
}
```

---

## Defining Host Bindings in Angular Component

**Description:** This TypeScript snippet shows how to define host bindings for properties and attributes within an Angular component using the 'host' property in the @Component decorator.

```typescript
@Component({
  ...,
  host: {
    'role': 'presentation',
    '[id]': 'id',
  }
})
export class ProfilePhoto { /* ... */ }
```

---

## Using @HostBinding in Angular Component

**Description:** This TypeScript snippet shows how to use the @HostBinding decorator to bind host properties and attributes to component properties and methods. This approach is less preferred than using the 'host' property.

```typescript
@Component({
  /* ... */
})
export class CustomSlider {
  @HostBinding('attr.aria-valuenow')
  value: number = 0;

  @HostBinding('tabIndex')
  getTabIndex() {
    return this.disabled ? -1 : 0;
  }

  /* ... */
}
```

---

## Using an Angular Component in HTML Template

**Description:** This HTML snippet shows how to use the previously defined 'profile-photo' component in a template. The component tag becomes the host element for the component instance.

```html
<h3>Your profile photo</h3>
<profile-photo />
<button>Upload a new profile photo</button>
```

---

## Using @HostListener in Angular Component

**Description:** This TypeScript snippet demonstrates how to use the @HostListener decorator to bind event listeners to the host element. The decorator accepts an event name and an optional array of arguments.

```typescript
export class CustomSlider {
  @HostListener('keydown', ['$event'])
  updateValue(event: KeyboardEvent) {
    /* ... */
  }
}
```

---