# Configuring HttpClient in Angular

**Summary:** This file covers topics related to "Configuring HttpClient in Angular". Key snippets include: Configuring HttpClient with provideHttpClient in Angular, Injecting HttpClient in Angular Services, Configuring HttpClient with Fetch API in Angular.

---

## Configuring HttpClient with provideHttpClient in Angular

**Description:** This snippet demonstrates how to set up HttpClient using the provideHttpClient helper function in the application configuration. It's typically included in the app.config.ts file.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};
```

---

## Injecting HttpClient in Angular Services

**Description:** This code demonstrates how to inject the HttpClient service as a dependency in an Angular service using dependency injection.

```typescript
@Injectable({providedIn: 'root'})
export class ConfigService {
  private http = inject(HttpClient);
  // This service can now make HTTP requests via `this.http`.
}
```

---

## Configuring HttpClient with Fetch API in Angular

**Description:** This snippet shows how to configure HttpClient to use the Fetch API instead of XMLHttpRequest by including the withFetch() feature in the provideHttpClient configuration.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
    ),
  ]
};
```

---