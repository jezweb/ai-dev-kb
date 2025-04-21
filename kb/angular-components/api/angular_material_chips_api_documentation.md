# Angular Material Chips API Documentation

**Summary:** This file covers topics related to "Angular Material Chips API Documentation". Key snippets include: Defining MatChipOption Component in TypeScript.

---

## Defining MatChipOption Component in TypeScript

**Description:** This snippet defines the MatChipOption component, which extends MatChip and implements OnInit. It includes properties and methods for handling chip selection, aria attributes, and selection changes.

```TypeScript
export class MatChipOption extends MatChip implements OnInit {
    get ariaSelected(): string | null;
    protected basicChipAttrName: string;
    _chipListHideSingleSelectionIndicator: boolean;
    _chipListMultiple: boolean;
    chipListSelectable: boolean;
    deselect(): void;
    _handlePrimaryActionInteraction(): void;
    _hasLeadingGraphic(): boolean;
    static ngAcceptInputType_selectable: unknown;
    static ngAcceptInputType_selected: unknown;
    ngOnInit(): void;
    select(): void;
    get selectable(): boolean;
    set selectable(value: boolean);
    protected _selectable: boolean;
    get selected(): boolean;
    set selected(value: boolean);
    readonly selectionChange: EventEmitter<MatChipSelectionChange>;
    selectViaInteraction(): void;
    _setSelectedState(isSelected: boolean, isUserInput: boolean, emitEvent: boolean): void;
    toggleSelected(isUserInput?: boolean): boolean;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatChipOption, "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", never, { "selectable": { "alias": "selectable"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, ["mat-chip-avatar, [matChipAvatar]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"], true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatChipOption, never>;
}
```

---