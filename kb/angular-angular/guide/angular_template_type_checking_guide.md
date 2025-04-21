# Angular Template Type Checking Guide

**Summary:** This file covers topics related to "Angular Template Type Checking Guide". Key snippets include: Defining User Interface for Template Type Checking in TypeScript.

---

## Defining User Interface for Template Type Checking in TypeScript

**Description:** TypeScript interface definition for a User object with name and nested address properties. This interface is used in the examples to demonstrate how Angular's template type checking handles nested properties in different modes.

```typescript
interface User {
  name: string;
  address: {
    city: string;
    state: string;
  }
}
```

---