# RxJS Interop with Angular Component and Directive Outputs

**Summary:** This file covers topics related to "RxJS Interop with Angular Component and Directive Outputs". Key snippets include: Creating RxJS Observable from Angular Output using outputToObservable.

---

## Creating RxJS Observable from Angular Output using outputToObservable

**Description:** Shows how to use outputToObservable to create an RxJS observable from a component output. This allows for further manipulation of the output using RxJS operators.

```typescript
import {outputToObservable} from '@angular/core/rxjs-interop';

@Component(/*...*/)
class CustomSlider {
  valueChange = output<number>();
}

// Instance reference to `CustomSlider`.
const slider: CustomSlider = createSlider();

outputToObservable(slider.valueChange) // Observable<number>
  .pipe(...)
  .subscribe(...);
```

---