# Angular Material Select API Documentation

**Summary:** This file covers topics related to "Angular Material Select API Documentation". Key snippets include: Importing Angular Material Select Dependencies in TypeScript, Implementing MatOption Component in Angular Material, Implementing MatOptgroup Component in Angular Material.

---

## Importing Angular Material Select Dependencies in TypeScript

**Description:** A comprehensive list of imports needed for Angular Material Select components. Includes imports from Angular Core, Forms, CDK libraries, and RxJS.

```typescript
import { AbstractControl } from '@angular/forms';
import { AbstractControlDirective } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectorRef } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { ControlValueAccessor } from '@angular/forms';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';
import { FocusOrigin } from '@angular/cdk/a11y';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import * as i2 from '@angular/cdk/overlay';
import * as i2_2 from '@angular/cdk/observers';
import * as i5 from '@angular/cdk/scrolling';
import { InjectionToken } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { QueryList } from '@angular/core';
import { ScrollStrategy } from '@angular/cdk/overlay';
import { SelectionModel } from '@angular/cdk/collections';
import { SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { ViewportRuler } from '@angular/cdk/scrolling';
```

---

## Implementing MatOption Component in Angular Material

**Description:** Definition for MatOption which represents an option item in select dropdowns. Supports selection, disabling, and keyboard navigation with various lifecycle hooks and event emitters.

```typescript
// @public
export class MatOption<T = any> implements FocusableOption, AfterViewChecked, OnDestroy {
    constructor(...args: unknown[]);
    get active(): boolean;
    // (undocumented)
    _changeDetectorRef: ChangeDetectorRef;
    deselect(emitEvent?: boolean): void;
    get disabled(): boolean;
    set disabled(value: boolean);
    get disableRipple(): boolean;
    focus(_origin?: FocusOrigin, options?: FocusOptions): void;
    _getHostElement(): HTMLElement;
    getLabel(): string;
    _getTabIndex(): string;
    // (undocumented)
    group: MatOptgroup | null;
    _handleKeydown(event: KeyboardEvent): void;
    get hideSingleSelectionIndicator(): boolean;
    id: string;
    get multiple(): boolean | null | undefined;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    ngAfterViewChecked(): void;
    // (undocumented)
    ngOnDestroy(): void;
    readonly onSelectionChange: EventEmitter<MatOptionSelectionChange<T>>;
    select(emitEvent?: boolean): void;
    get selected(): boolean;
    _selectViaInteraction(): void;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    readonly _stateChanges: Subject<void>;
    _text: ElementRef<HTMLElement> | undefined;
    value: T;
    get viewValue(): string;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatOption<any>, "mat-option", ["matOption"], { "value": { "alias": "value"; "required": false; }; "id": { "alias": "id"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "onSelectionChange": "onSelectionChange"; }, never, ["mat-icon", "*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatOption<any>, never>;
}
```

---

## Implementing MatOptgroup Component in Angular Material

**Description:** Definition for MatOptgroup which is used to group related MatOption components together in a select dropdown. Supports setting label and disabled state.

```typescript
// @public
export class MatOptgroup {
    constructor(...args: unknown[]);
    disabled: boolean;
    _inert: boolean;
    label: string;
    _labelId: string;
    // (undocumented)
    static ngAcceptInputType_disabled: unknown;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatOptgroup, "mat-optgroup", ["matOptgroup"], { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*", "mat-option, ng-container"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatOptgroup, never>;
}
```

---