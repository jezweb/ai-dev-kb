# Anime.js Animatable Methods Documentation

**Summary:** This file covers topics related to "Anime.js Animatable Methods Documentation". Key snippets include: Creating and Using an Animatable Instance in Anime.js.

---

## Creating and Using an Animatable Instance in Anime.js

**Description:** This snippet demonstrates how to create an Animatable instance and use its methods to trigger animations. It shows the basic syntax for applying x and y transformations with optional parameters and using the revert() method.

```javascript
const animatable = createAnimatable(target, parameters);
animatable.x(100)               
animatable.y(50, 500, 'out(2)') 
animatable.revert()             
```

---