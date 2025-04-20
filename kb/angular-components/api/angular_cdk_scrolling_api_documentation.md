# Angular CDK Scrolling API Documentation

**Summary:** This file covers topics related to "Angular CDK Scrolling API Documentation". Key snippets include: Defining the CdkVirtualForOf Directive, Defining the CdkScrollable Class.

---

## Defining the CdkVirtualForOf Directive

**Description:** Implements the core directive for virtual scrolling in Angular CDK. It handles rendering of items in a virtual scroll viewport and provides context with indexes and position indicators for each item.

```typescript
// @public
export class CdkVirtualForOf<T> implements CdkVirtualScrollRepeater<T>, CollectionViewer, DoCheck, OnDestroy {
    constructor(...args: unknown[]);
    get cdkVirtualForOf(): DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined;
    set cdkVirtualForOf(value: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined);
    // (undocumented)
    _cdkVirtualForOf: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined;
    set cdkVirtualForTemplate(value: TemplateRef<CdkVirtualForOfContext<T>>);
    get cdkVirtualForTemplateCacheSize(): number;
    set cdkVirtualForTemplateCacheSize(size: NumberInput);
    get cdkVirtualForTrackBy(): TrackByFunction<T> | undefined;
    set cdkVirtualForTrackBy(fn: TrackByFunction<T> | undefined);
    readonly dataStream: Observable<readonly T[]>;
    measureRangeSize(range: ListRange, orientation: 'horizontal' | 'vertical'): number;
    // (undocumented)
    ngDoCheck(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    static ngTemplateContextGuard<T>(directive: CdkVirtualForOf<T>, context: unknown): context is CdkVirtualForOfContext<T>;
    readonly viewChange: Subject<ListRange>;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkVirtualForOf<any>, "[cdkVirtualFor][cdkVirtualForOf]", never, { "cdkVirtualForOf": { "alias": "cdkVirtualForOf"; "required": false; }; "cdkVirtualForTrackBy": { "alias": "cdkVirtualForTrackBy"; "required": false; }; "cdkVirtualForTemplate": { "alias": "cdkVirtualForTemplate"; "required": false; }; "cdkVirtualForTemplateCacheSize": { "alias": "cdkVirtualForTemplateCacheSize"; "required": false; }; }, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualForOf<any>, never>;
}
```

---

## Defining the CdkScrollable Class

**Description:** Implements the base scrollable functionality for Angular CDK's scrolling module. Provides methods for measuring scroll offsets, handling element scrolling events, and programmatic scrolling.

```typescript
// @public
export class CdkScrollable implements OnInit, OnDestroy {
    constructor(...args: unknown[]);
    // (undocumented)
    protected readonly _destroyed: Subject<void>;
    // (undocumented)
    protected dir?: Directionality | null | undefined;
    // (undocumented)
    protected elementRef: ElementRef<HTMLElement>;
    elementScrolled(): Observable<Event>;
    getElementRef(): ElementRef<HTMLElement>;
    measureScrollOffset(from: 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end'): number;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    protected ngZone: NgZone;
    // (undocumented)
    protected scrollDispatcher: ScrollDispatcher;
    // (undocumented)
    protected _scrollElement: EventTarget;
    scrollTo(options: ExtendedScrollToOptions): void;
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkScrollable, "[cdk-scrollable], [cdkScrollable]", never, {}, {}, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkScrollable, never>;
}
```

---