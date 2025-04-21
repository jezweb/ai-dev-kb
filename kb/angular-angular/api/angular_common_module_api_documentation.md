# Angular Common Module API Documentation

**Summary:** This file covers topics related to "Angular Common Module API Documentation". Key snippets include: Implementing NgComponentOutlet Directive in Angular, Defining NgTemplateOutlet Directive in Angular, Defining SlicePipe Class in Angular, Implementing NgLocaleLocalization Service in Angular, Defining PlatformLocation Abstract Class in Angular.

---

## Implementing NgComponentOutlet Directive in Angular

**Description:** Defines the NgComponentOutlet directive for dynamically rendering components. It includes input properties for the component, inputs, injector, content, and NgModule.

```TypeScript
static ɵdir: i0.ɵɵDirectiveDeclaration<NgComponentOutlet<any>, "[ngComponentOutlet]", ["ngComponentOutlet"], { "ngComponentOutlet": { "alias": "ngComponentOutlet"; "required": false; }; "ngComponentOutletInputs": { "alias": "ngComponentOutletInputs"; "required": false; }; "ngComponentOutletInjector": { "alias": "ngComponentOutletInjector"; "required": false; }; "ngComponentOutletContent": { "alias": "ngComponentOutletContent"; "required": false; }; "ngComponentOutletNgModule": { "alias": "ngComponentOutletNgModule"; "required": false; }; "ngComponentOutletNgModuleFactory": { "alias": "ngComponentOutletNgModuleFactory"; "required": false; }; }, {}, never, never, true, never>;
```

---

## Defining NgTemplateOutlet Directive in Angular

**Description:** This snippet defines the NgTemplateOutlet directive with its input properties and factory declaration. It's used for rendering template contents.

```TypeScript
static ɵdir: i0.ɵɵDirectiveDeclaration<NgTemplateOutlet<any>, "[ngTemplateOutlet]", never, { "ngTemplateOutletContext": { "alias": "ngTemplateOutletContext"; "required": false; }; "ngTemplateOutlet": { "alias": "ngTemplateOutlet"; "required": false; }; "ngTemplateOutletInjector": { "alias": "ngTemplateOutletInjector"; "required": false; }; }, {}, never, never, true, never>;
// (undocumented)
static ɵfac: i0.ɵɵFactoryDeclaration<NgTemplateOutlet<any>, never>;
```

---

## Defining SlicePipe Class in Angular

**Description:** This class implements a pipe for slicing arrays or strings in Angular templates.

```TypeScript
export class SlicePipe implements PipeTransform {
    // (undocumented)
    transform<T>(value: ReadonlyArray<T>, start: number, end?: number): Array<T>;
    // (undocumented)
    transform(value: null | undefined, start: number, end?: number): null;
    // (undocumented)
    transform<T>(value: ReadonlyArray<T> | null | undefined, start: number, end?: number): Array<T> | null;
    // (undocumented)
    transform(value: string, start: number, end?: number): string;
    // (undocumented)
    transform(value: string | null | undefined, start: number, end?: number): string | null;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<SlicePipe, never>;
    // (undocumented)
    static ɵpipe: i0.ɵɵPipeDeclaration<SlicePipe, "slice", true>;
}
```

---

## Implementing NgLocaleLocalization Service in Angular

**Description:** Defines the NgLocaleLocalization service for handling plural categories based on locale. It extends NgLocalization and implements the getPluralCategory method.

```TypeScript
export class NgLocaleLocalization extends NgLocalization {
    constructor(locale: string);
    getPluralCategory(value: any, locale?: string): string;
    protected locale: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgLocaleLocalization, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgLocaleLocalization>;
}
```

---

## Defining PlatformLocation Abstract Class in Angular

**Description:** This abstract class defines methods for interacting with the browser's location object and history API.

```TypeScript
export abstract class PlatformLocation {
    // (undocumented)
    abstract back(): void;
    // (undocumented)
    abstract forward(): void;
    // (undocumented)
    abstract getBaseHrefFromDOM(): string;
    // (undocumented)
    abstract getState(): unknown;
    // (undocumented)
    abstract get hash(): string;
    // (undocumented)
    historyGo?(relativePosition: number): void;
    // (undocumented)
    abstract get hostname(): string;
    // (undocumented)
    abstract get href(): string;
    abstract onHashChange(fn: LocationChangeListener): VoidFunction;
    abstract onPopState(fn: LocationChangeListener): VoidFunction;
    // (undocumented)
    abstract get pathname(): string;
    // (undocumented)
    abstract get port(): string;
    // (undocumented)
    abstract get protocol(): string;
    // (undocumented)
    abstract pushState(state: any, title: string, url: string): void;
    // (undocumented)
    abstract replaceState(state: any, title: string, url: string): void;
    // (undocumented)
    abstract get search(): string;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<PlatformLocation, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<PlatformLocation>;
}
```

---