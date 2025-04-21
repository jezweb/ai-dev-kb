# AnimeJS Utils.set() Documentation

**Summary:** This file covers topics related to "AnimeJS Utils.set() Documentation". Key snippets include: AnimeJS Set Utility Implementation Example, Basic AnimeJS Set Utility Syntax.

---

## AnimeJS Set Utility Implementation Example

**Description:** Demonstrates practical usage of utils.set() with dynamic values, stagger effects, and random color selection. Includes event listeners for setting and reverting styles on square elements.

```javascript
import { utils, stagger } from 'animejs';

const [ $set, $revert ] = utils.$('button');
const squares = utils.$('.square');
const colors = ['red', 'orange', 'yellow'];

let setter;

const setStyles = () => {
  setter = utils.set(squares, {
    borderRadius: '50%',
    y: () => utils.random(-1, 1) + 'rem',
    scale: stagger(.1, { start: .25, ease: 'out' }),
    color: () => `var(--hex-${utils.randomPick(colors)})`
  });
  $set.setAttribute('disabled', 'true');
  $revert.removeAttribute('disabled');
}

const revertStyles = () => {
  setter.revert();
  $set.removeAttribute('disabled');
  $revert.setAttribute('disabled', 'true');
}

$set.addEventListener('click', setStyles);
$revert.addEventListener('click', revertStyles);
```

---

## Basic AnimeJS Set Utility Syntax

**Description:** Shows the basic syntax for using utils.set() to set property values on target elements. Returns an Animation object that can be used to revert changes.

```javascript
const setter = utils.set(targets, properties);
```

---