# Angular @defer Block Documentation

**Summary:** This file covers topics related to "Angular @defer Block Documentation". Key snippets include: Angular Prefetch Configuration for @defer Blocks.

---

## Angular Prefetch Configuration for @defer Blocks

**Description:** Example showing how to configure prefetching for deferred content in Angular templates. Prefetching initiates loading of the defer block but doesn't affect rendering, which is controlled by the standard triggers and conditions.

```angular-html
@defer (prefetch on <trigger>; prefetch when <condition>) {
  <!-- deferred template fragment -->
}
```

---