# Linking Animation to ScrollObserver with animejs

**Summary:** This file covers topics related to "Linking Animation to ScrollObserver with animejs". Key snippets include: Linking an Animation with ScrollObserver in animejs.

---

## Linking an Animation with ScrollObserver in animejs

**Description:** This JavaScript snippet demonstrates how to create an animation using the animejs library and link it to a ScrollObserver instance. The ScrollObserver watches scroll events in a specified container and updates the animation accordingly. Dependencies include the animejs library imported using named imports. The main parameters include the target element for animation and scroll-related configuration in the onScroll function. The snippet assumes the presence of elements matching class selectors within an HTML structure.

```JavaScript
import { animate, onScroll } from 'animejs';

const animation = animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
});

const scrollObserver = onScroll({
  container: '.scroll-container',
  enter: 'bottom-=50 top',
  leave: 'top+=60 bottom',
  sync: true,
  debug: true,
});

scrollObserver.link(animation);
```

---