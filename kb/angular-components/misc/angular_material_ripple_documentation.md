# Angular Material Ripple Documentation

**Summary:** This file covers topics related to "Angular Material Ripple Documentation". Key snippets include: Programmatic Ripple Control in TypeScript with Angular Material, Disabling Ripple Animation in Global Configuration, Configuring Global Ripple Options in Angular Module, Updating Ripple Configuration at Runtime in a Component, Registering a Ripple Configuration Service in an Angular Module....

---

## Programmatic Ripple Control in TypeScript with Angular Material

**Description:** Demonstrates how to manually trigger ripples by accessing the MatRipple instance using ViewChild. The example shows launching centered and persistent ripples programmatically.

```typescript
class MyComponent {

  /** Reference to the directive instance of the ripple. */
  @ViewChild(MatRipple) ripple: MatRipple;

  /** Shows a centered and persistent ripple. */
  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }
}
```

---

## Disabling Ripple Animation in Global Configuration

**Description:** Shows how to disable ripple animations by setting both enterDuration and exitDuration to 0 in the global ripple configuration. Useful for performance optimization when maintaining focus indicators.

```typescript
const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};
```

---

## Configuring Global Ripple Options in Angular Module

**Description:** Demonstrates how to set global configuration options for all ripples in an application using the MAT_RIPPLE_GLOBAL_OPTIONS provider. This example disables ripples and customizes animation duration.

```typescript
const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ]
})
```

---

## Updating Ripple Configuration at Runtime in a Component

**Description:** Shows how to inject and utilize the ripple configuration service to dynamically update global ripple settings from within a component. This example demonstrates disabling ripples at runtime.

```typescript
@Component(...)
export class MyComponent {
  constructor(private _appRippleOptions: AppGlobalRippleOptions) {}

  disableRipples() {
    this._appRippleOptions.disabled = true;
  }
}
```

---

## Registering a Ripple Configuration Service in an Angular Module

**Description:** Demonstrates how to provide the ripple configuration service to the MAT_RIPPLE_GLOBAL_OPTIONS token in an Angular module. This makes the service available for dependency injection.

```typescript
@NgModule({
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: AppGlobalRippleOptions},
  ]
})
export class MyModule {...}
```

---

## Creating a Service for Runtime Ripple Configuration

**Description:** Shows how to create an injectable service that implements RippleGlobalOptions interface. This approach allows updating ripple configuration at runtime throughout the application.

```typescript
@Injectable({providedIn: 'root'})
export class AppGlobalRippleOptions implements RippleGlobalOptions {
  /** Whether ripples should be disabled globally. */
  disabled: boolean = false;
}
```

---