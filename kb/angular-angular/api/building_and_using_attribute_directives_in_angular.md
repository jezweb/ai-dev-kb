# Building and Using Attribute Directives in Angular

**Summary:** This file covers topics related to "Building and Using Attribute Directives in Angular". Key snippets include: Binding Component Property to Directive, Implementing Mouse Event Handlers, Template with Color Selection Controls, Adding Default Color Property, Applying the Highlight Directive....

---

## Binding Component Property to Directive

**Description:** HTML example showing how to bind the component's color property to the highlight directive.

```html
<p [appHighlight]="color">Highlight me!</p>
```

---

## Implementing Mouse Event Handlers

**Description:** Adding mouse enter and leave event handlers using @HostListener decorator to the highlight directive.

```typescript
@HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
```

---

## Template with Color Selection Controls

**Description:** Enhanced template with radio buttons for selecting the highlight color to be used by the directive.

```html
<h1>My First Attribute Directive</h1>

<h2>Pick a highlight color</h2>
<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
<p [appHighlight]="color">Highlight me!</p>
```

---

## Adding Default Color Property

**Description:** Adding a second Input property to the directive for specifying a default color to use when no primary color is set.

```typescript
@Input() defaultColor = '';
```

---

## Applying the Highlight Directive

**Description:** HTML template example showing how to apply the highlight directive to a paragraph element.

```html
<p appHighlight>Highlight me!</p>
```

---

## Generating an Attribute Directive with Angular CLI

**Description:** Command for using the Angular CLI to generate a new directive called 'highlight'. This creates both the directive file and a corresponding test file.

```shell
ng generate directive highlight
```

---

## Importing Input for Directive Properties

**Description:** Import statement adding Input from @angular/core to enable property binding for the directive.

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
```

---

## Initial Attribute Directive Structure

**Description:** Basic structure of a generated attribute directive file showing the @Directive decorator with a CSS selector configuration.

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor() { }
}
```

---