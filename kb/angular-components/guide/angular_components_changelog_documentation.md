# Angular Components Changelog Documentation

**Summary:** This file covers topics related to "Angular Components Changelog Documentation". Key snippets include: Enhancing Autocomplete Panel Width in Angular Material, Importing from Angular CDK After Breaking Changes, Reworking Popover Edit Host Listeners for Ivy in Angular Material, Listing Bug Fixes in Angular Material 6.4.1, Configuring SystemJS for Angular Material UMD Bundles....

---

## Enhancing Autocomplete Panel Width in Angular Material

**Description:** Adds support for the autocomplete panel to have a width value of auto. This feature allows for more flexible sizing of the autocomplete dropdown.

```TypeScript
**autocomplete:** allow panel to have a width value of auto ([#11879](https://github.com/angular/material2/issues/11879)) ([8a5713e](https://github.com/angular/material2/commit/8a5713e))
```

---

## Importing from Angular CDK After Breaking Changes

**Description:** Shows the new required format for importing from Angular CDK using scoped sub-packages instead of the previous global imports. This was a breaking change in version 2.0.0-beta.10.

```typescript
// Old imports
import {LiveAnnouncer, Overlay, Directionality} from '@angular/cdk';

// New imports
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Directionality} from '@angular/cdk/bidi';
import {Overlay} from '@angular/cdk/overlay';
```

---

## Reworking Popover Edit Host Listeners for Ivy in Angular Material

**Description:** Updates host listeners in the experimental popover-edit component to account for changes in Ivy.

```typescript
rework host listeners to account for changes in Ivy ([#16060]) ([558295b])
```

---

## Listing Bug Fixes in Angular Material 6.4.1

**Description:** Enumerates various bug fixes implemented in version 6.4.1 of Angular Material, covering multiple components and features.

```Markdown
### Bug Fixes

* **autofill:** avoid firing unnecessary event on initial render of input ([#12116](https://github.com/angular/material2/issues/12116)) ([1fb1fab](https://github.com/angular/material2/commit/1fb1fab))
* **badge:** hide badges with no content ([#12239](https://github.com/angular/material2/issues/12239)) ([1e847f1](https://github.com/angular/material2/commit/1e847f1))
* **chips:** losing focus if active chip is deleted ([#11910](https://github.com/angular/material2/issues/11910)) ([646e378](https://github.com/angular/material2/commit/646e378))
* **drag-drop:** disable text selection on draggable element ([#12204](https://github.com/angular/material2/issues/12204)) ([7a04609](https://github.com/angular/material2/commit/7a04609))
* **drag-drop:** make `CDK_DROP_CONTAINER` public ([#12214](https://github.com/angular/material2/issues/12214)) ([b9cece4](https://github.com/angular/material2/commit/b9cece4))
* **drag-drop:** unable to drag last item back into initial container ([#12261](https://github.com/angular/material2/issues/12261)) ([3e0e3c5](https://github.com/angular/material2/commit/3e0e3c5))
* **menu:** collapse empty menu panel ([#12211](https://github.com/angular/material2/issues/12211)) ([aed3993](https://github.com/angular/material2/commit/aed3993))
* **menu:** focus indication not visible in high contrast mode ([#12201](https://github.com/angular/material2/issues/12201)) ([6fb6216](https://github.com/angular/material2/commit/6fb6216))
* **menu:** showing scrollbars on first open in Edge if item width is set ([#12141](https://github.com/angular/material2/issues/12141)) ([ff53295](https://github.com/angular/material2/commit/ff53295))
* **moment-date-adapter:** not returning utc date when parsing ([#12029](https://github.com/angular/material2/issues/12029)) ([0304ac1](https://github.com/angular/material2/commit/0304ac1))
* **overlay:** avoid same overlay being added to the keyboard event stack multiple times ([#12222](https://github.com/angular/material2/issues/12222)) ([e587f4b](https://github.com/angular/material2/commit/e587f4b))
* **ripple:** don't hide directive host in high contrast ([#12168](https://github.com/angular/material2/issues/12168)) ([efedc9b](https://github.com/angular/material2/commit/efedc9b))
* **schematics:** fix object iteration error in dashboard ([#12216](https://github.com/angular/material2/issues/12216)) ([f2acb51](https://github.com/angular/material2/commit/f2acb51))
* **slide-toggle:** invert the thumb and slide gesture in rtl ([#12284](https://github.com/angular/material2/issues/12284)) ([fe193f5](https://github.com/angular/material2/commit/fe193f5))
* **tab-group:** focus change event not firing for keyboard navigation ([#12192](https://github.com/angular/material2/issues/12192)) ([48ece27](https://github.com/angular/material2/commit/48ece27))
* **table:** unable to sort large numbers in strings ([#12052](https://github.com/angular/material2/issues/12052)) ([dd31521](https://github.com/angular/material2/commit/dd31521))
* **tabs:** content animation in RTL not working (chrome) ([#12215](https://github.com/angular/material2/issues/12215)) ([f700897](https://github.com/angular/material2/commit/f700897))
* **tabs:** enable keyboard wrapping and mark disabled tabs ([#12218](https://github.com/angular/material2/issues/12218)) ([0e03aae](https://github.com/angular/material2/commit/0e03aae))
* **tabs:** reposition tab body on direction change ([#12229](https://github.com/angular/material2/issues/12229)) ([4ac1be3](https://github.com/angular/material2/commit/4ac1be3))
* **tabs:** ripple overflow in internet explorer ([#12036](https://github.com/angular/material2/issues/12036)) ([09f439a](https://github.com/angular/material2/commit/09f439a))
* **tabs:** selectedIndex being overwritten if tabs are being added / removed ([#12245](https://github.com/angular/material2/issues/12245)) ([641ec85](https://github.com/angular/material2/commit/641ec85))
* **tooltip:** interfering with native drag&drop ([#12200](https://github.com/angular/material2/issues/12200)) ([8a4f2c3](https://github.com/angular/material2/commit/8a4f2c3))
```

---

## Configuring SystemJS for Angular Material UMD Bundles

**Description:** Example configuration for SystemJS to use Angular Material's UMD bundles after the packaging change from @angular2-material to @angular/material.

```typescript
'@angular2-material/core': {
    format: 'cjs',
    main: 'core.umd.js'
  }
```

---

## Testing Angular Material Components With Harnesses

**Description:** Example of testing Angular Material components using the new component harnesses approach. Demonstrates a simpler, more maintainable way to test the same select component functionality.

```typescript
it('should switch to bug report template', async () => {
    expect(fixture.debugElement.query('bug-report-form')).toBeNull();
    const select = await loader.getHarness(MatSelect);
    await select.clickOptions({text: 'Bug'});
    expect(fixture.debugElement.query('bug-report-form')).not.toBeNull();
  });
```

---

## Reducing Sticky Column Style Updates in Angular Material Table

**Description:** Performance improvement to reduce calls to updateStickyColumnStyles in the Angular Material table component.

```TypeScript
**table:** Reduce calls to updateStickyColumnStyles ([#19739](https://github.com/angular/components/issues/19739)) ([f484e96](https://github.com/angular/components/commit/f484e96))
```

---

## Adding RequiredTrue Validator for Material Checkbox

**Description:** Implements a RequiredTrue validator for md-checkbox to ensure the checkbox is checked when required.

```TypeScript
Add RequiredTrue validator for md-checkbox ([#6006](https://github.com/angular/material2/issues/6006)) ([59319d0](https://github.com/angular/material2/commit/59319d0))
```

---

## Fixing Datepicker Calendar Popup Disabling

**Description:** Allows disabling the calendar popup in the datepicker component, providing more control over the datepicker behavior.

```TypeScript
allow disabling calendar popup ([#5305](https://github.com/angular/material2/issues/5305)) ([2294ea2](https://github.com/angular/material2/commit/2294ea2))
```

---

## Removing Internal Type Export from Overlay

**Description:** Stops exporting an internal type from the overlay module to maintain API cleanliness.

```TypeScript
([#4390](https://github.com/angular/material2/issues/4390)) ([136f7ff](https://github.com/angular/material2/commit/136f7ff))
```

---

## Making HammerJS Optional Dependency

**Description:** Modifies the framework to make HammerJS an optional dependency rather than required.

```typescript
make hammerjs optional
```

---

## Updating Datepicker ARIA Attribute in Angular Material

**Description:** Uses a narrower value for the aria-haspopup attribute on the datepicker.

```typescript
use narrower value for aria-haspopup ([#15666]) ([0c62798])
```

---

## Updating Dialog Classes via DialogRef in Angular Material

**Description:** Support for adding and removing CSS classes to a dialog via the dialogRef. Allows dynamic styling of dialogs.

```TypeScript
dialogRef.addPanelClass('custom-class');
dialogRef.removePanelClass('custom-class');
```

---

## Fixing Material Build for ES2015

**Description:** Fix for Angular Material not working with ES2015 builds. Addresses issues #12760 and #13695.

```TypeScript
material not working with ES2015 ([#13709](https://github.com/angular/material2/issues/13709)) ([e9103a6](https://github.com/angular/material2/commit/e9103a6))
```

---

## Version 6.4.3 Commit Hash

**Description:** Git commit hash reference for tracking changes in version 6.4.3

```text
58361f1
```

---

## Accessing Selection Model Properties in Angular

**Description:** Example showing how to check for multiple selection in SelectionModel

```TypeScript
isMultipleSelection()
```

---

## Allowing Pointer Events on Input Placeholder

**Description:** Modifies the input component to allow pointer events on the placeholder element.

```TypeScript
([#3878](https://github.com/angular/material2/issues/3878)) ([32b7426](https://github.com/angular/material2/commit/32b7426))
```

---