# Angular Material Autocomplete Component Documentation

**Summary:** This file covers topics related to "Angular Material Autocomplete Component Documentation". Key snippets include: Attaching Autocomplete Panel to a Different Element in Angular Material.

---

## Attaching Autocomplete Panel to a Different Element in Angular Material

**Description:** Example showing how to attach an autocomplete panel to a different container element using matAutocompleteOrigin directive and matAutocompleteConnectedTo input.

```html
<div class="custom-wrapper-example" matAutocompleteOrigin #origin="matAutocompleteOrigin">
  <input
    matInput
    [formControl]="myControl"
    [matAutocomplete]="auto"
    [matAutocompleteConnectedTo]="origin">
</div>

<mat-autocomplete #auto="matAutocomplete">
  @for (option of options; track option) {
    <mat-option [value]="option">{{option}}</mat-option>
  }
</mat-autocomplete>
```

---