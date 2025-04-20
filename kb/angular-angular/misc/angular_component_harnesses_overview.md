# Angular Component Harnesses Overview

**Summary:** This file covers topics related to "Angular Component Harnesses Overview". Key snippets include: Using a Component Harness in a Unit Test.

---

## Using a Component Harness in a Unit Test

**Description:** Example of a test that uses a harness for MyButtonComponent to verify the button's text. The test loads the harness using a loader and then calls the getText() method to check if the button displays the expected text.

```typescript
// Example of test with a harness for a component called MyButtonComponent
it('should load button with exact text', async () => {
  const button = await loader.getHarness(MyButtonComponentHarness);
  expect(await button.getText()).toBe('Confirm');
});
```

---