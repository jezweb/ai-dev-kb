# Angular v20.0.0-next.5 Release Notes

**Summary:** This file covers topics related to "Angular v20.0.0-next.5 Release Notes". Key snippets include: Adding Transient Info to RouterLink Input in Angular, ChangeDetectorRef Deprecation Notice - Angular Core.

---

## Adding Transient Info to RouterLink Input in Angular

**Description:** This commit adds support for passing transient information to the RouterLink directive, allowing additional data to be associated with a navigation link.

```TypeScript
// Example usage:
<a [routerLink]="['/path']" [info]="{ transient: true }">Link</a>
```

---

## ChangeDetectorRef Deprecation Notice - Angular Core

**Description:** Documentation of the deprecation of ChangeDetectorRef.checkNoChanges method, recommending the use of ComponentFixture for test code instead.

```typescript
ChangeDetectorRef.checkNoChanges
```

---