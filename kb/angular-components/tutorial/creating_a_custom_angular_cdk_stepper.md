# Creating a Custom Angular CDK Stepper

**Summary:** This file covers topics related to "Creating a Custom Angular CDK Stepper". Key snippets include: Dynamic Step Creation in Custom Stepper, Implementing a Custom Stepper Component in Angular TypeScript, Implementing Linear Mode in Custom Stepper HTML.

---

## Dynamic Step Creation in Custom Stepper

**Description:** Example showing how to dynamically generate steps in the custom stepper using Angular's for loop. This approach allows for data-driven step creation with custom components inside each step.

```html
<app-custom-stepper>
  @for (step of mySteps; track step) {
    <cdk-step>
      <my-step-component [step]="$index"></my-step-component>
    </cdk-step>
  }
</app-custom-stepper>
```

---

## Implementing a Custom Stepper Component in Angular TypeScript

**Description:** Creates a custom stepper component by extending CdkStepper and providing itself as a dependency injection token. Includes a method to handle step selection by index.

```typescript
@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrl: './custom-stepper.component.css',
  // This custom stepper provides itself as CdkStepper so that it can be recognized
  // by other components.
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends CdkStepper {
  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
```

---

## Implementing Linear Mode in Custom Stepper HTML

**Description:** HTML template demonstrating linear mode implementation where users must complete the current step before proceeding. Uses the editable and completed properties to control navigation flow.

```html
<app-custom-stepper linear>
  <cdk-step editable="false" [completed]="completed">
    <input type="text" name="a" value="Cannot proceed to next step" />
    <button (click)="completeStep()">Complete step</button>
  </cdk-step>
  <cdk-step editable="false">
    <input type="text" name="b" value="b" />
  </cdk-step>
</app-custom-stepper>
```

---