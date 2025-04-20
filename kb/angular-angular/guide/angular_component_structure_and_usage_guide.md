# Angular Component Structure and Usage Guide

**Summary:** This file covers topics related to "Angular Component Structure and Usage Guide". Key snippets include: Basic Angular Component Structure, Component Composition Example, Component Import and Usage, Component Selector Definition, Angular Component with Styles.

---

## Basic Angular Component Structure

**Description:** Demonstrates the basic structure of an Angular component with a selector and inline template.

```angular-ts
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
})
export class ProfilePhoto { }
```

---

## Component Composition Example

**Description:** Demonstrates how to compose components together by using their selectors in templates.

```angular-ts
@Component({
  selector: 'profile-photo',
})
export class ProfilePhoto { }

@Component({
  imports: [ProfilePhoto],
  template: `<profile-photo />`
})
export class UserProfile { }
```

---

## Component Import and Usage

**Description:** Shows how to import and use a component within another component using the imports array.

```angular-ts
import {ProfilePhoto} from './profile-photo';

@Component({
  // Import the `ProfilePhoto` component in
  // order to use it in this component's template.
  imports: [ProfilePhoto],
  /* ... */
})
export class UserProfile { }
```

---

## Component Selector Definition

**Description:** Shows how to define a CSS selector for an Angular component.

```angular-ts
@Component({
  selector: 'profile-photo',
  ...
})
export class ProfilePhoto { }
```

---

## Angular Component with Styles

**Description:** Shows how to add inline CSS styles to an Angular component that are scoped to the component.

```angular-ts
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
  styles: `img { border-radius: 50%; }`,
})
export class ProfilePhoto { }
```

---