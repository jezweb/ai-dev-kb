# Angular 13.3.11 Changelog

**Summary:** This file covers topics related to "Angular 13.3.11 Changelog". Key snippets include: Optimizing Directive/Pipe Reference Emission in Angular Compiler, Adding Support for TypeScript 3.8, Adding style="{{exp}}" based interpolation in Angular Core, Adding Original Placeholder Value - Angular Compiler, Allowing Null Values in Angular Core Renderer....

---

## Optimizing Directive/Pipe Reference Emission in Angular Compiler

**Description:** Enhancement to the Angular compiler-cli that reduces bundle size by only emitting directive and pipe references that are actually used in the application.

---

## Adding Support for TypeScript 3.8

**Description:** This update adds support for TypeScript 3.8 in the Angular framework.

```typescript
typescript 3.8 support
```

---

## Adding style="{{exp}}" based interpolation in Angular Core

**Description:** This fix adds support for style attribute interpolation using the format style="{{exp}}" in Angular core, addressing issue #33575.

```TypeScript
Add `style="{{exp}}"` based interpolation
```

---

## Adding Original Placeholder Value - Angular Compiler

**Description:** Enhancement to add original placeholder value on extracted XMB in the Angular compiler.

```typescript
e99d860
```

---

## Allowing Null Values in Angular Core Renderer

**Description:** This fix allows null values to be passed to the renderer's setElement method in Angular core.

```TypeScript
allow null value for renderer setElement(…) ([#17065](https://github.com/angular/angular/issues/17065)) ([ff15043](https://github.com/angular/angular/commit/ff15043)), closes [#13686](https://github.com/angular/angular/issues/13686)
```

---

## Setting Correct Timezone for ISO8601 Dates in Safari

**Description:** Fixes an issue with timezone handling for ISO8601 dates in Safari browser.

```TypeScript
([#21506](https://github.com/angular/angular/issues/21506)) ([8e9cd57](https://github.com/angular/angular/commit/8e9cd57)), closes [#21491](https://github.com/angular/angular/issues/21491)
```

---

## Breaking Change Example: Injector Type Checking Variant

**Description:** Another example showing the same breaking change around injector type checking, illustrating the impact on mock implementations.

```typescript
class Foo {}
class MockFoo extends Foo {
  setupMock();
}

var PROVIDERS = [
  {provide: Foo, useClass: MockFoo}
];

...

function myTest(injector: Injector) {
  var foo = injector.get(Foo);
  // This line used to work since `foo` used to be `any` before this
  // change, it will now be `Foo`, and `Foo` does not have `setUpMock()`.
  // The fix is to downcast: `injector.get(Foo) as MockFoo`.
  foo.setUpMock();
}
```

---

## Using Maps in Angular compiler selector implementation

**Description:** Performance improvement to use Maps instead of objects in selector implementation in the Angular compiler.

```TypeScript
use Maps instead of objects in selector implementation
```

---