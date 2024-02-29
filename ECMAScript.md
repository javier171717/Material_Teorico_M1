> # Modulo 1 - Clase 01: ECMAScript
---

> ## Scope: 
El  scope  hace referencia a la región del código donde se definen las variables y, por lo tanto, donde pueden ser accedidas.

> ## Scope Global:
Cuando una variable se declara fuera de cualquier función o bloque de código, se convierte en una variable global y está disponible a lo largo de todo el programa.

```javascript
// Scope Global
let globalVariable = "Soy global";

// Función que imprime el valor de la variable global
function ejemplo() {
  console.log(globalVariable);
}

// Impresión del valor de la variable global
console.log(globalVariable + " 2"); // Salida: "Soy global 2"
ejemplo(); // Salida: "Soy global"
```


> ## Scope Local:
Cuando una variable se declara dentro de una función o un bloque de código se considera como una variable local y solo es accesible dentro de esa función o bloque. Esto ayuda a encapsular variables y evitar conflictos.

```javascript
// Scope Global
let globalVariable = "Soy global";

// Función que imprime el valor de la variable global
function ejemplo() {
  console.log(globalVariable);
}

// Impresión del valor de la variable global
console.log(globalVariable + " 2"); // Salida: "Soy global 2"
ejemplo(); // Salida: "Soy global"
```
Con la introducción de let y const, también se introdujo el block scope .(alcance de bloque)..

Este tipo de scope permite declarar variables con alcance dentro de bloques de código, y no solo de funciones. Es decir, también se aceptan en condicionales, bucles, etc.
```javascript
if (true) {
    let blockVariable = "Soy de alcance de bloque";
    console.log(blockVariable); // "Soy de alcance de bloque"
}

console.log(blockVariable); // ERROR
// blockVariable no está definida fuera del bloque.
```

> ### Let: 
Permite declarar variables con scope local en lugar de scope global.

> ### Const: 
Permite declarar constantes cuyo valor no puede ser reasignado.

> ## Hoisting:
Este término se refiere a un comportamiento en JavaScript donde las declaraciones de las variables y funciones son "movidas" al inicio de su contexto de ejecución durante la fase de compilación, antes de que el código se ejecute. Esto significa que, conceptualmente, las variables y funciones son "elevadas" (hoisted) a la parte superior de su ámbito (scope), lo que puede afectar la forma en que el código se ejecuta. 

Al declarar una variable con **var**, y al intentar acceder a ella antes de ser declarada, el código imprime "undefined". Esto se debe a que, a la hora de ejecutar el código, esa declaración se mueve al inicio del código. Por lo que, la variable ya existe (aunque no tenga su valor asignado aún).

Por lo contrario, si utilizamos **let** o **const** para declarar una variable (constante) este proceso ya no funciona igual que antes. Es decir, la declaración de la variable no se hoisteará al inicio de la ejecución.

> ## Object Literals obj={prop: value}:
Es una forma más concisa de definir objetos mediante una sintaxis simplificada

```javascript
// Antes de ES6
var obj = new Object();
obj.propiedad = "valor";

// Con ES6
let obj = {
    propiedad: "valor"
};
```
En un objeto se puede crear una propiedad cuyo nombre puede definirse y cambiar en tiempo de ejecucion

> ## Template Literals `${}`: 
Son una forma limpia y expresiva de crear strings dentro de los cuales es posible insertar expresiones de código directamente para concatenar su valor.

```javascript
function antesDeES6(nombre, identidadSecreta) {
    console.log("Este es: " + nombre + " mejor conocido como: " + identidadSecreta);
}

function templateString(nombre, identidadSecreta) {
    console.log(`Este es: ${nombre} mejor conocido como: ${identidadSecreta}`);
}

```

> ## Scape Sequence \:
Una secuencia de escape es una combinación de caracteres que representa un carácter especial en un string.

```javascript
function imprimirMensaje() {
    console.log("Mensaje: \n aqui hubo un salto de linea.")
}
```

> ## Destructuring {prop1: value1, prop2: value2} = obj:
Permite "desempaquetar" o "extraer" todas esas propiedades de un objeto para así poder acceder a ellas de manera más sencilla.

> ## Spread & Rest operators (...rest):
Permite tomar el contenido de un array y manipularlo de forma conveniente para empaquetar o desempaquetarlo.

> ## Default Assignment:
Permite que la función realice su tarea, reciba o no el argumento requerido, o en cualquier caso, que utilice esa asignación como valor por defecto hasta que el valor sea recibido o modificado.

> ## Nullish Coalescing (??):
Permite agregar un valor por defecto a una variable si su valor actual es nulo o es indefinido.