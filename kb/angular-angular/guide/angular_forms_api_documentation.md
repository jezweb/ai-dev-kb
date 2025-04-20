# Angular Forms API Documentation

**Summary:** This file covers topics related to "Angular Forms API Documentation". Key snippets include: Defining NgForm Class in Angular, NgModel Class Definition.

---

## Defining NgForm Class in Angular

**Description:** This class extends ControlContainer and implements Form and AfterViewInit interfaces. It provides functionality for managing form controls and form groups within a template-driven form.

```TypeScript
export class NgForm extends ControlContainer implements Form, AfterViewInit {
    constructor(validators: (Validator | ValidatorFn)[], asyncValidators: (AsyncValidator | AsyncValidatorFn)[], callSetDisabledState?: SetDisabledStateOption | undefined);
    addControl(dir: NgModel): void;
    addFormGroup(dir: NgModelGroup): void;
    get control(): FormGroup;
    get controls(): {
        [key: string]: AbstractControl;
    };
    form: FormGroup;
    get formDirective(): Form;
    getControl(dir: NgModel): FormControl;
    getFormGroup(dir: NgModelGroup): FormGroup;
    ngAfterViewInit(): void;
    ngSubmit: EventEmitter<any>;
    onReset(): void;
    onSubmit($event: Event): boolean;
    options: {
        updateOn?: FormHooks;
    };
    get path(): string[];
    removeControl(dir: NgModel): void;
    removeFormGroup(dir: NgModelGroup): void;
    resetForm(value?: any): void;
    setValue(value: {
        [key: string]: any;
    }): void;
    get submitted(): boolean;
    updateModel(dir: NgControl, value: any): void;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgForm, "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", ["ngForm"], { "options": { "alias": "ngFormOptions"; "required": false; }; }, { "ngSubmit": "ngSubmit"; }, never, never, false, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgForm, [{ optional: true; self: true; }, { optional: true; self: true; }, { optional: true; }]>;
}
```

---

## NgModel Class Definition

**Description:** Class definition for NgModel directive used for two-way data binding in template-driven forms.

```typescript
readonly control: FormControl;
get formDirective(): any;
isDisabled: boolean;
model: any;
name: string;
static ngAcceptInputType_isDisabled: boolean | string;
ngOnChanges(changes: SimpleChanges): void;
ngOnDestroy(): void;
options: {
    name?: string;
    standalone?: boolean;
    updateOn?: FormHooks;
};
get path(): string[];
update: EventEmitter<any>;
viewModel: any;
viewToModelUpdate(newValue: any): void;
```

---