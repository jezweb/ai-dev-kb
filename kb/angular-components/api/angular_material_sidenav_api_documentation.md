# Angular Material Sidenav API Documentation

**Summary:** This file covers topics related to "Angular Material Sidenav API Documentation". Key snippets include: Angular Material Sidenav API Types and Classes.

---

## Angular Material Sidenav API Types and Classes

**Description:** TypeScript definitions for Angular Material's sidenav module. Includes class definitions, interfaces, tokens, and type declarations that make up the public API for the drawer and sidenav components.

```typescript
import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import * as i5 from '@angular/cdk/scrolling';
import { InjectionToken } from '@angular/core';
import { NumberInput } from '@angular/cdk/coercion';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { QueryList } from '@angular/core';
import { Subject } from 'rxjs';

// @public
export const MAT_DRAWER_DEFAULT_AUTOSIZE: InjectionToken<boolean>;

// @public @deprecated
export function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY(): boolean;

// @public
export class MatDrawer implements AfterViewInit, OnDestroy {
    constructor(...args: unknown[]);
    readonly _animationEnd: Subject<unknown>;
    readonly _animationStarted: Subject<unknown>;
    get autoFocus(): AutoFocusTarget | string | boolean;
    set autoFocus(value: AutoFocusTarget | string | BooleanInput);
    close(): Promise<MatDrawerToggleResult>;
    readonly closedStart: Observable<void>;
    readonly _closedStream: Observable<void>;
    _closeViaBackdropClick(): Promise<MatDrawerToggleResult>;
    // (undocumented)
    _container?: MatDrawerContainer | null | undefined;
    _content: ElementRef<HTMLElement>;
    get disableClose(): boolean;
    set disableClose(value: BooleanInput);
    // (undocumented)
    _getWidth(): number;
    get mode(): MatDrawerMode;
    set mode(value: MatDrawerMode);
    readonly _modeChanged: Subject<void>;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    readonly onPositionChanged: EventEmitter<void>;
    open(openedVia?: FocusOrigin): Promise<MatDrawerToggleResult>;
    get opened(): boolean;
    set opened(value: BooleanInput);
    readonly openedChange: EventEmitter<boolean>;
    readonly openedStart: Observable<void>;
    readonly _openedStream: Observable<void>;
    get position(): 'start' | 'end';
    set position(value: 'start' | 'end');
    toggle(isOpen?: boolean, openedVia?: FocusOrigin): Promise<MatDrawerToggleResult>;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDrawer, "mat-drawer", ["matDrawer"], { "position": { "alias": "position"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "disableClose": { "alias": "disableClose"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "opened": { "alias": "opened"; "required": false; }; }, { "openedChange": "openedChange"; "_openedStream": "opened"; "openedStart": "openedStart"; "_closedStream": "closed"; "closedStart": "closedStart"; "onPositionChanged": "positionChanged"; }, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDrawer, never>;
}

// @public @deprecated
export const matDrawerAnimations: {
    readonly transformDrawer: any;
};

// @public
export class MatDrawerContainer implements AfterContentInit, DoCheck, OnDestroy {
    constructor(...args: unknown[]);
    _allDrawers: QueryList<MatDrawer>;
    get autosize(): boolean;
    set autosize(value: BooleanInput);
    readonly backdropClick: EventEmitter<void>;
    // (undocumented)
    _backdropOverride: boolean | null;
    close(): void;
    // (undocumented)
    _closeModalDrawersViaBackdrop(): void;
    // (undocumented)
    _content: MatDrawerContent;
    // (undocumented)
    readonly _contentMarginChanges: Subject<{
        left: number | null;
        right: number | null;
    }>;
    _contentMargins: {
        left: number | null;
        right: number | null;
    };
    _drawers: QueryList<MatDrawer>;
    get end(): MatDrawer | null;
    get hasBackdrop(): boolean;
    set hasBackdrop(value: BooleanInput);
    // (undocumented)
    _isShowingBackdrop(): boolean;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngDoCheck(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    _onBackdropClicked(): void;
    open(): void;
    get scrollable(): CdkScrollable;
    get start(): MatDrawer | null;
    // (undocumented)
    _transitionsEnabled: boolean;
    updateContentMargins(): void;
    // (undocumented)
    _userContent: MatDrawerContent;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDrawerContainer, "mat-drawer-container", ["matDrawerContainer"], { "autosize": { "alias": "autosize"; "required": false; }; "hasBackdrop": { "alias": "hasBackdrop"; "required": false; }; }, { "backdropClick": "backdropClick"; }, ["_content", "_allDrawers"], ["mat-drawer", "mat-drawer-content", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDrawerContainer, never>;
}

// @public (undocumented)
export class MatDrawerContent extends CdkScrollable implements AfterContentInit {
    constructor(...args: unknown[]);
    // (undocumented)
    _container: MatDrawerContainer;
    // (undocumented)
    ngAfterContentInit(): void;
    protected _shouldBeHidden(): boolean;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDrawerContent, "mat-drawer-content", never, {}, {}, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDrawerContent, never>;
}

// @public
export type MatDrawerMode = 'over' | 'push' | 'side';

// @public
export type MatDrawerToggleResult = 'open' | 'close';

// @public (undocumented)
export class MatSidenav extends MatDrawer {
    get fixedBottomGap(): number;
    set fixedBottomGap(value: NumberInput);
    get fixedInViewport(): boolean;
    set fixedInViewport(value: BooleanInput);
    get fixedTopGap(): number;
    set fixedTopGap(value: NumberInput);
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSidenav, "mat-sidenav", ["matSidenav"], { "fixedInViewport": { "alias": "fixedInViewport"; "required": false; }; "fixedTopGap": { "alias": "fixedTopGap"; "required": false; }; "fixedBottomGap": { "alias": "fixedBottomGap"; "required": false; }; }, {}, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSidenav, never>;
}

// @public (undocumented)
export class MatSidenavContainer extends MatDrawerContainer {
    // (undocumented)
    _allDrawers: QueryList<MatSidenav>;
    // (undocumented)
    _content: MatSidenavContent;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSidenavContainer, "mat-sidenav-container", ["matSidenavContainer"], {}, {}, ["_content", "_allDrawers"], ["mat-sidenav", "mat-sidenav-content", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSidenavContainer, never>;
}

// @public (undocumented)
export class MatSidenavContent extends MatDrawerContent {
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSidenavContent, "mat-sidenav-content", never, {}, {}, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSidenavContent, never>;
}

// @public (undocumented)
export class MatSidenavModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSidenavModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<MatSidenavModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatSidenavModule, never, [typeof MatCommonModule, typeof i5.CdkScrollableModule, typeof MatDrawer, typeof MatDrawerContainer, typeof MatDrawerContent, typeof MatSidenav, typeof MatSidenavContainer, typeof MatSidenavContent], [typeof i5.CdkScrollableModule, typeof MatCommonModule, typeof MatDrawer, typeof MatDrawerContainer, typeof MatDrawerContent, typeof MatSidenav, typeof MatSidenavContainer, typeof MatSidenavContent]>;
}

// @public
export function throwMatDuplicatedDrawerError(position: string): void;

// (No @packageDocumentation comment for this package)
```

---