# Angular Material Chips Documentation

**Summary:** This file covers topics related to "Angular Material Chips Documentation". Key snippets include: Implementing a Chip Grid with Input in Angular Material, Creating a Static Chip List in Angular Material, Implementing a Removable Chip in Angular Material, Configuring Global Defaults for Angular Material Chips, Creating a Chip Listbox in Angular Material....

---

## Implementing a Chip Grid with Input in Angular Material

**Description:** This snippet shows how to create a chip grid with an input field for entering sandwich fillings. It uses mat-chip-grid, mat-chip-row, and mat-form-field components along with various chip-related directives.

```html
<mat-form-field>
  <mat-chip-grid #myChipGrid [(ngModel)]="mySelection"
    aria-label="enter sandwich fillings">
    @for (filling of fillings; track filling) {
      <mat-chip-row (removed)="remove(filling)">
        {{filling.name}}
        <button matChipRemove>
          <mat-icon>cancel</mat-icon>
        </button>
      </mat-chip-row>
    }
  </mat-chip-grid>
  <input [matChipInputFor]="myChipGrid"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          (matChipInputTokenEnd)="add($event)"
          aria-label="Add sandwich fillings..." />
</mat-form-field>
```

---

## Creating a Static Chip List in Angular Material

**Description:** This snippet demonstrates how to create a static, non-interactive chip list using mat-chip-set and mat-chip components. It uses ARIA roles to improve accessibility for screen readers.

```html
<mat-chip-set role="list">
  <mat-chip role="listitem"> Sugar </mat-chip>
  <mat-chip role="listitem"> Spice </mat-chip>
  <mat-chip role="listitem"> Everything Nice </mat-chip>
</mat-chip-set>
```

---

## Implementing a Removable Chip in Angular Material

**Description:** This snippet demonstrates how to create a removable chip using the mat-chip-option component with a remove button. The matChipRemove attribute is used on a button element to enable removal functionality.

```html
 <mat-chip-option>
  Orange
  <button matChipRemove aria-label="Remove orange">
    <mat-icon>cancel</mat-icon>
  </button>
</mat-chip-option>
```

---

## Configuring Global Defaults for Angular Material Chips

**Description:** This snippet shows how to specify global configuration defaults for the Angular Material chips module using the MAT_CHIPS_DEFAULT_OPTIONS token in the NgModule providers.

```typescript
@NgModule({
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [COMMA, SPACE]
      }
    }
  ]
})
```

---

## Creating a Chip Listbox in Angular Material

**Description:** This snippet demonstrates how to create a chip listbox for selecting shirt sizes using the mat-chip-listbox and mat-chip-option components in Angular Material.

```html
<mat-chip-listbox aria-label="select a shirt size">
  <mat-chip-option> Small </mat-chip-option>
  <mat-chip-option> Medium </mat-chip-option>
  <mat-chip-option> Large </mat-chip-option>
</mat-chip-listbox>
```

---

## Creating a Disabled Chip Option in Angular Material

**Description:** This snippet shows how to create a disabled chip option using the mat-chip-option component in Angular Material. The disabled attribute prevents user interaction and gives the chip a disabled appearance.

```html
<mat-chip-option disabled>Orange</mat-chip-option>
```

---

## Creating a Basic Chip Set in Angular Material

**Description:** This snippet shows how to create a basic chip set using mat-chip-set and mat-chip components. This implementation doesn't use any specific accessibility pattern and is intended for non-interactive use.

```html
<mat-chip-set>
  <mat-chip> John </mat-chip>
  <mat-chip> Paul </mat-chip>
  <mat-chip> James </mat-chip>
</mat-chip-set>
```

---

## Creating a Disabled Chip Row in Angular Material

**Description:** This snippet illustrates how to create a disabled chip row using the mat-chip-row component in Angular Material. The disabled attribute prevents user interaction and gives the chip a disabled appearance.

```html
<mat-chip-row disabled>Orange</mat-chip-row>
```

---

## Creating a Disabled Chip in Angular Material

**Description:** This snippet demonstrates how to create a disabled chip using the mat-chip component in Angular Material. The disabled attribute is used to give the chip a disabled appearance.

```html
<mat-chip disabled>Orange</mat-chip>
```

---