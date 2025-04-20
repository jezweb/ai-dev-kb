# Testing HTTP Requests in Angular Applications

**Summary:** This file covers topics related to "Testing HTTP Requests in Angular Applications". Key snippets include: Configuring TestBed for HTTP Testing in Angular, Testing Class-based HTTP Interceptor, Testing HTTP Error Responses, Testing HTTP GET Request with Mock Response, Advanced HTTP Request Matching....

---

## Configuring TestBed for HTTP Testing in Angular

**Description:** Basic setup for HTTP testing in Angular using TestBed with provideHttpClient and provideHttpClientTesting providers.

```typescript
TestBed.configureTestingModule({
  providers: [
    // ... other test providers
    provideHttpClient(),
    provideHttpClientTesting(),
  ],
});

const httpTesting = TestBed.inject(HttpTestingController);
```

---

## Testing Class-based HTTP Interceptor

**Description:** Configuration and testing setup for class-based HTTP interceptor using HTTP_INTERCEPTORS token.

```typescript
TestBed.configureTestingModule({
  providers: [
    AuthService,
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClientTesting(), 
    // We rely on the HTTP_INTERCEPTORS token to register the AuthInterceptor as an HttpInterceptor
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
});
```

---

## Testing HTTP Error Responses

**Description:** Examples of testing both backend errors and network errors in HTTP requests.

```typescript
const req = httpTesting.expectOne('/api/config');
req.flush('Failed!', {status: 500, statusText: 'Internal Server Error'});

// Assert that the application successfully handled the backend error.

const req = httpTesting.expectOne('/api/config');
req.error(new ProgressEvent('network error!'));

// Assert that the application successfully handled the network error.
```

---

## Testing HTTP GET Request with Mock Response

**Description:** Example of testing a GET request to fetch configuration, including request assertion and response mocking.

```typescript
TestBed.configureTestingModule({
  providers: [
    ConfigService,
    provideHttpClient(),
    provideHttpClientTesting(),
  ],
});

const httpTesting = TestBed.inject(HttpTestingController);

// Load `ConfigService` and request the current configuration.
const service = TestBed.inject(ConfigService);
const config$ = this.configService.getConfig<Config>();

// `firstValueFrom` subscribes to the `Observable`, which makes the HTTP request,
// and creates a `Promise` of the response.
const configPromise = firstValueFrom(config$);

// At this point, the request is pending, and we can assert it was made
// via the `HttpTestingController`:
const req = httpTesting.expectOne('/api/config', 'Request to load the configuration');

// We can assert various properties of the request if desired.
expect(req.request.method).toBe('GET');

// Flushing the request causes it to complete, delivering the result.
req.flush(DEFAULT_CONFIG);

// We can then assert that the response was successfully delivered by the `ConfigService`:
expect(await configPromise).toEqual(DEFAULT_CONFIG);

// Finally, we can assert that no other requests were made.
httpTesting.verify();
```

---

## Advanced HTTP Request Matching

**Description:** Examples of using predicate functions for custom request matching logic.

```typescript
// Look for one request that has a request body.
const requestsWithBody = httpTesting.expectOne(req => req.body !== null);

// Assert that no mutation requests have been issued.
httpTesting.expectNone(req => req.method !== 'GET');
```

---

## Testing Function-based HTTP Interceptor

**Description:** Configuration and testing setup for function-based HTTP interceptor.

```typescript
TestBed.configureTestingModule({
  providers: [
    AuthService,
    // Testing one interceptor at a time is recommended.
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClientTesting(),
  ],
});

const service = TestBed.inject(AuthService);
const req = httpTesting.expectOne('/api/config');

expect(req.request.headers.get('X-Authentication-Token')).toEqual(service.getAuthToken());
```

---

## Using Extended HTTP Request Matching

**Description:** Example of using expanded form of expectOne to match both method and URL of the request.

```typescript
const req = httpTesting.expectOne({
  method: 'GET',
  url: '/api/config',
}, 'Request to load the configuration');
```

---