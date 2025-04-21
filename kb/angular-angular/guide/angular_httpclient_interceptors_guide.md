# Angular HttpClient Interceptors Guide

**Summary:** This file covers topics related to "Angular HttpClient Interceptors Guide". Key snippets include: Configuring DI-based Interceptors for Angular HttpClient, Using Dependency Injection in Angular HttpClient Interceptors, Intercepting Response Events in Angular HttpClient, Using HttpContext in Angular HttpClient Interceptors, Modifying Requests in Angular HttpClient Interceptors.

---

## Configuring DI-based Interceptors for Angular HttpClient

**Description:** This code demonstrates how to configure HttpClient to use DI-based interceptors by enabling them explicitly and providing them through the DI system.

```typescript
bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(
    // DI-based interceptors must be explicitly enabled.
    withInterceptorsFromDi(),
  ),

  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
]});
```

---

## Using Dependency Injection in Angular HttpClient Interceptors

**Description:** This example demonstrates how to use dependency injection in an interceptor to retrieve an authentication token from a service and add it to the request headers.

```typescript
export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(AuthService).getAuthToken();

  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('X-Authentication-Token', authToken),
  });
  return next(newReq);
}
```

---

## Intercepting Response Events in Angular HttpClient

**Description:** This interceptor demonstrates how to access and log response events, specifically logging the status of responses for each request URL.

```typescript
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
}
```

---

## Using HttpContext in Angular HttpClient Interceptors

**Description:** This interceptor demonstrates how to read a context token from the request and apply conditional logic based on its value.

```typescript
export function cachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.context.get(CACHING_ENABLED)) {
    // apply caching logic
    return ...;
  } else {
    // caching has been disabled for this request
    return next(req);
  }
}
```

---

## Modifying Requests in Angular HttpClient Interceptors

**Description:** This snippet shows how to clone and modify an HttpRequest to add a new header, demonstrating the immutable nature of HttpRequest objects.

```typescript
const reqWithHeader = req.clone({
  headers: req.headers.set('X-New-Header', 'new header value'),
});
```

---