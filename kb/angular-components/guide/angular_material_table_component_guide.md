# Angular Material Table Component Guide

**Summary:** This file covers topics related to "Angular Material Table Component Guide". Key snippets include: Implementing MatTable with display: flex in Angular Material, Adding Footer Row to Angular Material Table, Styling Selection Column for Angular Material Table, Creating Selection Column with Checkboxes in Angular Material Table, Initializing Basic mat-table with Data Array in Angular....

---

## Implementing MatTable with display: flex in Angular Material

**Description:** An example of using MatTable with flex layout instead of native HTML table elements. This approach uses mat-table, mat-row, and other component selectors instead of table, tr and other native elements with directives.

```html
<mat-table [dataSource]="dataSource">
  <!-- User name Definition -->
  <ng-container matColumnDef="username">
    <mat-header-cell *matHeaderCellDef> User name </mat-header-cell>
    <mat-cell *matCellDef="let row"> {{row.username}} </mat-cell>
  </ng-container>

  <!-- Age Definition -->
  <ng-container matColumnDef="age">
    <mat-header-cell *matHeaderCellDef> Age </mat-header-cell>
    <mat-cell *matCellDef="let row"> {{row.age}} </mat-cell>
  </ng-container>

  <!-- Title Definition -->
  <ng-container matColumnDef="title">
    <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>
    <mat-cell *matCellDef="let row"> {{row.title}} </mat-cell>
  </ng-container>

  <!-- Header and Row Declarations -->
  <mat-header-row *matHeaderRowDef="['username', 'age', 'title']"></mat-header-row>
  <mat-row *matRowDef="let row; columns: ['username', 'age', 'title']"></mat-row>
</mat-table>
```

---

## Adding Footer Row to Angular Material Table

**Description:** HTML code demonstrating how to add a footer row to an Angular Material table by defining footer cell templates in column definitions and adding a footer row definition.

```html
<ng-container matColumnDef="cost">
  <th mat-header-cell *matHeaderCellDef> Cost </th>
  <td mat-cell *matCellDef="let data"> {{data.cost}} </td>
  <td mat-footer-cell *matFooterCellDef> {{totalCost}} </td>
</ng-container>

...

<tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
<tr mat-row *matRowDef="let myRowData; columns: columnsToDisplay"></tr>
<tr mat-footer-row *matFooterRowDef="columnsToDisplay"></tr>
```

---

## Styling Selection Column for Angular Material Table

**Description:** CSS code to properly style the selection column in an Angular Material table, ensuring the ripple effect extends beyond the cell boundaries.

```css
.mat-column-select {
  overflow: initial;
}
```

---

## Creating Selection Column with Checkboxes in Angular Material Table

**Description:** HTML template code for implementing a column with checkboxes for row selection in an Angular Material table, including a header checkbox to toggle all selections.

```html
<ng-container matColumnDef="select">
  <th mat-header-cell *matHeaderCellDef>
    <mat-checkbox (change)="$event ? toggleAllRows() : null"
                  [checked]="selection.hasValue() && isAllSelected()"
                  [indeterminate]="selection.hasValue() && !isAllSelected()">
    </mat-checkbox>
  </th>
  <td mat-cell *matCellDef="let row">
    <mat-checkbox (click)="$event.stopPropagation()"
                  (change)="$event ? selection.toggle(row) : null"
                  [checked]="selection.isSelected(row)">
    </mat-checkbox>
  </td>
</ng-container>
```

---

## Initializing Basic mat-table with Data Array in Angular

**Description:** Demonstrates how to set up a basic mat-table component and bind it to a data array using the dataSource input property.

```html
<table mat-table [dataSource]="myDataArray">
  ...
</table>
```

---

## Defining Column Templates for mat-table in Angular

**Description:** Shows how to create column definitions for mat-table, including header and cell templates. It also demonstrates the use of mat-text-column for simple string value columns.

```html
<ng-container matColumnDef="score">
  <th mat-header-cell *matHeaderCellDef> Score </th>
  <td mat-cell *matCellDef="let user"> {{user.score}} </td>
</ng-container>
```

```html
<mat-text-column name="score"></mat-text-column>
```

---

## Implementing Selection Model for Angular Material Table

**Description:** JavaScript code to initialize a SelectionModel from @angular/cdk/collections that maintains the selection state of table rows.

```js
const initialSelection = [];
const allowMultiSelect = true;
this.selection = new SelectionModel<MyDataType>(allowMultiSelect, initialSelection);
```

---

## Implementing Row Selection Logic in Angular Material Table

**Description:** JavaScript logic to handle selection functionality including checking if all rows are selected and toggling selection for all rows.

```js
/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected == numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
toggleAllRows() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}
```

---