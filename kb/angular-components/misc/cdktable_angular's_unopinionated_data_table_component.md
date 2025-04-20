# CdkTable: Angular's Unopinionated Data Table Component

**Summary:** This file covers topics related to "CdkTable: Angular's Unopinionated Data Table Component". Key snippets include: Implementing TrackBy Function in CdkTable, Defining Column Templates for CdkTable in Angular, Enabling Row Recycling in CdkTable for Performance, Fixed Layout CdkTable for Performance Optimization, Complete CdkTable Example with Three Columns in Angular....

---

## Implementing TrackBy Function in CdkTable

**Description:** Adds a trackBy function to a CdkTable to improve performance by helping Angular identify unique rows, reducing unnecessary DOM operations during data updates.

```html
<table cdk-table [dataSource]="dataSource" [trackBy]="myTrackById">
```

---

## Defining Column Templates for CdkTable in Angular

**Description:** Creates a column definition using cdkColumnDef with corresponding header, cell, and footer templates. This structure defines how data will be displayed in each column of the table.

```html
<ng-container cdkColumnDef="username">
  <th cdk-header-cell *cdkHeaderCellDef> User name </th>
  <td cdk-cell *cdkCellDef="let row"> {{row.a}} </td>
  <td cdk-footer-cell *cdkFooterCellDef> User name </td>
</ng-container>
```

---

## Enabling Row Recycling in CdkTable for Performance

**Description:** Implements the recycleRows property on CdkTable to enable row view caching and recycling, which can improve performance when rows don't need animation or template switching.

```html
<table cdk-table [dataSource]="dataSource" recycleRows>
```

---

## Fixed Layout CdkTable for Performance Optimization

**Description:** Implements the fixedLayout property on CdkTable to enforce uniform column widths, which can improve rendering performance especially for tables with sticky columns.

```html
<table cdk-table [dataSource]="dataSource" fixedLayout>
```

---

## Complete CdkTable Example with Three Columns in Angular

**Description:** A complete example of a CdkTable implementation with three columns (username, age, title). The example includes column definitions and row declarations with data binding.

```html
<table cdk-table [dataSource]="dataSource">
  <!-- User name Definition -->
  <ng-container cdkColumnDef="username">
    <th cdk-header-cell *cdkHeaderCellDef> User name </th>
    <td cdk-cell *cdkCellDef="let row"> {{row.username}} </td>
  </ng-container>

  <!-- Age Definition -->
  <ng-container cdkColumnDef="age">
    <th cdk-header-cell *cdkHeaderCellDef> Age </th>
    <td cdk-cell *cdkCellDef="let row"> {{row.age}} </td>
  </ng-container>

  <!-- Title Definition -->
  <ng-container cdkColumnDef="title">
    <th cdk-header-cell *cdkHeaderCellDef> Title </th>
    <td cdk-cell *cdkCellDef="let row"> {{row.title}} </td>
  </ng-container>

  <!-- Header and Row Declarations -->
  <tr cdk-header-row *cdkHeaderRowDef="['username', 'age', 'title']"></tr>
  <tr cdk-row *cdkRowDef="let row; columns: ['username', 'age', 'title']"></tr>
</table>
```

---

## Dynamic Column Display in CdkTable using Angular Bindings

**Description:** Demonstrates how to dynamically set the columns displayed in a CdkTable using property binding to a variable. This allows for runtime changes to the displayed columns.

```html
<tr cdk-row *cdkRowDef="let row; columns: myDisplayedColumns"></tr>
```

---

## Selective Column Display in CdkTable

**Description:** Shows how to display only specific columns from those defined in the template, and in a custom order. This example displays only the age and username columns in that specific order.

```html
<tr cdk-row *cdkRowDef="let row; columns: ['age', 'username']"></tr>
```

---

## Alternative Non-Table HTML Implementation of CdkTable

**Description:** Demonstrates how to use CdkTable with custom elements instead of native HTML table tags. This approach provides more styling flexibility by using directive selectors like cdk-table, cdk-row, and cdk-cell.

```html
<cdk-table [dataSource]="dataSource">
  <!-- User name Definition -->
  <ng-container cdkColumnDef="username">
    <cdk-header-cell *cdkHeaderCellDef> User name </cdk-header-cell>
    <cdk-cell *cdkCellDef="let row"> {{row.username}} </cdk-cell>
  </ng-container>

  <!-- Age Definition -->
  <ng-container cdkColumnDef="age">
    <cdk-header-cell *cdkHeaderCellDef> Age </cdk-header-cell>
    <cdk-cell *cdkCellDef="let row"> {{row.age}} </cdk-cell>
  </ng-container>

  <!-- Title Definition -->
  <ng-container cdkColumnDef="title">
    <cdk-header-cell *cdkHeaderCellDef> Title </cdk-header-cell>
    <cdk-cell *cdkCellDef="let row"> {{row.title}} </cdk-cell>
  </ng-container>

  <!-- Header and Row Declarations -->
  <cdk-header-row *cdkHeaderRowDef="['username', 'age', 'title']"></cdk-header-row>
  <cdk-row *cdkRowDef="let row; columns: ['username', 'age', 'title']"></cdk-row>
</cdk-table>
```

---