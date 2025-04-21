# Programmatically Rendering Components in Angular

**Summary:** This file covers topics related to "Programmatically Rendering Components in Angular". Key snippets include: Lazy-Loading Components with Dynamic Import in Angular, Dynamic Component Creation with ViewContainerRef in Angular.

---

## Lazy-Loading Components with Dynamic Import in Angular

**Description:** Demonstrates how to lazy-load a component using JavaScript's dynamic import. The AdminSettings component loads the AdvancedSettings component only when the user clicks a button, improving initial load performance.

```angular-ts
@Component({
  ...,
  template: `
    <section>
      <h2>Basic settings</h2>
      <basic-settings />
    </section>
    <section>
      <h2>Advanced settings</h2>
      <button (click)="loadAdvanced()" *ngIf="!advancedSettings">
        Load advanced settings
      </button>
      <ng-container *ngComponentOutlet="advancedSettings" />
    </section>
  `
})
export class AdminSettings {
  advancedSettings: {new(): AdvancedSettings} | undefined;

  async loadAdvanced() {
    const { AdvancedSettings } = await import('path/to/advanced_settings.js');
    this.advancedSettings = AdvancedSettings;
  }
}
```

---

## Dynamic Component Creation with ViewContainerRef in Angular

**Description:** This example demonstrates how to dynamically create and render a component using ViewContainerRef. It shows three components working together: an outer container, an inner item with a button, and a leaf content component that gets dynamically inserted when the button is clicked.

```angular-ts
@Component({
  selector: 'leaf-content',
  template: `
    This is the leaf content
  `,
})
export class LeafContent {}

@Component({
  selector: 'outer-container',
  template: `
    <p>This is the start of the outer container</p>
    <inner-item />
    <p>This is the end of the outer container</p>
  `,
})
export class OuterContainer {}

@Component({
  selector: 'inner-item',
  template: `
    <button (click)="loadContent()">Load content</button>
  `,
})
export class InnerItem {
  private viewContainer = inject(ViewContainerRef);

  loadContent() {
    this.viewContainer.createComponent(LeafContent);
  }
}
```

---