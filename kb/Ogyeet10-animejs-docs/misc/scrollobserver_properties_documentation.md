# ScrollObserver Properties Documentation

**Summary:** This file covers topics related to "ScrollObserver Properties Documentation". Key snippets include: Defining a ScrollObserver Instance.

---

## Defining a ScrollObserver Instance

**Description:** This snippet demonstrates how to initialize a ScrollObserver using the 'onScroll' function. The properties provided, such as 'target', 'linked', and 'repeat', allow the observer to manage and track the target element's scroll states. Dependencies include the Anime.js library. The function requires parameters detailing scroll behavior, and it outputs an instance with various scroll-related properties.

```JavaScript
const scrollObserver = onScroll(parameters);
       ┌───────┐
scrollObserver.│target │
scrollObserver.│linked ├─ Properties
scrollObserver.│repeat │
       └───────┘
```

---