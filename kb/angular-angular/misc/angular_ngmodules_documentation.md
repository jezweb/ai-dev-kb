# Angular NgModules Documentation

**Summary:** This file covers topics related to "Angular NgModules Documentation". Key snippets include: Importing Dependencies in NgModule, Exporting Components from NgModule, Specifying Providers in NgModules, Using forChild Pattern for Component-Level Providers, Using Arrays for NgModule Declarations....

---

## Importing Dependencies in NgModule

**Description:** Shows how to use the imports property to specify dependencies for components declared in the NgModule. This example imports PopupTrigger and SelectionIndicator components that are needed by CustomMenu and CustomMenuItem.

```typescript
@NgModule({
  /* ... */
  // CustomMenu and CustomMenuItem depend on the PopupTrigger and SelectorIndicator components.
  imports: [PopupTrigger, SelectionIndicator],
  declarations: [CustomMenu, CustomMenuItem],
})
export class CustomMenuModule { }
```

---

## Exporting Components from NgModule

**Description:** Demonstrates how to use the exports property to make components available to other components and NgModules. This allows components declared in one module to be used by other modules that import it.

```typescript
@NgModule({
  imports: [PopupTrigger, SelectionIndicator],
  declarations: [CustomMenu, CustomMenuItem],

  // Make CustomMenu and CustomMenuItem available to
  // components and NgModules that import CustomMenuModule.
  exports: [CustomMenu, CustomMenuItem],
})
export class CustomMenuModule { }
```

---

## Specifying Providers in NgModules

**Description:** Demonstrates how to define providers in NgModules that make services available for dependency injection. Shows how providers from one module are available to components declared in that module and to other modules that import it.

```typescript
@NgModule({
  imports: [PopupTrigger, SelectionIndicator],
  declarations: [CustomMenu, CustomMenuItem],

  // Provide the OverlayManager service
  providers: [OverlayManager],
  /* ... */
})
export class CustomMenuModule { }

@NgModule({
  imports: [CustomMenuModule],
  declarations: [UserProfile],
  providers: [UserDataClient],
})
export class UserProfileModule { }
```

---

## Using forChild Pattern for Component-Level Providers

**Description:** Demonstrates the forChild pattern used to add providers to components within an application hierarchy. This approach is used when providers should not be available application-wide but only to specific components.

```typescript
@Component({
  /* ... */
  providers: [
    CustomMenuModule.forChild(/* some config */),
  ],
})
export class UserProfile { /* ... */ }
```

---

## Using Arrays for NgModule Declarations

**Description:** Shows how to use arrays of components for the declarations property. This approach allows organizing related components into groups that can be referenced together in the NgModule metadata.

```typescript
const MENU_COMPONENTS = [CustomMenu, CustomMenuItem];
const WIDGETS = [MENU_COMPONENTS, CustomSlider];

@NgModule({
  /* ... */
  // This NgModule declares all of CustomMenu, CustomMenuItem,
  // CustomSlider, and CustomCheckbox.
  declarations: [WIDGETS, CustomCheckbox],
})
export class CustomMenuModule { }
```

---

## Defining a Basic NgModule in TypeScript

**Description:** Shows the basic structure for defining an NgModule with the @NgModule decorator. The decorator accepts metadata that tells Angular how to compile component templates and configure dependency injection.

```typescript
import {NgModule} from '@angular/core';

@NgModule({
  // Metadata goes here
})
export class CustomMenuModule { }
```

---