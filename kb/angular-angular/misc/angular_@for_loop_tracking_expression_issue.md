# Angular @for Loop Tracking Expression Issue

**Summary:** This file covers topics related to "Angular @for Loop Tracking Expression Issue". Key snippets include: Corrected @for Loop with Unique Keys in Angular.

---

## Corrected @for Loop with Unique Keys in Angular

**Description:** Fixed version using item.key as the tracking expression to ensure unique identification of items in the collection. Uses the unique key property instead of the potentially duplicate value property.

```typescript
@Component({
    template: `@for (item of items; track item.key) {{{item.value}}}`,
})
class TestComponent {
    items = [{key: 1, value: 'a'}, {key: 2, value: 'b'}, {key: 3, value: 'a'}];
}
```

---