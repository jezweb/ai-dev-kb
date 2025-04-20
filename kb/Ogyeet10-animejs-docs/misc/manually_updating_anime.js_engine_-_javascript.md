# Manually Updating Anime.js Engine - JavaScript

**Summary:** This file covers topics related to "Manually Updating Anime.js Engine - JavaScript". Key snippets include: Creating Animated Cubes in Three.js with Anime.js - JavaScript, Configuring Anime.js Engine for Manual Updates - JavaScript, Rendering the Three.js Scene with Anime.js Integration - JavaScript.

---

## Creating Animated Cubes in Three.js with Anime.js - JavaScript

**Description:** This function creates and animates multiple cubes using Three.js and Anime.js. It establishes a timeline for animations, including random positions and rotations for each cube, and adds these cubes to the Three.js scene.

```JavaScript
function createAnimatedCube() {
  const cube = new THREE.Mesh(geometry, material);
  const x = utils.random(-10, 10, 2);
  const y = utils.random(-5, 5, 2);
  const z = [-10, 7];
  const r = () => utils.random(-Math.PI * 2, Math.PI * 2, 3);
  const duration = 4000;
  createTimeline({
    delay: utils.random(0, duration),
    defaults: { loop: true, duration, ease: 'inSine', },
  })
  .add(cube.position, { x, y, z }, 0)
  .add(cube.rotation, { x: r, y: r, z: r }, 0)
  .init();
  scene.add(cube);
}

for (let i = 0; i < 40; i++) {
  createAnimatedCube();
}

```

---

## Configuring Anime.js Engine for Manual Updates - JavaScript

**Description:** This snippet disables the default animation loop in Anime.js, allowing for manual updates in projects using custom animation loops like Three.js. It initializes the engine and sets up the environment for rendering objects in Three.js while managing animations with Anime.js.

```JavaScript
import { engine, createTimeline, utils } from 'animejs';

// Prevents Anime.js from using its own loop
engine.useDefaultMainLoop = false;

const [ $container ] = utils.$('.container');
const color = utils.get($container, 'color');
const { width, height } = $container.getBoundingClientRect();

// Three.js setup, note that the global THREE object is defined globally
const renderer = new THREE.WebGLRenderer({ alpha: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 20);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color, wireframe: true });

renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
$container.appendChild(renderer.domElement);
camera.position.z = 5;

```

---

## Rendering the Three.js Scene with Anime.js Integration - JavaScript

**Description:** This render function updates the Anime.js engine and renders the Three.js scene within a custom animation loop. It allows for real-time updates and ensures that animations are synchronized with the existing Three.js rendering.

```JavaScript
function render() {
  engine.update(); // Manually update Anime.js engine
  renderer.render(scene, camera); // Render Three.js scene
}

// Calls the builtin Three.js animation loop
renderer.setAnimationLoop(render);

```

---