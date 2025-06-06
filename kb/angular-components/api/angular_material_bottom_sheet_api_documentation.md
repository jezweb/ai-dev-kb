# Angular Material Bottom Sheet API Documentation

**Summary:** This file covers topics related to "Angular Material Bottom Sheet API Documentation". Key snippets include: Defining Angular Material Bottom Sheet API in TypeScript.

---

## Defining Angular Material Bottom Sheet API in TypeScript

**Description:** Complete API definition for the @angular/material_bottom-sheet package, including imports, public types, classes, and components. It defines the MatBottomSheet service, container component, configuration options, and reference classes.

```typescript
import { CdkDialogContainer } from '@angular/cdk/dialog';
import { ComponentRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { DialogRef } from '@angular/cdk/dialog';
import { Direction } from '@angular/cdk/bidi';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/dialog';
import * as i1_2 from '@angular/cdk/bidi';
import * as i3 from '@angular/cdk/portal';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { ScrollStrategy } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

// @public
export type AutoFocusTarget = 'dialog' | 'first-tabbable' | 'first-heading';

// @public
export const MAT_BOTTOM_SHEET_DATA: InjectionToken<any>;

// @public
export const MAT_BOTTOM_SHEET_DEFAULT_OPTIONS: InjectionToken<MatBottomSheetConfig<any>>;

// @public
export class MatBottomSheet implements OnDestroy {
    constructor(...args: unknown[]);
    dismiss<R = any>(result?: R): void;
    // (undocumented)
    ngOnDestroy(): void;
    open<T, D = any, R = any>(component: ComponentType<T>, config?: MatBottomSheetConfig<D>): MatBottomSheetRef<T, R>;
    open<T, D = any, R = any>(template: TemplateRef<T>, config?: MatBottomSheetConfig<D>): MatBottomSheetRef<T, R>;
    get _openedBottomSheetRef(): MatBottomSheetRef<any> | null;
    set _openedBottomSheetRef(value: MatBottomSheetRef<any> | null);
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatBottomSheet, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<MatBottomSheet>;
}

// @public @deprecated
export const matBottomSheetAnimations: {
    readonly bottomSheetState: any;
};

// @public
export class MatBottomSheetConfig<D = any> {
    ariaLabel?: string | null;
    ariaModal?: boolean;
    autoFocus?: AutoFocusTarget | string | boolean;
    backdropClass?: string;
    closeOnNavigation?: boolean;
    data?: D | null;
    direction?: Direction;
    disableClose?: boolean;
    hasBackdrop?: boolean;
    height?: string;
    maxHeight?: number | string;
    minHeight?: number | string;
    panelClass?: string | string[];
    restoreFocus?: boolean;
    scrollStrategy?: ScrollStrategy;
    viewContainerRef?: ViewContainerRef;
}

// @public
export class MatBottomSheetContainer extends CdkDialogContainer implements OnDestroy {
    constructor(...args: unknown[]);
    // (undocumented)
    protected _animationsDisabled: boolean;
    _animationState: 'void' | 'visible' | 'hidden';
    _animationStateChanged: EventEmitter<{
        toState: "visible" | "hidden";
        phase: "start" | "done";
    }>;
    enter(): void;
    exit(): void;
    // (undocumented)
    protected _handleAnimationEvent(isStart: boolean, animationName: string): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatBottomSheetContainer, "mat-bottom-sheet-container", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatBottomSheetContainer, never>;
}

// @public (undocumented)
export class MatBottomSheetModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatBottomSheetModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatBottomSheetModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatBottomSheetModule, never, [typeof i1.DialogModule, typeof MatCommonModule, typeof i3.PortalModule, typeof MatBottomSheetContainer], [typeof MatBottomSheetContainer, typeof MatCommonModule]>;
}

// @public
export class MatBottomSheetRef<T = any, R = any> {
    constructor(_ref: DialogRef<R, T>, config: MatBottomSheetConfig, containerInstance: MatBottomSheetContainer);
    afterDismissed(): Observable<R | undefined>;
    afterOpened(): Observable<void>;
    backdropClick(): Observable<MouseEvent>;
    get componentRef(): ComponentRef<T> | null;
    containerInstance: MatBottomSheetContainer;
    disableClose: boolean | undefined;
    dismiss(result?: R): void;
    get instance(): T;
    keydownEvents(): Observable<KeyboardEvent>;
}
```

---