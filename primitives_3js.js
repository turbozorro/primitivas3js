// Aquí estoy creando una constante "scene" y construyendo la escena que contendrá los objetos.
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffcc00); // Color del escenario. Escogí amarillo.

// Ahora, crearé una constante "camera" que tenrdrá la cámara que voy a usar.
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight
);

// La constante "renderer" para mostrar todo lo que voy a crear
const renderer = new THREE.WebGLRenderer();
// Aquí establezco el tamaño de la vista para usar el largo y ancho del navegador
renderer.setSize(window.innerWidth, window.innerHeight); 
// Aquí, usando las propiedades del DOM, vinculo el visualizador al HTML
document.body.appendChild(renderer.domElement);
// Finalmente, llamaré a la constante renderer pasándole la escena y cámara creadas.
renderer.render(scene, camera)

// Usaré la constante "myMaterial" para dar color y apariencia a todos los objetos que crearé. Esto será un color casi negro y la apariencia de wireframe, para ver sus lineas.
const myMaterial = new THREE.MeshBasicMaterial(
    {
        color: 0x222222,
        wireframe: true
    }
)

// Creación del cubo
let myCube = new THREE.BoxGeometry();
let cube = new THREE.Mesh(myCube, myMaterial);