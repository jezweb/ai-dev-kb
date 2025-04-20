# API Report for @angular/cdk_testing_testbed

**Summary:** This file covers topics related to "API Report for @angular/cdk_testing_testbed". Key snippets include: Implementing UnitTestElement Class for Angular Component Testing.

---

## Implementing UnitTestElement Class for Angular Component Testing

**Description:** Defines the UnitTestElement class that implements the TestElement interface. This class provides methods for interacting with DOM elements in unit tests, including clicking, typing, getting properties, and manipulating element state.

```typescript
// @public
export class UnitTestElement implements TestElement {
    constructor(element: Element, _stabilize: () => Promise<void>);
    blur(): Promise<void>;
    clear(): Promise<void>;
    click(modifiers?: ModifierKeys): Promise<void>;
    click(location: 'center', modifiers?: ModifierKeys): Promise<void>;
    click(relativeX: number, relativeY: number, modifiers?: ModifierKeys): Promise<void>;
    dispatchEvent(name: string, data?: Record<string, EventData>): Promise<void>;
    // (undocumented)
    readonly element: Element;
    focus(): Promise<void>;
    getAttribute(name: string): Promise<string | null>;
    getCssValue(property: string): Promise<string>;
    getDimensions(): Promise<ElementDimensions>;
    getProperty<T = any>(name: string): Promise<T>;
    hasClass(name: string): Promise<boolean>;
    hover(): Promise<void>;
    isFocused(): Promise<boolean>;
    matchesSelector(selector: string): Promise<boolean>;
    mouseAway(): Promise<void>;
    rightClick(relativeX: number, relativeY: number, modifiers?: ModifierKeys): Promise<void>;
    selectOptions(...optionIndexes: number[]): Promise<void>;
    sendKeys(...keys: (string | TestKey)[]): Promise<void>;
    sendKeys(modifiers: ModifierKeys, ...keys: (string | TestKey)[]): Promise<void>;
    setContenteditableValue(value: string): Promise<void>;
    setInputValue(value: string): Promise<void>;
    text(options?: TextOptions): Promise<string>;
}
```

---