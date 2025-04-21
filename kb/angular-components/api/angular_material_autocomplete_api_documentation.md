# Angular Material Autocomplete API Documentation

**Summary:** This file covers topics related to "Angular Material Autocomplete API Documentation". Key snippets include: Defining MatAutocompleteTrigger Directive, Defining MatAutocomplete Component Class, Defining MatOption Component in TypeScript for Angular Material.

---

## Defining MatAutocompleteTrigger Directive

**Description:** This snippet defines the MatAutocompleteTrigger directive that implements ControlValueAccessor, AfterViewInit, OnChanges, and OnDestroy. It manages the connection between input elements and autocomplete panels.

```typescript
// @public
export class MatAutocompleteTrigger implements ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy {
    constructor(...args: unknown[]);
    get activeOption(): MatOption | null;
    autocomplete: MatAutocomplete;
    autocompleteAttribute: string;
    autocompleteDisabled: boolean;
    closePanel(): void;
    connectedTo: MatAutocompleteOrigin;
    // (undocumented)
    _handleClick(): void;
    // (undocumented)
    _handleFocus(): void;
    // (undocumented)
    _handleInput(event: Event): void;
    // (undocumented)
    _handleKeydown(e: Event): void;
    // (undocumented)
    static ngAcceptInputType_autocompleteDisabled: unknown;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnChanges(changes: SimpleChanges): void;
    // (undocumented)
    ngOnDestroy(): void;
    _onChange: (value: any) => void;
    _onTouched: () => void;
    openPanel(): void;
    readonly optionSelections: Observable<MatOptionSelectionChange>;
    get panelClosingActions(): Observable<MatOptionSelectionChange | null>;
    get panelOpen(): boolean;
    position: 'auto' | 'above' | 'below';
    // (undocumented)
    registerOnChange(fn: (value: any) => {}): void;
    // (undocumented)
    registerOnTouched(fn: () => {}): void;
    // (undocumented)
    setDisabledState(isDisabled: boolean): void;
    updatePosition(): void;
    // (undocumented)
    writeValue(value: any): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatAutocompleteTrigger, "input[matAutocomplete], textarea[matAutocomplete]", ["matAutocompleteTrigger"], { "autocomplete": { "alias": "matAutocomplete"; "required": false; }; "position": { "alias": "matAutocompletePosition"; "required": false; }; "connectedTo": { "alias": "matAutocompleteConnectedTo"; "required": false; }; "autocompleteAttribute": { "alias": "autocomplete"; "required": false; }; "autocompleteDisabled": { "alias": "matAutocompleteDisabled"; "required": false; }; }, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatAutocompleteTrigger, never>;
}
```

---

## Defining MatAutocomplete Component Class

**Description:** This snippet defines the main MatAutocomplete component class, which implements AfterContentInit and OnDestroy. It includes properties, methods, and event emitters needed for autocomplete functionality.

```typescript
// @public
export class MatAutocomplete implements AfterContentInit, OnDestroy {
    constructor(...args: unknown[]);
    // (undocumented)
    protected _animationsDisabled: boolean;
    ariaLabel: string;
    ariaLabelledby: string;
    autoActiveFirstOption: boolean;
    autoSelectActiveOption: boolean;
    set classList(value: string | string[]);
    // (undocumented)
    _classList: string | string[];
    readonly closed: EventEmitter<void>;
    protected _color: ThemePalette;
    // (undocumented)
    protected _defaults: MatAutocompleteDefaultOptions;
    disableRipple: boolean;
    displayWith: ((value: any) => string) | null;
    _emitSelectEvent(option: MatOption): void;
    _getPanelAriaLabelledby(labelId: string | null): string | null;
    _getScrollTop(): number;
    get hideSingleSelectionIndicator(): boolean;
    set hideSingleSelectionIndicator(value: boolean);
    id: string;
    readonly inertGroups: boolean;
    get isOpen(): boolean;
    // (undocumented)
    _isOpen: boolean;
    _keyManager: ActiveDescendantKeyManager<MatOption>;
    _latestOpeningTrigger: unknown;
    // (undocumented)
    static ngAcceptInputType_autoActiveFirstOption: unknown;
    // (undocumented)
    static ngAcceptInputType_autoSelectActiveOption: unknown;
    // (undocumented)
    static ngAcceptInputType_disableRipple: unknown;
    // (undocumented)
    static ngAcceptInputType_hideSingleSelectionIndicator: unknown;
    // (undocumented)
    static ngAcceptInputType_requireSelection: unknown;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    readonly opened: EventEmitter<void>;
    readonly optionActivated: EventEmitter<MatAutocompleteActivatedEvent>;
    optionGroups: QueryList<MatOptgroup>;
    options: QueryList<MatOption>;
    readonly optionSelected: EventEmitter<MatAutocompleteSelectedEvent>;
    panel: ElementRef;
    panelWidth: string | number;
    requireSelection: boolean;
    _setColor(value: ThemePalette): void;
    _setScrollTop(scrollTop: number): void;
    _setVisibility(): void;
    showPanel: boolean;
    // (undocumented)
    protected _skipPredicate(): boolean;
    _syncParentProperties(): void;
    template: TemplateRef<any>;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatAutocomplete, "mat-autocomplete", ["matAutocomplete"], { "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "displayWith": { "alias": "displayWith"; "required": false; }; "autoActiveFirstOption": { "alias": "autoActiveFirstOption"; "required": false; }; "autoSelectActiveOption": { "alias": "autoSelectActiveOption"; "required": false; }; "requireSelection": { "alias": "requireSelection"; "required": false; }; "panelWidth": { "alias": "panelWidth"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "classList": { "alias": "class"; "required": false; }; "hideSingleSelectionIndicator": { "alias": "hideSingleSelectionIndicator"; "required": false; }; }, { "optionSelected": "optionSelected"; "opened": "opened"; "closed": "closed"; "optionActivated": "optionActivated"; }, ["options", "optionGroups"], ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatAutocomplete, never>;
}
```

---

## Defining MatOption Component in TypeScript for Angular Material

**Description:** This code snippet defines the MatOption class, which represents a selectable option in Angular Material. It includes properties for managing the option's state (active, disabled, selected), methods for handling user interactions, and Angular-specific decorators for component configuration.

```TypeScript
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
static ɵcmp: i0.ɵɵComponentDeclaration<MatOption<any>, "mat-option", ["matOption"], { "value": { "alias": "value"; "required": false; }; "id": { "alias": "id"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "onSelectionChange": "onSelectionChange"; }, never, ["mat-icon", "*"], true, never>;
// (undocumented)
static ɵfac: i0.ɵɵFactoryDeclaration<MatOption<any>, never>;
```

---