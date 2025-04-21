# API Report for @angular/material_snack-bar_testing

**Summary:** This file covers topics related to "API Report for @angular/material_snack-bar_testing". Key snippets include: Defining MatSnackBarHarness Class in TypeScript.

---

## Defining MatSnackBarHarness Class in TypeScript

**Description:** This code snippet defines the MatSnackBarHarness class, which extends ContentContainerComponentHarness. It provides methods for interacting with and testing Angular Material snack bars, including dismissing, getting messages, and checking properties.

```typescript
export class MatSnackBarHarness extends ContentContainerComponentHarness<string> {
    dismissWithAction(): Promise<void>;
    getActionDescription(): Promise<string>;
    getAriaLive(): Promise<AriaLivePoliteness>;
    getMessage(): Promise<string>;
    // @deprecated
    getRole(): Promise<'alert' | 'status' | null>;
    hasAction(): Promise<boolean>;
    static hostSelector: string;
    isDismissed(): Promise<boolean>;
    static with(options?: SnackBarHarnessFilters): HarnessPredicate<MatSnackBarHarness>;
}
```

---