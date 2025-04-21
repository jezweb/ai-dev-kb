# Content Projection in Angular using ng-content

**Summary:** This file covers topics related to "Content Projection in Angular using ng-content". Key snippets include: Content Projection Usage Example, Fallback Content Implementation, Multiple Content Placeholders with Selectors.

---

## Content Projection Usage Example

**Description:** Demonstration of how content projection works with a complete example including component source, usage, and rendered DOM output.

```angular-ts
@Component({
  selector: 'custom-card',
  template: `
    <div class="card-shadow">
      <ng-content />
    </div>
  `,
})
export class CustomCard {/* ... */}
```

```angular-html
<custom-card>
  <p>This is the projected content</p>
</custom-card>
```

```angular-html
<custom-card>
  <div class="card-shadow">
    <p>This is the projected content</p>
  </div>
</custom-card>
```

---

## Fallback Content Implementation

**Description:** Example showing how to implement fallback content for ng-content when no matching content is provided.

```angular-html
<div class="card-shadow">
  <ng-content select="card-title">Default Title</ng-content>
  <div class="card-divider"></div>
  <ng-content select="card-body">Default Body</ng-content>
</div>
```

```angular-html
<custom-card>
  <card-title>Hello</card-title>
  <!-- No card-body provided -->
</custom-card>
```

```angular-html
<custom-card>
  <div class="card-shadow">
    Hello
    <div class="card-divider"></div>
    Default Body
  </div>
</custom-card>
```

---

## Multiple Content Placeholders with Selectors

**Description:** Example showing how to use multiple ng-content elements with CSS selectors to project different content into specific locations.

```angular-html
<div class="card-shadow">
  <ng-content select="card-title"></ng-content>
  <div class="card-divider"></div>
  <ng-content select="card-body"></ng-content>
</div>
```

```angular-html
<custom-card>
  <card-title>Hello</card-title>
  <card-body>Welcome to the example</card-body>
</custom-card>
```

```angular-html
<custom-card>
  <div class="card-shadow">
    <card-title>Hello</card-title>
    <div class="card-divider"></div>
    <card-body>Welcome to the example</card-body>
  </div>
</custom-card>
```

---