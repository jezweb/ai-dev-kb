# API Report for @angular/material_button

**Summary:** This file covers topics related to "API Report for @angular/material_button". Key snippets include: Defining Angular Material Button Components and Interfaces.

---

## Defining Angular Material Button Components and Interfaces

**Description:** This code snippet defines the main components, interfaces, and tokens for Angular Material buttons. It includes MatButton, MatFabButton, MatIconButton, and MatMiniFabButton classes, as well as related configuration interfaces and injection tokens.

```typescript
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import { InjectionToken } from '@angular/core';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

// @public
export const MAT_BUTTON_CONFIG: InjectionToken<MatButtonConfig>;

// @public
export const MAT_FAB_DEFAULT_OPTIONS: InjectionToken<MatFabDefaultOptions>;

// @public @deprecated
export function MAT_FAB_DEFAULT_OPTIONS_FACTORY(): MatFabDefaultOptions;

// @public
export const MatAnchor: typeof MatButton;

// @public (undocumented)
export type MatAnchor = MatButton;

// @public
export class MatButton extends MatButtonBase {
    constructor(...args: unknown[]);
    get appearance(): MatButtonAppearance | null;
    set appearance(value: MatButtonAppearance | '');
    setAppearance(appearance: MatButtonAppearance): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatButton, "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", ["matButton", "matAnchor"], { "appearance": { "alias": "matButton"; "required": false; }; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatButton, never>;
}

// @public
export type MatButtonAppearance = 'text' | 'filled' | 'elevated' | 'outlined' | 'tonal';

// @public
export interface MatButtonConfig {
    color?: ThemePalette;
    defaultAppearance?: MatButtonAppearance;
    disabledInteractive?: boolean;
}

// @public (undocumented)
export class MatButtonModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatButtonModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatButtonModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatButtonModule, never, [typeof MatCommonModule, typeof MatRippleModule, typeof MatButton, typeof MatMiniFabButton, typeof MatIconButton, typeof MatFabButton], [typeof MatCommonModule, typeof MatButton, typeof MatMiniFabButton, typeof MatIconButton, typeof MatFabButton]>;
}

// @public
export const MatFabAnchor: typeof MatFabButton;

// @public (undocumented)
export type MatFabAnchor = MatFabButton;

// @public
export class MatFabButton extends MatButtonBase {
    constructor(...args: unknown[]);
    // (undocumented)
    extended: boolean;
    // (undocumented)
    _isFab: boolean;
    // (undocumented)
    static ngAcceptInputType_extended: unknown;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatFabButton, "button[mat-fab], a[mat-fab], button[matFab], a[matFab]", ["matButton", "matAnchor"], { "extended": { "alias": "extended"; "required": false; }; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatFabButton, never>;
}

// @public
export interface MatFabDefaultOptions {
    color?: ThemePalette;
}

// @public
export const MatIconAnchor: typeof MatIconButton;

// @public (undocumented)
export type MatIconAnchor = MatIconButton;

// @public
export class MatIconButton extends MatButtonBase {
    constructor(...args: unknown[]);
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatIconButton, "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", ["matButton", "matAnchor"], {}, {}, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatIconButton, never>;
}

// @public
export const MatMiniFabAnchor: typeof MatMiniFabButton;

// @public (undocumented)
export type MatMiniFabAnchor = MatMiniFabButton;

// @public
export class MatMiniFabButton extends MatButtonBase {
    constructor(...args: unknown[]);
    // (undocumented)
    _isFab: boolean;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatMiniFabButton, "button[mat-mini-fab], a[mat-mini-fab], button[matMiniFab], a[matMiniFab]", ["matButton", "matAnchor"], {}, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatMiniFabButton, never>;
}
```

---