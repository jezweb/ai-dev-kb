# Angular Complex Animation Sequences Guide

**Summary:** This file covers topics related to "Angular Complex Animation Sequences Guide". Key snippets include: Implementing Hero List Page Animations with Query and Stagger in Angular, Parallel Group Animations in Angular Hero List, Filter Animation Template in Angular HTML.

---

## Implementing Hero List Page Animations with Query and Stagger in Angular

**Description:** Demonstrates how to animate a list of heroes entering the page using query() to find elements and stagger() to create sequential delayed animations. The animation includes styling for transparency and transform properties with custom timing.

```typescript
@Component({
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
```

---

## Parallel Group Animations in Angular Hero List

**Description:** Shows how to use group() function to run multiple animations simultaneously on the same element. The example applies different timing configurations for enter and leave animations.

```typescript
trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(':enter', [
      style({ opacity: 0, width: 0 }),
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 1, width: '*' })),
      ]),
    ], { optional: true })
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 0, width: 0 })),
      ]),
    ], { optional: true })
  ]),
])
```

---

## Filter Animation Template in Angular HTML

**Description:** HTML template implementation showing how to apply filter animations to a hero list using the filterAnimation trigger.

```angular-html
<ul class="heroes" [@filterAnimation]="heroTotal">
  <li *ngFor="let hero of heroes" class="hero">
    <div class="inner">
      <span class="badge">{{ hero.id }}</span>
      <span>{{ hero.name }}</span>
    </div>
  </li>
</ul>
```

---