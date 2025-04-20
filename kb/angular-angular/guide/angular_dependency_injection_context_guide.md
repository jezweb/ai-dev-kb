# Angular Dependency Injection Context Guide

**Summary:** This file covers topics related to "Angular Dependency Injection Context Guide". Key snippets include: Running Code in Injection Context using runInInjectionContext in Angular Service, Using inject in Angular Router Guard Function.

---

## Running Code in Injection Context using runInInjectionContext in Angular Service

**Description:** This snippet illustrates how to use runInInjectionContext to execute code within an injection context when not already in one. It shows injecting the EnvironmentInjector and using it to create an injection context.

```typescript
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private environmentInjector = inject(EnvironmentInjector);

  someMethod() {
    runInInjectionContext(this.environmentInjector, () => {
      inject(SomeService); // Do what you need with the injected service
    });
  }
}
```

---

## Using inject in Angular Router Guard Function

**Description:** This example shows how to use the inject function within a CanActivateFn router guard. It demonstrates that router guards run in an injection context, allowing direct use of inject to access services.

```typescript
const canActivateTeam: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(PermissionsService).canActivate(inject(UserToken), route.params.id);
    };
```

---