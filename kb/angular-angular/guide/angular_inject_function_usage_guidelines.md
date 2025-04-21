# Angular Inject Function Usage Guidelines

**Summary:** This file covers topics related to "Angular Inject Function Usage Guidelines". Key snippets include: Proper Usage of inject() in Angular Components, Incorrect Usage of inject() in Angular Lifecycle Hooks.

---

## Proper Usage of inject() in Angular Components

**Description:** Shows valid places to call inject() within a class, including field initializers and constructor bodies. These are allowed because they execute during component creation when the injection context is available.

```typescript
@Injectable({providedIn: 'root'})
export class Car {
  radio: Radio|undefined;

  // OK: field initializer
  spareTyre = inject(Tyre);
  
  constructor() {
    // OK: constructor body
    this.radio = inject(Radio);
  }
}
```

---

## Incorrect Usage of inject() in Angular Lifecycle Hooks

**Description:** Shows an example of an invalid inject() call within a component's lifecycle hook. This fails because lifecycle hooks execute after component instantiation when the injection context is no longer available.

```typescript
@Component({ ... })
export class CarComponent {
  ngOnInit() {
    // ERROR: too late, the component instance was already created
    const engine = inject(Engine);
    engine.start();
  }
}
```

---