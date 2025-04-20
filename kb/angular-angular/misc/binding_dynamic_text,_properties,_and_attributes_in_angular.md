# Binding Dynamic Text, Properties, and Attributes in Angular

**Summary:** This file covers topics related to "Binding Dynamic Text, Properties, and Attributes in Angular". Key snippets include: Rendering Dynamic Text with Text Interpolation in Angular, Binding to Native Element Properties in Angular, Binding CSS Classes in Angular Templates, Binding to HTML Attributes in Angular, Binding to Component and Directive Properties in Angular....

---

## Rendering Dynamic Text with Text Interpolation in Angular

**Description:** This snippet demonstrates how to use text interpolation with double curly braces to render dynamic text in an Angular component template. It shows how the bound value updates automatically when changed.

```angular-ts
@Component({
  template: `
    <p>Your color preference is {{ theme }}.</p>
  `,
  ...
})
export class AppComponent {
  theme = 'dark';
}
```

```angular-html
<!-- Rendered Output -->
<p>Your color preference is dark.</p>
```

```angular-html
<!-- Rendered Output -->
<p>Your color preference is light.</p>
```

---

## Binding to Native Element Properties in Angular

**Description:** This example shows how to bind a component property to a native element property using square bracket syntax. It demonstrates binding the 'disabled' property of a button element.

```angular-html
<!-- Bind the `disabled` property on the button element's DOM object -->
<button [disabled]="isFormValid">Save</button>
```

---

## Binding CSS Classes in Angular Templates

**Description:** This complex example demonstrates various ways to bind CSS classes in Angular templates, including conditional class binding, binding to the 'class' property with different value types, and combining static and dynamic classes.

```angular-html
<!-- When `isExpanded` is truthy, add the `expanded` CSS class. -->
<ul [class.expanded]="isExpanded">
```

```angular-ts
@Component({
  template: `
    <ul [class]="listClasses"> ... </ul>
    <section [class]="sectionClasses"> ... </section>
    <button [class]="buttonClasses"> ... </button>
  `,
  ...
})
export class UserProfile {
  listClasses = 'full-width outlined';
  sectionClasses = ['expandable', 'elevated'];
  buttonClasses = {
    highlighted: true,
    embiggened: false,
  };
}
```

```angular-html
<ul class="full-width outlined"> ... </ul>
<section class="expandable elevated"> ... </section>
<button class="highlighted"> ... </button>
```

```angular-ts
@Component({
  template: `<ul class="list" [class]="listType" [class.expanded]="isExpanded"> ...`,
  ...
})
export class Listbox {
  listType = 'box';
  isExpanded = true;
}
```

```angular-html
<ul class="list box expanded">
```

---

## Binding to HTML Attributes in Angular

**Description:** This example demonstrates how to bind values to HTML attributes that don't have corresponding DOM properties, such as ARIA attributes, using the 'attr.' prefix in Angular templates.

```angular-html
<!-- Bind the `role` attribute on the `<ul>` element to the component's `listRole` property. -->
<ul [attr.role]="listRole">
```

---

## Binding to Component and Directive Properties in Angular

**Description:** These snippets illustrate how to bind values to properties of custom components and directives using square bracket syntax in Angular templates.

```angular-html
<!-- Bind the `value` property on the `MyListbox` component instance. -->
<my-listbox [value]="mySelection" />
```

```angular-html
<!-- Bind to the `ngSrc` property of the `NgOptimizedImage` directive  -->
<img [ngSrc]="profilePhotoUrl" alt="The current user's profile photo">
```

---

## Using Text Interpolation in Properties and Attributes in Angular

**Description:** These snippets show how to use text interpolation syntax (double curly braces) for property and attribute binding in Angular templates, including binding to the 'alt' property and 'aria-label' attribute.

```angular-html
<!-- Binds a value to the `alt` property of the image element's DOM object. -->
<img src="profile-photo.jpg" alt="Profile photo of {{ firstName }}" >
```

```angular-html
<button attr.aria-label="Save changes to {{ objectType }}">
```

---