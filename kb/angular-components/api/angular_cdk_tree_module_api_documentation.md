# Angular CDK Tree Module API Documentation

**Summary:** This file covers topics related to "Angular CDK Tree Module API Documentation". Key snippets include: Implementing CdkTree component.

---

## Implementing CdkTree component

**Description:** The main component that renders a tree structure. It manages the tree data source, controls expansion state, and provides methods for node manipulation. It implements various lifecycle hooks for proper initialization and cleanup.

```typescript
// @public
export class CdkTree<T, K = T> implements AfterContentChecked, AfterContentInit, AfterViewInit, CollectionViewer, OnDestroy, OnInit {
    constructor(...args: unknown[]);
    childrenAccessor?: (dataNode: T) => T[] | Observable<T[]>;
    collapse(dataNode: T): void;
    collapseAll(): void;
    collapseDescendants(dataNode: T): void;
    get dataSource(): DataSource<T> | Observable<T[]> | T[];
    set dataSource(dataSource: DataSource<T> | Observable<T[]> | T[]);
    expand(dataNode: T): void;
    expandAll(): void;
    expandDescendants(dataNode: T): void;
    expansionKey?: (dataNode: T) => K;
    _getChildrenAccessor(): ((dataNode: T) => T[] | Observable<T[]> | null | undefined) | undefined;
    _getDirectChildren(dataNode: T): Observable<T[]>;
    // (undocumented)
    _getExpansionModel(): SelectionModel<K>;
    _getLevel(node: T): number | undefined;
    _getLevelAccessor(): ((dataNode: T) => number) | undefined;
    _getNodeChildren(node: CdkTreeNode<T, K>): Observable<CdkTreeNode<T, K>[]>;
    _getNodeDef(data: T, i: number): CdkTreeNodeDef<T>;
    _getNodeParent(node: CdkTreeNode<T, K>): CdkTreeNode<T, K> | null | undefined;
    _getPositionInSet(dataNode: T): number;
    _getSetSize(dataNode: T): number;
    insertNode(nodeData: T, index: number, viewContainer?: ViewContainerRef, parentData?: T): void;
    isExpanded(dataNode: T): boolean;
    _keyManager: TreeKeyManagerStrategy<CdkTreeNode<T, K>>;
    levelAccessor?: (dataNode: T) => number;
    // (undocumented)
    ngAfterContentChecked(): void;
    // (undocumented)
    ngAfterContentInit(): void;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    _nodeDefs: QueryList<CdkTreeNodeDef<T>>;
    // (undocumented)
    _nodeOutlet: CdkTreeNodeOutlet;
    _registerNode(node: CdkTreeNode<T, K>): void;
    renderNodeChanges(data: readonly T[], dataDiffer?: IterableDiffer<T>, viewContainer?: ViewContainerRef, parentData?: T): void;
    protected _sendKeydownToKeyManager(event: KeyboardEvent): void;
    _setNodeTypeIfUnset(newType: 'flat' | 'nested'): void;
    toggle(dataNode: T): void;
    toggleDescendants(dataNode: T): void;
    trackBy: TrackByFunction<T>;
    // @deprecated
    treeControl?: TreeControl<T, K>;
    _unregisterNode(node: CdkTreeNode<T, K>): void;
    readonly viewChange: BehaviorSubject<{
        start: number;
        end: number;
    }>;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkTree<any, any>, "cdk-tree", ["cdkTree"], { "dataSource": { "alias": "dataSource"; "required": false; }; "treeControl": { "alias": "treeControl"; "required": false; }; "levelAccessor": { "alias": "levelAccessor"; "required": false; }; "childrenAccessor": { "alias": "childrenAccessor"; "required": false; }; "trackBy": { "alias": "trackBy"; "required": false; }; "expansionKey": { "alias": "expansionKey"; "required": false; }; }, {}, ["_nodeDefs"], never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkTree<any, any>, never>;
}
```

---