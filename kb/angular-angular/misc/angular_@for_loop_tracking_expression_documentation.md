# Angular @for Loop Tracking Expression Documentation

**Summary:** This file covers topics related to "Angular @for Loop Tracking Expression Documentation". Key snippets include: Optimized Tracking Expression in Angular @for Loop.

---

## Optimized Tracking Expression in Angular @for Loop

**Description:** Corrected implementation using todo.id as the tracking expression, which properly identifies items regardless of object identity. This prevents unnecessary DOM re-creation when updating item properties.

```typescript
@Component({
  template: `
    <button (click)="toggleAllDone()">All done!</button>
    <ul>
    @for (todo of todos; track todo.id) {
      <li>{{todo.task}}</li>
    }
    </ul>
  `,
})
export class App {
  todos = [
    { id: 0, task: 'understand trackBy', done: false },
    { id: 1, task: 'use proper tracking expression', done: false },
  ];

  toggleAllDone() {
    this.todos = this.todos.map(todo => ({ ...todo, done: true }));
  }
}
```

---