# Angular Material Datepicker API Documentation

**Summary:** This file covers topics related to "Angular Material Datepicker API Documentation". Key snippets include: DatePicker Module Definition in Angular Material, DatePicker Toggle Button Component in Angular Material, Date Range Picker Component in Angular Material, Implementing MatRangeDateSelectionModel for Date Range Selection, DatePicker Internationalization Service in Angular Material....

---

## DatePicker Module Definition in Angular Material

**Description:** Defines the MatDatepickerModule which is the main Angular module that exports all datepicker-related components. It includes Angular's dependency injection metadata and NgModule declarations.

```typescript
export class MatDatepickerModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatepickerModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatDatepickerModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatDatepickerModule, never, [typeof MatButtonModule, typeof i2.OverlayModule, typeof i1_2.A11yModule, typeof i3.PortalModule, typeof MatCommonModule, typeof MatCalendar, typeof MatCalendarBody, typeof MatDatepicker, typeof MatDatepickerContent, typeof MatDatepickerInput, typeof MatDatepickerToggle, typeof MatDatepickerToggleIcon, typeof MatMonthView, typeof MatYearView, typeof MatMultiYearView, typeof MatCalendarHeader, typeof MatDateRangeInput, typeof MatStartDate, typeof MatEndDate, typeof MatDateRangePicker, typeof MatDatepickerActions, typeof MatDatepickerCancel, typeof MatDatepickerApply], [typeof i5.CdkScrollableModule, typeof MatCalendar, typeof MatCalendarBody, typeof MatDatepicker, typeof MatDatepickerContent, typeof MatDatepickerInput, typeof MatDatepickerToggle, typeof MatDatepickerToggleIcon, typeof MatMonthView, typeof MatYearView, typeof MatMultiYearView, typeof MatCalendarHeader, typeof MatDateRangeInput, typeof MatStartDate, typeof MatEndDate, typeof MatDateRangePicker, typeof MatDatepickerActions, typeof MatDatepickerCancel, typeof MatDatepickerApply]>;
}
```

---

## DatePicker Toggle Button Component in Angular Material

**Description:** Defines the MatDatepickerToggle component which renders a button that opens/closes the datepicker panel. It handles accessibility, disabled states, and custom icons.

```typescript
export class MatDatepickerToggle<D> implements AfterContentInit, OnChanges, OnDestroy {
    constructor(...args: unknown[]);
    ariaLabel: string;
    _button: MatButton;
    _customIcon: MatDatepickerToggleIcon;
    datepicker: MatDatepickerPanel<MatDatepickerControl<any>, D>;
    get disabled(): boolean;
    set disabled(value: boolean);
    disableRipple: boolean;
    // (undocumented)
    _intl: MatDatepickerIntl;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngOnChanges(changes: SimpleChanges): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    _open(event: Event): void;
    tabIndex: number | null;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDatepickerToggle<any>, "mat-datepicker-toggle", ["matDatepickerToggle"], { "datepicker": { "alias": "for"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; }, {}, ["_customIcon"], ["[matDatepickerToggleIcon]"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatepickerToggle<any>, never>;
}
```

---

## Date Range Picker Component in Angular Material

**Description:** Defines the MatDateRangePicker component which extends MatDatepickerBase to provide a UI for selecting date ranges. It handles content forwarding to the datepicker panel.

```typescript
export class MatDateRangePicker<D> extends MatDatepickerBase<MatDateRangePickerInput<D>, DateRange<D>, D> {
    // (undocumented)
    protected _forwardContentValues(instance: MatDatepickerContent<DateRange<D>, D>): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDateRangePicker<any>, "mat-date-range-picker", ["matDateRangePicker"], {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDateRangePicker<any>, never>;
}
```

---

## Implementing MatRangeDateSelectionModel for Date Range Selection

**Description:** TypeScript class that extends MatDateSelectionModel to handle date range selection. It implements methods for adding dates to the range, checking completion status, validating the date range, and cloning the model.

```typescript
export class MatRangeDateSelectionModel<D> extends MatDateSelectionModel<DateRange<D>, D> {
    constructor(adapter: DateAdapter<D>);
    add(date: D | null): void;
    clone(): MatRangeDateSelectionModel<D>;
    isComplete(): boolean;
    isValid(): boolean;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatRangeDateSelectionModel<any>, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<MatRangeDateSelectionModel<any>>;
}
```

---

## DatePicker Internationalization Service in Angular Material

**Description:** Defines the MatDatepickerIntl class which provides internationalization services for the datepicker component. This service contains localized string properties for various UI elements like calendar labels, navigation buttons, and accessibility text.

```typescript
export class MatDatepickerIntl {
    calendarLabel: string;
    readonly changes: Subject<void>;
    closeCalendarLabel: string;
    comparisonDateLabel: string;
    // @deprecated
    endDateLabel: string;
    formatYearRange(start: string, end: string): string;
    formatYearRangeLabel(start: string, end: string): string;
    nextMonthLabel: string;
    nextMultiYearLabel: string;
    nextYearLabel: string;
    openCalendarLabel: string;
    prevMonthLabel: string;
    prevMultiYearLabel: string;
    prevYearLabel: string;
    // @deprecated
    startDateLabel: string;
    switchToMonthViewLabel: string;
    switchToMultiYearViewLabel: string;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatepickerIntl, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<MatDatepickerIntl>;
}
```

---

## Defining MatDatepicker Component in TypeScript

**Description:** Declares the MatDatepicker component, extending MatDatepickerBase. It provides datepicker functionality for Angular Material.

```TypeScript
export class MatDatepicker<D> extends MatDatepickerBase<MatDatepickerControl<D>, D | null, D> {
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDatepicker<any>, "mat-datepicker", ["matDatepicker"], {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatepicker<any>, never>;
}
```

---

## DatePicker Panel Interface in Angular Material

**Description:** Defines the MatDatepickerPanel interface that datepicker implementations must implement. It includes properties and methods for handling datepicker states, inputs, and events.

```typescript
export interface MatDatepickerPanel<C extends MatDatepickerControl<D>, S, D = ExtractDateTypeFromSelection<S>> {
    closedStream: EventEmitter<void>;
    color: ThemePalette;
    datepickerInput: C;
    disabled: boolean;
    id: string;
    open(): void;
    opened: boolean;
    openedStream: EventEmitter<void>;
    registerInput(input: C): MatDateSelectionModel<S, D>;
    stateChanges: Subject<void>;
}
```

---