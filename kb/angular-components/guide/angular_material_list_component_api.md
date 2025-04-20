# Angular Material List Component API

**Summary:** This file covers topics related to "Angular Material List Component API". Key snippets include: Defining MatSelectionList Component Class.

---

## Defining MatSelectionList Component Class

**Description:** Core class definition for Angular Material's selection list component with properties and methods for handling selection state, accessibility, and form control integration.

```typescript
constructor(...args: unknown[]);
    color: ThemePalette;
    compareWith: (o1: any, o2: any) => boolean;
    deselectAll(): MatListOption[];
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    _element: ElementRef<HTMLElement>;
    _emitChangeEvent(options: MatListOption[]): void;
    focus(options?: FocusOptions): void;
    _handleKeydown(event: KeyboardEvent): void;
    get hideSingleSelectionIndicator(): boolean;
    set hideSingleSelectionIndicator(value: BooleanInput);
    _items: QueryList<MatListOption>;
    get multiple(): boolean;
    set multiple(value: BooleanInput);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    _onTouched: () => void;
    get options(): QueryList<MatListOption>;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    _reportValueChange(): void;
    selectAll(): MatListOption[];
    selectedOptions: SelectionModel<MatListOption>;
    readonly selectionChange: EventEmitter<MatSelectionListChange>;
    setDisabledState(isDisabled: boolean): void;
    _value: string[] | null;
    writeValue(values: string[]): void;
```

---