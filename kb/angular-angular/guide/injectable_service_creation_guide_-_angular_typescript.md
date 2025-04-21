# Injectable Service Creation Guide - Angular TypeScript

**Summary:** This file covers topics related to "Injectable Service Creation Guide - Angular TypeScript". Key snippets include: Creating Injectable User Service - Angular TypeScript.

---

## Creating Injectable User Service - Angular TypeScript

**Description:** Example of creating an injectable service using the @Injectable decorator with root-level provider configuration. The service demonstrates the basic structure for making a class available for dependency injection throughout the Angular application.

```typescript
@Injectable({
    providedIn: 'root'
})
class UserService {
    // methods to retrieve and return data
}
```

---