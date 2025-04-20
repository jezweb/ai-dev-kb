# Deferred Loading with @defer in Angular

**Summary:** This file covers topics related to "Deferred Loading with @defer in Angular". Key snippets include: Implementing Timer-based Defer Loading in Angular, Basic @defer Block Usage in Angular HTML, Implementing hover Trigger with @defer in Angular HTML, Testing Angular Defer Blocks, Implementing @loading and @placeholder with @defer in Angular HTML....

---

## Implementing Timer-based Defer Loading in Angular

**Description:** Shows how to use the timer trigger to load deferred content after a specified duration in milliseconds or seconds.

```angular-html
@defer (on timer(500ms)) {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```

---

## Basic @defer Block Usage in Angular HTML

**Description:** Demonstrates the basic syntax for wrapping a component in a @defer block to enable lazy loading.

```angular-html
@defer {
  <large-component />
}
```

---

## Implementing hover Trigger with @defer in Angular HTML

**Description:** Demonstrates how to use the hover trigger to load deferred content when the mouse hovers over a specified area.

```angular-html
@defer (on hover) {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```

---

## Testing Angular Defer Blocks

**Description:** Demonstrates how to test defer blocks using TestBed APIs and manually control different states during testing.

```angular-ts
it('should render a defer block in different states', async () => {
  // configures the defer block behavior to start in "paused" state for manual control.
  TestBed.configureTestingModule({deferBlockBehavior: DeferBlockBehavior.Manual});
  @Component({
    // ...
    template: `
      @defer {
        <large-component />
      } @placeholder {
        Placeholder
      } @loading {
        Loading...
      }
    `
  })
  class ComponentA {}
  // Create component fixture.
  const componentFixture = TestBed.createComponent(ComponentA);
  // Retrieve the list of all defer block fixtures and get the first block.
  const deferBlockFixture = (await componentFixture.getDeferBlocks())[0];
  // Renders placeholder state by default.
  expect(componentFixture.nativeElement.innerHTML).toContain('Placeholder');
  // Render loading state and verify rendered output.
  await deferBlockFixture.render(DeferBlockState.Loading);
  expect(componentFixture.nativeElement.innerHTML).toContain('Loading');
  // Render final state and verify the output.
  await deferBlockFixture.render(DeferBlockState.Complete);
  expect(componentFixture.nativeElement.innerHTML).toContain('large works!');
});
```

---

## Implementing @loading and @placeholder with @defer in Angular HTML

**Description:** Demonstrates how to use both @loading and @placeholder blocks with a @defer block, showing loading state while content is being fetched.

```angular-html
@defer {
  <large-component />
} @loading {
  <img alt="loading..." src="loading.gif" />
} @placeholder {
  <p>Placeholder content</p>
}
```

---

## Using @placeholder with @defer in Angular HTML

**Description:** Shows how to define placeholder content to display before the deferred content is loaded, with an optional minimum display time.

```angular-html
@defer {
  <large-component />
} @placeholder (minimum 500ms) {
  <p>Placeholder content</p>
}
```

---

## Using Default idle Trigger with @defer in Angular HTML

**Description:** Shows the default behavior of @defer which uses the idle trigger to load content when the browser is idle.

```angular-html
@defer {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```

---

## Using Template Reference with hover Trigger in Angular HTML

**Description:** Shows how to use a template reference variable with the hover trigger to specify which element to observe for hover events.

```angular-html
<div #greeting>Hello!</div>
@defer (on hover(greeting)) {
  <greetings-cmp />
}
```

---

## Implementing Immediate Defer Loading in Angular

**Description:** Demonstrates using the immediate trigger to load deferred content as soon as non-deferred content finishes rendering.

```angular-html
@defer (on immediate) {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```

---

## Implementing Prefetch in Angular Defer Blocks

**Description:** Shows how to implement prefetching in defer blocks, allowing resource loading before content display.

```angular-html
@defer (on interaction; prefetch on idle) {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```

---

## Implementing viewport Trigger with @defer in Angular HTML

**Description:** Demonstrates how to use the viewport trigger to load deferred content when it enters the viewport.

```angular-html
@defer (on viewport) {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```

---