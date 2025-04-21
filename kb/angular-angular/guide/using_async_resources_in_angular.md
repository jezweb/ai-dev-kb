# Using Async Resources in Angular

**Summary:** This file covers topics related to "Using Async Resources in Angular". Key snippets include: Creating Basic Resource in Angular TypeScript, Implementing Resource with Request Abortion in Angular, Resource Reload Implementation in Angular.

---

## Creating Basic Resource in Angular TypeScript

**Description:** Demonstrates how to create a basic resource to fetch user data asynchronously using Angular's resource API. Shows the basic structure with request and loader functions.

```typescript
import {resource, Signal} from '@angular/core';

const userId: Signal<string> = getUserId();

const userResource = resource({
  // Define a reactive request computation.
  // The request value recomputes whenever any read signals change.
  request: () => ({id: userId()}),

  // Define an async loader that retrieves data.
  // The resource calls this function every time the `request` value changes.
  loader: ({request}) => fetchUser(request),
});

// Create a computed signal based on the result of the resource's loader function.
const firstName = computed(() => userResource.value().firstName);
```

---

## Implementing Resource with Request Abortion in Angular

**Description:** Shows how to implement request abortion in a resource using AbortSignal, particularly useful when working with the fetch API to cancel outstanding HTTP requests.

```typescript
const userId: Signal<string> = getUserId();

const userResource = resource({
  request: () => ({id: userId()}),
  loader: ({request, abortSignal}): Promise<User> => {
    // fetch cancels any outstanding HTTP requests when the given `AbortSignal`
    // indicates that the request has been aborted.
    return fetch(`users/${request.id}`, {signal: abortSignal});
  },
});
```

---

## Resource Reload Implementation in Angular

**Description:** Demonstrates how to programmatically trigger a resource's loader using the reload method.

```typescript
const userId: Signal<string> = getUserId();

const userResource = resource({
  request: () => ({id: userId()}),
  loader: ({request}) => fetchUser(request),
});

// ...

userResource.reload();
```

---