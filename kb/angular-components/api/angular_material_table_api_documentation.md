# Angular Material Table API Documentation

**Summary:** This file covers topics related to "Angular Material Table API Documentation". Key snippets include: MatTable Component Definition in TypeScript, MatTableDataSource Implementation in TypeScript, MatTableModule Declaration in TypeScript, MatColumnDef Implementation in TypeScript.

---

## MatTable Component Definition in TypeScript

**Description:** The core table component for Material Design that extends CdkTable. It includes properties for managing sticky positioning and CSS classes for styling table elements.

```typescript
export class MatTable<T> extends CdkTable<T> {
    protected needsPositionStickyOnElement: boolean;
    protected stickyCssClass: string;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatTable<any>, "mat-table, table[mat-table]", ["matTable"], {}, {}, never, ["caption", "colgroup, col", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTable<any>, never>;
}
```

---

## MatTableDataSource Implementation in TypeScript

**Description:** A data source implementation for the Material Table that handles filtering, sorting, and pagination. It extends the CDK DataSource class and provides methods for data manipulation.

```typescript
export class MatTableDataSource<T, P extends MatPaginator = MatPaginator> extends DataSource<T> {
    constructor(initialData?: T[]);
    connect(): BehaviorSubject<T[]>;
    get data(): T[];
    set data(data: T[]);
    disconnect(): void;
    get filter(): string;
    set filter(filter: string);
    _filterData(data: T[]): T[];
    filteredData: T[];
    filterPredicate: (data: T, filter: string) => boolean;
    _orderData(data: T[]): T[];
    _pageData(data: T[]): T[];
    get paginator(): P | null;
    set paginator(paginator: P | null);
    _renderChangesSubscription: Subscription | null;
    get sort(): MatSort | null;
    set sort(sort: MatSort | null);
    sortData: (data: T[], sort: MatSort) => T[];
    sortingDataAccessor: (data: T, sortHeaderId: string) => string | number;
    _updateChangeSubscription(): void;
    _updatePaginator(filteredDataLength: number): void;
}
```

---

## MatTableModule Declaration in TypeScript

**Description:** Angular module definition for the Material Table that imports and exports all the necessary components and directives for creating tables in Angular Material.

```typescript
export class MatTableModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTableModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatTableModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatTableModule, never, [typeof MatCommonModule, typeof i2.CdkTableModule, typeof MatTable, typeof MatRecycleRows, typeof MatHeaderCellDef, typeof MatHeaderRowDef, typeof MatColumnDef, typeof MatCellDef, typeof MatRowDef, typeof MatFooterCellDef, typeof MatFooterRowDef, typeof MatHeaderCell, typeof MatCell, typeof MatFooterCell, typeof MatHeaderRow, typeof MatRow, typeof MatFooterRow, typeof MatNoDataRow, typeof MatTextColumn], [typeof MatCommonModule, typeof MatTable, typeof MatRecycleRows, typeof MatHeaderCellDef, typeof MatHeaderRowDef, typeof MatColumnDef, typeof MatCellDef, typeof MatRowDef, typeof MatFooterCellDef, typeof MatFooterRowDef, typeof MatHeaderCell, typeof MatCell, typeof MatFooterCell, typeof MatHeaderRow, typeof MatRow, typeof MatFooterRow, typeof MatNoDataRow, typeof MatTextColumn]>;
}
```

---

## MatColumnDef Implementation in TypeScript

**Description:** Column definition for Material Table that extends CdkColumnDef, providing methods for column name management and CSS class name updates for styling.

```typescript
export class MatColumnDef extends CdkColumnDef {
    get name(): string;
    set name(name: string);
    protected _updateColumnCssClassName(): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatColumnDef, "[matColumnDef]", never, { "name": { "alias": "matColumnDef"; "required": false; }; }, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatColumnDef, never>;
}
```

---