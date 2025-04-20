# Angular Input Migration Test Cases

**Summary:** This file covers topics related to "Angular Input Migration Test Cases". Key snippets include: Required Inputs with Various Type References, Using Input Signals in Object Shorthand Properties, Component with Non-Migratable Input, Handling Template Writes to Inputs, Defining Angular Components with Input Decorators....

---

## Required Inputs with Various Type References

**Description:** Demonstrates defining required inputs with different type references, including primitive types, constant types, and complex imported types. Shows how to handle cases where explicit typing would require additional imports.

```typescript
// tslint:disable

import {input} from '@angular/core';
import {COMPLEX_VAR} from './required-no-explicit-type-extra';

export const CONST = {field: true};

export class RequiredNoExplicitType {
  readonly someInputNumber = input.required<number>();
  readonly someInput = input.required<boolean>();
  readonly withConstInitialVal = input.required<typeof CONST>();

  // typing this explicitly now would require same imports as from the `-extra` file.
  readonly complexVal = input.required<typeof COMPLEX_VAR>();
}
```

---

## Using Input Signals in Object Shorthand Properties

**Description:** Demonstrates using input signals in object shorthand properties in component templates and host bindings. Shows how to properly access the signal value within an object literal.

```typescript
// tslint:disable

import {Component, input} from '@angular/core';

@Component({
  template: `
    <div [bla]="{myInput: myInput()}">
    </div>
  `,
  host: {
    '[style]': '{myInput: myInput()}',
  },
})
export class TemplateObjectShorthand {
  readonly myInput = input(true);
}
```

---

## Component with Non-Migratable Input

**Description:** Shows a component with an @Input that cannot be migrated due to manual instantiation. Demonstrates a case where automatic migration to input signals is not possible.

```typescript
// tslint:disable

import {Component, Input} from '@angular/core';

@Component({})
export class ManualInstantiation {
  // TODO: Skipped for migration because:
  //  Class of this input is manually instantiated. This is discouraged and prevents
  //  migration.
  @Input() bla: string = '';
}
```

---

## Handling Template Writes to Inputs

**Description:** Shows examples of inputs that cannot be migrated to signals because they are written to from templates. Includes cases like ngModel two-way binding and event handlers that modify input values.

```typescript
// tslint:disable

import {Component, Input, input} from '@angular/core';

@Component({
  template: `
    <input [(ngModel)]="inputA" />
    <div (click)="inputB = false">
    </div>
  `,
  host: {
    '(click)': 'inputC = true',
  },
})
class TwoWayBinding {
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() inputA = '';
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() inputB = true;
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() inputC = false;
  readonly inputD = input(false);
}
```

---

## Defining Angular Components with Input Decorators

**Description:** This snippet defines two Angular components with input decorators. It includes comments about migration challenges for inputs used in control flow expressions.

```TypeScript
@Component({template: ''})
export class OtherComponent {
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
  @Input() safeRead: string = '';
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
  @Input() safeRead2: string = '';
}
```

---

## Handling Identifier Collisions with Input Signals in Angular

**Description:** Shows how to handle variable name collisions when migrating to input signals. The example demonstrates resolving conflicts between input signal names and local variables or global identifiers.

```typescript
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// tslint:disable

import {Component, input} from '@angular/core';

const complex = 'some global variable';

@Component({template: ''})
class MyComp {
  readonly name = input<string | null>(null);
  readonly complex = input<string | null>(null);

  valid() {
    const name = this.name();
    if (name) {
      name.charAt(0);
    }
  }

  // Input read cannot be stored in a variable: `name`.
  simpleLocalCollision() {
    const name = 'some other name';
    const nameValue = this.name();
    if (nameValue) {
      nameValue.charAt(0);
    }
  }

  // `this.complex` should conflict with the file-level `complex` variable,
  // and result in a suffix variable.
  complexParentCollision() {
    const complexValue = this.complex();
    if (complexValue) {
      complexValue.charAt(0);
    }
  }

  nestedShadowing() {
    const nameValue = this.name();
    if (nameValue) {
      nameValue.charAt(0);
    }

    function nested() {
      const name = '';
    }
  }
}
```

---

## Managing Shared Variables Across Incompatible Scopes

**Description:** Demonstrates patterns for sharing input signal values across different scope blocks. Shows how to handle type narrowing and variable lifetime when dealing with conditional blocks and class properties.

```typescript
// tslint:disable

import {Directive, Component, input} from '@angular/core';

@Directive()
class SomeDir {
  readonly bla = input.required<RegExp>();
}

@Component({
  template: ``,
})
export class ScopeMismatchTest {
  eachScopeRedeclared() {
    const regexs: RegExp[] = [];

    if (global.console) {
      const dir: SomeDir = null!;
      regexs.push(dir.bla());
    }

    const dir: SomeDir = null!;
    regexs.push(dir.bla());
  }

  nestedButSharedLocal() {
    const regexs: RegExp[] = [];
    const dir: SomeDir = null!;

    const bla = dir.bla();
    if (global.console) {
      regexs.push(bla);
    }

    regexs.push(bla);
  }

  dir: SomeDir = null!;
  nestedButSharedInClassInstance() {
    const regexs: RegExp[] = [];

    const bla = this.dir.bla();
    if (global.console) {
      regexs.push(bla);
    }

    regexs.push(bla);
  }
}
```

---