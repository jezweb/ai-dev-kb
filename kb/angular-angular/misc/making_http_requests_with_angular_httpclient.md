# Making HTTP Requests with Angular HttpClient

**Summary:** This file covers topics related to "Making HTTP Requests with Angular HttpClient". Key snippets include: Fetching JSON Data with HttpClient GET Method in TypeScript, Creating a Reusable User Service with HttpClient in Angular, Mutating Server State with HttpClient POST Method in TypeScript, Fetching Binary Data with HttpClient GET Method in TypeScript, Setting URL Parameters with HttpParams in HttpClient GET Request....

---

## Fetching JSON Data with HttpClient GET Method in TypeScript

**Description:** Demonstrates how to make a GET request to fetch JSON configuration data from an API endpoint. The example shows how to specify a generic type for type-safe responses and subscribe to the returned Observable.

```typescript
http.get<Config>('/api/config').subscribe(config => {
  // process the configuration.
});
```

---

## Creating a Reusable User Service with HttpClient in Angular

**Description:** Implementation of an injectable UserService that encapsulates HTTP requests to fetch user data. The service injects HttpClient and provides a method to retrieve user information by ID, returning an Observable of User type.

```typescript
@Injectable({providedIn: 'root'})
export class UserService {
  private http = inject(HttpClient);

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`/api/user/${id}`);
  }
}
```

---

## Mutating Server State with HttpClient POST Method in TypeScript

**Description:** Demonstrates making a POST request to update server configuration. The example shows how to send a request body and handle the response, which includes the updated configuration data.

```typescript
http.post<Config>('/api/config', newConfig).subscribe(config => {
  console.log('Updated config:', config);
});
```

---

## Fetching Binary Data with HttpClient GET Method in TypeScript

**Description:** Shows how to download binary data (an image) as an ArrayBuffer using HttpClient. This example demonstrates the use of the responseType option to specify the expected response format.

```typescript
http.get('/images/dog.jpg', {responseType: 'arraybuffer'}).subscribe(buffer => {
  console.log('The image is ' + buffer.byteLength + ' bytes large');
});
```

---

## Setting URL Parameters with HttpParams in HttpClient GET Request

**Description:** Demonstrates how to use HttpParams for more control over URL parameter construction. This example shows how to create and modify immutable HttpParams instances for configuring request parameters.

```typescript
const baseParams = new HttpParams().set('filter', 'all');

http.get('/api/config', {
  params: baseParams.set('details', 'enabled'),
}).subscribe(config => {
  // ...
});
```

---

## Consuming HTTP Service with AsyncPipe in Angular Component

**Description:** Example of a component that consumes the UserService to fetch user data. It demonstrates using AsyncPipe with conditional template rendering to handle the Observable response, showing user information only after data is loaded.

```typescript
import { AsyncPipe } from '@angular/common';
@Component({
  imports: [AsyncPipe],
  template: `
    @if (user$ | async; as user) {
      <p>Name: {{ user.name }}</p>
      <p>Biography: {{ user.biography }}</p>
    }
  `,
})
export class UserProfileComponent {
  @Input() userId!: string;
  user$!: Observable<User>;

  private userService = inject(UserService);

  constructor(): void {
    this.user$ = this.userService.getUser(this.userId);
  }
}
```

---

## Setting URL Parameters with Object Literal in HttpClient GET Request

**Description:** Shows how to add URL parameters to an HTTP request using a simple object literal. This approach provides a straightforward way to include query parameters in the request URL.

```typescript
http.get('/api/config', {
  params: {filter: 'all'},
}).subscribe(config => {
  // ...
});
```

---

## Accessing Full Response with observe Option in HttpClient

**Description:** Shows how to access the complete HTTP response, including status code and headers, instead of just the response body. This is done by setting the observe option to 'response'.

```typescript
http.get<Config>('/api/config', {observe: 'response'}).subscribe(res => {
  console.log('Response status:', res.status);
  console.log('Body:', res.body);
});
```

---

## Setting Request Headers with Object Literal in HttpClient

**Description:** Shows how to add HTTP headers to a request using a simple object literal. This provides a straightforward way to include custom headers like debugging information in the request.

```typescript
http.get('/api/config', {
  headers: {
    'X-Debug-Level': 'verbose',
  }
}).subscribe(config => {
  // ...
});
```

---