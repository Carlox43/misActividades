class Rectangulo{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    get area(){
        return this.base * this.altura
    }
    set dimensiones({base,altura}){
        this.base = base;
        this.altura = altura;
    }
}
const rectangulo1 = new Rectangulo(5, 8);
console.log(rectangulo1.area)
rectangulo1.dimensiones = {base: 3 , altura: 6}
console.log(rectangulo1.area);
