# Angular CDK Platform API Documentation

**Summary:** This file covers topics related to "Angular CDK Platform API Documentation". Key snippets include: TypeScript Platform Module API Declarations.

---

## TypeScript Platform Module API Declarations

**Description:** Defines the public API for Angular CDK's platform module including platform detection utilities, browser feature checks, and DOM manipulation functions. Includes a Platform class for browser detection and various utility functions for handling events, scrolling, and shadow DOM operations.

```typescript
import * as i0 from '@angular/core';

// @public
export function _getEventTarget<T extends EventTarget>(event: Event): T | null;

// @public
export function _getFocusedElementPierceShadowDom(): HTMLElement | null;

// @public
export function getRtlScrollAxisType(): RtlScrollAxisType;

// @public
export function _getShadowRoot(element: HTMLElement): ShadowRoot | null;

// @public (undocumented)
export function getSupportedInputTypes(): Set<string>;

// @public
export function _isTestEnvironment(): boolean;

// @public
export function normalizePassiveListenerOptions(options: AddEventListenerOptions): AddEventListenerOptions | boolean;

// @public
export class Platform {
    constructor(..._args: unknown[]);
    ANDROID: boolean;
    BLINK: boolean;
    EDGE: boolean;
    FIREFOX: boolean;
    IOS: boolean;
    isBrowser: boolean;
    SAFARI: boolean;
    TRIDENT: boolean;
    WEBKIT: boolean;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<Platform, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<Platform>;
}

// @public (undocumented)
export class PlatformModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PlatformModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<PlatformModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<PlatformModule, never, never, never>;
}

// @public
export enum RtlScrollAxisType {
    INVERTED = 2,
    NEGATED = 1,
    NORMAL = 0
}

// @public
export function supportsPassiveEventListeners(): boolean;

// @public
export function supportsScrollBehavior(): boolean;

// @public
export function _supportsShadowDom(): boolean;
```

---