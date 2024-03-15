class Coche {
    constructor(marca,modelo,año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    InformacionCoche(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`
    }
};
const ford = new Coche("Ford","Camioneta Bronco",2022);
console.log(ford.InformacionCoche());