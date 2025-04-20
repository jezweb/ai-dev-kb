# Hierarchical Injectors in Angular

**Summary:** This file covers topics related to "Hierarchical Injectors in Angular". Key snippets include: Displaying FlowerService Emoji in ChildComponent Template, Configuring a Custom Location Strategy Provider, Configuring Component-Level Service Providers in Angular, Bootstrapping an Angular Application, Providing a Service in a Component....

---

## Displaying FlowerService Emoji in ChildComponent Template

**Description:** This snippet shows how to bind and display the emoji from FlowerService in the ChildComponent template.

```html
<p>Emoji from FlowerService: {{flower.emoji}}</p>
```

---

## Configuring a Custom Location Strategy Provider

**Description:** Example of configuring an app-wide provider in the ApplicationConfig to override the default location strategy for the router with a HashLocationStrategy.

```typescript
providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]
```

---

## Configuring Component-Level Service Providers in Angular

**Description:** A code snippet showing how to configure component-level service providers in Angular using the providers property in the component decorator metadata.

```typescript
providers: [HeroTaxReturnService]
```

---

## Bootstrapping an Angular Application

**Description:** Shows how to bootstrap an Angular application using the bootstrapApplication method, which creates a child injector of the platform injector configured by an ApplicationConfig instance.

```javascript
bootstrapApplication(AppComponent, appConfig);
```

---

## Providing a Service in a Component

**Description:** Shows how to configure an ElementInjector by providing a service in the @Component decorator using its providers property, making the service available to that component instance and potentially to its children.

```typescript
@Component({
  …
  providers: [{ provide: ItemService, useValue: { name: 'lamp' } }]
})
export class TestComponent
```

---

## Using SkipSelf with Optional for Nullable Service Injection

**Description:** Shows how to combine 'skipSelf' and 'optional' modifiers when injecting a service. This prevents errors if the service is null in the parent injectors.

```typescript
class Person {
  parent = inject(Person, {optional: true, skipSelf: true})
}
```

---

## Service Isolation Example

**Description:** Demonstrates how to restrict service visibility by providing it at component level instead of root level.

```typescript
@Component({
  selector: 'app-villains-list',
  templateUrl: './villains-list.component.html',
  providers: [VillainsService]
})
export class VillainsListComponent {}
```

---