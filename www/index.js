import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

// Persistent animation
const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  window.requestAnimationFrame(renderLoop);
};

// Start animation
window.requestAnimationFrame(renderLoop);
