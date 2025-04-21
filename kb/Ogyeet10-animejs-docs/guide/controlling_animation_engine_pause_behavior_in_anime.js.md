# Controlling Animation Engine Pause Behavior in Anime.js

**Summary:** This file covers topics related to "Controlling Animation Engine Pause Behavior in Anime.js". Key snippets include: Toggling Engine Pause Behavior, Setting Engine Pause Behavior, Managing Timer Updates in Anime.js.

---

## Toggling Engine Pause Behavior

**Description:** This snippet provides the functionality to toggle the 'pauseOnDocumentHidden' setting. It updates the engine's visibility behavior and modifies the button text accordingly to reflect the current state.

```JavaScript
const toggleSetting = () => {
  const isPauseWhenHidden = engine.pauseOnDocumentHidden;
  if (isPauseWhenHidden) {
    engine.pauseOnDocumentHidden = false;
    $toggle.innerHTML = '○ Disabled (Switch tab to see the effect)';
  } else {
    engine.pauseOnDocumentHidden = true;
    $toggle.innerHTML = '● Enabled (Switch tab to see the effect)';
  }
}

$toggle.addEventListener('click', toggleSetting);
```

---

## Setting Engine Pause Behavior

**Description:** This snippet demonstrates how to configure the Anime.js engine to pause animations when the document is hidden. It sets the 'pauseOnDocumentHidden' property and outlines its effect on animation playback.

```JavaScript
engine.pauseOnDocumentHidden = true;
```

---

## Managing Timer Updates in Anime.js

**Description:** This snippet illustrates the setup of two timers: a global timer that tracks elapsed time since the script started, and an engine timer that updates based on the current time of the Anime.js engine. The timers are linked to HTML elements for live updates.

```JavaScript
const [ $globalTime ] = utils.$('.global-time');
const [ $engineTime ] = utils.$('.engine-time');
const [ $toggle ] = utils.$('.toggle');

const startTime = Date.now();

const globalTimer = setInterval(() => {
  $globalTime.innerHTML = Date.now() - startTime;
}, 16);

const engineTimer = createTimer({
  onUpdate: self => $engineTime.innerHTML = self.currentTime
});
```

---