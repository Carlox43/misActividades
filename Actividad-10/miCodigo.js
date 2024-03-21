class Vehiculo {
    constructor (marca,modelo,color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color
        this.encendido = false;
    }
    encender() {
        if (!this.encendido) {
            this.encendido = true;
        console.log(`El vehiculo ${this.marca} esta encendido y listo para manejar`);
        } else {
            console.log(`El vehiculo ${this.marca} ya esta encendido el vehiculo`);
        }
    }
    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`El vehiculo ${this.marca} se ha apagado`)
        } else {
            console.log(`El vehiculo ${this.marca} ya esta apagado`);
        }
    }
    infoVehiculo () {
        console.log(`vehiculo: ${this.marca}, Modelo: ${this.modelo}, color: ${this.color}.`);
    }
}
const mivehiculo1 = new Vehiculo("Ford", "4x4", "Azul");

mivehiculo1.infoVehiculo();
mivehiculo1.encender();
mivehiculo1.apagar();
mivehiculo1.apagar();
mivehiculo1.encender();


