import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

// Scene & Camera
let scene = new THREE.Scene();
scene.background = new THREE.Color("white"); // light sky blue
let camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 4;
scene.add(camera);

// Cube
let box = new THREE.BoxGeometry(1, 1, 1,2);
let material = new THREE.MeshStandardMaterial({ color: "red" });
let mesh = new THREE.Mesh(box, material);
scene.add(mesh);

// Light (so we can see materials properly)
let light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(2, 2, 5);
scene.add(light);

// Renderer
const canvas = document.querySelector("canvas");
let renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Track mouse movement
let mouse = { x: 0, y: 0 };
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 ; // range: -1 to 1
  mouse.y = (event.clientY / window.innerHeight) ; // range: -1 to 1
});

// Animate
function animate() {
  window.requestAnimationFrame(animate);
  // Rotate cube based on mouse position
  mesh.rotation.x = mouse.x * Math.PI; // left-right movement
  mesh.rotation.y = mouse.y * Math.PI; // up-down movement
  renderer.render(scene, camera);
}
animate();



