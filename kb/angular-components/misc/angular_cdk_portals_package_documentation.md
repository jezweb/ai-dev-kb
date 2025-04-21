# Angular CDK Portals Package Documentation

**Summary:** This file covers topics related to "Angular CDK Portals Package Documentation". Key snippets include: Creating a TemplatePortal with HTML and TypeScript in Angular, Using CdkPortal with HTML Templates in Angular.

---

## Creating a TemplatePortal with HTML and TypeScript in Angular

**Description:** Demonstrates the two parts needed to create a TemplatePortal: the HTML template declaration and the TypeScript implementation that references the template using ViewChild.

```html
<ng-template #templatePortalContent>Some content here</ng-template>
```

```typescript
@ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;

ngAfterViewInit() {
  this.templatePortal = new TemplatePortal(
    this.templatePortalContent,
    this._viewContainerRef
  );
}
```

---

## Using CdkPortal with HTML Templates in Angular

**Description:** Demonstrates how to use CdkPortal directive to capture content from an ng-template or with a structural directive shorthand. This allows template content to be moved to another location in the DOM.

```html
<ng-template cdkPortal>
  <p>The content of this template is captured by the portal.</p>
</ng-template>

<!-- OR -->

<!-- This result here is identical to the syntax above -->
<p *cdkPortal>
  The content of this template is captured by the portal.
</p>
```

---