# Route Transition Animations with View Transitions API in Angular

**Summary:** This file covers topics related to "Route Transition Animations with View Transitions API in Angular". Key snippets include: Customizing View Transitions with CSS.

---

## Customizing View Transitions with CSS

**Description:** CSS code that shows how to create custom animations for view transitions by defining keyframes and applying them to specific view-transition elements.

```css
/* Custom transition */
@keyframes rotate-out {
 to {
   transform: rotate(90deg);
 }
}
@keyframes rotate-in {
 from {
   transform: rotate(-90deg);
 }
}
::view-transition-old(count),
::view-transition-new(count) {
 animation-duration: 200ms;
 animation-name: -ua-view-transition-fade-in, rotate-in;
}
::view-transition-old(count) {
 animation-name: -ua-view-transition-fade-out, rotate-out;
}
```

---