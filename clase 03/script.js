// Ejercicios de clases

//1) Crear un párrafo. Luego desde el javascript hacer que se vea rojo.

    // document.write("<p>Hola mis amigos</p>");
    // document.querySelector("p").classList.add("rojo")

//2) Crear tres párrafos. Luego desde el javascript hacer que tengan un fondo verde.

    // document.write("<p>Hola mis amigos</p> <p>Hoy es viernes y todo estara genial</p> <p>Milanesas con papas</p>")
    // document.querySelectorAll("p").forEach(a=>a.classList.add("verde"))

//3) Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste, y a los clase blanco además hacer que el texto se vea blanco.

    // document.write("<h1><p>Hola mis amigos</p> <p>Hoy es viernes y todo estara genial</p><h1>");
    // document.write("<p>jugaremos Age</p><p>Oh mejor fifa 21</p>");
    // document.querySelector("h1").classList.add("blanco")
    // document.querySelectorAll("p").forEach(a=>a.classList.add("celeste"));


//4) En base al siguiente listado de notas, mostrar en verde los mayores a 7, amarillo los que están entre 4 y 6 y en rojo del tres para abajo.
notas = [9,2,7,6,6,4,5,10,3,9.5]

    let mayores = notas.filter(a=>a>7);
    let amarillos = notas.filter(a=>a>=4 && a<=6);
    let rojos = notas.filter(a=>a<3);


    document.write("<h1>Mayores a 7:</h1>");
    document.querySelector("h1").classList.add("verdeColor");
    mayores.forEach(a=>document.write(a+"</p>"))

    document.write("<h2>Los que estan entre 4 y 6:<h2>");
    document.querySelector("h2").classList.add("amarillo");
    amarillos.forEach(a=>document.write(a +"</p>"))

    document.write("<h3>Menores a 3:</h3>");
    document.querySelector("h3").classList.add("rojoColor");
    rojos.forEach(a=>document.write(a +"</p>"))

    
    



//  Tenemos el siguiente HTML. Vamos a preguntarle al usuario qué color quiere cambiar, y luego lo vamos a preguntar por cuál. (Dos input). En base a eso, nuestro javascript modificará el documento. Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
// (Nota: Se debe agregar el css correspondiente).
 
// <p class="rojo">Lorem ipsum dolor sit amet.</p>
// <p class="verde"> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//  <p class="azul"> Lorem ipsum dolor sit amet consecteturadipisicing elit. Suscipit!</p>
//  <p class="verde"> Lorem, ipsum.</p>
//  <p class="azul"> Lorem, ipsum dolor.</p>
//  <p class="verde"> Lorem ipsum dolor sit.</p>
// Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de párrafos con esa palabra y ese color que se requiera.

// a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
// b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” 
// c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. 
// d) Remover de los primeros 4 párrafos la clase “ayuda”
// e) Crear desde el CSS estilos personalizados para cada clase.
// Dado el siguiente HTML, poner en color azul los textos que comiencen con la letra “V”.
// <span>Viento</span>
// <span>Balanza</span>
// <span>Zapato</span>
// <span>Vertical</span>
// <span>Vuelta</span>
// <span>Trampa</span>