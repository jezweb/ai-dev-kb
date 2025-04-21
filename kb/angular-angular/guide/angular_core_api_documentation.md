# Angular Core API Documentation

**Summary:** This file covers topics related to "Angular Core API Documentation". Key snippets include: Creating Components Programmatically in Angular, Defining a Computed Signal in Angular, Implementing ViewChild and ViewChildren Decorators for Angular Component References, Defining linkedSignal Function in TypeScript, Defining ErrorHandler Class in TypeScript....

---

## Creating Components Programmatically in Angular

**Description:** Function to create component instances dynamically outside of templates. Requires an environment injector and accepts options for host element, custom injector, projectable nodes, and additional directives/bindings.

```typescript
export function createComponent<C>(component: Type<C>, options: {
    environmentInjector: EnvironmentInjector;
    hostElement?: Element;
    elementInjector?: Injector;
    projectableNodes?: Node[][];
    directives?: (Type<unknown> | DirectiveWithBindings<unknown>)[];
    bindings?: Binding[];
}): ComponentRef<C>;
```

---

## Defining a Computed Signal in Angular

**Description:** Creates a read-only signal that derives its value from other signals. The computation function is re-executed whenever any dependency signals change. Optional configuration includes a debug name and equality function.

```typescript
export function computed<T>(computation: () => T, options?: CreateComputedOptions<T>): Signal<T>;
```

---

## Implementing ViewChild and ViewChildren Decorators for Angular Component References

**Description:** Defines the ViewChild and ViewChildren decorators and their signal-based alternatives for querying child elements, components, or directives from a component's template. These APIs allow accessing and manipulating child elements.

```typescript
// @public
export type ViewChild = Query;

// @public
export const ViewChild: ViewChildDecorator;

// @public
export const viewChild: ViewChildFunction;

// @public
export interface ViewChildDecorator {
    (selector: ProviderToken<unknown> | Function | string, opts?: {
        read?: any;
        static?: boolean;
    }): any;
    // (undocumented)
    new (selector: ProviderToken<unknown> | Function | string, opts?: {
        read?: any;
        static?: boolean;
    }): ViewChild;
}

// @public
export interface ViewChildFunction {
    <LocatorT, ReadT>(locator: ProviderToken<LocatorT> | string, opts: {
        read: ProviderToken<ReadT>;
        debugName?: string;
    }): Signal<ReadT | undefined>;
    // (undocumented)
    <LocatorT>(locator: ProviderToken<LocatorT> | string, opts?: {
        debugName?: string;
    }): Signal<LocatorT | undefined>;
    required: {
        <LocatorT>(locator: ProviderToken<LocatorT> | string, opts?: {
            debugName?: string;
        }): Signal<LocatorT>;
        <LocatorT, ReadT>(locator: ProviderToken<LocatorT> | string, opts: {
            read: ProviderToken<ReadT>;
            debugName?: string;
        }): Signal<ReadT>;
    };
}

// @public
export type ViewChildren = Query;

// @public
export const ViewChildren: ViewChildrenDecorator;

// @public (undocumented)
export function viewChildren<LocatorT>(locator: ProviderToken<LocatorT> | string, opts?: {
    debugName?: string;
}): Signal<ReadonlyArray<LocatorT>>;

// @public (undocumented)
export function viewChildren<LocatorT, ReadT>(locator: ProviderToken<LocatorT> | string, opts: {
    read: ProviderToken<ReadT>;
    debugName?: string;
}): Signal<ReadonlyArray<ReadT>>;

// @public
export interface ViewChildrenDecorator {
    (selector: ProviderToken<unknown> | Function | string, opts?: {
        read?: any;
        emitDistinctChangesOnly?: boolean;
    }): any;
    // (undocumented)
    new (selector: ProviderToken<unknown> | Function | string, opts?: {
        read?: any;
        emitDistinctChangesOnly?: boolean;
    }): ViewChildren;
}
```

---

## Defining linkedSignal Function in TypeScript

**Description:** Defines a function for creating linked signals. It supports both simple computations and more complex options with source and computation functions.

```TypeScript
export function linkedSignal<D>(computation: () => D, options?: {
    equal?: ValueEqualityFn<NoInfer<D>>;
}): WritableSignal<D>;

export function linkedSignal<S, D>(options: {
    source: () => S;
    computation: (source: NoInfer<S>, previous?: {
        source: NoInfer<S>;
        value: NoInfer<D>;
    }) => D;
    equal?: ValueEqualityFn<NoInfer<D>>;
}): WritableSignal<D>;
```

---

## Defining ErrorHandler Class in TypeScript

**Description:** Declares the ErrorHandler class with a handleError method for handling errors in Angular applications.

```TypeScript
export class ErrorHandler {
    handleError(error: any): void;
}
```

---

## Enabling Production Mode in Angular

**Description:** Disables development-only features and assertions to optimize performance for production environments.

```typescript
export function enableProdMode(): void;
```

---

## Defining Input Decorator and Function in TypeScript

**Description:** Declares the Input decorator and input function for creating input properties in Angular components.

```TypeScript
export const Input: InputDecorator;
export const input: InputFunction;
```

---

## Defining PLATFORM_ID Constant in TypeScript

**Description:** Defines a constant for the PLATFORM_ID injection token, used to identify the current platform.

```TypeScript
export const PLATFORM_ID: InjectionToken<Object>;
```

---

## Defining OutputOptions Interface in TypeScript

**Description:** Defines an interface for output options, including an optional alias property.

```TypeScript
export interface OutputOptions {
    alias?: string;
}
```

---