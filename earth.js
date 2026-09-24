
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const container = document.getElementById("earth-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth/container.clientHeight,
0.1,
1000
);

camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
container.clientWidth,
container.clientHeight
);

container.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

const cloudTexture = loader.load("./textures/clouds.jpg");
const earthTexture = loader.load("./textures/earth_day.jpg");


const earth = new THREE.Mesh(
new THREE.SphereGeometry(2,64,64),
new THREE.MeshPhongMaterial({
map:earthTexture,
shininess:10
})
);

scene.add(earth);

const clouds = new THREE.Mesh(
new THREE.SphereGeometry(2.03,64,64),
new THREE.MeshPhongMaterial({
map:cloudTexture,
transparent:true,
opacity:.4
})
);

scene.add(clouds);

const glow = new THREE.Mesh(
new THREE.SphereGeometry(2.15,64,64),
new THREE.MeshBasicMaterial({
color:0x3ddc84,
transparent:true,
opacity:.10,
side:THREE.BackSide
})
);

scene.add(glow);

scene.add(new THREE.AmbientLight(0xffffff,1));

const sun = new THREE.DirectionalLight(0xffffff,3);

sun.position.set(5,3,5);

scene.add(sun);

const controls = new OrbitControls(
camera,
renderer.domElement
);

controls.enableDamping=true;
controls.autoRotate=true;
controls.autoRotateSpeed=.8;

function animate(){

requestAnimationFrame(animate);

earth.rotation.y+=.001;
clouds.rotation.y+=.0015;

controls.update();

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=container.clientWidth/container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(
container.clientWidth,
container.clientHeight
);

});