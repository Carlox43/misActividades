class Producto{
    constructor(nombre,precio,cantidadEnStock){
        this.nombre = nombre
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
    actualizarPrecio(nuevoprecio){
        this.precio = nuevoprecio;
        console.log(`El producto ${this.nombre} su precio ha sido actualizado a $${this.precio}`);
    }
    actualizarStock(nuevaCantidad){
        this.cantidadEnStock = nuevaCantidad;
        console.log(`El producto ${this.nombre} su stock ha sido actualizado a ${this.cantidadEnStock}`);
    }
}
const producto1 = new Producto("pantalon", 10, 30);
console.log("producto antes de la actualizacion");
console.log("Producto:", producto1.nombre);
console.log("Precio:", producto1.precio);
console.log("Stock:", producto1.cantidadEnStock);

producto1.actualizarPrecio(15);
producto1.actualizarStock(50);

console.log("Producto actualizado");
console.log("Producto:", producto1.nombre);
console.log("Precio:", producto1.precio);
console.log("Stock:", producto1.cantidadEnStock);

