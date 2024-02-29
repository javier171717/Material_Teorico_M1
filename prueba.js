/* class CajaFuerte {
    constructor() {
        this._dinero = 0; // Detalle interno oculto
    }

    depositar(cantidad) { this._dinero += cantidad }

    retirar(cantidad) {
        if (cantidad <= this._dinero) {
            this._dinero -= cantidad;
            return cantidad;
        }
        return "fondos insufiecientes";
    }
}
// Crear una instancia de CajaFuerte
const miCajaFuerte = new CajaFuerte();

// Depositar dinero
miCajaFuerte.depositar(20);

// Retirar dinero
const cantidadRetirada = miCajaFuerte.retirar(50);
console.log("Se retiraron $" + cantidadRetirada + " de la caja fuerte.");
 */

/* class Coche {
    constructor() {
        this._motorEncendido = false; // Propiedad privada
    }

    _encenderMotor() {
        // Método privado: Detalle interno sobre cómo se enciende el motor
        this._motorEncendido = true;
        console.log("Motor encendido");
    }

    _apagarMotor() {
        // Método privado: Detalle interno sobre cómo se apaga el motor
        this._motorEncendido = false;
        console.log("Motor apagado");
    }
}

// Crear una instancia de Coche

const miCoche = new Coche();

miCoche._encenderMotor();
miCoche._apagarMotor();

console.log(miCoche ) */


/* class SuperHeroe {
    constructor(nombre, identidad, superpoder) { //constructor
        this.nombre = nombre; //propiedad
        this.superpoder = superpoder;
        this.identidad = identidad;
    }

    volar() { //metodo
        console.log("Mi nombre es", this.nombre)
    }
}

// Crear una instancia de SuperHeroe

const miSuperHeroe = new SuperHeroe("Superman", 123456789, 100);

miSuperHeroe.volar();    */
/* 

describe("Nombre Del Test General", function () {
    it("Nombre del test unitario", function () {
        expect(5 + 5).toBe(10) //expect es el expect propiamente hablando, toBe en este caso es el matcher.
    })
})
 */
 /* class Animal{
    constructor(nombre, ){
        this.nombre = nombre;
      
    }
 }
 lass Perro extends Animal{
    ladrar(){
        return `${this.nommbre} esta ladrando';
    }
}
const mi perro = new Perro('firulas');
consele.log(mi perro.ladrar()); */


/* const foo = n=> n* 2;
const rsultado = foo(6);

 console.log(rsultado); */

 /* const partes = ['hombros', 'rodillas'];
const cuerpo = ['cabeza', ...partes, 'y', 'dedos'];

console.log(cuerpo.join(''));
 */
 let akira = ['direccion','cadenilla'];
 let akiles = ['biela', ...akira, 'y' , 'llantas'];
 console.log(akiles.join());
