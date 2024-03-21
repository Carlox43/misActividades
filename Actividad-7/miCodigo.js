class Libro {
    constructor(titulo,autor,numPagina) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPagina = numPagina;
    }
    tituloActualizado(nuevoTitulo){
        this.titulo = nuevoTitulo;
        console.log(`Nuevo titulo del libro: ${this.titulo}`);
    }
    autorActualizado(nuevoAutor) {
        this.autor = nuevoAutor;
        console.log(`Autor del nuevo libro es: ${this.autor}`);
    }
    paginasActualizadas(nuevaPagina) {
        this.numPagina = nuevaPagina;
        console.log(`Contiene ${this.numPagina} de paginas.`);
    }
    infoLibro() {
        console.log(`Titulo del libro: ${this.titulo}, Autor: ${this.autor}, Paginas: ${this.numPagina}`);
    }
}
const libro1 = new Libro("Las Leyes Del Poder", "Robert Gren", 48);

console.log("Libro Actual.");

libro1.infoLibro();

console.log("-----------------------------------------------------")
console.log("Actualizacion de Libro.");

libro1.tituloActualizado("Desesperados");
libro1.autorActualizado("Julio Marchan");
libro1.paginasActualizadas(50);

libro1.infoLibro();
