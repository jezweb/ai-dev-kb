# Styling Angular Components

**Summary:** This file covers topics related to "Styling Angular Components". Key snippets include: Defining Inline Styles in Angular Component, Setting View Encapsulation Mode in Angular Component.

---

## Defining Inline Styles in Angular Component

**Description:** Demonstrates how to include CSS styles directly within the @Component decorator using the 'styles' property. This example applies a border-radius to an img element.

```angular-ts
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
  styles: ` img { border-radius: 50%; } `,
})
export class ProfilePhoto { }
```

---

## Setting View Encapsulation Mode in Angular Component

**Description:** Demonstrates how to set a specific view encapsulation mode for an Angular component using the 'encapsulation' property in the @Component decorator. This example sets it to ViewEncapsulation.None.

```angular-ts
@Component({
  ...,
  encapsulation: ViewEncapsulation.None,
})
export class ProfilePhoto { }
```

---