// Aquí estoy creando una constante "scene" y construyendo la escena que contendrá los objetos.
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffcc00); // Color del escenario. Escogí amarillo.

// Ahora, crearé una variable "camera" que tenrdrá la cámara que voy a usar.
let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
);


// La constante "renderer" para mostrar todo lo que voy a crear
const renderer = new THREE.WebGLRenderer();

// Aquí establezco el tamaño de la vista para usar el largo y ancho del navegador.
renderer.setSize(window.innerWidth, window.innerHeight); 

// Aquí, usando las propiedades del DOM, vinculo el visualizador al HTML.
document.body.appendChild(renderer.domElement);

// Creación del cubo y las demás primitivas
let myCube = new THREE.BoxGeometry(0.5, 0.5, 0.5); // Ancho, Largo y Espesor
let myCone = new THREE.ConeGeometry(0.25, 0.5, 18); // Radio, altura y divisiones verticales
let myPlane = new THREE.PlaneGeometry(0.5, 0.5); // Ancho y Largo
let myCylinder = new THREE.CylinderGeometry(0.25, 0.25, 0.5, 18); // Radio superior, inferior, altura y divisiones verticales
let mySphere = new THREE.SphereGeometry(0.25, 18, 18); // Radio, divisiones x, divisiones y

// Usaré la constante "myMaterial" para dar color y apariencia a todos los objetos que crearé. Esto será un color casi negro y la apariencia de wireframe, para ver sus lineas.
let myMaterial = new THREE.MeshBasicMaterial(
    {
        color: 0x222222,
        wireframe: true
    }
)

// Relación de cada objeto con un objeto renderizable "Mesh".
const cube = new THREE.Mesh(myCube, myMaterial);
const cone = new THREE.Mesh(myCone, myMaterial);
const plane = new THREE.Mesh(myPlane, myMaterial);
const cylinder = new THREE.Mesh(myCylinder, myMaterial);
const sphere = new THREE.Mesh(mySphere, myMaterial);

// Añadiré los objetos al escenario.
scene.add(cube);
scene.add(cone);
scene.add(plane);
scene.add(cylinder);
scene.add(sphere);

// Modificaré la rotación del cubo para que se note.
cube.rotation.x = 0.25;

// Modificaré la posición y la rotación de los objetos para diferenciarlos.
cone.rotation.x = plane.rotation.x = cylinder.rotation.x = sphere.rotation.x = 0.25;

cone.position.x = -1;
plane.position.x = 1;
cylinder.position.x = 2;
sphere.position.x = -2;


// Modificaré la posición de la cámara.
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;

// Bonus track, let's dance!!
let dance = () => {
    
    // Aquí invocamos la función que nos permitirá mostrar todo como una escena animada.
    requestAnimationFrame(dance);

    cube.rotation.y += 0.01;
    cone.rotation.y += 0.01;
    sphere.rotation.y += 0.01;
    plane.rotation.y += 0.01;
    cylinder.rotation.y += 0.01;

    // Finalmente, llamaré a la constante renderer pasándole la escena y cámara creadas.
    renderer.render(scene, camera)

}

// ¡A bailar!
dance();