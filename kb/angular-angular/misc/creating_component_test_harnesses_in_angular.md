# Creating Component Test Harnesses in Angular

**Summary:** This file covers topics related to "Creating Component Test Harnesses in Angular". Key snippets include: Installing Angular CDK for Component Harnesses, Creating a Minimal Component Harness, Implementing User Interaction Methods in a Component Harness, Implementing Filtered Item Retrieval in Menu Harness using TypeScript.

---

## Installing Angular CDK for Component Harnesses

**Description:** Command to install the Angular Component Dev Kit (CDK) which provides the foundation for creating component harnesses.

```shell
ng add @angular/cdk
```

---

## Creating a Minimal Component Harness

**Description:** Basic implementation of a component harness that extends ComponentHarness and specifies the hostSelector to match the component it targets.

```typescript
class MyPopupHarness extends ComponentHarness {
  static hostSelector = 'my-popup';
}
```

---

## Implementing User Interaction Methods in a Component Harness

**Description:** Enhanced component harness implementation with methods for toggling the popup and checking its open state, demonstrating how to provide behavior-focused APIs rather than exposing raw TestElement instances.

```typescript
class MyPopupHarness extends ComponentHarness {
  static hostSelector = 'my-popup';

  protected getTriggerElement = this.locatorFor('button');
  protected getContentElement = this.locatorForOptional('.my-popup-content');

  /** Toggles the open state of the popup. */
  async toggle() {
    const trigger = await this.getTriggerElement();
    return trigger.click();
  }

  /** Checks if the popup us open. */
  async isOpen() {
    const content = await this.getContentElement();
    return !!content;
  }
}
```

---

## Implementing Filtered Item Retrieval in Menu Harness using TypeScript

**Description:** This code snippet shows how to implement a method in the MyMenuHarness class to retrieve menu items with optional filtering. It demonstrates the use of the locatorForAll method with a HarnessPredicate to enable powerful filtering capabilities.

```typescript
class MyMenuHarness extends ComponentHarness {
  static hostSelector = 'my-menu';

  /** Gets a list of items in the menu, optionally filtered based on the given criteria. */
  async getItems(filters: MyMenuItemHarnessFilters = {}): Promise<MyMenuItemHarness[]> {
    const getFilteredItems = this.locatorForAll(MyMenuItemHarness.with(filters));
    return getFilteredItems();
  }
  ...
}
```

---