# Angular Material Badge API Documentation

**Summary:** This file covers topics related to "Angular Material Badge API Documentation". Key snippets include: Defining Angular Material Badge Components and Types.

---

## Defining Angular Material Badge Components and Types

**Description:** Contains the core MatBadge directive implementation with position, size, and styling controls, along with the NgModule declaration and supporting type definitions. The badge component supports customization of color, position, size, content and accessibility features.

```typescript
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/a11y';
import * as i1_2 from '@angular/cdk/bidi';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

// @public
export class MatBadge implements OnInit, OnDestroy {
    constructor(...args: unknown[]);
    get color(): ThemePalette;
    set color(value: ThemePalette);
    get content(): string | number | undefined | null;
    set content(newContent: string | number | undefined | null);
    get description(): string;
    set description(newDescription: string);
    disabled: boolean;
    getBadgeElement(): HTMLElement | undefined;
    hidden: boolean;
    isAbove(): boolean;
    isAfter(): boolean;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_hidden: unknown;
    static ngAcceptInputType_overlap: unknown;
    ngOnDestroy(): void;
    ngOnInit(): void;
    overlap: boolean;
    position: MatBadgePosition;
    size: MatBadgeSize;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatBadge, "[matBadge]", never, { "color": { "alias": "matBadgeColor"; "required": false; }; "overlap": { "alias": "matBadgeOverlap"; "required": false; }; "disabled": { "alias": "matBadgeDisabled"; "required": false; }; "position": { "alias": "matBadgePosition"; "required": false; }; "content": { "alias": "matBadge"; "required": false; }; "description": { "alias": "matBadgeDescription"; "required": false; }; "size": { "alias": "matBadgeSize"; "required": false; }; "hidden": { "alias": "matBadgeHidden"; "required": false; }; }, {}, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatBadge, never>;
}

export class MatBadgeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatBadgeModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatBadgeModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatBadgeModule, never, [typeof i1.A11yModule, typeof MatCommonModule, typeof MatBadge, typeof _MatBadgeStyleLoader], [typeof MatBadge, typeof MatCommonModule]>;
}

export type MatBadgePosition = 'above after' | 'above before' | 'below before' | 'below after' | 'before' | 'after' | 'above' | 'below';

export type MatBadgeSize = 'small' | 'medium' | 'large';
```

---