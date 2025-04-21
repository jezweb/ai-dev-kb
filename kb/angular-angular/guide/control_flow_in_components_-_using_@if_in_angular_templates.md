# Control Flow in Components - Using @if in Angular Templates

**Summary:** This file covers topics related to "Control Flow in Components - Using @if in Angular Templates". Key snippets include: Basic @if Conditional Template Example in Angular.

---

## Basic @if Conditional Template Example in Angular

**Description:** A simple example demonstrating how to use the @if template syntax in an Angular component to conditionally display content based on a boolean property.

```typescript
@Component({
  ...
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    }
  `,
})
class AppComponent {
  isLoggedIn = true;
}
```

---