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
 



//1) Agregar en el archivo HTML con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.
        // // a) Al ID azul cambiarle el texto por “Azul”.
        //         document.querySelector("#azul").innerText = 'Azul';
        // // b) Al primer párrafo cambiarle el texto por “Verde”.
        //         document.querySelector("p").innerText = 'Verde';
        // // b) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.   
        //         document.querySelectorAll(".rojo").forEach(a => a.innerText = 'Rojo');
        // // c) A todos los párrafos agregarles un “!” al final del texto. 
                //    document.querySelectorAll("p").forEach(a => a.innerText += '!');
        // d) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.
                // document.querySelectorAll("p,h1").forEach(a=>a.innerText ='*' + a.innerText)
                


// 2) Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. 

        // let tempMa=parseInt(prompt("Cual sera la temperatura maxima?"))
        // let tempMi=parseInt(prompt("Cual sera la temperatura minima?"))

        // let temperatura=(a,b)=>a/b;

        // document.querySelector("#tiempo").innerText=`La temperatura media es ${temperatura(tempMa,tempMi)} grados`


// 3) Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.

        // let estacion=prompt("Eliga una estacion del año: ")

        // let est= a =>{
        //         switch (a) {
        //                 case "verano":
        //                         document.querySelector("img").src="verano.jpg"   
        //                         break;
        //                 case "invierno":
        //                         document.querySelector("img").src="invierno.jpg"   
        //                         break;
        //                 case "otoño":
        //                         document.querySelector("img").src="otoño.jpg"   
        //                         break;
        //                 case "primavera":
        //                         document.querySelector("img").src="primavera.jpg"   
        //                         break;
        //                 default:
        //                         alert("Estacion del año no valida")
        //                         break;
        //         }
                
        //           } 

        // document.querySelector("img").innerText = `${est(estacion)}`



// 4) Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.
        // const añoActual = 2021
        // let edad = parseInt(prompt("En que año nacio? "))

        // let tiempo = a => añoActual-a>=18? "Usted es mayor de edad":"Usted es menor de edad"

        // document.querySelector("#nacio").innerText=`${tiempo(edad)} `

// 5) Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. 
        // let nombre;
        // let animal;
        
        //         let tipo= (nombre,animal) =>{
        //                 nombre=prompt("Ingrese su nombre: ");
        //                 animal=prompt("Ingrese su animal favorito dentro de estas cuatro opciones:\nPerro\nGato\nOveja\nPajaro");
        //                         switch (animal) {
        //                                 case "perro":
        //                                         document.querySelector("img").src="perro.jpg"   
        //                                         break;
        //                                 case "gato":
        //                                         document.querySelector("img").src="gato.jpg"   
        //                                         break;
        //                                 case "oveja":
        //                                         document.querySelector("img").src="oveja.jpg"   
        //                                         break;
        //                                 case "pajaro":
        //                                         document.querySelector("img").src="pajaro.jpg"   
        //                                         break;
        //                                 default:
        //                                         alert("opcion de animal  no valida")
        //                                         break;
        //                         }
        //                         document.querySelector("h3").innerText = `Hola como estas ${nombre}?, te muestro una foto de tu animal favorito` 
        //                           } 
        
        //                tipo(nombre,animal)
                        

// 6) Crear en el HTML un span con un angulo del 0 al 360. Luego calcular su opuesto y mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
// Ángulo: 90
// Opuesto: 270

// 7) Generación de mails empresariales. Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
// nombre.apellido@empresa.com(.ar si es argentina).

        // let nombre=prompt("Ingrese su nombre: ");
        // let apellido=prompt("Ingrese su apellido: ")
        // let empresa=prompt("Ingrese nombre de la empresa: ")
        // let nacionalidad=prompt("Su empresa es argentina?\nSi\nNo")

        // let correo =a=>a==="si"?".ar":""
        // document.querySelector("h4").innerText=`Su nuevo correo es ${nombre}.${apellido}@${empresa}.com${correo(nacionalidad)}`



//8) En un restaurante tienen menú del día según el día de la semana.
// a)  Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por pantalla el menú con el nombre del plato y una imagen del mismo.

// Lunes: Milanesas con puré 
// Martes: Fideos con salsa
// Miércoles: Pizza
// Jueves: Hamburguesas con papas fritas
// Viernes: Pastel de papa


let dia=prompt("Que dia es hoy?");
        
 let semana= (a) =>{
                        
                switch (a) {
                        case "lunes":
                                document.querySelector("h3").innerText = 'El menu de hoy es Milanesas con puré'
                                document.querySelector("img").src="milanesaconpure.jpg"   
                                break;
                        case "martes":
                                document.querySelector("h3").innerText = 'El menu de hoy es Fideos con salsa'
                                document.querySelector("img").src="fideosconsalsa.jpg"   
                                break;
                        case "miercoles":
                                document.querySelector("h3").innerText = 'El menu de hoy es Pizza'
                                document.querySelector("img").src="pizza.jpeg"   
                                break;
                        case "jueves":
                                document.querySelector("h3").innerText = 'El menu de hoy es Hamburguesas con papas fritas'
                                document.querySelector("img").src="hamburguesasconpapasfritas.jpg"   
                                break;
                        case "viernes":
                                document.querySelector("h3").innerText = 'El menu de hoy es Pastel de papa'
                                document.querySelector("img").src="pasteldepapas.jpg"   
                                        break;
                        default:
                                alert("opcion de dia no valida")
                                break;                      
                                }
                               
                                  } 
        
                              semana(dia)
                        


// b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde el javascript.

// Milanesas con puré ($300)
// Fideos con salsa ($250)
// Pizza ($400)
// Hamburguesas con papas fritas ($430)
// Pastel de papa  ($280)



