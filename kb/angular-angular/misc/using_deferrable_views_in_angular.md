# Using Deferrable Views in Angular

**Summary:** This file covers topics related to "Using Deferrable Views in Angular". Key snippets include: Implementing Defer Block in Angular Template.

---

## Implementing Defer Block in Angular Template

**Description:** Shows how to wrap an article-comments component with @defer block to enable lazy loading. The defer block will load the component when the browser becomes idle.

```angular-html
@defer {
  <article-comments />
}
```

---