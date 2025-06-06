# Angular Material Table Testing API Documentation

**Summary:** This file covers topics related to "Angular Material Table Testing API Documentation". Key snippets include: Defining Angular Material Table Testing API in TypeScript.

---

## Defining Angular Material Table Testing API in TypeScript

**Description:** Complete API definition for the Angular Material table testing harnesses. It includes imports from Angular CDK testing module and defines interfaces and classes for interacting with Material table components in tests.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export interface CellHarnessFilters extends BaseHarnessFilters {
    columnName?: string | RegExp;
    text?: string | RegExp;
}

// @public
export class MatCellHarness extends _MatCellHarnessBase {
    static hostSelector: string;
    static with(options?: CellHarnessFilters): HarnessPredicate<MatCellHarness>;
}

// @public (undocumented)
export abstract class _MatCellHarnessBase extends ContentContainerComponentHarness {
    // (undocumented)
    protected static _getCellPredicate<T extends MatCellHarness>(type: ComponentHarnessConstructor<T>, options: CellHarnessFilters): HarnessPredicate<T>;
    getColumnName(): Promise<string>;
    getText(): Promise<string>;
}

// @public
export class MatFooterCellHarness extends _MatCellHarnessBase {
    static hostSelector: string;
    static with(options?: CellHarnessFilters): HarnessPredicate<MatFooterCellHarness>;
}

// @public
export class MatFooterRowHarness extends _MatRowHarnessBase<typeof MatFooterCellHarness, MatFooterCellHarness> {
    // (undocumented)
    protected _cellHarness: typeof MatFooterCellHarness;
    static hostSelector: string;
    static with<T extends MatFooterRowHarness>(this: ComponentHarnessConstructor<T>, options?: RowHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatHeaderCellHarness extends _MatCellHarnessBase {
    static hostSelector: string;
    static with(options?: CellHarnessFilters): HarnessPredicate<MatHeaderCellHarness>;
}

// @public
export class MatHeaderRowHarness extends _MatRowHarnessBase<typeof MatHeaderCellHarness, MatHeaderCellHarness> {
    // (undocumented)
    protected _cellHarness: typeof MatHeaderCellHarness;
    static hostSelector: string;
    static with<T extends MatHeaderRowHarness>(this: ComponentHarnessConstructor<T>, options?: RowHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatRowHarness extends _MatRowHarnessBase<typeof MatCellHarness, MatCellHarness> {
    // (undocumented)
    protected _cellHarness: typeof MatCellHarness;
    static hostSelector: string;
    static with<T extends MatRowHarness>(this: ComponentHarnessConstructor<T>, options?: RowHarnessFilters): HarnessPredicate<T>;
}

// @public (undocumented)
export abstract class _MatRowHarnessBase<CellType extends ComponentHarnessConstructor<Cell> & {
    with: (options?: CellHarnessFilters) => HarnessPredicate<Cell>;
}, Cell extends _MatCellHarnessBase> extends ComponentHarness {
    // (undocumented)
    protected abstract _cellHarness: CellType;
    getCells(filter?: CellHarnessFilters): Promise<Cell[]>;
    getCellTextByColumnName(): Promise<MatRowHarnessColumnsText>;
    getCellTextByIndex(filter?: CellHarnessFilters): Promise<string[]>;
}

// @public
export interface MatRowHarnessColumnsText {
    // (undocumented)
    [columnName: string]: string;
}

// @public
export class MatTableHarness extends ContentContainerComponentHarness<string> {
    getCellTextByColumnName(): Promise<MatTableHarnessColumnsText>;
    getCellTextByIndex(): Promise<string[][]>;
    getFooterRows(filter?: RowHarnessFilters): Promise<MatFooterRowHarness[]>;
    getHeaderRows(filter?: RowHarnessFilters): Promise<MatHeaderRowHarness[]>;
    getRows(filter?: RowHarnessFilters): Promise<MatRowHarness[]>;
    // (undocumented)
    _headerRowHarness: typeof MatHeaderRowHarness;
    static hostSelector: string;
    // (undocumented)
    _rowHarness: typeof MatRowHarness;
    static with<T extends MatTableHarness>(this: ComponentHarnessConstructor<T>, options?: TableHarnessFilters): HarnessPredicate<T>;
}

// @public
export interface MatTableHarnessColumnsText {
    // (undocumented)
    [columnName: string]: {
        text: string[];
        headerText: string[];
        footerText: string[];
    };
}

// @public
export interface RowHarnessFilters extends BaseHarnessFilters {
}

// @public
export interface TableHarnessFilters extends BaseHarnessFilters {
}
```

---