# Angular CDK Dialog Service Documentation

**Summary:** This file covers topics related to "Angular CDK Dialog Service Documentation". Key snippets include: Passing Data to a Dialog Component, Creating a Dialog Component with DialogRef Injection, Accessing Dialog Data in a Component.

---

## Passing Data to a Dialog Component

**Description:** Demonstrates how to pass data to a dialog component using the data option when opening the dialog.

```ts
const dialogRef = dialog.open(YourDialog, {
  data: {name: 'frodo'},
});
```

---

## Creating a Dialog Component with DialogRef Injection

**Description:** Shows how to create a dialog component that injects DialogRef to close itself with a result value.

```ts
@Component({/* ... */})
export class YourDialog {
  constructor(public dialogRef: DialogRef<string>) {}

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
```

---

## Accessing Dialog Data in a Component

**Description:** Shows how to access data passed to a dialog component using the DIALOG_DATA injection token.

```ts
import {Component, Inject} from '@angular/core';
import {DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'your-dialog',
  template: 'passed in {{ data.name }}',
})
export class YourDialog {
  constructor(@Inject(DIALOG_DATA) public data: {name: string}) { }
}
```

---