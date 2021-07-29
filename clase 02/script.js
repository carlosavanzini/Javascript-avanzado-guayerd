/* // Seleccionar un elemento por su ID
console.log(document.querySelector("#chau").innerText)
// Seleccionar el primer elemento de su tipo
console.log(document.querySelector("p").innerText)
// Seleccionar el primer elemento de su clase
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de su tipo
console.log(document.querySelectorAll("p").innerText) // Esto es un arreglo
// Seleccionar todos los elementos de su clase
console.log(document.querySelectorAll(".p").innerText)
// Seleccionar varios tipos de elementos
console.log(document.querySelectorAll("p,span").innerText)
// Seleccionar el primer elemento de un grupo
console.log(document.querySelector(".p").innerText)
// Seleccionar todos los elementos de una clase y tipo
console.log(document.querySelectorAll("p.hola").innerText)



document.querySelectorAll(".hola").forEach(e => console.log( e.innerHTML)) // Recorrer el arreglo 

console.log(document.querySelectorAll("p,span").forEach(e =>e.innerHTML)) //Nos devuelve undefined

console.log(document.querySelector("#chau").innerHTML)
 */
/* 

document.querySelector(".hola").innerText = "<a href=''>Hola</a>" // Cambia el texto dentro de una etiqueta
document.querySelector(".chau").innerHTML = "<a href=''>Hola</a>" // Cambia la naturaleza del elemento
 */

// let mascota = document.querySelector("#mascota").innerHTML

// const foto = m => m ==="gatito" ? document.querySelector("img").src = "gatito.jpg" : document.querySelector("img").src = "perrito.jpg"

// document.querySelector("#texto").innerText = `Su mascota preferida es: ${mascota}`


// foto(mascota)


// Ejercicios de DOM

//       0) En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
// 	a) El primer span
        // console.log(document.querySelector("span").innerText)
// 	b) El primer span con clase “guayerd”
        // console.log(document.querySelector("span.guayerd").innerText)
// 	c) El span con id “hola”
        // console.log(document.querySelector("#hola").innerText)
// 	d) Todos los span
        // console.log(document.querySelectorAll("span").forEach(a => console.log( a.innerText)))
// 	e) Todos los elementos  con clase “guayerd”
        // console.log(document.querySelectorAll(".guayerd").forEach(a => console.log( a.innerText)))
// 	f) Todos los span con clase “guayerd”.
        // console.log(document.querySelectorAll("span.guayerd").forEach(a => console.log( a.innerText)))
// 	f) Todos los span y párrafos.
        // console.log(document.querySelectorAll("span,p").forEach(a => console.log( a.innerText)))



    //   <span>Uno</span>
    // <p class="guayerd">Setenta</p>
    // <span class="guayerd">Cinco </span>
    // <span>Dos</span>
    // <span>Test</span>
    // <span class="guayerd">Cuatro </span>
    // <span id="hola">Tres </span>
    // <p>Diez</p>
 



// Agregar en el archivo HTML con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.
// // a) Al ID azul cambiarle el texto por “Azul”.
//         document.querySelector("#azul").innerText = 'Azul';
// // b) Al primer párrafo cambiarle el texto por “Verde”.
//         document.querySelector("p").innerText = 'Verde';
// // b) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.   
//         document.querySelectorAll(".rojo").forEach(a => a.innerText = 'Rojo');
// // c) A todos los párrafos agregarles un “!” al final del texto. 
//         document.querySelectorAll("p").forEach(a => a.innerText += '!');
// d) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.
            


// Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. 


// Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.


// Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.

// Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. 
// Crear en el HTML un span con un angulo del 0 al 360. Luego calcular su opuesto y mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
// Ángulo: 90
// Opuesto: 270

// Generación de mails empresariales. Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
// nombre.apellido@empresa.com(.ar si es argentina).

// En un restaurante tienen menú del día según el día de la semana.
// a)  Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por pantalla el menú con el nombre del plato y una imagen del mismo.

// Lunes: Milanesas con puré 
// Martes: Fideos con salsa
// Miércoles: Pizza
// Jueves: Hamburguesas con papas fritas
// Viernes: Pastel de papa

// b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde el javascript.

// Milanesas con puré ($300)
// Fideos con salsa ($250)
// Pizza ($400)
// Hamburguesas con papas fritas ($430)
// Pastel de papa  ($280)



