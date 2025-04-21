# HttpClient Security in Angular

**Summary:** This file covers topics related to "HttpClient Security in Angular". Key snippets include: Configuring Custom XSRF Cookie and Header Names in Angular HttpClient, Disabling XSRF Protection in Angular HttpClient.

---

## Configuring Custom XSRF Cookie and Header Names in Angular HttpClient

**Description:** This snippet demonstrates how to customize the XSRF protection in Angular's HttpClient by specifying custom names for the XSRF token cookie and header through the withXsrfConfiguration feature in the application config.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'CUSTOM_XSRF_TOKEN',
        headerName: 'X-Custom-Xsrf-Header',
      }),
    ),
  ]
};
```

---

## Disabling XSRF Protection in Angular HttpClient

**Description:** This snippet shows how to completely disable the built-in XSRF protection mechanism in Angular's HttpClient using the withNoXsrfProtection feature when it doesn't suit the application's needs.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withNoXsrfProtection(),
    ),
  ]
};
```

---