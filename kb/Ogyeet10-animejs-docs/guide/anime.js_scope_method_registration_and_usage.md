# Anime.js Scope Method Registration and Usage

**Summary:** This file covers topics related to "Anime.js Scope Method Registration and Usage". Key snippets include: Anime.js Scope Creation and Method Registration, Executing Method from Anime.js Scope.

---

## Anime.js Scope Creation and Method Registration

**Description:** Creates an Anime.js scope, registers a method within it, and attaches an event listener to execute the method. The method accesses scope properties, specifically media query matches, to dynamically adjust animation parameters. Utilizes the `animejs` library.

```javascript
import { utils, animate, createScope } from 'animejs';

const scope = createScope({
  mediaQueries: { isSmall: '(max-width: 200px)' },
})
.add(self => {

  /* Registering the method inside the scope allows access to the scope itself */
  self.add('onClick', (e) => {

    const { clientX, clientY } = e;
    const { isSmall } = self.matches;

    animate('.square', {
      rotate: isSmall ? '+=360' : 0,
      x: isSmall ? 0 : clientX - (window.innerWidth / 2),
      y: isSmall ? 0 : clientY - (window.innerHeight / 2),
      duration: isSmall ? 750 : 400,
    });
    
  });
  
  utils.set(document.body, {
    cursor: self.matches.isSmall ? 'alias' : 'crosshair'
  });
  
});

/* Methods can be called outside the scope */
document.addEventListener('click', scope.methods.onClick);
```

---

## Executing Method from Anime.js Scope

**Description:** Executes a registered method from an Anime.js scope using the `methods` object and the method name.  The method is called on the scope's method object. No specific dependencies other than a previously defined and registered method within the scope.

```javascript
scope.methods.methodName(); // Execute the method
```

---