# Inject-based Dependency Injection in Angular

**Summary:** This file covers topics related to "Inject-based Dependency Injection in Angular". Key snippets include: Injecting a Service in Angular Component.

---

## Injecting a Service in Angular Component

**Description:** This snippet demonstrates how to inject a service into an Angular component using the inject() function. It initializes a class property with the injected service.

```typescript
@Component({...})
class PetCareDashboardComponent {
    petRosterService = inject(PetRosterService);
}
```

---