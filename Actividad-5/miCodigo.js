class Estudiante {
    constructor(nombre,edad,grado){
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
    }
    actualizarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        console.log(`Nombre del nuevo estudiante ${this.nombre}`);
    }
    actualizarEdad(nuevaEdad){
        this.edad = nuevaEdad;
        console.log(`Edad del nuevo estudiante ${this.edad}`);
    }
    actualizarGrado(nuevoGrado){
        this.grado = nuevoGrado;
        console.log(`Grado del nuevo estudiante ${this.grado}`)
    }
}
const estudiante1 = new Estudiante("Martin","15 años", "4to año");
console.log("Estudiante ingresado");
console.log("Nombre:", estudiante1.nombre);
console.log("Edad:", estudiante1.edad);
console.log("Grado:", estudiante1.grado);

estudiante1.actualizarNombre("Luis");
estudiante1.actualizarEdad("17 años");
estudiante1.actualizarGrado("5to año");

console.log("Datos actualizados del nuevo estudiante");
console.log("Nombre:", estudiante1.nombre);
console.log("Edad:", estudiante1.edad);
console.log("Grado:", estudiante1.grado);


