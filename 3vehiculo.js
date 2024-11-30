class Vehiculo {
    constructor(marca) {
      this.marca = marca;
    }
  
    arrancar() {
      console.log("El vehículo ha arrancado.");
    }
  }
  
class Coche extends Vehiculo {
    constructor(marca, modelo) {
      super(marca);
      this.modelo = modelo;
    }
  
    mostrarInfo() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
  }
  
  const miCoche = new Coche("Toyota", "Corolla");
  miCoche.arrancar();
  miCoche.mostrarInfo();
  