# Angular Pipes Documentation

**Summary:** This file covers topics related to "Angular Pipes Documentation". Key snippets include: Implementing PipeTransform Interface for Custom Pipe, Creating Parameterized Angular Pipe, Using Built-in Pipes in Angular Component, Implementing Basic Angular Pipe Transformation, Defining a Custom Pipe with @Pipe Decorator....

---

## Implementing PipeTransform Interface for Custom Pipe

**Description:** Illustrates how to implement the PipeTransform interface when creating a custom pipe in Angular. This ensures the correct structure of the pipe class.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe implements PipeTransform {}
```

---

## Creating Parameterized Angular Pipe

**Description:** Shows how to implement a custom pipe that accepts additional parameters for transformation. The pipe takes a string value and a format parameter to optionally convert the output to uppercase.

```angular-ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: string, format: string): string {
    let msg = `My custom transformation of ${value}.`

    if (format === 'uppercase') {
      return msg.toUpperCase()
    } else {
      return msg
    }
  }
}
```

---

## Using Built-in Pipes in Angular Component

**Description:** Demonstrates the usage of built-in Angular pipes (TitleCase, Date, Currency) in a component template. The example shows how to transform company name, date, and amount using pipes.

```angular-ts
import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  template: `
    <main>
       <!-- Transform the company name to title-case and
       transform the purchasedOn date to a locale-formatted string -->
<h1>Purchases from {{ company | titlecase }} on {{ purchasedOn | date }}</h1>

	    <!-- Transform the amount to a currency-formatted string -->
      <p>Total: {{ amount | currency }}</p>
    </main>
  `,
})
export class ShoppingCartComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
```

---

## Implementing Basic Angular Pipe Transformation

**Description:** Demonstrates how to create a basic custom pipe transformation in Angular that takes a string value and returns a transformed string. Uses the @Pipe decorator and implements PipeTransform interface.

```angular-ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: string): string {
    return `My custom transformation of ${value}.`
  }
}
```

---

## Defining a Custom Pipe with @Pipe Decorator

**Description:** Shows the basic structure of defining a custom pipe in Angular using the @Pipe decorator. This example demonstrates how to set up the pipe class and specify its name.

```typescript
import { Pipe } from '@angular/core';

@Pipe({
  name: 'myCustomTransformation',
})
export class MyCustomTransformationPipe {}
```

---

## Implementing Impure Angular Pipe for Arrays

**Description:** Demonstrates creation of an impure pipe for detecting changes in arrays by setting pure: false. The pipe joins array elements and updates when array references or contents change.

```angular-ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinNamesImpure',
  pure: false,
})
export class JoinNamesImpurePipe implements PipeTransform {
  transform(names: string[]): string {
    return names.join();
  }
}
```

---

## Creating a Custom Kebab Case Pipe in Angular

**Description:** Demonstrates how to create a custom pipe in Angular that transforms strings to kebab case. The example shows the implementation of the pipe class with the @Pipe decorator and the transform method.

```typescript
// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase',
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '-');
  }
}
```

---