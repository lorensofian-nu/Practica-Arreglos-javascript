
const persona = {
    nombre: "Juan",
    edad: 23,
    altura: 1.68,
    peso: "60 kg",
    
    caminar() {
        console.log("Estoy caminando");
    }
};


persona.caminar();


const personaJSON = JSON.stringify(persona);


console.log(personaJSON);


const listaEmpleados = [
    { nombre: "Juan Pérez", apellido: "López" },
    { nombre: "Ana", apellido: "González" },
    { nombre: "Pedro", apellido: "Sánchez" }
];


console.log(listaEmpleados);

const frutas = ["Manzana", "Banana", "Naranja"];


const posicionManzana = frutas.indexOf("Manzana");


console.log(posicionManzana);


const edades = [25, 30, 18, 15];


const primerMenor = edades.find(edad => edad < 20);


console.log(primerMenor);






