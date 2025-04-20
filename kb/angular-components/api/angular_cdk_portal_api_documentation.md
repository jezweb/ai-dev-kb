# Angular CDK Portal API Documentation

**Summary:** This file covers topics related to "Angular CDK Portal API Documentation". Key snippets include: Angular CDK Portal Module TypeScript Definitions.

---

## Angular CDK Portal Module TypeScript Definitions

**Description:** Comprehensive TypeScript definitions for the Angular CDK Portal module, including base classes, interfaces, and implementations for portal functionality. Includes imports from @angular/core and defines portal-related classes like BasePortalOutlet, ComponentPortal, and TemplatePortal.

```typescript
import { ApplicationRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EmbeddedViewRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import { Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

export abstract class BasePortalOutlet implements PortalOutlet {
    attach<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attach<T>(portal: TemplatePortal<T>): EmbeddedViewRef<T>;
    attach(portal: any): any;
    abstract attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    readonly attachDomPortal: null | ((portal: DomPortal) => any);
    protected _attachedPortal: Portal<any> | null;
    abstract attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    detach(): void;
    dispose(): void;
    hasAttached(): boolean;
    setDisposeFn(fn: () => void): void;
}

export class CdkPortal extends TemplatePortal {
    constructor(...args: unknown[]);
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkPortal, "[cdkPortal]", ["cdkPortal"], {}, {}, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPortal, never>;
}

export class CdkPortalOutlet extends BasePortalOutlet implements OnInit, OnDestroy {
    constructor(...args: unknown[]);
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachDomPortal: (portal: DomPortal) => void;
    readonly attached: EventEmitter<CdkPortalOutletAttachedRef>;
    get attachedRef(): CdkPortalOutletAttachedRef;
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    ngOnDestroy(): void;
    ngOnInit(): void;
    get portal(): Portal<any> | null;
    set portal(portal: Portal<any> | null | undefined | '');
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkPortalOutlet, "[cdkPortalOutlet]", ["cdkPortalOutlet"], { "portal": { "alias": "cdkPortalOutlet"; "required": false; }; }, { "attached": "attached"; }, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkPortalOutlet, never>;
}

export type CdkPortalOutletAttachedRef = ComponentRef<any> | EmbeddedViewRef<any> | null;

export class ComponentPortal<T> extends Portal<ComponentRef<T>> {
    constructor(component: ComponentType<T>, viewContainerRef?: ViewContainerRef | null, injector?: Injector | null, projectableNodes?: Node[][] | null);
    component: ComponentType<T>;
    injector?: Injector | null;
    projectableNodes?: Node[][] | null;
    viewContainerRef?: ViewContainerRef | null;
}

export interface ComponentType<T> {
    new (...args: any[]): T;
}

export class DomPortal<T = HTMLElement> extends Portal<T> {
    constructor(element: T | ElementRef<T>);
    readonly element: T;
}

export class DomPortalOutlet extends BasePortalOutlet {
    constructor(
    outletElement: Element, _appRef?: ApplicationRef | undefined, _defaultInjector?: Injector | undefined);
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachDomPortal: (portal: DomPortal) => void;
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    dispose(): void;
    outletElement: Element;
}

export abstract class Portal<T> {
    attach(host: PortalOutlet): T;
    detach(): void;
    get isAttached(): boolean;
    setAttachedHost(host: PortalOutlet | null): void;
}

export class PortalHostDirective extends CdkPortalOutlet {
    static ɵdir: i0.ɵɵDirectiveDeclaration<PortalHostDirective, "[cdkPortalHost], [portalHost]", ["cdkPortalHost"], { "portal": { "alias": "cdkPortalHost"; "required": false; }; }, {}, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PortalHostDirective, never>;
}

export class PortalModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PortalModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PortalModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PortalModule, never, [typeof CdkPortal, typeof CdkPortalOutlet, typeof TemplatePortalDirective, typeof PortalHostDirective], [typeof CdkPortal, typeof CdkPortalOutlet, typeof TemplatePortalDirective, typeof PortalHostDirective]>;
}

export interface PortalOutlet {
    attach(portal: Portal<any>): any;
    detach(): any;
    dispose(): void;
    hasAttached(): boolean;
}

export class TemplatePortal<C = any> extends Portal<EmbeddedViewRef<C>> {
    constructor(
    templateRef: TemplateRef<C>,
    viewContainerRef: ViewContainerRef,
    context?: C | undefined,
    injector?: Injector | undefined);
    attach(host: PortalOutlet, context?: C | undefined): EmbeddedViewRef<C>;
    context?: C | undefined;
    detach(): void;
    injector?: Injector | undefined;
    get origin(): ElementRef;
    templateRef: TemplateRef<C>;
    viewContainerRef: ViewContainerRef;
}

export class TemplatePortalDirective extends CdkPortal {
    static ɵdir: i0.ɵɵDirectiveDeclaration<TemplatePortalDirective, "[cdk-portal], [portal]", ["cdkPortal"], {}, {}, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplatePortalDirective, never>;
}
```

---