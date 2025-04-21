# Angular Material Datepicker Testing API

**Summary:** This file covers topics related to "Angular Material Datepicker Testing API". Key snippets include: Type Definitions for Angular Material Datepicker Testing.

---

## Type Definitions for Angular Material Datepicker Testing

**Description:** This code snippet defines the TypeScript interfaces, enums, and classes for testing Angular Material datepicker components. It includes harnesses for datepicker inputs, calendars, calendar cells, date range inputs, and datepicker toggles, along with their filter interfaces and necessary imports from '@angular/cdk/testing'.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export interface CalendarCellHarnessFilters extends BaseHarnessFilters {
    active?: boolean;
    disabled?: boolean;
    inComparisonRange?: boolean;
    inPreviewRange?: boolean;
    inRange?: boolean;
    selected?: boolean;
    text?: string | RegExp;
    today?: boolean;
}

// @public
export interface CalendarHarnessFilters extends BaseHarnessFilters {
}

// @public
export enum CalendarView {
    // (undocumented)
    MONTH = 0,
    // (undocumented)
    MULTI_YEAR = 2,
    // (undocumented)
    YEAR = 1
}

// @public
export interface DatepickerInputHarnessFilters extends BaseHarnessFilters {
    placeholder?: string | RegExp;
    value?: string | RegExp;
}

// @public
export interface DatepickerToggleHarnessFilters extends BaseHarnessFilters {
}

// @public
export interface DateRangeInputHarnessFilters extends BaseHarnessFilters {
    value?: string | RegExp;
}

// @public
export class MatCalendarCellHarness extends ComponentHarness {
    blur(): Promise<void>;
    focus(): Promise<void>;
    getAriaLabel(): Promise<string>;
    getText(): Promise<string>;
    // (undocumented)
    static hostSelector: string;
    hover(): Promise<void>;
    isActive(): Promise<boolean>;
    isComparisonRangeEnd(): Promise<boolean>;
    isComparisonRangeStart(): Promise<boolean>;
    isDisabled(): Promise<boolean>;
    isInComparisonRange(): Promise<boolean>;
    isInPreviewRange(): Promise<boolean>;
    isInRange(): Promise<boolean>;
    isPreviewRangeEnd(): Promise<boolean>;
    isPreviewRangeStart(): Promise<boolean>;
    isRangeEnd(): Promise<boolean>;
    isRangeStart(): Promise<boolean>;
    isSelected(): Promise<boolean>;
    isToday(): Promise<boolean>;
    mouseAway(): Promise<void>;
    select(): Promise<void>;
    static with(options?: CalendarCellHarnessFilters): HarnessPredicate<MatCalendarCellHarness>;
}

// @public
export class MatCalendarHarness extends ComponentHarness {
    changeView(): Promise<void>;
    getCells(filter?: CalendarCellHarnessFilters): Promise<MatCalendarCellHarness[]>;
    getCurrentView(): Promise<CalendarView>;
    getCurrentViewLabel(): Promise<string>;
    // (undocumented)
    static hostSelector: string;
    next(): Promise<void>;
    previous(): Promise<void>;
    selectCell(filter?: CalendarCellHarnessFilters): Promise<void>;
    static with(options?: CalendarHarnessFilters): HarnessPredicate<MatCalendarHarness>;
}

// @public
export class MatDatepickerInputHarness extends MatDatepickerInputHarnessBase implements DatepickerTrigger {
    closeCalendar(): Promise<void>;
    getCalendar(filter?: CalendarHarnessFilters): Promise<MatCalendarHarness>;
    hasCalendar(): Promise<boolean>;
    // (undocumented)
    static hostSelector: string;
    isCalendarOpen(): Promise<boolean>;
    openCalendar(): Promise<void>;
    static with(options?: DatepickerInputHarnessFilters): HarnessPredicate<MatDatepickerInputHarness>;
}

// @public
export class MatDatepickerToggleHarness extends DatepickerTriggerHarnessBase {
    // (undocumented)
    static hostSelector: string;
    isCalendarOpen(): Promise<boolean>;
    isDisabled(): Promise<boolean>;
    // (undocumented)
    protected _openCalendar(): Promise<void>;
    static with(options?: DatepickerToggleHarnessFilters): HarnessPredicate<MatDatepickerToggleHarness>;
}

// @public
export class MatDateRangeInputHarness extends DatepickerTriggerHarnessBase {
    getEndInput(): Promise<MatEndDateHarness>;
    getSeparator(): Promise<string>;
    getStartInput(): Promise<MatStartDateHarness>;
    getValue(): Promise<string>;
    // (undocumented)
    static hostSelector: string;
    isCalendarOpen(): Promise<boolean>;
    isDisabled(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    // (undocumented)
    protected _openCalendar(): Promise<void>;
    static with(options?: DateRangeInputHarnessFilters): HarnessPredicate<MatDateRangeInputHarness>;
}

// @public
export class MatEndDateHarness extends MatDatepickerInputHarnessBase {
    // (undocumented)
    static hostSelector: string;
    static with(options?: DatepickerInputHarnessFilters): HarnessPredicate<MatEndDateHarness>;
}

// @public
export class MatStartDateHarness extends MatDatepickerInputHarnessBase {
    // (undocumented)
    static hostSelector: string;
    static with(options?: DatepickerInputHarnessFilters): HarnessPredicate<MatStartDateHarness>;
}
```

---