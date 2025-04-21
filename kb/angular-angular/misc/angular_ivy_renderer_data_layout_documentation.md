# Angular Ivy Renderer Data Layout Documentation

**Summary:** This file covers topics related to "Angular Ivy Renderer Data Layout Documentation". Key snippets include: Component Definition with DOM Elements in Angular Ivy, Component with Child Components and Directives in Angular Ivy, Implementing the Factory System for Angular Dependency Injection.

---

## Component Definition with DOM Elements in Angular Ivy

**Description:** Example showing how a simple template with div and text elements is represented in Angular's Ivy renderer. The component defines 5 declarations which are stored in the DECLS section of LView/TView.data.

```typescript
@Component({
  template: `<div>Hello <b>World</b>!</div>`
})
class MyApp {

  static ɵcmp = ɵɵdefineComponent({
    ...,
    decls: 5,
    template: function(rf: RenderFlags, ctx: MyApp) {
      if (rf & RenderFlags.Create) {
        ɵɵelementStart(0, 'div');
        ɵɵtext(1, 'Hello ');
        ɵɵelementStart(2, 'b');
        ɵɵtext(3, 'World');
        ɵɵelementEnd();
        ɵɵtext(4, '!');
        ɵɵelementEnd();
      }
      ...
    }
  });
}
```

---

## Component with Child Components and Directives in Angular Ivy

**Description:** Example showing how directives, child components, and host bindings are represented in the EXPANDO section of LView/TView.data. This demonstrates how Angular tracks dynamically-sized data structures.

```typescript
@Component({
  template: `<child tooltip></child>`
})
class MyApp {

  static ɵcmp = ɵɵdefineComponent({
    ...,
    decls: 1,
    template: function(rf: RenderFlags, ctx: MyApp) {
      if (rf & RenderFlags.Create) {
        ɵɵelement(0, 'child', ['tooltip', null]);
      }
      ...
    },
    directives: [Child, Tooltip]
  });
}


@Component({
  selector: 'child',
  ...
})
class Child {
  @HostBinding('tooltip') hostTitle = 'Hello World!';
  static ɵcmp = ɵɵdefineComponent({
    ...
    hostVars: 1
  });
  ...
}

@Directive({
  selector: '[tooltip]'
})
class Tooltip {
  @HostBinding('title') hostTitle = 'greeting';
  static ɵdir = ɵɵdefineDirective({
    ...
    hostVars: 1
  });
  ...
}
```

---

## Implementing the Factory System for Angular Dependency Injection

**Description:** Implementation of the Factory class used to wrap factory functions in Angular's DI system. This allows for monomorphic detection at runtime and handles recursive dependency detection.

```typescript
class Factory {
  /// Marker set to true during factory invocation to see if we get into recursive loop.
  /// Recursive loop causes an error to be displayed.
  resolving = false;
  constructor(public factory: Function) { }
}
function factory(fn) {
  return new Factory(fn);
}
const FactoryPrototype = Factory.prototype;
function isFactory(obj: any): obj is Factory {
  // See: https://jsperf.com/instanceof-vs-getprototypeof
  return typeof obj === 'object' && Object.getPrototypeOf(obj) === FactoryPrototype;
}
```

---