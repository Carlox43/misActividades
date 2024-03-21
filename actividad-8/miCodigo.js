class Empleado {
    constructor (nombre,salario,cargo) {
        this.nombre = nombre;
        this.salario = salario;
        this.cargo = cargo;
    } 
    calcularsalarioAnual(){
        return this.salario * 12;
    }
    ActualizarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        console.log(`Se ha actualizado el nombre: ${this.nombre}`);
    }
    ActualizarSalario(nuevoSalario) {
        this.salario = nuevoSalario
        console.log(`Se ha actualizado el salario: $${this.salario}`);
    }
    ActualizarCargo(nuevoCargo) {
        this.cargo = nuevoCargo;
        console.log(`Se ha actualizado el cargo: ${this.cargo}`);
    }
}
const empleada1 = new Empleado("Maria", 202800,"Gerente");

console.log("Empleado de la empresa");
console.log("Nombre:", empleada1.nombre);
console.log("Salario:", empleada1.salario);
console.log("Cargo:", empleada1.cargo);
console.log("salario Anual:", empleada1.calcularsalarioAnual());

console.log("---------------------------------------------------");
empleada1.ActualizarNombre("Luisa");
empleada1.ActualizarSalario(305200);
empleada1.ActualizarCargo("Administrador");

console.log("Nombre:", empleada1.nombre);
console.log("Salario:", empleada1.salario);
console.log("Cargo:", empleada1.cargo);
console.log("salario Anual:", empleada1.calcularsalarioAnual());