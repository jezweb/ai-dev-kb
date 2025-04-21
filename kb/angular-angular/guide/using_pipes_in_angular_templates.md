# Using Pipes in Angular Templates

**Summary:** This file covers topics related to "Using Pipes in Angular Templates". Key snippets include: Passing Format Parameter to DatePipe in Angular Template, Passing Format Parameter to DatePipe in Angular Template, Applying Basic DatePipe in Angular HTML Template, Configuring DatePipe in Angular Component, Adding LowerCasePipe to Component Imports....

---

## Passing Format Parameter to DatePipe in Angular Template

**Description:** Shows how to pass a format parameter to the date pipe using colon syntax. This example formats the date to display only the year by using the 'yyyy' format pattern.

```angular-html
<p>The hero's birthday is in {{ birthday | date:'yyyy' }}</p>
```

---

## Passing Format Parameter to DatePipe in Angular Template

**Description:** Shows how to pass a format parameter to the date pipe using colon syntax. This example formats the date to display only the year by using the 'yyyy' format pattern.

```angular-html
<p>The hero's birthday is in {{ birthday | date:'yyyy' }}</p>
```

---

## Applying Basic DatePipe in Angular HTML Template

**Description:** Shows how to use the pipe operator (|) to apply the date pipe to a birthday property in an Angular template. The pipe transforms the Date object into a human-readable date format.

```angular-html
<p>The hero's birthday is {{ birthday | date }}</p>
```

---

## Configuring DatePipe in Angular Component

**Description:** Demonstrates the component setup required for using DatePipe, including importing DatePipe from @angular/common and adding it to the component's imports array. The component defines a birthday property as a Date object.

```typescript
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './app.component.html',
  imports: [DatePipe],
})
export class AppComponent {
  birthday = new Date();
}
```

---

## Adding LowerCasePipe to Component Imports

**Description:** Code showing how to include the LowerCasePipe in the component's imports array, making it available for use in the template.

```ts
@Component({
    ...
    imports: [LowerCasePipe]
})
```

---

## Passing Multiple Parameters to DatePipe in Angular Template

**Description:** Demonstrates passing multiple parameters to a pipe by separating them with colons. This example uses the date pipe with a time format and timezone parameter to display the current time in UTC.

```angular-html
<p>The current time is: {{ currentTime | date:'hh:mm':'UTC' }}</p>
```

---