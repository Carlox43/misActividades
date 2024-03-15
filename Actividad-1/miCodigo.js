class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
}
const persona1 = new Persona("Carlos", 19);
persona1.presentar();