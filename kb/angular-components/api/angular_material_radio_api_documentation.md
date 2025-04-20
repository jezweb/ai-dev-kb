# Angular Material Radio API Documentation

**Summary:** This file covers topics related to "Angular Material Radio API Documentation". Key snippets include: Angular Material Radio Module API Definitions.

---

## Angular Material Radio Module API Definitions

**Description:** Contains the complete TypeScript definitions for Angular Material's radio components, including classes MatRadioButton, MatRadioGroup, MatRadioChange, and related interfaces and injection tokens. Defines the public API surface for the radio component module.

```typescript
import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import { InjectionToken } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { QueryList } from '@angular/core';

export const MAT_RADIO_DEFAULT_OPTIONS: InjectionToken<MatRadioDefaultOptions>;

export function MAT_RADIO_DEFAULT_OPTIONS_FACTORY(): MatRadioDefaultOptions;

export const MAT_RADIO_GROUP: InjectionToken<MatRadioGroup>;

export const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any;

export class MatRadioButton implements OnInit, AfterViewInit, DoCheck, OnDestroy {
    constructor(...args: unknown[]);
    ariaDescribedby: string;
    ariaLabel: string;
    ariaLabelledby: string;
    readonly change: EventEmitter<MatRadioChange>;
    get checked(): boolean;
    set checked(value: boolean);
    get color(): ThemePalette;
    set color(newValue: ThemePalette);
    get disabled(): boolean;
    set disabled(value: boolean);
    get disabledInteractive(): boolean;
    set disabledInteractive(value: boolean);
    disableRipple: boolean;
    protected _elementRef: ElementRef<any>;
    focus(options?: FocusOptions, origin?: FocusOrigin): void;
    id: string;
    _inputElement: ElementRef<HTMLInputElement>;
    get inputId(): string;
    _isRippleDisabled(): boolean;
    get labelPosition(): 'before' | 'after';
    set labelPosition(value: "before" | "after");
    _markForCheck(): void;
    name: string;
    static ngAcceptInputType_checked: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_disabledInteractive: unknown;
    static ngAcceptInputType_disableRipple: unknown;
    static ngAcceptInputType_required: unknown;
    static ngAcceptInputType_tabIndex: unknown;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    _noopAnimations: boolean;
    _onInputInteraction(event: Event): void;
    _onTouchTargetClick(event: Event): void;
    radioGroup: MatRadioGroup;
    get required(): boolean;
    set required(value: boolean);
    _rippleTrigger: ElementRef<HTMLElement>;
    protected _setDisabled(value: boolean): void;
    tabIndex: number;
    get value(): any;
    set value(value: any);
    static ɵcmp: i0.ɵɵComponentDeclaration<MatRadioButton, "mat-radio-button", ["matRadioButton"], {}, {}, never, ["*"], true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatRadioButton, never>;
}

export class MatRadioChange<T = any> {
    constructor(source: MatRadioButton, value: T);
    source: MatRadioButton;
    value: T;
}

export interface MatRadioDefaultOptions {
    color: ThemePalette;
    disabledInteractive?: boolean;
}

export class MatRadioGroup implements AfterContentInit, OnDestroy, ControlValueAccessor {
    constructor(...args: unknown[]);
    readonly change: EventEmitter<MatRadioChange>;
    _checkSelectedRadioButton(): void;
    color: ThemePalette;
    _controlValueAccessorChangeFn: (value: any) => void;
    get disabled(): boolean;
    set disabled(value: boolean);
    get disabledInteractive(): boolean;
    set disabledInteractive(value: boolean);
    _emitChangeEvent(): void;
    get labelPosition(): 'before' | 'after';
    set labelPosition(v: "before" | "after");
    _markRadiosForCheck(): void;
    get name(): string;
    set name(value: string);
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_disabledInteractive: unknown;
    static ngAcceptInputType_required: unknown;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onTouched: () => any;
    _radios: QueryList<MatRadioButton>;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    get required(): boolean;
    set required(value: boolean);
    get selected(): MatRadioButton | null;
    set selected(selected: MatRadioButton | null);
    setDisabledState(isDisabled: boolean): void;
    _touch(): void;
    get value(): any;
    set value(newValue: any);
    writeValue(value: any): void;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatRadioGroup, "mat-radio-group", ["matRadioGroup"], {}, {}, ["_radios"], never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatRadioGroup, never>;
}

export class MatRadioModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatRadioModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatRadioModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatRadioModule, never, [], []>;
}
```

---