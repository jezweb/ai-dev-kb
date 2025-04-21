# Angular CDK Table API Documentation

**Summary:** This file covers topics related to "Angular CDK Table API Documentation". Key snippets include: Defining CdkTableDataSourceInput Type in TypeScript, Defining DataSource Abstract Class in TypeScript, Defining CdkTable Component in TypeScript, Defining FooterRowOutlet Directive in TypeScript, Defining RenderRow Interface for Angular CDK Table....

---

## Defining CdkTableDataSourceInput Type in TypeScript

**Description:** Defines a type for the possible data sources that can be used with CdkTable. This includes arrays, DataSource objects, and Observables of arrays.

```TypeScript
export type CdkTableDataSourceInput<T> = readonly T[] | DataSource<T> | Observable<readonly T[]>;
```

---

## Defining DataSource Abstract Class in TypeScript

**Description:** Defines an abstract class for data sources used with CDK tables. Data sources must implement methods to connect and disconnect from a collection viewer.

```TypeScript
export abstract class DataSource<T> {
    abstract connect(collectionViewer: CollectionViewer): Observable<readonly T[]>;
    abstract disconnect(collectionViewer: CollectionViewer): void;
}
```

---

## Defining CdkTable Component in TypeScript

**Description:** Defines the main table component that implements various lifecycle interfaces. This is the core component that manages data display, row rendering, and column definitions.

```TypeScript
export class CdkTable<T> implements AfterContentInit, AfterContentChecked, CollectionViewer, OnDestroy, OnInit {
    constructor(...args: unknown[]);
    addColumnDef(columnDef: CdkColumnDef): void;
    addFooterRowDef(footerRowDef: CdkFooterRowDef): void;
    addHeaderRowDef(headerRowDef: CdkHeaderRowDef): void;
    addRowDef(rowDef: CdkRowDef<T>): void;
    // (undocumented)
    protected readonly _changeDetectorRef: ChangeDetectorRef;
    // (undocumented)
    protected readonly _coalescedStyleScheduler: _CoalescedStyleScheduler;
    readonly contentChanged: EventEmitter<void>;
    _contentColumnDefs: QueryList<CdkColumnDef>;
    _contentFooterRowDefs: QueryList<CdkFooterRowDef>;
    _contentHeaderRowDefs: QueryList<CdkHeaderRowDef>;
    _contentRowDefs: QueryList<CdkRowDef<T>>;
    protected _data: readonly T[] | undefined;
    get dataSource(): CdkTableDataSourceInput<T>;
    set dataSource(dataSource: CdkTableDataSourceInput<T>);
    // (undocumented)
    protected readonly _differs: IterableDiffers;
    // (undocumented)
    protected readonly _dir: Directionality | null;
    // (undocumented)
    protected readonly _elementRef: ElementRef<any>;
    get fixedLayout(): boolean;
    set fixedLayout(value: boolean);
    // (undocumented)
    _footerRowOutlet: FooterRowOutlet;
    _getCellRole(): string | null;
    _getRenderedRows(rowOutlet: RowOutlet): HTMLElement[];
    _getRowDefs(data: T, dataIndex: number): CdkRowDef<T>[];
    // (undocumented)
    _headerRowOutlet: HeaderRowOutlet;
    protected _isNativeHtmlTable: boolean;
    protected _isServer: boolean;
    get multiTemplateDataRows(): boolean;
    set multiTemplateDataRows(value: boolean);
    // (undocumented)
    _multiTemplateDataRows: boolean;
    protected needsPositionStickyOnElement: boolean;
    // (undocumented)
    static ngAcceptInputType_fixedLayout: unknown;
    // (undocumented)
    static ngAcceptInputType_multiTemplateDataRows: unknown;
    // (undocumented)
    ngAfterContentChecked(): void;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    _noDataRow: CdkNoDataRow;
    // (undocumented)
    _noDataRowOutlet: NoDataRowOutlet;
    _outletAssigned(): void;
    removeColumnDef(columnDef: CdkColumnDef): void;
    removeFooterRowDef(footerRowDef: CdkFooterRowDef): void;
    removeHeaderRowDef(headerRowDef: CdkHeaderRowDef): void;
    removeRowDef(rowDef: CdkRowDef<T>): void;
    renderRows(): void;
    // (undocumented)
    _rowOutlet: DataRowOutlet;
    setNoDataRow(noDataRow: CdkNoDataRow | null): void;
    protected stickyCssClass: string;
    // (undocumented)
    protected readonly _stickyPositioningListener: StickyPositioningListener;
    get trackBy(): TrackByFunction<T>;
    set trackBy(fn: TrackByFunction<T>);
    updateStickyColumnStyles(): void;
    updateStickyFooterRowStyles(): void;
    updateStickyHeaderRowStyles(): void;
    readonly viewChange: BehaviorSubject<{
        start: number;
        end: number;
    }>;
    // (undocumented)
    protected readonly _viewRepeater: _ViewRepeater<T, RenderRow<T>, RowContext<T>>;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTable<any>, "cdk-table, table[cdk-table]", ["cdkTable"], { "trackBy": { "alias": "trackBy"; "required": false; }; "dataSource": { "alias": "dataSource"; "required": false; }; "multiTemplateDataRows": { "alias": "multiTemplateDataRows"; "required": false; }; "fixedLayout": { "alias": "fixedLayout"; "required": false; }; }, { "contentChanged": "contentChanged"; }, ["_noDataRow", "_contentColumnDefs", "_contentRowDefs", "_contentHeaderRowDefs", "_contentFooterRowDefs"], ["caption", "colgroup, col", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTable<any>, never>;
}
```

---

## Defining FooterRowOutlet Directive in TypeScript

**Description:** Defines a directive that provides a container for rendering footer rows. This outlet is used by the CdkTable to insert footer row elements into the DOM.

```TypeScript
export class FooterRowOutlet implements RowOutlet {
    constructor(...args: unknown[]);
    // (undocumented)
    elementRef: ElementRef<any>;
    // (undocumented)
    viewContainer: ViewContainerRef;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<FooterRowOutlet, "[footerRowOutlet]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterRowOutlet, never>;
}
```

---

## Defining RenderRow Interface for Angular CDK Table

**Description:** Interface that defines the structure for rendered table rows, containing the data object, data index, and row definition.

```typescript
export interface RenderRow<T> {
    // (undocumented)
    data: T;
    // (undocumented)
    dataIndex: number;
    // (undocumented)
    rowDef: CdkRowDef<T>;
}
```

---

## Defining StickyDirection Type for Angular CDK Table

**Description:** Type representing the four possible directions for sticky positioning: top, bottom, left, and right.

```typescript
export type StickyDirection = 'top' | 'bottom' | 'left' | 'right';
```

---

## Defining StickyOffset Type for Angular CDK Table

**Description:** Type representing a sticky offset value which can be a number, null, or undefined, used for positioning sticky elements.

```typescript
export type StickyOffset = number | null | undefined;
```

---

## Defining CdkRecycleRows Directive in TypeScript

**Description:** Defines a directive for row recycling in CDK tables. This directive optimizes table rendering by reusing row elements instead of recreating them.

```TypeScript
export class CdkRecycleRows {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkRecycleRows, "cdk-table[recycleRows], table[cdk-table][recycleRows]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkRecycleRows, never>;
}
```

---