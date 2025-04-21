# Animation Playback Settings Documentation for AnimeJS

**Summary:** This file covers topics related to "Animation Playback Settings Documentation for AnimeJS". Key snippets include: Configuring Animation Playback Settings in AnimeJS.

---

## Configuring Animation Playback Settings in AnimeJS

**Description:** Example showing how to set various animation properties including playback settings like loop, alternate, and autoplay in an AnimeJS animation. This demonstrates the structure of an animation declaration with highlighted playback settings.

```javascript
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,          
  alternate: true,  
  autoplay: false,  
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

---