# Component Communication with @Output in Angular

**Summary:** This file covers topics related to "Component Communication with @Output in Angular". Key snippets include: Declaring an Output Property in Angular Component, Listening to Child Component Events in Angular Templates.

---

## Declaring an Output Property in Angular Component

**Description:** Example of creating an Output property in a child component using the @Output decorator and EventEmitter. This establishes the communication channel from child to parent component.

```typescript
@Component({...})
class ChildComponent {
    @Output() incrementCountEvent = new EventEmitter<number>();
}
```

---

## Listening to Child Component Events in Angular Templates

**Description:** Example of binding to a child component's output event in a parent component template. The $event parameter represents the data emitted by the child component.

```angular-html
<app-child (addItemEvent)="addItem($event)" />
```

---