class Tienda {
    constructor (nombre,direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.productosDisponibles = [];
    }
    agregarProductos(producto) {
        this.productosDisponibles.push(producto);
        console.log(`Se agrego el producto ${producto} a la tienda.`);
    }
    eliminarProducto(producto) {
        const indice = this.productosDisponibles.indexOf(producto);
    if (producto !== -1) {
        this.productosDisponibles.splice(indice, 1);
        console.log(`Se ha eliminado el producto ${producto} de la tienda.`)
    } else {
        console.log(`No se ha encontrado el producto`);
        }
    }
}

const miTienda = new Tienda ("Fruteria Salazar", "Padilla 503");

miTienda.agregarProductos("Manzana");
miTienda.agregarProductos("cambur");
miTienda.agregarProductos("kiwi");

console.log("Productos disponibles en la tienda:", miTienda.productosDisponibles);

miTienda.eliminarProducto("cambur");

console.log("Productos disponibles en la tienda:", miTienda.productosDisponibles);