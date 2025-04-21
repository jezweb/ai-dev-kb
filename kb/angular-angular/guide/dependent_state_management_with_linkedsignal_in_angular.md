# Dependent State Management with linkedSignal in Angular

**Summary:** This file covers topics related to "Dependent State Management with linkedSignal in Angular". Key snippets include: Using linkedSignal for Dependent State in Angular Shipping Method Selection, Basic Signal Usage for Shipping Method Selection in Angular, Demonstrating linkedSignal Behavior with Changing Options, Advanced linkedSignal Usage with Previous State Consideration in Angular.

---

## Using linkedSignal for Dependent State in Angular Shipping Method Selection

**Description:** This snippet showcases how to use linkedSignal to create a dependent state for shipping method selection. It ensures that the selected option always remains valid even when the available options change.

```typescript
@Component({/* ... */})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();

  // Initialize selectedOption to the first shipping option.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]);

  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }
}
```

---

## Basic Signal Usage for Shipping Method Selection in Angular

**Description:** This snippet demonstrates a basic implementation of state management for shipping method selection using signals. It shows how to initialize a default selection and update it based on user input.

```typescript
@Component({/* ... */})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();

  // Select the first shipping option by default.
  selectedOption = signal(this.shippingOptions()[0]);

  changeShipping(newOptionIndex: number) {
    this.selectedOption.set(this.shippingOptions()[newOptionIndex]);
  }
}
```

---

## Demonstrating linkedSignal Behavior with Changing Options

**Description:** This example illustrates how linkedSignal updates its value based on changes in the linked state. It shows the automatic update of the selected option when the available options change.

```typescript
const shippingOptions = signal(['Ground', 'Air', 'Sea']);
const selectedOption = linkedSignal(() => shippingOptions()[0]);
console.log(selectedOption()); // 'Ground'

selectedOption.set(shippingOptions()[2]);
console.log(selectedOption()); // 'Sea'

shippingOptions.set(['Email', 'Will Call', 'Postal service']);
console.log(selectedOption()); // 'Email'
```

---

## Advanced linkedSignal Usage with Previous State Consideration in Angular

**Description:** This snippet demonstrates a more complex use of linkedSignal where the previous state is taken into account when computing the new state. It preserves the user's selection if it's still valid after the options change.

```typescript
interface ShippingMethod {
  id: number;
  name: string;
}

@Component({/* ... */})
export class ShippingMethodPicker {
  constructor() {
    this.changeShipping(2);
    this.changeShippingOptions();
    console.log(this.selectedOption()); // {"id":2,"name":"Postal Service"}
  }

  shippingOptions = signal<ShippingMethod[]>([
    { id: 0, name: 'Ground' },
    { id: 1, name: 'Air' },
    { id: 2, name: 'Sea' },
  ]);

  selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({
    // `selectedOption` is set to the `computation` result whenever this `source` changes.
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      // If the newOptions contain the previously selected option, preserve that selection.
      // Otherwise, default to the first option.
      return (
        newOptions.find((opt) => opt.id === previous?.value.id) ?? newOptions[0]
      );
    },
  });

  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }

  changeShippingOptions() {
    this.shippingOptions.set([
      { id: 0, name: 'Email' },
      { id: 1, name: 'Sea' },
      { id: 2, name: 'Postal Service' },
    ]);
  }
}
```

---