# Angular Security Documentation

**Summary:** This file covers topics related to "Angular Security Documentation". Key snippets include: Minimal Content Security Policy for Angular Applications, Implementing Trust Functions in Angular Component, Creating Trusted Resource URLs for iframes in Angular, HTML Template Binding Example, Configuring CSP Nonce in Angular Application....

---

## Minimal Content Security Policy for Angular Applications

**Description:** Example of a minimal Content Security Policy header required for a new Angular application. This policy allows resources from the same origin and uses nonces for inline styles and scripts.

```text
default-src 'self'; style-src 'self' 'nonce-randomNonceGoesHere'; script-src 'self' 'nonce-randomNonceGoesHere';
```

---

## Implementing Trust Functions in Angular Component

**Description:** TypeScript code demonstrating how to inject DomSanitizer and use bypassSecurityTrustUrl to mark a URL as safe. This allows Angular to bind potentially dangerous URLs without automatic sanitization.

```typescript
constructor(private sanitizer: DomSanitizer) {
  this.dangerousUrl = 'javascript:alert("Hi there")';
  this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
}
```

---

## Creating Trusted Resource URLs for iframes in Angular

**Description:** Component method that creates a trusted resource URL for YouTube videos. It uses bypassSecurityTrustResourceUrl to allow binding to an iframe src attribute, which requires a trusted resource URL.

```typescript
updateVideoUrl(id: string) {
  this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
  this.videoUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
}
```

---

## HTML Template Binding Example

**Description:** Demonstrates safe HTML content binding in Angular templates using both interpolation and innerHTML binding.

```html
src/app/inner-html-binding.component.html
```

---

## Configuring CSP Nonce in Angular Application

**Description:** TypeScript code showing how to provide a Content Security Policy nonce to Angular using the CSP_NONCE injection token. This approach is useful when the nonce is available at runtime.

```typescript
import {bootstrapApplication, CSP_NONCE} from '@angular/core';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [{
    provide: CSP_NONCE,
    useValue: globalThis.myRandomNonceValue
  }]
});
```

---

## Disabling XSRF Protection in Angular HttpClient

**Description:** This code snippet shows how to disable the built-in XSRF protection mechanism in Angular's HttpClient using the withNoXsrfProtection function in the application configuration.

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

## Using bypassSecurityTrustUrl in Angular HTML Template

**Description:** Example of an Angular template that needs to bind a potentially unsafe URL. This shows how a JavaScript alert URL would be used in a template that will later be marked as trusted.

```html
<a [href]="dangerousUrl">Click me</a>
<div [innerHTML]="dangerousHtml"></div>
```

---