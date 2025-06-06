# Angular Material Stepper Testing API Documentation

**Summary:** This file covers topics related to "Angular Material Stepper Testing API Documentation". Key snippets include: Defining Angular Material Stepper Testing Harnesses and Interfaces.

---

## Defining Angular Material Stepper Testing Harnesses and Interfaces

**Description:** Defines test harnesses and interfaces for Angular Material stepper components including MatStepHarness, MatStepperHarness, navigation button harnesses, and related interfaces for filtering and configuration. These harnesses provide methods to interact with and verify stepper components in tests.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export class MatStepHarness extends ContentContainerComponentHarness<string> {
    getAriaLabel(): Promise<string | null>;
    getAriaLabelledby(): Promise<string | null>;
    getLabel(): Promise<string>;
    // (undocumented)
    protected getRootHarnessLoader(): Promise<HarnessLoader>;
    hasErrors(): Promise<boolean>;
    static hostSelector: string;
    isCompleted(): Promise<boolean>;
    isOptional(): Promise<boolean>;
    isSelected(): Promise<boolean>;
    select(): Promise<void>;
    static with(options?: StepHarnessFilters): HarnessPredicate<MatStepHarness>;
}

// @public
export class MatStepperHarness extends ComponentHarness {
    getOrientation(): Promise<StepperOrientation>;
    getSteps(filter?: StepHarnessFilters): Promise<MatStepHarness[]>;
    static hostSelector: string;
    selectStep(filter?: StepHarnessFilters): Promise<void>;
    static with(options?: StepperHarnessFilters): HarnessPredicate<MatStepperHarness>;
}

// @public
export class MatStepperNextHarness extends StepperButtonHarness {
    static hostSelector: string;
    static with(options?: StepperButtonHarnessFilters): HarnessPredicate<MatStepperNextHarness>;
}

// @public
export class MatStepperPreviousHarness extends StepperButtonHarness {
    static hostSelector: string;
    static with(options?: StepperButtonHarnessFilters): HarnessPredicate<MatStepperPreviousHarness>;
}

// @public
export interface StepHarnessFilters extends BaseHarnessFilters {
    completed?: boolean;
    invalid?: boolean;
    label?: string | RegExp;
    selected?: boolean;
}

// @public
export interface StepperButtonHarnessFilters extends BaseHarnessFilters {
    text?: string | RegExp;
}

// @public
export interface StepperHarnessFilters extends BaseHarnessFilters {
    orientation?: StepperOrientation;
}

// @public
export enum StepperOrientation {
    // (undocumented)
    HORIZONTAL = 0,
    // (undocumented)
    VERTICAL = 1
}
```

---