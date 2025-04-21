# Using @loading, @error, and @placeholder Blocks in Angular Deferrable Views

**Summary:** This file covers topics related to "Using @loading, @error, and @placeholder Blocks in Angular Deferrable Views". Key snippets include: Adding @placeholder Block in Angular Deferrable View.

---

## Adding @placeholder Block in Angular Deferrable View

**Description:** This snippet demonstrates how to add a @placeholder block to a @defer block in an Angular component template. The placeholder content is shown before the deferred content loads.

```angular-html
@defer {
  <article-comments />
} @placeholder {
  <p>Placeholder for comments</p>
}
```

---