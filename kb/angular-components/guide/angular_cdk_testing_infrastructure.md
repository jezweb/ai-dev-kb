# Angular CDK Testing Infrastructure

**Summary:** This file covers topics related to "Angular CDK Testing Infrastructure". Key snippets include: Using Parallel Function with Angular Component Harnesses, Creating Component Harnesses for Menu Components, Implementing Filterable Component Harnesses with HarnessPredicate, Creating a Minimal Component Harness, Accessing Elements Outside Component Host in TypeScript....

---

## Using Parallel Function with Angular Component Harnesses

**Description:** This snippet shows how to use the parallel function to simultaneously read multiple properties from a component harness, optimizing change detection to avoid excessive runs.

```typescript
it('reads properties in parallel', async () => {
  const checkboxHarness = loader.getHarness(MyCheckboxHarness);
  // Read the checked and intermediate properties simultaneously.
  const [checked, indeterminate] = await parallel(() => [
    checkboxHarness.isChecked(),
    checkboxHarness.isIndeterminate()
  ]);
  expect(checked).toBe(false);
  expect(indeterminate).toBe(true);
});
```

---

## Creating Component Harnesses for Menu Components

**Description:** Demonstrates how to implement harnesses for a menu component using composition of smaller harnesses. Shows locatorFor methods to get references to child harnesses.

```typescript
class MyMenuHarness extends ComponentHarness {
  static hostSelector = 'my-menu';

  protected getPopupHarness = this.locatorFor(MyPopupHarness);

  /** Gets the currently shown menu items (empty list if menu is closed). */
  getItems = this.locatorForAll(MyMenuItemHarness);

  /** Toggles open state of the menu. */
  async toggle() {
    const popupHarness = await this.getPopupHarness();
    return popupHarness.toggle();
  }
}

class MyMenuItemHarness extends ComponentHarness {
  static hostSelector = 'my-menu-item';
}
```

---

## Implementing Filterable Component Harnesses with HarnessPredicate

**Description:** Shows how to create filter interfaces and implement the 'with' static method for component harnesses that allows for filtering harnesses by properties like text content.

```typescript
interface MyMenuHarnessFilters extends BaseHarnessFilters {
  /** Filters based on the trigger text for the menu. */
  triggerText?: string | RegExp;
}

interface MyMenuItemHarnessFilters extends BaseHarnessFilters {
  /** Filters based on the text of the menu item. */
  text?: string | RegExp;
}

class MyMenuHarness extends ComponentHarness {
  static hostSelector = 'my-menu';

  /** Creates a `HarnessPredicate` used to locate a particular `MyMenuHarness`. */
  static with(options: MyMenuHarnessFilters): HarnessPredicate<MyMenuHarness> {
    return new HarnessPredicate(MyMenuHarness, options)
        .addOption('trigger text', options.triggerText,
            (harness, text) => HarnessPredicate.stringMatches(harness.getTriggerText(), text));
  }

  protected getPopupHarness = this.locatorFor(MyPopupHarness);

  /** Gets the text of the menu trigger. */
  async getTriggerText(): Promise<string> {
    const popupHarness = await this.getPopupHarness();
    return popupHarness.getTriggerText();
  }

  ...
}

class MyMenuItemHarness extends ComponentHarness {
  static hostSelector = 'my-menu-item';

  /** Creates a `HarnessPredicate` used to locate a particular `MyMenuItemHarness`. */
  static with(options: MyMenuItemHarnessFilters): HarnessPredicate<MyMenuItemHarness> {
    return new HarnessPredicate(MyMenuItemHarness, options)
        .addOption('text', options.text,
            (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
  }

  /** Gets the text of the menu item. */
  async getText(): Promise<string> {
    const host = await this.host();
    return host.text();
  }
}
```

---

## Creating a Minimal Component Harness

**Description:** This snippet demonstrates creating a minimal component harness by extending ComponentHarness and specifying the hostSelector property which identifies elements in the DOM that match this harness.

```typescript
class MyPopupHarness extends ComponentHarness {
  static hostSelector = 'my-popup';
}
```

---

## Accessing Elements Outside Component Host in TypeScript

**Description:** This snippet demonstrates how to create a harness for a component that uses CDK overlay, accessing content outside the component's host element using documentRootLocatorFactory().

```typescript
class MyPopupHarness extends ComponentHarness {
  static hostSelector = 'my-popup';

  /** Gets a `HarnessLoader` whose root element is the popup's content element. */
  async getHarnessLoaderForContent(): Promise<HarnessLoader> {
    const rootLocator = this.documentRootLocatorFactory();
    return rootLocator.harnessLoaderFor('my-popup-content');
  }
}
```

---

## Creating Element Locators in a Component Harness

**Description:** This snippet shows how to create methods to locate and access specific elements within a component's DOM using the locatorFor and locatorForOptional methods provided by ComponentHarness.

```typescript
class MyPopupHarness extends ComponentHarness {
  static hostSelector = 'my-popup';

  /** Gets the trigger element */
  getTriggerElement = this.locatorFor('button');

  /** Gets the content element. */
  getContentElement = this.locatorForOptional('.my-popup-content');
}
```

---

## Loading Harnesses in TestbedHarnessEnvironment

**Description:** Demonstrates how to load harnesses for different components using TestbedHarnessEnvironment in a unit test setup. It shows creating loaders, loading harnesses for the root component, child components, and components outside the fixture.

```TypeScript
let fixture: ComponentFixture<MyDialogButton>;
let loader: HarnessLoader;
let rootLoader: HarnessLoader;

beforeEach(() => {
  fixture = TestBed.createComponent(MyDialogButton);
  loader = TestbedHarnessEnvironment.loader(fixture);
  rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
});

it('loads harnesses', async () => {
  // Load a harness for the bootstrapped component with `harnessForFixture`
  dialogButtonHarness =
      await TestbedHarnessEnvironment.harnessForFixture(fixture, MyDialogButtonHarness);

  // The button element is inside the fixture's root element, so we use `loader`.
  const buttonHarness = await loader.getHarness(MyButtonHarness);

  // Click the button to open the dialog
  await buttonHarness.click();

  // The dialog is appended to `document.body`, outside of the fixture's root element,
  // so we use `rootLoader` in this case.
  const dialogHarness = await rootLoader.getHarness(MyDialogHarness);

  // ... make some assertions
});
```

---

## Using HarnessPredicate for Item Filtering in Menu Harness

**Description:** Demonstrates how to extend a component harness to implement filtering capabilities for child elements by enhancing the getItems method to accept filter criteria.

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

## Creating a Content Container Harness for Popup Components

**Description:** Shows how to implement a content container harness for components that use ng-content to project arbitrary content, allowing test authors to load harnesses for projected content.

```typescript
class MyPopupHarness extends ContentContainerComponentHarness<string> {
  static hostSelector = 'my-popup';
}
```

---

## Using Manual Change Detection in Angular Test Harnesses

**Description:** This snippet demonstrates how to use the manualChangeDetection function to disable automatic change detection in a test, allowing for checking component state during async operations.

```typescript
it('checks state while async action is in progress', async () => {
  const buttonHarness = loader.getHarness(MyButtonHarness);
  await manualChangeDetection(async () => {
    await buttonHarness.click();
    fixture.detectChanges();
    // Check expectations while async click operation is in progress.
    expect(isProgressSpinnerVisible()).toBe(true);
    await fixture.whenStable();
    // Check expectations after async click operation complete.
    expect(isProgressSpinnerVisible()).toBe(false);
  });
});
```

---