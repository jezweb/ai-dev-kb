# Dependency Injection in Angular

**Summary:** This file covers topics related to "Dependency Injection in Angular". Key snippets include: Resolving Circular Dependencies with forwardRef in Angular, Injecting Component's DOM Element in Angular Directive, Various Binding Types in Angular DI, Multiple Object Instantiation Sequence in Angular DI, Simple Dependency Declaration in Angular DI....

---

## Resolving Circular Dependencies with forwardRef in Angular

**Description:** This example demonstrates the use of forwardRef to resolve circular dependencies in Angular, specifically when a class references itself in its providers array.

```typescript
providers: [
  {
    provide: PARENT_MENU_ITEM,
    useExisting: forwardRef(() => MenuItem),
  },
],
```

---

## Injecting Component's DOM Element in Angular Directive

**Description:** This code snippet shows how to inject and access a component's DOM element using ElementRef in an Angular directive. This is useful for direct DOM manipulation when necessary.

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private element = inject(ElementRef)

  update() {
    this.element.nativeElement.style.color = 'red';
  }
}
```

---

## Various Binding Types in Angular DI

**Description:** Demonstrates different ways to bind dependencies: to classes, to values, to factories, and using shorthand syntax for class bindings.

```typescript
var inj = Injector.resolveAndCreate([
  bind(Car).toClass(Car),
  bind(Engine).toClass(Engine)
]);

var inj = Injector.resolveAndCreate([
  Car,  // syntax sugar for bind(Car).toClass(Car)
  Engine
]);

var inj = Injector.resolveAndCreate([
  bind(Car).toValue(new Car(new Engine()))
]);

var inj = Injector.resolveAndCreate([
  bind(Car).toFactory((e) => new Car(e), [Engine]),
  bind(Engine).toFactory(() => new Engine())
]);
```

---

## Multiple Object Instantiation Sequence in Angular DI

**Description:** Demonstrates how the order of object instantiation affects caching behavior in Angular's DI system, with Engine being instantiated first and then reused for Car.

```typescript
var engine = inj.get(Engine); //instantiates an Engine
var car = inj.get(Car); //instantiates a Car (reuses Engine)
```

---

## Simple Dependency Declaration in Angular DI

**Description:** Shows a class with a constructor that declares a dependency on Engine, which the DI system will attempt to resolve by traversing the injector hierarchy.

```typescript
class Car {
  constructor(e: Engine){}
}
```

---

## Implementing Custom Provider with @Inject for Browser Storage in Angular

**Description:** This snippet demonstrates how to create a custom provider for localStorage using InjectionToken and implement it in a BrowserStorageService. It allows for easy mocking during testing.

```typescript
import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  public storage = inject(BROWSER_STORAGE);

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }
}
```

---