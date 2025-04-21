# Angular Material Icon API Documentation

**Summary:** This file covers topics related to "Angular Material Icon API Documentation". Key snippets include: Defining Angular Material Icon API Types and Functions.

---

## Defining Angular Material Icon API Types and Functions

**Description:** Contains the complete TypeScript definitions for Angular Material's icon system, including the MatIcon component, MatIconRegistry service, and related interfaces and utility functions. This code defines the public API surface for working with Material icons in Angular applications.

```typescript
import { AfterViewChecked } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import * as i1 from '@angular/cdk/bidi';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Optional } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

export function getMatIconFailedToSanitizeLiteralError(literal: SafeHtml): Error;
export function getMatIconFailedToSanitizeUrlError(url: SafeResourceUrl): Error;
export function getMatIconNameNotFoundError(iconName: string): Error;
export function getMatIconNoHttpProviderError(): Error;

export const ICON_REGISTRY_PROVIDER: {
    provide: typeof MatIconRegistry;
    deps: (Optional[] | typeof DomSanitizer | typeof ErrorHandler)[];
    useFactory: typeof ICON_REGISTRY_PROVIDER_FACTORY;
};

export function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry: MatIconRegistry, httpClient: HttpClient, sanitizer: DomSanitizer, errorHandler: ErrorHandler, document?: any): MatIconRegistry;

export interface IconOptions {
    viewBox?: string;
    withCredentials?: boolean;
}

export type IconResolver = (name: string, namespace: string) => SafeResourceUrl | SafeResourceUrlWithIconOptions | null;

export const MAT_ICON_DEFAULT_OPTIONS: InjectionToken<MatIconDefaultOptions>;
export const MAT_ICON_LOCATION: InjectionToken<MatIconLocation>;
export function MAT_ICON_LOCATION_FACTORY(): MatIconLocation;

export class MatIcon implements OnInit, AfterViewChecked, OnDestroy {
    constructor(...args: unknown[]);
    get color(): string | null | undefined;
    set color(value: string | null | undefined);
    readonly _elementRef: ElementRef<HTMLElement>;
    get fontIcon(): string;
    set fontIcon(value: string);
    get fontSet(): string;
    set fontSet(value: string);
    inline: boolean;
    static ngAcceptInputType_inline: unknown;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    get svgIcon(): string;
    set svgIcon(value: string);
    _svgName: string | null;
    _svgNamespace: string | null;
    _usingFontIcon(): boolean;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatIcon, "mat-icon", ["matIcon"], { "color": { "alias": "color"; "required": false; }; "inline": { "alias": "inline"; "required": false; }; "svgIcon": { "alias": "svgIcon"; "required": false; }; "fontSet": { "alias": "fontSet"; "required": false; }; "fontIcon": { "alias": "fontIcon"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatIcon, never>;
}

export interface MatIconDefaultOptions {
    color?: ThemePalette;
    fontSet?: string;
}

export interface MatIconLocation {
    getPathname: () => string;
}

export class MatIconModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatIconModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatIconModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatIconModule, never, [typeof MatCommonModule, typeof MatIcon], [typeof MatIcon, typeof MatCommonModule]>;
}

export class MatIconRegistry implements OnDestroy {
    constructor(_httpClient: HttpClient, _sanitizer: DomSanitizer, document: any, _errorHandler: ErrorHandler);
    addSvgIcon(iconName: string, url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconInNamespace(namespace: string, iconName: string, url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconLiteral(iconName: string, literal: SafeHtml, options?: IconOptions): this;
    addSvgIconLiteralInNamespace(namespace: string, iconName: string, literal: SafeHtml, options?: IconOptions): this;
    addSvgIconResolver(resolver: IconResolver): this;
    addSvgIconSet(url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconSetInNamespace(namespace: string, url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconSetLiteral(literal: SafeHtml, options?: IconOptions): this;
    addSvgIconSetLiteralInNamespace(namespace: string, literal: SafeHtml, options?: IconOptions): this;
    classNameForFontAlias(alias: string): string;
    getDefaultFontSetClass(): string[];
    getNamedSvgIcon(name: string, namespace?: string): Observable<SVGElement>;
    getSvgIconFromUrl(safeUrl: SafeResourceUrl): Observable<SVGElement>;
    ngOnDestroy(): void;
    registerFontClassAlias(alias: string, classNames?: string): this;
    setDefaultFontSetClass(...classNames: string[]): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatIconRegistry, [{ optional: true; }, null, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MatIconRegistry>;
}

export interface SafeResourceUrlWithIconOptions {
    options: IconOptions;
    url: SafeResourceUrl;
}
```

---