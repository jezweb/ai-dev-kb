# Angular Typed Forms Documentation

**Summary:** This file covers topics related to "Angular Typed Forms Documentation". Key snippets include: Creating a Basic Form Group in TypeScript with Angular Forms, Using NonNullableFormBuilder for Non-Nullable Controls, Creating a FormGroup with Non-Nullable Controls, FormGroup with Optional Controls using Interfaces, Creating a FormRecord with FormBuilder....

---

## Creating a Basic Form Group in TypeScript with Angular Forms

**Description:** Demonstrates how to create a basic user login form using FormGroup and FormControl classes in Angular reactive forms.

```typescript
const login = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
```

---

## Using NonNullableFormBuilder for Non-Nullable Controls

**Description:** Demonstrates using the NonNullableFormBuilder to create forms where all controls are non-nullable, reducing boilerplate code.

```typescript
const fb = new FormBuilder();
const login = fb.nonNullable.group({
  email: '',
  password: '',
});
```

---

## Creating a FormGroup with Non-Nullable Controls

**Description:** Demonstrates creating a login form with non-nullable FormControls, where the controls will reset to their initial values instead of null.

```typescript
const login = new FormGroup({
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
});
```

---

## FormGroup with Optional Controls using Interfaces

**Description:** Shows how to define a FormGroup with optional controls that can be added or removed at runtime using TypeScript interfaces.

```typescript
interface LoginForm {
  email: FormControl<string>;
  password?: FormControl<string>;
}

const login = new FormGroup<LoginForm>({
  email: new FormControl('', {nonNullable: true}),
  password: new FormControl('', {nonNullable: true}),
});

login.removeControl('password');
```

---

## Creating a FormRecord with FormBuilder

**Description:** Shows how to create a FormRecord using the FormBuilder helper class for more concise syntax.

```typescript
const addresses = fb.record({'Andrew': '2340 Folsom St'});
```

---

## Creating a Simple Form Control with Type Inference

**Description:** Shows how to create a simple FormControl with automatic type inference based on the initial value.

```typescript
const email = new FormControl('angularrox@gmail.com');
```

---

## Creating Non-Nullable FormControl with nonNullable Option

**Description:** Demonstrates how to create a FormControl that doesn't reset to null by using the nonNullable option, which changes runtime behavior.

```typescript
const email = new FormControl('angularrox@gmail.com', {nonNullable: true});
email.reset();
console.log(email.value); // angularrox@gmail.com
```

---