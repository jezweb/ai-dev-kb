# Shuffling Arrays with Anime.js Utils

**Summary:** This file covers topics related to "Shuffling Arrays with Anime.js Utils". Key snippets include: Implementing Shuffle Animation with Anime.js in JavaScript, Shuffling Array Elements with Anime.js Utils in JavaScript.

---

## Implementing Shuffle Animation with Anime.js in JavaScript

**Description:** Shows a practical implementation of the shuffle utility in combination with other Anime.js functions. It sets up event listeners and animates shuffled elements on button click.

```javascript
import { utils } from 'animejs';

const [ $shuffle ] = utils.$('button');
const squares = utils.$('.square');
const x = stagger('3.2rem');

// Initial squares x position
utils.set(squares, { x });

const shuffle = () => animate(utils.shuffle(squares), { x });

$shuffle.addEventListener('click', shuffle);
```

---

## Shuffling Array Elements with Anime.js Utils in JavaScript

**Description:** Demonstrates how to use the shuffle utility function from Anime.js to randomize an array. It takes an array as input and returns the mutated array with randomized element order.

```javascript
const shuffledArray = utils.shuffle(array);
```

---