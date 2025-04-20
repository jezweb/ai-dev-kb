# Angular Material Stepper API Documentation

**Summary:** This file covers topics related to "Angular Material Stepper API Documentation". Key snippets include: Angular Material Stepper API TypeScript Definitions.

---

## Angular Material Stepper API TypeScript Definitions

**Description:** Comprehensive TypeScript declarations for Angular Material Stepper components including imports, classes, interfaces and type definitions. Includes core stepper functionality, step headers, labels, navigation, and animations.

```typescript
import { AbstractControl } from '@angular/forms';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { CdkStep } from '@angular/cdk/stepper';
import { CdkStepHeader } from '@angular/cdk/stepper';
import { CdkStepLabel } from '@angular/cdk/stepper';
import { CdkStepper } from '@angular/cdk/stepper';
import { CdkStepperNext } from '@angular/cdk/stepper';
import { CdkStepperPrevious } from '@angular/cdk/stepper';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import * as i3$1 from '@angular/cdk/stepper';
import * as i3 from '@angular/cdk/portal';
import { NgForm } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Optional } from '@angular/core';
import { QueryList } from '@angular/core';
import { StepperOrientation } from '@angular/cdk/stepper';
import { StepState } from '@angular/cdk/stepper';
import { Subject } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { TemplateRef } from '@angular/core';

export const MAT_STEPPER_INTL_PROVIDER: {
    provide: typeof MatStepperIntl;
    deps: Optional[][];
    useFactory: typeof MAT_STEPPER_INTL_PROVIDER_FACTORY;
};

export function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl: MatStepperIntl): MatStepperIntl;

export class MatStep extends CdkStep implements ErrorStateMatcher, AfterContentInit, OnDestroy {
    color: ThemePalette;
    isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean;
    _lazyContent: MatStepContent;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    _portal: TemplatePortal;
    stepLabel: MatStepLabel;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatStep, "mat-step", ["matStep"], {}, {}, [], never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatStep, never>;
}

// Additional class and interface definitions...
```

---