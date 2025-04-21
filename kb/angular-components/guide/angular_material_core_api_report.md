# Angular Material Core API Report

**Summary:** This file covers topics related to "Angular Material Core API Report". Key snippets include: Defining ThemePalette Type for Angular Material Components, Defining MatOption and MatOptgroup Components, Implementing NativeDateAdapter in TypeScript.

---

## Defining ThemePalette Type for Angular Material Components

**Description:** Type definition for the theme palette options used in Angular Material components. Provides the standard color options 'primary', 'accent', 'warn', or undefined.

```typescript
// @public
export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;
```

---

## Defining MatOption and MatOptgroup Components

**Description:** This code defines the MatOption and MatOptgroup components used for creating selectable options and option groups in Angular Material.

```typescript
// @public
export class MatOptgroup {
    constructor(...args: unknown[]);
    disabled: boolean;
    _inert: boolean;
    label: string;
    _labelId: string;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatOptgroup, "mat-optgroup", ["matOptgroup"], { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*", "mat-option, ng-container"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatOptgroup, never>;
}

// @public
export class MatOption<T = any> implements FocusableOption, AfterViewChecked, OnDestroy {
    constructor(...args: unknown[]);
    get active(): boolean;
    // (undocumented)
    _changeDetectorRef: ChangeDetectorRef;
    deselect(emitEvent?: boolean): void;
    get disabled(): boolean;
    set disabled(value: boolean);
    get disableRipple(): boolean;
    focus(_origin?: FocusOrigin, options?: FocusOptions): void;
    _getHostElement(): HTMLElement;
    getLabel(): string;
    _getTabIndex(): string;
    // (undocumented)
    group: MatOptgroup | null;
    _handleKeydown(event: KeyboardEvent): void;
    get hideSingleSelectionIndicator(): boolean;
    id: string;
    get multiple(): boolean | null | undefined;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    ngAfterViewChecked(): void;
    // (undocumented)
    ngOnDestroy(): void;
    readonly onSelectionChange: EventEmitter<MatOptionSelectionChange<T>>;
    select(emitEvent?: boolean): void;
    get selected(): boolean;
    _selectViaInteraction(): void;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    readonly _stateChanges: Subject<void>;
    _text: ElementRef<HTMLElement> | undefined;
    value: T;
    get viewValue(): string;
    // (undocumented)
}
```

---

## Implementing NativeDateAdapter in TypeScript

**Description:** Date adapter implementation for handling native JavaScript Date objects with locale-aware formatting and parsing.

```TypeScript
export class NativeDateAdapter extends DateAdapter<Date> {
    constructor(...args: unknown[]);
    addCalendarDays(date: Date, days: number): Date;
    addCalendarMonths(date: Date, months: number): Date;
    addCalendarYears(date: Date, years: number): Date;
    addSeconds(date: Date, amount: number): Date;
    clone(date: Date): Date;
    createDate(year: number, month: number, date: number): Date;
    deserialize(value: any): Date | null;
    format(date: Date, displayFormat: Object): string;
    getDate(date: Date): number;
    getDateNames(): string[];
    getDayOfWeek(date: Date): number;
    getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[];
    getFirstDayOfWeek(): number;
    getHours(date: Date): number;
    getMinutes(date: Date): number;
    getMonth(date: Date): number;
    getMonthNames(style: 'long' | 'short' | 'narrow'): string[];
    getNumDaysInMonth(date: Date): number;
    getSeconds(date: Date): number;
    getYear(date: Date): number;
    getYearName(date: Date): string;
    invalid(): Date;
    isDateInstance(obj: any): obj is Date;
    isValid(date: Date): boolean;
    parse(value: any, parseFormat?: any): Date | null;
    parseTime(userValue: any, parseFormat?: any): Date | null;
    setTime(target: Date, hours: number, minutes: number, seconds: number): Date;
    today(): Date;
    toIso8601(date: Date): string;
    useUtcForDisplay: boolean;
}
```

---