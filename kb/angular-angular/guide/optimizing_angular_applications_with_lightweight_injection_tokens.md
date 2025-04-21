# Optimizing Angular Applications with Lightweight Injection Tokens

**Summary:** This file covers topics related to "Optimizing Angular Applications with Lightweight Injection Tokens". Key snippets include: Using Lightweight Injection Tokens for API Definition in Angular, Using Optional Library Header in Angular Template.

---

## Using Lightweight Injection Tokens for API Definition in Angular

**Description:** This example shows how to use lightweight injection tokens for API definition in Angular components. It demonstrates defining an abstract method in the token class and its implementation in the component, allowing type-safe communication between components.

```typescript
abstract class LibHeaderToken {
  abstract doSomething(): void;
}

@Component({
  selector: 'lib-header',
  providers: [
    {provide: LibHeaderToken, useExisting: LibHeaderComponent}
  ]
  …,
})
class LibHeaderComponent extends LibHeaderToken {
  doSomething(): void {
    // Concrete implementation of `doSomething`
  }
}

@Component({
  selector: 'lib-card',
  …,
})
class LibCardComponent implement AfterContentInit {
  @ContentChild(LibHeaderToken) header: LibHeaderToken|null = null;

  ngAfterContentInit(): void {
    if (this.header !== null) {
      this.header?.doSomething();
    }
  }
}
```

---

## Using Optional Library Header in Angular Template

**Description:** This HTML snippet shows how to use an optional library header component within a library card component in an Angular template.

```html
<lib-card>;
  <lib-header>…</lib-header>;
</lib-card>;
```

---