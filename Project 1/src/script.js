import * as THREE from 'three';

const canvas = document.querySelector(".webgl");
console.log(canvas)
//Scene
const scene = new THREE.Scene();

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //usually we use 45-55
camera.position.x = 1;
camera.position.y = 0;
camera.position.z = 2;

scene.add(camera);

//Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
