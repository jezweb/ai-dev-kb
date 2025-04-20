# CDK Tree Component Documentation

**Summary:** This file covers topics related to "CDK Tree Component Documentation". Key snippets include: Implementing a Nested Tree Structure with CDK Tree in HTML, Implementing a Nested Tree Node with Node Outlet in HTML, Implementing Node Activation Events for Accessibility in HTML.

---

## Implementing a Nested Tree Structure with CDK Tree in HTML

**Description:** This snippet shows how to create a nested tree structure where child nodes are placed inside their parent nodes in the DOM hierarchy using cdk-nested-tree-node components.

```html
<cdk-tree>
  <cdk-nested-tree-node>
    parent node
    <cdk-nested-tree-node> -- child node1 </cdk-nested-tree-node>
    <cdk-nested-tree-node> -- child node2 </cdk-nested-tree-node>
  </cdk-nested-tree-node>
</cdk-tree>
```

---

## Implementing a Nested Tree Node with Node Outlet in HTML

**Description:** This code shows how to implement a nested tree node template with the cdkTreeNodeOutlet directive, which marks where children of the node will be rendered in the DOM.

```html
<cdk-nested-tree-node *cdkNodeDef="let node">
  {{node.value}}
  <ng-container cdkTreeNodeOutlet></ng-container>
</cdk-nested-tree-node>
```

---

## Implementing Node Activation Events for Accessibility in HTML

**Description:** This snippet demonstrates how to handle both click and keyboard activation events on tree nodes for accessibility, allowing users to interact with nodes using either mouse or keyboard.

```html
<cdk-tree-node
    *cdkNodeDef="let node"
    (click)="performAction(node)"
    (activation)="performAction($event)">
</cdk-tree-node>
```

---