# Angular Material Form Field Testing API Report

**Summary:** This file covers topics related to "Angular Material Form Field Testing API Report". Key snippets include: TypeScript API Definitions for Angular Material Form Field Testing.

---

## TypeScript API Definitions for Angular Material Form Field Testing

**Description:** This code snippet defines the complete API for Angular Material form field testing harnesses. It includes interfaces for filtering harnesses, type definitions, and harness classes for form fields, errors, and form controls that can be used in component tests.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export interface ErrorHarnessFilters extends BaseHarnessFilters {
    text?: string | RegExp;
}

// @public
export type FormFieldControlHarness = MatInputHarness | MatSelectHarness | MatDatepickerInputHarness | MatDateRangeInputHarness;

// @public
export interface FormFieldHarnessFilters extends BaseHarnessFilters {
    floatingLabelText?: string | RegExp;
    hasErrors?: boolean;
    isValid?: boolean;
}

// @public
export class MatErrorHarness extends ComponentHarness {
    // (undocumented)
    protected static _getErrorPredicate<T extends MatErrorHarness>(type: ComponentHarnessConstructor<T>, options: ErrorHarnessFilters): HarnessPredicate<T>;
    getText(): Promise<string>;
    // (undocumented)
    static hostSelector: string;
    static with<T extends MatErrorHarness>(this: ComponentHarnessConstructor<T>, options?: ErrorHarnessFilters): HarnessPredicate<T>;
}

// @public
export abstract class MatFormFieldControlHarness extends ComponentHarness {
}

// @public (undocumented)
export class MatFormFieldHarness extends ComponentHarness {
    getAppearance(): Promise<'fill' | 'outline'>;
    getControl(): Promise<FormFieldControlHarness | null>;
    getControl<X extends MatFormFieldControlHarness>(type: ComponentHarnessConstructor<X>): Promise<X | null>;
    getControl<X extends MatFormFieldControlHarness>(type: HarnessPredicate<X>): Promise<X | null>;
    getErrors(filter?: ErrorHarnessFilters): Promise<MatErrorHarness[]>;
    getLabel(): Promise<string | null>;
    getPrefixText(): Promise<string>;
    getSuffixText(): Promise<string>;
    getTextErrors(): Promise<string[]>;
    getTextHints(): Promise<string[]>;
    getThemeColor(): Promise<'primary' | 'accent' | 'warn'>;
    hasErrors(): Promise<boolean>;
    hasLabel(): Promise<boolean>;
    // (undocumented)
    static hostSelector: string;
    isAutofilled(): Promise<boolean>;
    isControlDirty(): Promise<boolean | null>;
    isControlPending(): Promise<boolean | null>;
    isControlTouched(): Promise<boolean | null>;
    isControlValid(): Promise<boolean | null>;
    isDisabled(): Promise<boolean>;
    isLabelFloating(): Promise<boolean>;
    static with<T extends MatFormFieldHarness>(this: ComponentHarnessConstructor<T>, options?: FormFieldHarnessFilters): HarnessPredicate<T>;
}
```

---