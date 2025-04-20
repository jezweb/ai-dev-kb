# Angular HTTP API Documentation

**Summary:** This file covers topics related to "Angular HTTP API Documentation". Key snippets include: Implementing HttpResponse Class in TypeScript.

---

## Implementing HttpResponse Class in TypeScript

**Description:** This class extends HttpResponseBase and represents an HTTP response. It includes methods for cloning the response and properties for the response body and type.

```TypeScript
export class HttpResponse<T> extends HttpResponseBase {
    constructor(init?: {
        body?: T | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
    readonly body: T | null;
    // (undocumented)
    clone(): HttpResponse<T>;
    // (undocumented)
    clone(update: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<T>;
    // (undocumented)
    clone<V>(update: {
        body?: V | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<V>;
    // (undocumented)
    readonly type: HttpEventType.Response;
}
```

---