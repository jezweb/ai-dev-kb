# API Report for @angular/material_progress-bar

**Summary:** This file covers topics related to "API Report for @angular/material_progress-bar". Key snippets include: Defining Angular Material Progress Bar APIs in TypeScript.

---

## Defining Angular Material Progress Bar APIs in TypeScript

**Description:** This code snippet defines the complete API surface for the Angular Material Progress Bar component, including injection tokens, the main component class, supporting interfaces, and the NgModule. It includes properties for value, buffer, animation, and theming configuration.

```typescript
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import { InjectionToken } from '@angular/core';
import { OnDestroy } from '@angular/core';

// @public
export const MAT_PROGRESS_BAR_DEFAULT_OPTIONS: InjectionToken<MatProgressBarDefaultOptions>;

// @public
export const MAT_PROGRESS_BAR_LOCATION: InjectionToken<MatProgressBarLocation>;

// @public @deprecated
export function MAT_PROGRESS_BAR_LOCATION_FACTORY(): MatProgressBarLocation;

// @public (undocumented)
export class MatProgressBar implements AfterViewInit, OnDestroy {
    constructor(...args: unknown[]);
    readonly animationEnd: EventEmitter<ProgressAnimationEnd>;
    get bufferValue(): number;
    set bufferValue(v: number);
    get color(): string | null | undefined;
    set color(value: string | null | undefined);
    // (undocumented)
    readonly _elementRef: ElementRef<HTMLElement>;
    _getBufferBarFlexBasis(): string;
    _getPrimaryBarTransform(): string;
    _isIndeterminate(): boolean;
    _isNoopAnimation: boolean;
    get mode(): ProgressBarMode;
    set mode(value: ProgressBarMode);
    // (undocumented)
    static ngAcceptInputType_bufferValue: unknown;
    // (undocumented)
    static ngAcceptInputType_value: unknown;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    get value(): number;
    set value(v: number);
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatProgressBar, "mat-progress-bar", ["matProgressBar"], { "color": { "alias": "color"; "required": false; }; "value": { "alias": "value"; "required": false; }; "bufferValue": { "alias": "bufferValue"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "animationEnd": "animationEnd"; }, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatProgressBar, never>;
}

// @public
export interface MatProgressBarDefaultOptions {
    color?: ThemePalette;
    mode?: ProgressBarMode;
}

// @public
export interface MatProgressBarLocation {
    // (undocumented)
    getPathname: () => string;
}

// @public (undocumented)
export class MatProgressBarModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatProgressBarModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatProgressBarModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatProgressBarModule, never, [typeof MatProgressBar], [typeof MatProgressBar, typeof MatCommonModule]>;
}

// @public
export interface ProgressAnimationEnd {
    // (undocumented)
    value: number;
}

// @public (undocumented)
export type ProgressBarMode = 'determinate' | 'indeterminate' | 'buffer' | 'query';

// (No @packageDocumentation comment for this package)
```

---