# Angular Material Tabs Testing API Documentation

**Summary:** This file covers topics related to "Angular Material Tabs Testing API Documentation". Key snippets include: Defining Angular Material Tabs Testing Harnesses and Interfaces.

---

## Defining Angular Material Tabs Testing Harnesses and Interfaces

**Description:** Defines the complete testing harness API for Angular Material tabs components, including classes for tab groups, individual tabs, tab links, and navigation bars. Also includes filter interfaces for testing component instances.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export class MatTabGroupHarness extends ComponentHarness {
    getSelectedTab(): Promise<MatTabHarness>;
    getTabs(filter?: TabHarnessFilters): Promise<MatTabHarness[]>;
    static hostSelector: string;
    selectTab(filter?: TabHarnessFilters): Promise<void>;
    static with<T extends MatTabGroupHarness>(this: ComponentHarnessConstructor<T>, options?: TabGroupHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatTabHarness extends ContentContainerComponentHarness<string> {
    getAriaLabel(): Promise<string | null>;
    getAriaLabelledby(): Promise<string | null>;
    getLabel(): Promise<string>;
    protected getRootHarnessLoader(): Promise<HarnessLoader>;
    getTextContent(): Promise<string>;
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isSelected(): Promise<boolean>;
    select(): Promise<void>;
    static with<T extends MatTabHarness>(this: ComponentHarnessConstructor<T>, options?: TabHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatTabLinkHarness extends ComponentHarness {
    click(): Promise<void>;
    getLabel(): Promise<string>;
    static hostSelector: string;
    isActive(): Promise<boolean>;
    isDisabled(): Promise<boolean>;
    static with<T extends MatTabLinkHarness>(this: ComponentHarnessConstructor<T>, options?: TabLinkHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatTabNavBarHarness extends ComponentHarness {
    clickLink(filter?: TabLinkHarnessFilters): Promise<void>;
    getActiveLink(): Promise<MatTabLinkHarness>;
    getLinks(filter?: TabLinkHarnessFilters): Promise<MatTabLinkHarness[]>;
    getPanel(): Promise<MatTabNavPanelHarness>;
    static hostSelector: string;
    static with<T extends MatTabNavBarHarness>(this: ComponentHarnessConstructor<T>, options?: TabNavBarHarnessFilters): HarnessPredicate<T>;
}

// @public
export interface TabGroupHarnessFilters extends BaseHarnessFilters {
    selectedTabLabel?: string | RegExp;
}

// @public
export interface TabHarnessFilters extends BaseHarnessFilters {
    label?: string | RegExp;
    selected?: boolean;
}

// @public
export interface TabLinkHarnessFilters extends BaseHarnessFilters {
    label?: string | RegExp;
}

// @public
export interface TabNavBarHarnessFilters extends BaseHarnessFilters {
}

// @public
export interface TabNavPanelHarnessFilters extends BaseHarnessFilters {
}
```

---