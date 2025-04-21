# Angular Material Sort Testing API Documentation

**Summary:** This file covers topics related to "Angular Material Sort Testing API Documentation". Key snippets include: Defining Testing Harnesses for Angular Material Sort Components in TypeScript.

---

## Defining Testing Harnesses for Angular Material Sort Components in TypeScript

**Description:** This code defines testing harnesses for Angular Material sort components. It includes classes like MatSortHarness and MatSortHeaderHarness that extend ComponentHarness, interfaces for filtering sort headers, and methods for interacting with sort components in tests.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export class MatSortHarness extends ComponentHarness {
    getActiveHeader(): Promise<MatSortHeaderHarness | null>;
    getSortHeaders(filter?: SortHeaderHarnessFilters): Promise<MatSortHeaderHarness[]>;
    // (undocumented)
    static hostSelector: string;
    static with(options?: SortHarnessFilters): HarnessPredicate<MatSortHarness>;
}

// @public
export class MatSortHeaderHarness extends ComponentHarness {
    click(): Promise<void>;
    getLabel(): Promise<string>;
    getSortDirection(): Promise<SortDirection>;
    // (undocumented)
    static hostSelector: string;
    isActive(): Promise<boolean>;
    isDisabled(): Promise<boolean>;
    static with(options?: SortHeaderHarnessFilters): HarnessPredicate<MatSortHeaderHarness>;
}

// @public (undocumented)
export interface SortHarnessFilters extends BaseHarnessFilters {
}

// @public (undocumented)
export interface SortHeaderHarnessFilters extends BaseHarnessFilters {
    // (undocumented)
    label?: string | RegExp;
    // (undocumented)
    sortDirection?: SortDirection;
}

// (No @packageDocumentation comment for this package)
```

---