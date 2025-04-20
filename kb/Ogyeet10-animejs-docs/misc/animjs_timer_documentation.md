# AnimJS Timer Documentation

**Summary:** This file covers topics related to "AnimJS Timer Documentation". Key snippets include: Importing and Creating an AnimJS Timer in JavaScript, Using AnimJS Timer with Callbacks and DOM Updates in JavaScript, HTML Structure for Displaying AnimJS Timer Values.

---

## Importing and Creating an AnimJS Timer in JavaScript

**Description:** This snippet demonstrates how to import the createTimer function from AnimJS and create a new timer with optional parameters. The createTimer function returns a Timer object.

```javascript
import { createTimer } from 'animejs';

const timer = createTimer(parameters);
```

---

## Using AnimJS Timer with Callbacks and DOM Updates in JavaScript

**Description:** This example shows how to create an AnimJS timer with specific parameters, including duration, loop, frameRate, and callbacks. It updates DOM elements with the current time and iteration count.

```javascript
import { animate } from 'animejs';

const [ $time, $count ] = utils.$('.value');

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: self => $time.innerHTML = self.currentTime,
  onLoop: self => $count.innerHTML = self._currentIteration
});
```

---

## HTML Structure for Displaying AnimJS Timer Values

**Description:** This HTML snippet creates a layout for displaying the current time and callback count of an AnimJS timer. It uses div elements with specific classes for styling and organization.

```html
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="value lcd">0</span>
    </pre>
  </div>
  <div class="half col">
    <pre class="large log row">
      <span class="label">callback fired</span>
      <span class="value lcd">0</span>
    </pre>
  </div>
</div>
```

---