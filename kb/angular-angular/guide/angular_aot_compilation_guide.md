# Angular AOT Compilation Guide

**Summary:** This file covers topics related to "Angular AOT Compilation Guide". Key snippets include: Component with Non-null Assertion Operator.

---

## Component with Non-null Assertion Operator

**Description:** Shows how to use the non-null assertion operator to suppress possibly undefined errors.

```typescript
@Component({
  selector: 'my-component',
  template: '<span *ngIf="person"> {{person.name}} lives on {{address!.street}} </span>'
})
class MyComponent {
  person?: Person;
  address?: Address;

  setData(person: Person, address: Address) {
    this.person = person;
    this.address = address;
  }
}
```

---