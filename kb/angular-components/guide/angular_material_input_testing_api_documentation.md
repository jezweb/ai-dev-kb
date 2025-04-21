# Angular Material Input Testing API Documentation

**Summary:** This file covers topics related to "Angular Material Input Testing API Documentation". Key snippets include: Defining Input Testing Harnesses in TypeScript.

---

## Defining Input Testing Harnesses in TypeScript

**Description:** Comprehensive TypeScript code defining testing harnesses for Angular Material input components. Includes interfaces and classes for input, native select, and native option testing with methods for interacting with and validating component states.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export interface InputHarnessFilters extends BaseHarnessFilters {
    placeholder?: string | RegExp;
    value?: string | RegExp;
}

// @public
export class MatInputHarness extends MatFormFieldControlHarness {
    blur(): Promise<void>;
    focus(): Promise<void>;
    getId(): Promise<string>;
    getName(): Promise<string>;
    getPlaceholder(): Promise<string>;
    getType(): Promise<string>;
    getValue(): Promise<string>;
    // (undocumented)
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    isReadonly(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    setValue(newValue: string): Promise<void>;
    static with(options?: InputHarnessFilters): HarnessPredicate<MatInputHarness>;
}

// @public
export class MatNativeOptionHarness extends ComponentHarness {
    getIndex(): Promise<number>;
    getText(): Promise<string>;
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isSelected(): Promise<boolean>;
    static with(options?: NativeOptionHarnessFilters): HarnessPredicate<MatNativeOptionHarness>;
}

// @public
export class MatNativeSelectHarness extends MatFormFieldControlHarness {
    blur(): Promise<void>;
    focus(): Promise<void>;
    getId(): Promise<string>;
    getName(): Promise<string>;
    getOptions(filter?: NativeOptionHarnessFilters): Promise<MatNativeOptionHarness[]>;
    // (undocumented)
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    isMultiple(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    selectOptions(filter?: NativeOptionHarnessFilters): Promise<void>;
    static with(options?: NativeSelectHarnessFilters): HarnessPredicate<MatNativeSelectHarness>;
}

// @public
export interface NativeOptionHarnessFilters extends BaseHarnessFilters {
    // (undocumented)
    index?: number;
    // (undocumented)
    isSelected?: boolean;
    // (undocumented)
    text?: string | RegExp;
}

// @public
export interface NativeSelectHarnessFilters extends BaseHarnessFilters {
}
```

---