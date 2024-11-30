class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        console.log("El animal hace un sonido.");
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    hacerSonido() {
        console.log("El perro ladra: ¡Guau!");
    }
}


const animal = new Animal("Leon", 5);
animal.hacerSonido();

const perro = new Perro("Firulais", 3);
perro.hacerSonido();