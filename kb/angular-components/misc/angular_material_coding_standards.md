# Angular Material Coding Standards

**Summary:** This file covers topics related to "Angular Material Coding Standards". Key snippets include: Implementing Fluent APIs in TypeScript, API Design: Avoiding Boolean Arguments in TypeScript.

---

## Implementing Fluent APIs in TypeScript

**Description:** Shows how to create a fluent or builder-pattern style API by returning 'this' from methods. This enables method chaining for a more expressive and readable API.

```typescript
class ConfigBuilder {
  withName(name: string): this {
    this.config.name = name;
    return this;
  }
}
```

---

## API Design: Avoiding Boolean Arguments in TypeScript

**Description:** Demonstrates how to refactor methods with boolean flags into separate, more focused methods. This approach produces clearer code and makes the API more intuitive to use.

```typescript
// AVOID
function getTargetElement(createIfNotFound = false) {
  // ...
}
```

```typescript
// PREFER
function getExistingTargetElement() {
  // ...
}

function createTargetElement() {
 // ...
}
```

---