
const container=document.getElementById("earth-container");

if(container){

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(

45,

container.clientWidth/container.clientHeight,

0.1,

1000

);

const renderer=new THREE.WebGLRenderer({

alpha:true,

antialias:true

});

renderer.setSize(

container.clientWidth,

container.clientHeight

);

container.appendChild(renderer.domElement);

const geometry=new THREE.SphereGeometry(2,64,64);

const material=new THREE.MeshPhongMaterial({

color:0x2EA8FF,

shininess:100,

emissive:0x003366

});

const earth=new THREE.Mesh(geometry,material);

scene.add(earth);

const light=new THREE.PointLight(0xffffff,3);

light.position.set(5,5,5);

scene.add(light);

const ambient=new THREE.AmbientLight(0x404040,2);

scene.add(ambient);

camera.position.z=5;

function animate(){

requestAnimationFrame(animate);

earth.rotation.y+=0.004;

renderer.render(scene,camera);

}

animate();

}

function animateCounter(id,target){

let count=0;

const element=document.getElementById(id);

const timer=setInterval(()=>{

count++;

element.innerHTML=count;

if(count>=target){

clearInterval(timer);

}

},30);

}

animateCounter("projects",150);

animateCounter("students",300);

animateCounter("experience",13);

animateCounter("clients",95);

const themeButton=document.getElementById("themeButton");

if(themeButton){

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

themeButton.innerHTML=

document.body.classList.contains("light-mode")

?"☀️"

:"🌙";

});

}

const slider=document.getElementById("comparisonSlider");

const before=document.getElementById("beforeWrapper");

const line=document.getElementById("sliderLine");

if(slider){

slider.addEventListener("input",()=>{

before.style.width=slider.value+"%";

line.style.left=slider.value+"%";

});

}

const mapDiv=document.getElementById("map");

if(mapDiv){

const map=L.map("map").setView([7.3775,3.947],6);

L.tileLayer(

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

{

maxZoom:19,

attribution:"© OpenStreetMap contributors"

}

).addTo(map);

L.marker([7.3775,3.947])

.addTo(map)

.bindPopup("<b>Geoinformation Production & 3D Model Enterprise</b><br>Sample GIS Project Location")

.openPopup();

}

// Portfolio Lightbox

/* ===========================
GP3D PORTFOLIO FUNCTIONS
=========================== */

function filterProjects(category){

const projects=document.querySelectorAll(".project");

const buttons=document.querySelectorAll(".portfolio-filter button");

buttons.forEach(btn=>btn.classList.remove("active-filter"));

event.target.classList.add("active-filter");

projects.forEach(project=>{

if(category==="all"){

project.style.display="block";

}

else if(project.classList.contains(category)){

project.style.display="block";

}

else{

project.style.display="none";

}

});

}

function openImage(src){

const lightbox=document.getElementById("lightbox");

const img=document.getElementById("lightbox-img");

img.src=src;

lightbox.style.display="flex";

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}