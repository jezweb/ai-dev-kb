# Using Component Harnesses in Angular Tests

**Summary:** This file covers topics related to "Using Component Harnesses in Angular Tests". Key snippets include: Manual Change Detection Control in Angular Tests, Using Harness Loader to Get Component Harnesses in Angular.

---

## Manual Change Detection Control in Angular Tests

**Description:** Demonstrates how to use manualChangeDetection to control change detection timing while testing async operations. Shows checking component state during an async button click operation.

```typescript
it('checks state while async action is in progress', async () => {
  const buttonHarness = loader.getHarness(MyButtonHarness);
  await manualChangeDetection(async () => {
    await buttonHarness.click();
    fixture.detectChanges();
    // Check expectations while async click operation is in progress.
    expect(isProgressSpinnerVisible()).toBe(true);
    await fixture.whenStable();
    // Check expectations after async click operation complete.
    expect(isProgressSpinnerVisible()).toBe(false);
  });
});
```

---

## Using Harness Loader to Get Component Harnesses in Angular

**Description:** Demonstrates how to use a harness loader to get single or multiple instances of component harnesses. It shows both getHarness() for a single instance and getAllHarnesses() for multiple instances.

```typescript
// Get harness for first instance of the element
const myComponentHarness = await loader.getHarness(MyComponent);

// Get harnesses for all instances of the element
const myComponentHarnesses = await loader.getHarnesses(MyComponent);
```

---