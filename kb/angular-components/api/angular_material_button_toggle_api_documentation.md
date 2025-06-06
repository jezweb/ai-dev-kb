# Angular Material Button Toggle API Documentation

**Summary:** This file covers topics related to "Angular Material Button Toggle API Documentation". Key snippets include: Angular Material Button Toggle API Definitions.

---

## Angular Material Button Toggle API Definitions

**Description:** Complete API definition for the @angular/material_button-toggle module. Includes classes, interfaces, tokens, and other types for implementing button toggle functionality in Angular Material applications.

```typescript
import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Direction } from '@angular/cdk/bidi';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import { InjectionToken } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { QueryList } from '@angular/core';

// @public
export const MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS: InjectionToken<MatButtonToggleDefaultOptions>;

// @public
export const MAT_BUTTON_TOGGLE_GROUP: InjectionToken<MatButtonToggleGroup>;

// @public @deprecated
export function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY(): MatButtonToggleDefaultOptions;

// @public
export const MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR: any;

// @public
export class MatButtonToggle implements OnInit, AfterViewInit, OnDestroy {
    constructor(...args: unknown[]);
    get appearance(): MatButtonToggleAppearance;
    set appearance(value: MatButtonToggleAppearance);
    ariaLabel: string;
    ariaLabelledby: string | null;
    _buttonElement: ElementRef<HTMLButtonElement>;
    get buttonId(): string;
    buttonToggleGroup: MatButtonToggleGroup;
    readonly change: EventEmitter<MatButtonToggleChange>;
    get checked(): boolean;
    set checked(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    get disabledInteractive(): boolean;
    set disabledInteractive(value: boolean);
    disableRipple: boolean;
    focus(options?: FocusOptions): void;
    _getButtonName(): string | null;
    id: string;
    isSingleSelector(): boolean;
    _markForCheck(): void;
    name: string;
    // (undocumented)
    static ngAcceptInputType_checked: unknown;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    static ngAcceptInputType_disabledInteractive: unknown;
    // (undocumented)
    static ngAcceptInputType_disableRipple: unknown;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    _onButtonClick(): void;
    get tabIndex(): number | null;
    set tabIndex(value: number | null);
    value: any;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatButtonToggle, "mat-button-toggle", ["matButtonToggle"], { "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledInteractive": { "alias": "disabledInteractive"; "required": false; }; }, { "change": "change"; }, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatButtonToggle, never>;
}

// @public
export type MatButtonToggleAppearance = 'legacy' | 'standard';

// @public
export class MatButtonToggleChange {
    constructor(
    source: MatButtonToggle,
    value: any);
    source: MatButtonToggle;
    value: any;
}

// @public
export interface MatButtonToggleDefaultOptions {
    appearance?: MatButtonToggleAppearance;
    disabledInteractive?: boolean;
    hideMultipleSelectionIndicator?: boolean;
    hideSingleSelectionIndicator?: boolean;
}

// @public
export class MatButtonToggleGroup implements ControlValueAccessor, OnInit, AfterContentInit {
    constructor(...args: unknown[]);
    appearance: MatButtonToggleAppearance;
    _buttonToggles: QueryList<MatButtonToggle>;
    readonly change: EventEmitter<MatButtonToggleChange>;
    _controlValueAccessorChangeFn: (value: any) => void;
    get dir(): Direction;
    get disabled(): boolean;
    set disabled(value: boolean);
    get disabledInteractive(): boolean;
    set disabledInteractive(value: boolean);
    _emitChangeEvent(toggle: MatButtonToggle): void;
    get hideMultipleSelectionIndicator(): boolean;
    set hideMultipleSelectionIndicator(value: boolean);
    get hideSingleSelectionIndicator(): boolean;
    set hideSingleSelectionIndicator(value: boolean);
    _isPrechecked(toggle: MatButtonToggle): boolean;
    _isSelected(toggle: MatButtonToggle): boolean;
    protected _keydown(event: KeyboardEvent): void;
    get multiple(): boolean;
    set multiple(value: boolean);
    get name(): string;
    set name(value: string);
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    static ngAcceptInputType_disabledInteractive: unknown;
    // (undocumented)
    static ngAcceptInputType_hideMultipleSelectionIndicator: unknown;
    // (undocumented)
    static ngAcceptInputType_hideSingleSelectionIndicator: unknown;
    // (undocumented)
    static ngAcceptInputType_multiple: unknown;
    // (undocumented)
    static ngAcceptInputType_vertical: unknown;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngOnInit(): void;
    _onTouched: () => any;
    // (undocumented)
    registerOnChange(fn: (value: any) => void): void;
    // (undocumented)
    registerOnTouched(fn: any): void;
    get selected(): MatButtonToggle | MatButtonToggle[];
    // (undocumented)
    setDisabledState(isDisabled: boolean): void;
    _syncButtonToggle(toggle: MatButtonToggle, select: boolean, isUserInput?: boolean, deferEvents?: boolean): void;
    get value(): any;
    set value(newValue: any);
    readonly valueChange: EventEmitter<any>;
    vertical: boolean;
    writeValue(value: any): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatButtonToggleGroup, "mat-button-toggle-group", ["matButtonToggleGroup"], { "appearance": { "alias": "appearance"; "required": false; }; "name": { "alias": "name"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; "value": { "alias": "value"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledInteractive": { "alias": "disabledInteractive"; "required": false; }; "hideSingleSelectionIndicator": { "alias": "hideSingleSelectionIndicator"; "required": false; }; "hideMultipleSelectionIndicator": { "alias": "hideMultipleSelectionIndicator"; "required": false; }; }, { "valueChange": "valueChange"; "change": "change"; }, ["_buttonToggles"], never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatButtonToggleGroup, never>;
}

// @public (undocumented)
export class MatButtonToggleModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatButtonToggleModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatButtonToggleModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatButtonToggleModule, never, [typeof MatCommonModule, typeof MatRippleModule, typeof MatButtonToggleGroup, typeof MatButtonToggle], [typeof MatCommonModule, typeof MatButtonToggleGroup, typeof MatButtonToggle]>;
}

// @public @deprecated (undocumented)
export type ToggleType = 'checkbox' | 'radio';

// (No @packageDocumentation comment for this package)
```

---