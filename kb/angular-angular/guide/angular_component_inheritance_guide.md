# Angular Component Inheritance Guide

**Summary:** This file covers topics related to "Angular Component Inheritance Guide". Key snippets include: Extending Components with Metadata Inheritance in Angular, Overriding Lifecycle Methods in Angular Component Inheritance, Forwarding Injected Dependencies in Angular Component Inheritance, Basic Component Inheritance in Angular.

---

## Extending Components with Metadata Inheritance in Angular

**Description:** Shows how a component inherits metadata from a base component, including host bindings and inputs. The child component ends up with the union of all inputs, outputs, and host bindings from both itself and its parent.

```typescript
@Component({
  selector: 'base-listbox',
  template: `
    ...
  `,
  host: {
    '(keydown)': 'handleKey($event)',
  },
})
export class ListboxBase {
  @Input() value: string;
  handleKey(event: KeyboardEvent) {
    /* ... */
  }
}

@Component({
  selector: 'custom-listbox',
  template: `
    ...
  `,
  host: {
    '(click)': 'focusActiveOption()',
  },
})
export class CustomListbox extends ListboxBase {
  @Input() disabled = false;
  focusActiveOption() {
    /* ... */
  }
}
```

---

## Overriding Lifecycle Methods in Angular Component Inheritance

**Description:** Demonstrates how to properly override lifecycle methods from parent components. When a child component implements a lifecycle method, it must call super to preserve the parent's implementation.

```typescript
@Component({ ... })
export class ListboxBase {
  protected isInitialized = false;
  ngOnInit() {
    this.isInitialized = true;
  }
}

@Component({ ... })
export class CustomListbox extends ListboxBase {
  override ngOnInit() {
    super.ngOnInit();
    /* ... */
  }
}
```

---

## Forwarding Injected Dependencies in Angular Component Inheritance

**Description:** Illustrates how to properly pass injected dependencies to the parent class using the super keyword. Child classes must explicitly forward dependencies to the parent class.

```typescript
@Component({ ... })
export class ListboxBase {
  constructor(private element: ElementRef) { }
}

@Component({ ... })
export class CustomListbox extends ListboxBase {
  constructor(element: ElementRef) {
    super(element);
  }
}
```

---

## Basic Component Inheritance in Angular

**Description:** Demonstrates how a component can extend a base class to inherit properties. The CustomListbox component inherits the value property from ListboxBase.

```typescript
export class ListboxBase {
  value: string;
}

@Component({ ... })
export class CustomListbox extends ListboxBase {
  // CustomListbox inherits the `value` property.
}
```

---