# Angular CDK Stepper API Documentation

**Summary:** This file covers topics related to "Angular CDK Stepper API Documentation". Key snippets include: Angular CDK Stepper API TypeScript Definitions.

---

## Angular CDK Stepper API TypeScript Definitions

**Description:** Complete API definition for the @angular/cdk_stepper module. Includes class definitions for CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, along with supporting interfaces, tokens, and types for implementing step-based workflows in Angular applications.

```typescript
import { AbstractControl } from '@angular/forms';
import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import { InjectionToken } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { TemplateRef } from '@angular/core';

// @public (undocumented)
export class CdkStep implements OnChanges {
    constructor(...args: unknown[]);
    ariaLabel: string;
    ariaLabelledby: string;
    protected _childForms: QueryList<Partial<NgForm | FormGroupDirective>> | undefined;
    get completed(): boolean;
    set completed(value: boolean);
    // (undocumented)
    _completedOverride: boolean | null;
    content: TemplateRef<any>;
    // (undocumented)
    _displayDefaultIndicatorType: boolean;
    editable: boolean;
    errorMessage: string;
    get hasError(): boolean;
    set hasError(value: boolean);
    interacted: boolean;
    readonly interactedStream: EventEmitter<CdkStep>;
    label: string;
    // (undocumented)
    _markAsInteracted(): void;
    // (undocumented)
    static ngAcceptInputType_completed: unknown;
    // (undocumented)
    static ngAcceptInputType_editable: unknown;
    // (undocumented)
    static ngAcceptInputType_hasError: unknown;
    // (undocumented)
    static ngAcceptInputType_optional: unknown;
    // (undocumented)
    ngOnChanges(): void;
    optional: boolean;
    reset(): void;
    select(): void;
    _showError(): boolean;
    state: StepState;
    stepControl: AbstractControl;
    stepLabel: CdkStepLabel;
    // (undocumented)
    _stepper: CdkStepper;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkStep, "cdk-step", ["cdkStep"], { "stepControl": { "alias": "stepControl"; "required": false; }; "label": { "alias": "label"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "ariaLabel": { "alias": "aria-label"; "required": false; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; }; "state": { "alias": "state"; "required": false; }; "editable": { "alias": "editable"; "required": false; }; "optional": { "alias": "optional"; "required": false; }; "completed": { "alias": "completed"; "required": false; }; "hasError": { "alias": "hasError"; "required": false; }; }, { "interactedStream": "interacted"; }, ["stepLabel", "_childForms"], ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStep, never>;
}

// @public (undocumented)
export class CdkStepHeader implements FocusableOption {
    constructor(...args: unknown[]);
    // (undocumented)
    _elementRef: ElementRef<HTMLElement>;
    focus(): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkStepHeader, "[cdkStepHeader]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStepHeader, never>;
}

// @public (undocumented)
export class CdkStepLabel {
    constructor(...args: unknown[]);
    // (undocumented)
    template: TemplateRef<any>;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkStepLabel, "[cdkStepLabel]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStepLabel, never>;
}

// @public (undocumented)
export class CdkStepper implements AfterContentInit, AfterViewInit, OnDestroy {
    constructor(...args: unknown[]);
    protected readonly _destroyed: Subject<void>;
    // (undocumented)
    protected _elementRef: ElementRef<HTMLElement>;
    _getAnimationDirection(index: number): StepContentPositionState;
    _getFocusIndex(): number | null;
    _getIndicatorType(index: number, state?: StepState): StepState;
    _getStepContentId(i: number): string;
    _getStepLabelId(i: number): string;
    linear: boolean;
    next(): void;
    // (undocumented)
    static ngAcceptInputType_linear: unknown;
    // (undocumented)
    static ngAcceptInputType_selectedIndex: unknown;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    _onKeydown(event: KeyboardEvent): void;
    get orientation(): StepperOrientation;
    set orientation(value: StepperOrientation);
    previous(): void;
    reset(): void;
    get selected(): CdkStep | undefined;
    set selected(step: CdkStep | undefined);
    get selectedIndex(): number;
    set selectedIndex(index: number);
    readonly selectedIndexChange: EventEmitter<number>;
    readonly selectionChange: EventEmitter<StepperSelectionEvent>;
    _stateChanged(): void;
    _stepHeader: QueryList<CdkStepHeader>;
    readonly steps: QueryList<CdkStep>;
    _steps: QueryList<CdkStep>;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkStepper, "[cdkStepper]", ["cdkStepper"], { "linear": { "alias": "linear"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; }, { "selectionChange": "selectionChange"; "selectedIndexChange": "selectedIndexChange"; }, ["_steps", "_stepHeader"], never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStepper, never>;
}

// @public (undocumented)
export class CdkStepperModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStepperModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkStepperModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkStepperModule, never, [typeof BidiModule, typeof CdkStep, typeof CdkStepper, typeof CdkStepHeader, typeof CdkStepLabel, typeof CdkStepperNext, typeof CdkStepperPrevious], [typeof CdkStep, typeof CdkStepper, typeof CdkStepHeader, typeof CdkStepLabel, typeof CdkStepperNext, typeof CdkStepperPrevious]>;
}

// @public
export class CdkStepperNext {
    constructor(...args: unknown[]);
    // (undocumented)
    _stepper: CdkStepper;
    type: string;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkStepperNext, "button[cdkStepperNext]", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStepperNext, never>;
}

// @public
export class CdkStepperPrevious {
    constructor(...args: unknown[]);
    // (undocumented)
    _stepper: CdkStepper;
    type: string;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkStepperPrevious, "button[cdkStepperPrevious]", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkStepperPrevious, never>;
}

// @public
export const STEP_STATE: {
    NUMBER: string;
    EDIT: string;
    DONE: string;
    ERROR: string;
};

// @public
export type StepContentPositionState = 'previous' | 'current' | 'next';

// @public
export const STEPPER_GLOBAL_OPTIONS: InjectionToken<StepperOptions>;

// @public
export interface StepperOptions {
    displayDefaultIndicatorType?: boolean;
    showError?: boolean;
}

// @public
export type StepperOrientation = 'horizontal' | 'vertical';

// @public
export class StepperSelectionEvent {
    previouslySelectedIndex: number;
    previouslySelectedStep: CdkStep;
    selectedIndex: number;
    selectedStep: CdkStep;
}

// @public
export type StepState = 'number' | 'edit' | 'done' | 'error' | string;

// (No @packageDocumentation comment for this package)
```

---