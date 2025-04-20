# anime.js SVG Drawing Documentation

**Summary:** This file covers topics related to "anime.js SVG Drawing Documentation". Key snippets include: Animating SVG drawing with anime.js, Defining draw property values, Creating drawable SVG element.

---

## Animating SVG drawing with anime.js

**Description:** Example of using anime.js to animate SVG elements with the createDrawable method. The animation transitions the draw property from no visibility to full visibility with easing, duration, and staggered delay effects.

```javascript
import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});
```

---

## Defining draw property values

**Description:** Examples of different draw property values that control how much of an SVG line is visible. The values range from 0 to 1, with pairs of numbers indicating the start and end points of visibility.

```javascript
drawable.draw = '0 1';      |[———————————————————]|

                            0         .5
drawable.draw = '0 .5';     |[—————————]          |

                                 .25       .75
drawable.draw = '.25 .75';  |     [—————————]     |

                                      .5          1
drawable.draw = '.5 1';     |          [—————————]|

                                                1 1
drawable.draw = '1 1';      |                   []|
```

---

## Creating drawable SVG element

**Description:** Creates a proxy of an SVG element with a draw property to control line visibility. The method accepts various SVG element types as targets and returns an array of proxy SVG elements.

```javascript
const [ drawable ] = svg.createDrawable(target);
```

---