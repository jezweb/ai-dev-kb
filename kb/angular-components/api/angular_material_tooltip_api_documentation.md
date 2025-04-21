# Angular Material Tooltip API Documentation

**Summary:** This file covers topics related to "Angular Material Tooltip API Documentation". Key snippets include: Angular Material Tooltip API Type Definitions and Implementations.

---

## Angular Material Tooltip API Type Definitions and Implementations

**Description:** Comprehensive TypeScript definitions for Angular Material's tooltip functionality including classes, interfaces, and utility functions. Contains core tooltip component implementation, configuration options, and helper types.

```typescript
import { AfterViewInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { ElementRef } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/a11y';
import * as i1_2 from '@angular/cdk/bidi';
import * as i2 from '@angular/cdk/overlay';
import * as i5 from '@angular/cdk/scrolling';
import { InjectionToken } from '@angular/core';
import { NumberInput } from '@angular/cdk/coercion';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { OriginConnectionPosition } from '@angular/cdk/overlay';
import { Overlay } from '@angular/cdk/overlay';
import { OverlayConnectionPosition } from '@angular/cdk/overlay';
import { OverlayRef } from '@angular/cdk/overlay';
import { ScrollStrategy } from '@angular/cdk/overlay';

export function getMatTooltipInvalidPositionError(position: string): Error;

export const MAT_TOOLTIP_DEFAULT_OPTIONS: InjectionToken<MatTooltipDefaultOptions>;

export function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY(): MatTooltipDefaultOptions;

export const MAT_TOOLTIP_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;

export function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy;

export const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY;
};

export class MatTooltip implements OnDestroy, AfterViewInit {
    constructor(...args: unknown[]);
    protected _addOffset(position: ConnectedPosition): ConnectedPosition;
    protected _dir: Directionality;
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    _getOrigin(): {
        main: OriginConnectionPosition;
        fallback: OriginConnectionPosition;
    };
    _getOverlayPosition(): {
        main: OverlayConnectionPosition;
        fallback: OverlayConnectionPosition;
    };
    hide(delay?: number): void;
    get hideDelay(): number;
    set hideDelay(value: NumberInput);
    _isTooltipVisible(): boolean;
    get message(): string;
    set message(value: string | null | undefined);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _overlayRef: OverlayRef | null;
    get position(): TooltipPosition;
    set position(value: TooltipPosition);
    get positionAtOrigin(): boolean;
    set positionAtOrigin(value: BooleanInput);
    show(delay?: number, origin?: {
        x: number;
        y: number;
    }): void;
    get showDelay(): number;
    set showDelay(value: NumberInput);
    toggle(origin?: {
        x: number;
        y: number;
    }): void;
    get tooltipClass(): string | string[] | Set<string> | {
        [key: string]: any;
    };
    set tooltipClass(value: string | string[] | Set<string> | {
        [key: string]: any;
    });
    _tooltipInstance: TooltipComponent | null;
    touchGestures: TooltipTouchGestures;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatTooltip, "[matTooltip]", ["matTooltip"], any, any, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTooltip, never>;
}

export const matTooltipAnimations: {
    readonly tooltipState: any;
};

export interface MatTooltipDefaultOptions {
    disableTooltipInteractivity?: boolean;
    hideDelay: number;
    position?: TooltipPosition;
    positionAtOrigin?: boolean;
    showDelay: number;
    tooltipClass?: string | string[];
    touchendHideDelay: number;
    touchGestures?: TooltipTouchGestures;
    touchLongPressShowDelay?: number;
}

export class MatTooltipModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTooltipModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatTooltipModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatTooltipModule, never, any[], any[]>;
}

export const SCROLL_THROTTLE_MS = 20;

export const TOOLTIP_PANEL_CLASS = "mat-mdc-tooltip-panel";

export class TooltipComponent implements OnDestroy {
    constructor(...args: unknown[]);
    afterHidden(): Observable<void>;
    _cancelPendingAnimations(): void;
    protected _elementRef: ElementRef<HTMLElement>;
    _handleAnimationEnd({ animationName }: AnimationEvent): void;
    _handleBodyInteraction(): void;
    _handleMouseLeave({ relatedTarget }: MouseEvent): void;
    hide(delay: number): void;
    _isMultiline: boolean;
    isVisible(): boolean;
    _markForCheck(): void;
    message: string;
    _mouseLeaveHideDelay: number;
    ngOnDestroy(): void;
    protected _onShow(): void;
    show(delay: number): void;
    _tooltip: ElementRef<HTMLElement>;
    tooltipClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    _triggerElement: HTMLElement;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "mat-tooltip-component", never, {}, {}, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
}

export type TooltipPosition = 'left' | 'right' | 'above' | 'below' | 'before' | 'after';

export type TooltipTouchGestures = 'auto' | 'on' | 'off';

export type TooltipVisibility = 'initial' | 'visible' | 'hidden';
```

---