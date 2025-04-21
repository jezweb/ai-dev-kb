# Angular KeyCodes Reference

**Summary:** This file covers topics related to "Angular KeyCodes Reference". Key snippets include: Using KeyCode Constants in Angular Directive.

---

## Using KeyCode Constants in Angular Directive

**Description:** Example of implementing a directive that counts arrow key presses using Angular CDK's keycode constants. Demonstrates importing and using predefined key constants (UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW) for keyboard event handling.

```typescript
import {Directive} from '@angular/core';
import {UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW} from '@angular/cdk/keycodes';

@Directive({
  selector: '[count-arrows]'
  host: {
    (keypress): 'handleKeyPress($event)'
  }
})
export class ArrowCounterDirective {
  arrowPressCount = 0;

  handleKeyPress(event: KeyboardEvent) {
    if ([UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW].includes(event.keyCode)) {
      this.arrowPresscount++;
    }
  }
}
```

---