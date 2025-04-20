# Angular CDK Drag and Drop Module Documentation

**Summary:** This file covers topics related to "Angular CDK Drag and Drop Module Documentation". Key snippets include: Animation Styles for Angular CDK Drag and Drop, Attaching Data to Drag and Drop Components in Angular CDK, Using cdkDropListGroup to Connect Multiple Drop Lists in Angular, Connecting Drop Lists Using Direct References and IDs in Angular CDK.

---

## Animation Styles for Angular CDK Drag and Drop

**Description:** CSS animations for drag-and-drop interactions. Includes transitions for elements being sorted within a list and for elements being animated to their final position after being dropped.

```css
/* Animate items as they're being sorted. */
.cdk-drop-list-dragging .cdk-drag {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

/* Animate an item that has been dropped. */
.cdk-drag-animating {
  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
}
```

---

## Attaching Data to Drag and Drop Components in Angular CDK

**Description:** Example showing how to associate arbitrary data with cdkDrag and cdkDropList using the cdkDragData and cdkDropListData properties. This data is included in events fired from these directives.

```html
@for (list of lists; track list) {
  <div cdkDropList [cdkDropListData]="list" (cdkDropListDropped)="drop($event)">
    @for (item of list; track item) {
      <div cdkDrag [cdkDragData]="item"></div>
    }
  </div>
}
```

---

## Using cdkDropListGroup to Connect Multiple Drop Lists in Angular

**Description:** A technique to automatically connect an unknown number of drop lists using the cdkDropListGroup directive. Any cdkDropList added under this group will be automatically connected to all other lists in the group.

```html
<div cdkDropListGroup>
  <!-- All lists in here will be connected. -->
  @for (list of lists; track list) {
    <div cdkDropList></div>
  }
</div>
```

---

## Connecting Drop Lists Using Direct References and IDs in Angular CDK

**Description:** Two ways to connect drop lists: using direct references with template variables or using string IDs. Both approaches create a bidirectional connection allowing items to be transferred between the lists.

```html
<!-- This is valid -->
<div cdkDropList #listOne="cdkDropList" [cdkDropListConnectedTo]="[listTwo]"></div>
<div cdkDropList #listTwo="cdkDropList" [cdkDropListConnectedTo]="[listOne]"></div>

<!-- This is valid as well -->
<div cdkDropList id="list-one" [cdkDropListConnectedTo]="['list-two']"></div>
<div cdkDropList id="list-two" [cdkDropListConnectedTo]="['list-one']"></div>
```

---