# Angular Material Tabs API Documentation

**Summary:** This file covers topics related to "Angular Material Tabs API Documentation". Key snippets include: Implementing MatTabGroup Class, Defining MatPaginatedTabHeader Abstract Class, Defining MatTabNavPanel Class in TypeScript for Angular Material.

---

## Implementing MatTabGroup Class

**Description:** This class represents the main tab group component in Material Tabs.

```typescript
export class MatTabGroup implements AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy {
    constructor(...args: unknown[]);
    alignTabs: string | null;
    _allTabs: QueryList<MatTab>;
    readonly animationDone: EventEmitter<void>;
    get animationDuration(): string;
    set animationDuration(value: string | number);
    _animationsDisabled: boolean;
    ariaLabel: string;
    ariaLabelledby: string;
    get backgroundColor(): ThemePalette;
    set backgroundColor(value: ThemePalette);
    protected _bodyCentered(isCenter: boolean): void;
    color: ThemePalette;
    get contentTabIndex(): number | null;
    set contentTabIndex(value: number);
    disablePagination: boolean;
    disableRipple: boolean;
    dynamicHeight: boolean;
}
```

---

## Defining MatPaginatedTabHeader Abstract Class

**Description:** This abstract class provides the base implementation for paginated tab headers in Material Tabs.

```typescript
export abstract class MatPaginatedTabHeader implements AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy {
    constructor(...args: unknown[]);
    _alignInkBarToSelectedTab(): void;
    _animationsDisabled: boolean;
    protected _changeDetectorRef: ChangeDetectorRef;
    _checkPaginationEnabled(): void;
    _checkScrollingControls(): void;
    protected readonly _destroyed: Subject<void>;
    disablePagination: boolean;
    _disableScrollAfter: boolean;
    _disableScrollBefore: boolean;
    protected _elementRef: ElementRef<HTMLElement>;
    get focusIndex(): number;
    set focusIndex(value: number);
    _getLayoutDirection(): Direction;
    _getMaxScrollDistance(): number;
    _handleKeydown(event: KeyboardEvent): void;
    _handlePaginatorClick(direction: ScrollDirection): void;
    _handlePaginatorPress(direction: ScrollDirection, mouseEvent?: MouseEvent): void;
    readonly indexFocused: EventEmitter<number>;
    abstract _inkBar: {
        hide: () => void;
        alignToElement: (element: HTMLElement) => void;
    };
    _isValidIndex(index: number): boolean;
    abstract _items: QueryList<MatPaginatedTabHeaderItem>;
    protected abstract _itemSelected(event: KeyboardEvent): void;
    abstract _nextPaginator: ElementRef<HTMLElement>;
    static ngAcceptInputType_disablePagination: unknown;
    static ngAcceptInputType_selectedIndex: unknown;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _onContentChanges(): void;
    abstract _previousPaginator: ElementRef<HTMLElement>;
    get scrollDistance(): number;
    set scrollDistance(value: number);
    _scrollHeader(direction: ScrollDirection): {
        maxScrollDistance: number;
        distance: number;
    };
    _scrollToLabel(labelIndex: number): void;
    get selectedIndex(): number;
    set selectedIndex(v: number);
    readonly selectFocusedIndex: EventEmitter<number>;
    _setTabFocus(tabIndex: number): void;
    _showPaginationControls: boolean;
    _stopInterval(): void;
    abstract _tabList: ElementRef<HTMLElement>;
    abstract _tabListContainer: ElementRef<HTMLElement>;
    abstract _tabListInner: ElementRef<HTMLElement>;
    updatePagination(): void;
    _updateTabScrollPosition(): void;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatPaginatedTabHeader, never, never, { "disablePagination": { "alias": "disablePagination"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; }, { "selectFocusedIndex": "selectFocusedIndex"; "indexFocused": "indexFocused"; }, never, never, true, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatPaginatedTabHeader, never>;
}
```

---

## Defining MatTabNavPanel Class in TypeScript for Angular Material

**Description:** This snippet defines the MatTabNavPanel class, which represents a panel for tab navigation in Angular Material. It includes properties for active tab ID and panel ID, along with Angular-specific metadata for component declaration and factory.

```TypeScript
export class MatTabNavPanel {
    _activeTabId?: string;
    id: string;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<MatTabNavPanel, "mat-tab-nav-panel", ["matTabNavPanel"], { "id": { "alias": "id"; "required": false; }; }, {}, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTabNavPanel, never>;
}
```

---