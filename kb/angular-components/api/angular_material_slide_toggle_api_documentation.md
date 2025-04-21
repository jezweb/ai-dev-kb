# Angular Material Slide Toggle API Documentation

**Summary:** This file covers topics related to "Angular Material Slide Toggle API Documentation". Key snippets include: Defining Angular Material Slide Toggle API in TypeScript.

---

## Defining Angular Material Slide Toggle API in TypeScript

**Description:** This code snippet defines the API for the Angular Material Slide Toggle component. It includes imports, constants, classes, and interfaces necessary for implementing and using the slide toggle functionality in Angular applications.

```typescript
import { AbstractControl } from '@angular/forms';
import { AfterContentInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import { InjectionToken } from '@angular/core';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Validator } from '@angular/forms';

export const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS: InjectionToken<MatSlideToggleDefaultOptions>;

export class MatSlideToggle implements OnDestroy, AfterContentInit, OnChanges, ControlValueAccessor, Validator {
    constructor(...args: unknown[]);
    ariaDescribedby: string;
    ariaLabel: string | null;
    ariaLabelledby: string | null;
    get buttonId(): string;
    readonly change: EventEmitter<MatSlideToggleChange>;
    protected _changeDetectorRef: ChangeDetectorRef;
    get checked(): boolean;
    set checked(value: boolean);
    color: string | undefined;
    defaults: MatSlideToggleDefaultOptions;
    disabled: boolean;
    disabledInteractive: boolean;
    disableRipple: boolean;
    protected _emitChangeEvent(): void;
    focus(): void;
    _focused: boolean;
    protected _focusMonitor: FocusMonitor;
    _getAriaLabelledBy(): string | null;
    _handleClick(): void;
    hideIcon: boolean;
    id: string;
    get inputId(): string;
    _labelId: string;
    labelPosition: 'before' | 'after';
    name: string | null;
    static ngAcceptInputType_checked: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_disabledInteractive: unknown;
    static ngAcceptInputType_disableRipple: unknown;
    static ngAcceptInputType_hideIcon: unknown;
    static ngAcceptInputType_required: unknown;
    static ngAcceptInputType_tabIndex: unknown;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    _noopAnimations: boolean;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    registerOnValidatorChange(fn: () => void): void;
    required: boolean;
    setDisabledState(isDisabled: boolean): void;
    _switchElement: ElementRef<HTMLElement>;
    tabIndex: number;
    toggle(): void;
    readonly toggleChange: EventEmitter<void>;
    validate(control: AbstractControl<boolean>): ValidationErrors | null;
    writeValue(value: any): void;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSlideToggle, "mat-slide-toggle", ["matSlideToggle"], { "name": { "alias": "name"; "required": false; }; "id": { "alias": "id"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "ariaDescribedby": { "alias": "aria-describedby"; "required": false; }; "required": { "alias": "required"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disableRipple": { "alias": "disableRipple"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "disabledInteractive": { "alias": "disabledInteractive"; "required": false; }; }, { "change": "change"; "toggleChange": "toggleChange"; }, never, ["*"], true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSlideToggle, never>;
}

export class MatSlideToggleChange {
    constructor(
    source: MatSlideToggle,
    checked: boolean);
    checked: boolean;
    source: MatSlideToggle;
}

export interface MatSlideToggleDefaultOptions {
    color?: ThemePalette;
    disabledInteractive?: boolean;
    disableToggleValue?: boolean;
    hideIcon?: boolean;
}

export class MatSlideToggleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSlideToggleModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatSlideToggleModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatSlideToggleModule, never, [typeof MatSlideToggle, typeof MatCommonModule], [typeof MatSlideToggle, typeof MatCommonModule]>;
}
```

---