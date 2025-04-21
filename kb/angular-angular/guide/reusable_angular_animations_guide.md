# Reusable Angular Animations Guide

**Summary:** This file covers topics related to "Reusable Angular Animations Guide". Key snippets include: Defining a Reusable Animation in TypeScript, Exporting an Animation Trigger in TypeScript.

---

## Defining a Reusable Animation in TypeScript

**Description:** Creates a reusable animation with parameters for height, opacity, backgroundColor, and time using the animation() function. These parameters can be replaced at runtime when the animation is used.

```typescript
export const transitionAnimation = animation([
  style({
    height: "{{ height }}",
    opacity: "{{ opacity }}",
    backgroundColor: "{{ backgroundColor }}",
  }),
  animate("{{ time }}")
]);
```

---

## Exporting an Animation Trigger in TypeScript

**Description:** Defines and exports a complete animation trigger that can be reused across components. This animation handles open and closed states with different styles and transitions.

```typescript
export const openCloseAnimation = trigger('openClose', [
  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('close', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
  })),
  transition('* => *', [
    animate('1s')
  ])
]);
```

---