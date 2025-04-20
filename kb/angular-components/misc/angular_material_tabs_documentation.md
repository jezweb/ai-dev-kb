# Angular Material Tabs Documentation

**Summary:** This file covers topics related to "Angular Material Tabs Documentation". Key snippets include: Aligning Tab Labels in Angular Material Tab Groups, Using Custom Tab Labels with mat-tab-label Directive in Angular Material, Controlling Tab Animation Duration in Angular Material, Creating Tab-Based Navigation with mat-tab-nav-bar in Angular, Implementing Dynamic Height in Angular Material Tab Groups.

---

## Aligning Tab Labels in Angular Material Tab Groups

**Description:** This code demonstrates how to align tab labels within the tab header using the mat-align-tabs attribute. This allows for positioning tab labels at the start, center, or end of the container.

```html
<mat-tab-group mat-align-tabs="start">
  <mat-tab label="First">Content 1</mat-tab>
  <mat-tab label="Second">Content 2</mat-tab>
  <mat-tab label="Third">Content 3</mat-tab>
</mat-tab-group>
```

---

## Using Custom Tab Labels with mat-tab-label Directive in Angular Material

**Description:** This snippet demonstrates how to implement complex custom labels for tabs using the mat-tab-label directive inside mat-tab components. This approach allows for more advanced content in tab labels beyond simple text.

```html
<mat-tab>
  <ng-template mat-tab-label>
    The <em>best</em> pasta
  </ng-template>
  <h1>Best pasta restaurants</h1>
  <p>...</p>
</mat-tab>
```

---

## Controlling Tab Animation Duration in Angular Material

**Description:** This snippet shows how to customize the animation duration for tab transitions using the animationDuration input property. This allows for slower animations or disabling animations completely.

```html
<mat-tab-group animationDuration="2000ms">
  <mat-tab label="First">Content 1</mat-tab>
  <mat-tab label="Second">Content 2</mat-tab>
  <mat-tab label="Third">Content 3</mat-tab>
</mat-tab-group>
```

---

## Creating Tab-Based Navigation with mat-tab-nav-bar in Angular

**Description:** This example demonstrates how to use mat-tab-nav-bar for navigation between routes, paired with a mat-tab-nav-panel to display the corresponding content. This provides a tab-like UI for route navigation.

```html
<nav mat-tab-nav-bar [backgroundColor]="background" [tabPanel]="tabPanel">
  <a mat-tab-link
     *ngFor="let link of links"
     [routerLink]="link"
     routerLinkActive #rla="routerLinkActive"
     [active]="rla.isActive">
    {{link}}
  </a>
</nav>
<mat-tab-nav-panel #tabPanel>
  <router-outlet></router-outlet>
</mat-tab-nav-panel>
```

---

## Implementing Dynamic Height in Angular Material Tab Groups

**Description:** This code shows how to enable dynamic height behavior for mat-tab-group where the tab container will adjust its height based on the active tab's content. This is controlled by the dynamicHeight property.

```html
<mat-tab-group dynamicHeight>
  <mat-tab label="Short tab">
    <div class="example-small-box mat-elevation-z4">
      Small content
    </div>
  </mat-tab>
  <mat-tab label="Long tab">
    <div class="example-large-box mat-elevation-z4">
      Large content
    </div>
  </mat-tab>
</mat-tab-group>
```

---