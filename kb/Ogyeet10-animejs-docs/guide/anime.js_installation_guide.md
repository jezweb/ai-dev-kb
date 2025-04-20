# Anime.js Installation Guide

**Summary:** This file covers topics related to "Anime.js Installation Guide". Key snippets include: Installing Anime.js with NPM, Using Anime.js ES6 Modules from local file, Importing Anime.js methods as ES6 modules, Using Anime.js UMD Modules from local file, Using Anime.js Global Object from local file....

---

## Installing Anime.js with NPM

**Description:** This snippet demonstrates how to install Anime.js using NPM, a package manager for JavaScript. This approach is commonly used in projects that utilize bundlers like Vite or esbuild for module management.

```shell
npm install animejs
```

---

## Using Anime.js ES6 Modules from local file

**Description:** This code shows how to import Anime.js as an ES6 module after downloading the library directly from GitHub and placing it in your project directory. The script tag includes the 'type=module' attribute to treat the code as a module.

```html
<script type="module">
  import { animate } from './path/to/anime.esm.min.js';
</script>
```

---

## Importing Anime.js methods as ES6 modules

**Description:** This code snippet shows how to import specific Anime.js methods as ES6 modules. This is necessary when using Anime.js with bundlers like Vite or esbuild after installing it via NPM.

```javascript
import { animate } from 'animejs';
```

---

## Using Anime.js UMD Modules from local file

**Description:** This code shows how to import Anime.js as an UMD module after downloading the library directly from GitHub and placing it in your project directory. The script tag includes the 'type=module' attribute to treat the code as a module.

```html
<script type="module">
  import { animate } from './path/to/anime.esm.min.js';
</script>
```

---

## Using Anime.js Global Object from local file

**Description:** This snippet demonstrates how to use Anime.js as a global object after downloading the library and including it in your HTML. It accesses the animate function from the global anime object.

```html
<script src="path/to/anime.iife.min.js"></script>

<script>
  const { animate } = anime;
</script>
```

---

## Using Anime.js from CDN as Global object

**Description:** This snippet shows how to include Anime.js from a CDN as a global object. This approach makes Anime.js functions available directly in the global scope.

```html
<script src="https://cdn.jsdelivr.net/npm/animejs@4.0.0/lib/anime.iife.min.js"></script>

<script>
  const { animate } = anime;
</script>
```

---