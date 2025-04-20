# Angular Components Changelog

**Summary:** This file covers topics related to "Angular Components Changelog". Key snippets include: Adding Mixed Orientation Support for Drag and Drop in Angular CDK, Migrating from TreeControl to LevelAccessor/ChildrenAccessor, Version Header Format in Markdown.

---

## Adding Mixed Orientation Support for Drag and Drop in Angular CDK

**Description:** Adds support for mixed orientation in the drag-drop module of Angular CDK. This allows for more flexible drag and drop layouts combining both horizontal and vertical orientations.

```TypeScript
// Example usage (not provided in changelog)
<div cdkDropList cdkDropListOrientation="mixed">
  <!-- Draggable items -->
</div>
```

---

## Migrating from TreeControl to LevelAccessor/ChildrenAccessor

**Description:** Example showing how to migrate from the deprecated TreeControl to the new levelAccessor or childrenAccessor API for CdkTree.

```typescript
// DEPRECATED: Using TreeControl
@Component({
  template: `<cdk-tree [treeControl]="treeControl"></cdk-tree>`
})
export class OldTreeComponent {
  treeControl = new FlatTreeControl<Node>(
    node => node.level,
    node => node.expandable
  );
}

// NEW: Using childrenAccessor
@Component({
  template: `<cdk-tree [childrenAccessor]="getChildren" [isExpandable]="isNodeExpandable"></cdk-tree>`
})
export class NewTreeComponent {
  getChildren = (node: Node) => node.children;
  isNodeExpandable = (node: Node) => node.children && node.children.length > 0;
}
```

---

## Version Header Format in Markdown

**Description:** Format used to denote version releases with their codenames and dates.

```markdown
# 16.2.12 "practical-pinecone" (2023-11-08)
```

---