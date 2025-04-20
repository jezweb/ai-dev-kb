# Angular Material Progress Bar Testing API

**Summary:** This file covers topics related to "Angular Material Progress Bar Testing API". Key snippets include: Defining MatProgressBarHarness Class and Interfaces in TypeScript.

---

## Defining MatProgressBarHarness Class and Interfaces in TypeScript

**Description:** This code snippet defines the testing harness for Material Progress Bar components. It includes the MatProgressBarHarness class which extends ComponentHarness and provides methods to interact with progress bars during tests, along with the ProgressBarHarnessFilters interface that extends BaseHarnessFilters.

```typescript
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export class MatProgressBarHarness extends ComponentHarness {
    getMode(): Promise<string | null>;
    getValue(): Promise<number | null>;
    // (undocumented)
    static hostSelector: string;
    static with<T extends MatProgressBarHarness>(this: ComponentHarnessConstructor<T>, options?: ProgressBarHarnessFilters): HarnessPredicate<T>;
}

// @public
export interface ProgressBarHarnessFilters extends BaseHarnessFilters {
}
```

---