# API Report for @angular/cdk_testing

**Summary:** This file covers topics related to "API Report for @angular/cdk_testing". Key snippets include: Defining AsyncFactoryFn Type in TypeScript, Defining ComponentHarness Abstract Class in TypeScript.

---

## Defining AsyncFactoryFn Type in TypeScript

**Description:** Defines a type for an asynchronous factory function that returns a Promise of type T.

```typescript
export type AsyncFactoryFn<T> = () => Promise<T>;
```

---

## Defining ComponentHarness Abstract Class in TypeScript

**Description:** Defines an abstract class for component harnesses, including methods for locating elements and managing the test environment.

```typescript
export abstract class ComponentHarness {
    constructor(locatorFactory: LocatorFactory);
    protected documentRootLocatorFactory(): LocatorFactory;
    protected forceStabilize(): Promise<void>;
    host(): Promise<TestElement>;
    // (undocumented)
    protected readonly locatorFactory: LocatorFactory;
    protected locatorFor<T extends (HarnessQuery<any> | string)[]>(...queries: T): AsyncFactoryFn<LocatorFnResult<T>>;
    protected locatorForAll<T extends (HarnessQuery<any> | string)[]>(...queries: T): AsyncFactoryFn<LocatorFnResult<T>[]>;
    protected locatorForOptional<T extends (HarnessQuery<any> | string)[]>(...queries: T): AsyncFactoryFn<LocatorFnResult<T> | null>;
    protected waitForTasksOutsideAngular(): Promise<void>;
}
```

---