# Angular Components Overview

**Summary:** This file covers topics related to "Angular Components Overview". Key snippets include: Defining a Basic Angular Component with Inline Template, Defining an Angular Component with Inline Styles.

---

## Defining a Basic Angular Component with Inline Template

**Description:** This snippet demonstrates how to define a simple Angular component called UserProfile using the @Component decorator with an inline template.

```typescript
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
})
export class UserProfile { /* Your component code goes here */ }
```

---

## Defining an Angular Component with Inline Styles

**Description:** This snippet shows how to add inline styles to an Angular component using the styles property in the @Component decorator.

```typescript
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; } `,
})
export class UserProfile { /* Your component code goes here */ }
```

---