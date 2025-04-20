# Angular Input Signal Migration Tests

**Summary:** This file covers topics related to "Angular Input Signal Migration Tests". Key snippets include: Type Narrowing with Angular Input Properties in TypeScript, Applying Modifiers to Angular Input Properties in TypeScript, Importing and Using Angular's input() Function in TypeScript, Mutating Objects from Angular Input Properties in TypeScript, Initializing Input Properties with Angular's input() Function in TypeScript.

---

## Type Narrowing with Angular Input Properties in TypeScript

**Description:** This snippet demonstrates various techniques for type narrowing when using Angular's input() function. It includes examples of arrow functions, object destructuring, and multi-line formatting.

```TypeScript
import {Directive, input} from '@angular/core';

@Directive()
export class Narrowing {
  readonly name = input<string>();

  narrowingArrowFn() {
    [this].map((x) => {
      const name = x.name();
      return name && name.charAt(0);
    });
  }

  narrowingArrowFnMultiLineWrapped() {
    [this].map(
      (x) => {
      const name = x.name();
      return name &&
        name.includes(
          'A super long string to ensure this is wrapped and we can test formatting.',
        );
    },
    );
  }

  narrowingObjectExpansion() {
    [this].map(({name: nameInput}) => {
      const name = nameInput();
      return name && name.charAt(0);
    });
  }

  narrowingNormalThenObjectExpansion() {
    const name = this.name();
    if (name) {
      const {charAt} = name;
      charAt(0);
    }
  }
}
```

---

## Applying Modifiers to Angular Input Properties in TypeScript

**Description:** This snippet demonstrates how to apply various modifiers to Angular input properties. It includes examples of readonly, protected, and custom decorator usage with the input() function.

```TypeScript
import {Component, input} from '@angular/core';

function CustomDecorator() {
  return (a: any, b: any) => {};
}

@Component({template: ''})
class ModifierScenarios {
  readonly alreadyReadonly = input(true);
  protected readonly ImProtected = input(true);
  protected readonly ImProtectedAndReadonly = input(true);
  @CustomDecorator()
protected readonly usingCustomDecorator = input(true);
}
```

---

## Importing and Using Angular's input() Function in TypeScript

**Description:** This snippet demonstrates how to import and use Angular's input() function in a component. It shows the basic syntax for creating an input property with a boolean default value.

```TypeScript
import {
  Directive,
  input
} from '@angular/core';

@Directive()
export class TestCmp {
  readonly disabled = input(false);
}
```

---

## Mutating Objects from Angular Input Properties in TypeScript

**Description:** This snippet shows how to handle mutation of objects received from Angular input properties. It demonstrates accessing and modifying properties of an input object.

```TypeScript
import {input} from '@angular/core';

export class TestCmp {
  readonly shared = input<{
    x: string;
}>({ x: '' });

  bla() {
    const shared = this.shared();
    shared.x = this.doSmth(shared);

    this.doSmth(shared);
  }

  doSmth(v: typeof this.shared()): string {
    return v.x;
  }
}
```

---

## Initializing Input Properties with Angular's input() Function in TypeScript

**Description:** This snippet shows how to initialize input properties using Angular's input() function. It demonstrates handling nullable string inputs and implementing a validation method.

```TypeScript
  readonly name = input<string | null>(null);
  readonly complex = input<string | null>(null);

  valid() {
    const name = this.name();
    if (name) {
      name.charAt(0);
    }
  }
```

---