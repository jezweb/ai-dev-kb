# AnimeJS Animation Keyframes Documentation

**Summary:** This file covers topics related to "AnimeJS Animation Keyframes Documentation". Key snippets include: Animating with Percentage-Based Keyframes in AnimeJS, Animating with Tween Values Array in AnimeJS, Animating with Duration-Based Keyframes in AnimeJS, Animating with Tween Parameters Array in AnimeJS.

---

## Animating with Percentage-Based Keyframes in AnimeJS

**Description:** Creates an animation using keyframes that define multiple property values at specific percentage points of the animation. The animation will transition between each keyframe based on their percentage positions over the specified duration.

```javascript
animate('.square', {
  keyframes: {
    '0%'  : { x: 0,   y: 0   },
    '50%' : { x: 100, y: 100 },
    '100%': { x: 200, y: 200 },
  },
  duration: 3000,
}
```

---

## Animating with Tween Values Array in AnimeJS

**Description:** Creates an animation sequence using an array of values for the x and y properties. The animation will automatically transition between each value in the array over the specified duration.

```javascript
animate('.square', {
  x: [0, 100, 200],
  y: [0, 100, 200],
  duration: 3000,
}
```

---

## Animating with Duration-Based Keyframes in AnimeJS

**Description:** Creates an animation using keyframes that define multiple property values at specific points in time. The animation will transition between each keyframe over the specified duration.

```javascript
animate('.square', {
  keyframes: [
    { x: 100, y: 100 },
    { x: 200, y: 200 },
  ],
  duration: 3000,
}
```

---

## Animating with Tween Parameters Array in AnimeJS

**Description:** Creates an animation sequence using an array of objects with 'to' properties that specify target values for x and y properties. The animation will transition to each target value over the specified duration.

```javascript
animate('.square', {
  x: [{to: 100}, {to: 200}],
  y: [{to: 100}, {to: 200}],
  duration: 3000,
}
```

---