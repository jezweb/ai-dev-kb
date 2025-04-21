# Angular CDK Drag-Drop API Documentation

**Summary:** This file covers topics related to "Angular CDK Drag-Drop API Documentation". Key snippets include: Implementing DragDropRegistry Service in Angular CDK, Implementing moveItemInArray Function in TypeScript, Defining DropListOrientation Type for List Direction, Implementing DragRef Class for Drag Operations, Implementing Array Item Copy Utility for Drag and Drop....

---

## Implementing DragDropRegistry Service in Angular CDK

**Description:** Registry service that tracks all drag and drop operations in an application. Manages drag instances, drop containers, and emits events for pointer movements and scrolling.

```typescript
export class DragDropRegistry implements OnDestroy {
    constructor(...args: unknown[]);
    getDragDirectiveForNode(node: Node): CdkDrag | null;
    isDragging(drag: DragRef): boolean;
    // (undocumented)
    ngOnDestroy(): void;
    readonly pointerMove: Subject<TouchEvent | MouseEvent>;
    readonly pointerUp: Subject<TouchEvent | MouseEvent>;
    registerDirectiveNode(node: Node, dragRef: CdkDrag): void;
    registerDragItem(drag: DragRef): void;
    registerDropContainer(drop: DropListRef): void;
    removeDirectiveNode(node: Node): void;
    removeDragItem(drag: DragRef): void;
    removeDropContainer(drop: DropListRef): void;
    scrolled(shadowRoot?: DocumentOrShadowRoot | null): Observable<Event>;
    startDragging(drag: DragRef, event: TouchEvent | MouseEvent): void;
    stopDragging(drag: DragRef): void;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<DragDropRegistry, never>;
    // (undocumented)
    static ɵprov: i0.ɵɵInjectableDeclaration<DragDropRegistry>;
}
```

---

## Implementing moveItemInArray Function in TypeScript

**Description:** This function moves an item within an array from one index to another. It's a utility function for reordering items in a drag and drop context.

```TypeScript
export function moveItemInArray<T = any>(array: T[], fromIndex: number, toIndex: number): void;
```

---

## Defining DropListOrientation Type for List Direction

**Description:** Type definition for specifying the orientation of a drop list. Supports 'horizontal', 'vertical', or 'mixed' values to define how items are arranged and how drag operations work.

```typescript
export type DropListOrientation = 'horizontal' | 'vertical' | 'mixed';
```

---

## Implementing DragRef Class for Drag Operations

**Description:** Core class that manages drag operations for a single element. Handles movement, constraints, events, and visual feedback during dragging. Provides extensive configuration options and event observables.

```typescript
export class DragRef<T = any> {
    constructor(element: ElementRef<HTMLElement> | HTMLElement, _config: DragRefConfig, _document: Document, _ngZone: NgZone, _viewportRuler: ViewportRuler, _dragDropRegistry: DragDropRegistry, _renderer: Renderer2);
    readonly beforeStarted: Subject<void>;
    constrainPosition?: DragConstrainPosition;
    data: T;
    get disabled(): boolean;
    set disabled(value: boolean);
    disableHandle(handle: HTMLElement): void;
    dispose(): void;
    dragStartDelay: number | {
        touch: number;
        mouse: number;
    };
    readonly dropped: Subject<{
        previousIndex: number;
        currentIndex: number;
        item: DragRef;
        container: DropListRef;
        previousContainer: DropListRef;
        distance: Point;
        dropPoint: Point;
        isPointerOverContainer: boolean;
        event: MouseEvent | TouchEvent;
    }>;
    enableHandle(handle: HTMLElement): void;
    readonly ended: Subject<{
        source: DragRef;
        distance: Point;
        dropPoint: Point;
        event: MouseEvent | TouchEvent;
    }>;
    readonly entered: Subject<{
        container: DropListRef;
        item: DragRef;
        currentIndex: number;
    }>;
    readonly exited: Subject<{
        container: DropListRef;
        item: DragRef;
    }>;
    getFreeDragPosition(): Readonly<Point>;
    getPlaceholderElement(): HTMLElement;
    getRootElement(): HTMLElement;
    getVisibleElement(): HTMLElement;
    isDragging(): boolean;
    lockAxis: 'x' | 'y';
    readonly moved: Observable<{
        source: DragRef;
        pointerPosition: {
            x: number;
            y: number;
        };
        event: MouseEvent | TouchEvent;
        distance: Point;
        delta: {
            x: -1 | 0 | 1;
            y: -1 | 0 | 1;
        };
    }>;
    previewClass: string | string[] | undefined;
    readonly released: Subject<{
        source: DragRef;
        event: MouseEvent | TouchEvent;
    }>;
    reset(): void;
    scale: number;
    setFreeDragPosition(value: Point): this;
    _sortFromLastPointerPosition(): void;
    readonly started: Subject<{
        source: DragRef;
        event: MouseEvent | TouchEvent;
    }>;
    withBoundaryElement(boundaryElement: ElementRef<HTMLElement> | HTMLElement | null): this;
    withDirection(direction: Direction): this;
    _withDropContainer(container: DropListRef): void;
    withHandles(handles: (HTMLElement | ElementRef<HTMLElement>)[]): this;
    withParent(parent: DragRef<unknown> | null): this;
    withPlaceholderTemplate(template: DragHelperTemplate | null): this;
    withPreviewContainer(value: PreviewContainer): this;
    withPreviewTemplate(template: DragPreviewTemplate | null): this;
    withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement): this;
}
```

---

## Implementing Array Item Copy Utility for Drag and Drop

**Description:** Utility function that copies items between arrays during drag and drop operations. It transfers an item from a source array to a target array at specified indices.

```typescript
export function copyArrayItem<T = any>(currentArray: T[], targetArray: T[], currentIndex: number, targetIndex: number): void;
```

---

## Defining Angular Module for Drag and Drop Functionality

**Description:** Angular module declaration for the drag and drop feature set. Includes the necessary components, directives, and dependencies for implementing drag and drop interfaces.

```typescript
export class DragDropModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<DragDropModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<DragDropModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<DragDropModule, never, [typeof CdkDropList, typeof CdkDropListGroup, typeof CdkDrag, typeof CdkDragHandle, typeof CdkDragPreview, typeof CdkDragPlaceholder], [typeof CdkScrollableModule, typeof CdkDropList, typeof CdkDropListGroup, typeof CdkDrag, typeof CdkDragHandle, typeof CdkDragPreview, typeof CdkDragPlaceholder]>;
}
```

---

## Defining Position Constraint Function Type for Drag Operations

**Description:** TypeScript type definition for DragConstrainPosition, a function type that allows custom positioning logic during drag operations, taking user pointer position, drag reference, dimensions, and pickup position as parameters.

```typescript
export type DragConstrainPosition = (userPointerPosition: Point, dragRef: DragRef, dimensions: DOMRect, pickupPositionInElement: Point) => Point;
```

---

## Implementing DropListRef Class for Drop Container Management

**Description:** Core class that manages a drop container for draggable items. Handles receiving dragged items, sorting, auto-scrolling, and emitting events for drop operations.

```typescript
export class DropListRef<T = any> {
    constructor(element: ElementRef<HTMLElement> | HTMLElement, _dragDropRegistry: DragDropRegistry, _document: any, _ngZone: NgZone, _viewportRuler: ViewportRuler);
    autoScrollDisabled: boolean;
    autoScrollStep: number;
    readonly beforeStarted: Subject<void>;
    _canReceive(item: DragRef, x: number, y: number): boolean;
    connectedTo(connectedTo: DropListRef[]): this;
    data: T;
    disabled: boolean;
    dispose(): void;
    drop(item: DragRef, currentIndex: number, previousIndex: number, previousContainer: DropListRef, isPointerOverContainer: boolean, distance: Point, dropPoint: Point, event?: MouseEvent | TouchEvent): void;
    readonly dropped: Subject<{
        item: DragRef;
        currentIndex: number;
        previousIndex: number;
        container: DropListRef;
        previousContainer: DropListRef;
        isPointerOverContainer: boolean;
        distance: Point;
        dropPoint: Point;
        event: MouseEvent | TouchEvent;
    }>;
    element: HTMLElement | ElementRef<HTMLElement>;
    enter(item: DragRef, pointerX: number, pointerY: number, index?: number): void;
    readonly entered: Subject<{
        item: DragRef;
        container: DropListRef;
        currentIndex: number;
    }>;
    enterPredicate: (drag: DragRef, drop: DropListRef) => boolean;
    exit(item: DragRef): void;
    readonly exited: Subject<{
        item: DragRef;
        container: DropListRef;
    }>;
    getItemIndex(item: DragRef): number;
    getScrollableParents(): readonly HTMLElement[];
    _getSiblingContainerFromPosition(item: DragRef, x: number, y: number): DropListRef | undefined;
    isDragging(): boolean;
    _isOverContainer(x: number, y: number): boolean;
    isReceiving(): boolean;
    lockAxis: 'x' | 'y';
}
```

---

## Angular CDK Drag-Drop Core Imports

**Description:** Import statements for core Angular and RxJS dependencies used by the drag-drop module

```typescript
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from '@angular/core';
import { InjectionToken } from '@angular/core';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
```

---