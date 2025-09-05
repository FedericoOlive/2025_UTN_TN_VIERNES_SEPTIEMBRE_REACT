function handleSaludar(nombre) {

    return function (event) {
        alert('hola ' + nombre)
    }
}

//DOM = Document Object Model
//Document es un objeto que representa todo el HTML
//Tambien pordian usar .getElementById()
const h2_HTML = document.querySelector('#titulo-especial')

//recibe:
//1. String que es la key del evento
//2. function que es la accion a realizar
h2_HTML.addEventListener(
    'click',
    function () {
        alert('Hola pepe')
    }
    
)


/* 
Opcion 1
h2_HTML.addEventListener(
    'click',
    handleSaludar('pepe')
    
)
*/




/* 
TEMAS QUE NO PUEDEN FALTAR:

JS:
    -Tipos de datos
    -Tipos de variables (LET CONST)
    -scopes
    -Comparadores (==, !=, ===, !==, >, <, >=, <=)
    -Operadores aritmeticos
    -Operadores logicos
    -IF, ELSE, ELSE IF
    -FOR, FOR OF (idealmente el FOR IN)
    -functions (idealmente tambien la arrow function () => {})
    -Objetos
    -Arrays
    -metodos de array: push, splice, indexOf, includes
    -metodos avanzados de array: map, filter, find
    -desestructuring (objetos, array)
    -spread operator (...)
*/

//FOR OF
/* const nombres = ['messi', 'pepe', 'maria']
for(let nombre of nombres ){
    console.log(nombre)
}
 */


//Desestructuracion
//objetos
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 40
}
/* 
Version vieja sin desestructuracion
const nombre = persona.nombre
const apellido = persona.apellido
 */

/* Version nueva con desestructuracion */
//const {nombre, apellido, edad} = persona
//console.log('Hola ' + nombre + ' ' + apellido)

function saludar_2 ({
    nombre, 
    apellido, 
    edad
}){

    console.log('Hola ' + nombre + ' ' + apellido)
}

saludar_2(persona)

//arrays

const datos = ['pepe', '11222333']

const [nombre, dni] = datos
console.log("Mi dni es: " + dni)