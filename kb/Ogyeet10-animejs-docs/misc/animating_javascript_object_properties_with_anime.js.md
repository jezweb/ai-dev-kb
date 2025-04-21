# Animating JavaScript Object Properties with Anime.js

**Summary:** This file covers topics related to "Animating JavaScript Object Properties with Anime.js". Key snippets include: Displaying Animated Object State in HTML, Animating JavaScript Object Properties with Anime.js.

---

## Displaying Animated Object State in HTML

**Description:** This HTML snippet shows how the animated object's state is displayed in the DOM. It uses a pre-formatted code block to show the current values of the object's properties as they are being animated.

```html
<pre class="row large centered">
  <code>{"number":1337,"unit":"42%"}</code>
</pre>
```

---

## Animating JavaScript Object Properties with Anime.js

**Description:** This snippet demonstrates how to animate properties of a JavaScript object using Anime.js. It includes setting up the initial object, importing necessary functions from Anime.js, and defining the animation with a render callback to update the DOM.

```javascript
import { animate, utils } from 'animejs';

const myObject = {
  number: 1337,
  unit: '42%',
}

const [ $log ] = utils.$('code');

animate(myObject, {
  number: 50,
  unit: '100%',
  modifier: utils.round(0),
  onRender: function() {
    $log.innerHTML = JSON.stringify(myObject);
  }
});
```

---