# Anime.js Engine Defaults Configuration

**Summary:** This file covers topics related to "Anime.js Engine Defaults Configuration". Key snippets include: Importing Engine and Setting Default Duration in Anime.js.

---

## Importing Engine and Setting Default Duration in Anime.js

**Description:** This code snippet demonstrates how to import the `engine` object from the Anime.js library and then set the default animation duration to 500 milliseconds. This will affect all subsequent Timer, Animation, and Timeline instances created.

```JavaScript
import { engine } from 'animejs';

engine.engine.defaults.duration = 500;
```

---