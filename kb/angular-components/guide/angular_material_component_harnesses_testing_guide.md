# Angular Material Component Harnesses Testing Guide

**Summary:** This file covers topics related to "Angular Material Component Harnesses Testing Guide". Key snippets include: Interacting with Components using MatButtonHarness Methods, Testing Angular Material Component With Harnesses, Loading MatButtonHarnesses with getAllHarnesses and getHarness Methods.

---

## Interacting with Components using MatButtonHarness Methods

**Description:** This code demonstrates how to use a component harness (MatButtonHarness) to interact with and inspect a button component. It shows checking the button's disabled state, clicking it, and verifying component state changes without manually triggering change detection.

```typescript
it('should mark confirmed when ok button clicked', async () => {
  const okButton = await loader.getHarness(MatButtonHarness.with({selector: '.confirm'});
  expect(fixture.componentInstance.confirmed).toBe(false);
  expect(await okButton.isDisabled()).toBe(false);
  await okButton.click();
  expect(fixture.componentInstance.confirmed).toBe(true);
});
```

---

## Testing Angular Material Component With Harnesses

**Description:** This snippet demonstrates testing the same issue-report-selector component using Angular Material component harnesses. The test uses MatSelectHarness to interact with the select component, making the code more readable and less dependent on implementation details.

```typescript
describe('issue-report-selector', () => {
  let fixture: ComponentFixture<IssueReportSelector>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueReportSelectorModule],
      declarations: [IssueReportSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(IssueReportSelector);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should switch to bug report template', async () => {
    expect(fixture.debugElement.query('bug-report-form')).toBeNull();
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const bugOption = await select.getOption({text: 'Bug'});
    await bugOption.click();
    expect(fixture.debugElement.query('bug-report-form')).not.toBeNull();
  });
});
```

---

## Loading MatButtonHarnesses with getAllHarnesses and getHarness Methods

**Description:** This snippet shows how to use the HarnessLoader to get one or all instances of MatButtonHarness from a component. It demonstrates the difference between getHarness() which returns the first matching harness and getAllHarnesses() which returns an array of all matching harnesses.

```typescript
import {MatButtonHarness} from '@angular/material/button/testing';

...

it('should work', async () => {
  const buttons = await loader.getAllHarnesses(MatButtonHarness); // length: 3
  const firstButton = await loader.getHarness(MatButtonHarness); // === buttons[0]
});
```

---