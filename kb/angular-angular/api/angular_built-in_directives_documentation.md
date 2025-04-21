# Angular Built-in Directives Documentation

**Summary:** This file covers topics related to "Angular Built-in Directives Documentation". Key snippets include: Importing NgClass in Angular Component, Using NgIf for Conditional Rendering in Angular HTML Template, Using NgClass with an Expression in Angular Template, Using NgFor to Render Lists in Angular HTML Template, Using ng-container with NgIf in Angular HTML Template....

---

## Importing NgClass in Angular Component

**Description:** This snippet demonstrates how to import the NgClass directive in an Angular component. NgClass is used to add or remove multiple CSS classes simultaneously.

```TypeScript
import { NgClass } from '@angular/common';
```

---

## Using NgIf for Conditional Rendering in Angular HTML Template

**Description:** This snippet demonstrates how to use the NgIf directive to conditionally render an ItemDetailComponent based on the isActive expression.

```html
<app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>
```

---

## Using NgClass with an Expression in Angular Template

**Description:** This example shows how to use NgClass with a boolean expression in an Angular template. The class 'special' is applied when isSpecial is true.

```HTML
<div [ngClass]="{ 'special': isSpecial }">This div is special</div>
```

---

## Using NgFor to Render Lists in Angular HTML Template

**Description:** This snippet demonstrates how to use the NgFor directive to iterate over an array and render list items in an Angular template.

```html
<div *ngFor="let item of items">{{ item }}</div>
```

---

## Using ng-container with NgIf in Angular HTML Template

**Description:** This snippet shows how to use ng-container with NgIf to conditionally render content without introducing extra DOM elements.

```html
<p>
  I turned the corner
  <ng-container *ngIf="hero">
    and saw {{ hero.name }}. I waved
  </ng-container>
  and continued on my way.
</p>
```

---

## Implementing Input Property in Child Components

**Description:** Shows how to set up an input property in a child component to receive the item data from the parent component when using NgSwitch.

```typescript
@Input() item!: Item;

@Component({
  selector: 'app-stout-item',
  template: `The <strong>{{item.name}}</strong> costs ${{item.price}}`
})
export class StoutItemComponent {}
```

---

## Repeating Component Views with NgFor in Angular HTML Template

**Description:** This snippet shows how to use NgFor to repeat a component element for each item in an array.

```html
<app-item-detail *ngFor="let item of items" [item]="item"></app-item-detail>
```

---

## Implementing TrackBy Function for NgFor in Angular Component

**Description:** This snippet shows how to implement a trackBy function in an Angular component to optimize rendering performance with NgFor.

```typescript
trackByItems(index: number, item: Item): number {
  return item.id;
}
```

---

## Using NgClass with a Method in Angular Template

**Description:** This snippet shows how to use NgClass with a method in an Angular template, binding to the currentClasses property.

```HTML
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>
```

---

## Using ng-container with NgIf in Angular Select Element

**Description:** This snippet demonstrates how to use ng-container with NgIf to conditionally include options in a select element without affecting the DOM structure.

```html
<select [(ngModel)]="hero">
  <ng-container *ngFor="let h of heroes">
    <ng-container *ngIf="showSad || h.emotion !== 'sad'">
      <option [ngValue]="h">{{ h.name }} ({{ h.emotion }})</option>
    </ng-container>
  </ng-container>
</select>
```

---

## Importing NgSwitch Directives in Angular Component

**Description:** This snippet shows how to import the NgSwitch, NgSwitchCase, and NgSwitchDefault directives in an Angular component.

```typescript
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  // ... other metadata
})
```

---

## Importing NgIf in Angular Component

**Description:** This code shows how to import the NgIf directive in an Angular component. NgIf is used to conditionally add or remove elements from the DOM.

```TypeScript
import { NgIf } from '@angular/common';
```

---

## Importing FormsModule for NgModel in Angular Component

**Description:** This snippet demonstrates how to import the FormsModule, which is required to use NgModel for two-way data binding in forms.

```TypeScript
import { FormsModule } from '@angular/forms';
```

---

## Importing NgFor in Angular Component

**Description:** This snippet shows how to import the NgFor directive in an Angular component to use it for list rendering.

```typescript
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor],
  // ... other metadata
})
```

---

## Using NgStyle in Angular Template

**Description:** This example shows how to use NgStyle in an Angular template, binding to the currentStyles property.

```HTML
<div [ngStyle]="currentStyles">This div is initially italic, normal weight, and extra large.</div>
```

---

## Using TrackBy with NgFor in Angular HTML Template

**Description:** This snippet demonstrates how to use the trackBy function with NgFor in an Angular template to improve rendering efficiency.

```html
<div *ngFor="let item of items; trackBy: trackByItems">
  ({{ item.id }}) {{ item.name }}
</div>
```

---