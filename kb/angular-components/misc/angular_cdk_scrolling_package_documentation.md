# Angular CDK Scrolling Package Documentation

**Summary:** This file covers topics related to "Angular CDK Scrolling Package Documentation". Key snippets include: Virtual Scrolling with Custom Data Source, Horizontal Virtual Scrolling Implementation, Virtual Scrolling with Context Variables.

---

## Virtual Scrolling with Custom Data Source

**Description:** Demonstrates implementing a custom DataSource for virtual scrolling that provides data through the connect() and disconnect() methods.

```html
<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of myDataSource">
    {{item}}
  </div>
</cdk-virtual-scroll-viewport>
```

---

## Horizontal Virtual Scrolling Implementation

**Description:** Shows how to configure virtual scrolling for horizontal orientation with appropriate CSS styling for the content wrapper.

```html
<cdk-virtual-scroll-viewport orientation="horizontal" itemSize="50">
  <div *cdkVirtualFor="let item of items">{{item}}</div>
</cdk-virtual-scroll-viewport>
```

---

## Virtual Scrolling with Context Variables

**Description:** Demonstrates usage of context variables available in cdkVirtualFor templates including index, count, first, last, even, and odd.

```html
<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items; let index = index; let first = first">
    Item #{{index}} - {{first ? 'First' : ''}}
  </div>
</cdk-virtual-scroll-viewport>
```

---