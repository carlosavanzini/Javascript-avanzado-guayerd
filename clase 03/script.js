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
    // notas = [9,2,7,6,6,4,5,10,3,9.5]

    // let mayores = notas.filter(a=>a>7);
    // let amarillos = notas.filter(a=>a>=4 && a<=6);
    // let rojos = notas.filter(a=>a<3);


    // document.write("<h1>Mayores a 7:</h1>");
    // mayores.forEach(a=>document.write("<li class='verdeColor'>" + a + "</li>"));
    // document.querySelectorAll(".verdeColor").forEach(a=>a.classList.add("verdeColor"));

    // document.write("<h1>Los que estan entre 4 y 6:</h1>");
    // amarillos.forEach(a=>document.write("<li class='amarillo'>" + a + "</li>"));
    // document.querySelectorAll(".amarillo").forEach(a=>a.classList.add("amarillo"));

    // document.write("<h1>Menores de 3:</h1>");
    // rojos.forEach(a=>document.write("<li class='rojoColor'>" + a + "</li>"));
    // document.querySelectorAll(".rojoColor").forEach(a=>a.classList.add("rojoColor"));


//5) Tenemos el siguiente HTML. Vamos a preguntarle al usuario qué color quiere cambiar, y luego lo vamos a preguntar por cuál. (Dos input). En base a eso, nuestro javascript modificará el documento. Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
// (Nota: Se debe agregar el css correspondiente).
 
    // document.write(" <p class='rojo'>Lorem ipsum dolor sit amet.</p><p class='verde'> Lorem ipsum dolor sit amet consectetur adipisicing.</p><p class='azul'> Lorem ipsum dolor sit amet consecteturadipisicing elit. Suscipit!</p><p class='verde'> Lorem, ipsum.</p><p class='azul'> Lorem, ipsum dolor.</p><p class='verde'> Lorem ipsum dolor sit.</p>")

    // document.write("<button onclick='cambiar()'>cambiar de colores</button>")

    // let cambiar=()=>{ 
    //     let color = prompt("¿Qué color quieres cambiar?");
    //     let colorAcambiar = prompt("¿A qué color quieres cambiar?");
        
    //     if (color == "rojo" && colorAcambiar==="azul") {    
    //         document.querySelectorAll("p").forEach(a=>a.classList.replace('rojo','azul'))}
    //     if (color == "rojo" && colorAcambiar==="verde") {    
    //         document.querySelectorAll("p").forEach(a=>a.classList.replace('rojo','verde'))}

    //     if (color == "azul" && colorAcambiar==="verde") {
    //         document.querySelectorAll("p").forEach(a=>a.classList.replace('azul','verde'))}
    //     if (color == "azul" && colorAcambiar==="rojo") {
    //         document.querySelectorAll("p").forEach(a=>a.classList.replace('azul','rojo'))}

    //     if (color == "verde" && colorAcambiar==="rojo") {
    //         document.querySelectorAll("p").forEach(a=>a.classList.replace('verde','rojo'))}
    //     if (color == "verde" && colorAcambiar==="azul") {
    //         document.querySelectorAll("p").forEach(a=>a.classList.replace('verde','azul'))}
    // }
        

//6) Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de párrafos con esa palabra y ese color que se requiera.
    //  let palabra = prompt("¿Escriba  la palabra?");
    //  let color = prompt("Escriba el color a elegir entre rojo, verde y azul");
    //  let cantidad = parseInt(prompt("¿Cuántos párrafos quiere que se realizen?"));

    // let parrafo=(palabra,color,cantidad)=> {for ( i = 0; i < cantidad; i++) {
    // document.write("<p class='" + color + "'>" + palabra + "</p>");  } }

    // parrafo(palabra,color,cantidad)
    

//7) a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
// b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” 
// c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. 
// d) Remover de los primeros 4 párrafos la clase “ayuda”
// e) Crear desde el CSS estilos personalizados para cada clase.

    // document.write("<p class='nuevo rojo saludo'>'Hola como estan?'</p><p class='rojo saludo'>'Hola como estan?'</p><p class='campo'>'Hola como estan?'</p><p class='nuevo saludo ayuda'>'Hola como estan?'</p><p class='nuevo ayuda'></p>")


    //     document.querySelectorAll("p").forEach(a=>{// el contains es para ver si en el grupo de clases esta la pedida
    //         if (!a.classList.contains("nuevo")) {
    //             a.classList.add("antiguo");
    //         }
    //     }
    //     )

    //     document.querySelectorAll("p").forEach(a=>{
    //         if (a.classList.contains("rojo")) {
    //             a.classList.add("transparencia");
    //         }
    //     })

    //     document.querySelectorAll("p").forEach(a=>{
    //         if (a.classList.contains("saludo")) {
    //             a.classList.remove("saludo");
    //         }else{
    //             a.classList.add("saludo");
    //         }
    //     })
                                            

    //     for ( i = 0; i <= 3; i++) {
    //         document.querySelectorAll("p").forEach(a=>{
    //             if(a.classList.contains("ayuda")){
    //                 a.classList.remove("ayuda")}})  
            
    //     }



//8)Dado el siguiente HTML, poner en color azul los textos que comiencen con la letra “V”.
/* <span>Viento</span>
<span>Balanza</span>
<span>Zapato</span>
<span>Vertical</span>
<span>Vuelta</span>
<span>Trampa</span> */

        // document.write("<span>Viento</span><span>Balanza</span><span>Zapato</span><span>Vertical</span><span>Vuelta</span><span>Trampa</span>");
        // document.querySelectorAll("span").forEach(a=>{//texContents le el constenido de los elementos, em este caso span!! y los puedo modifuicar,
        //     if (a.textContent.startsWith("V")) {//StartsWith es un metodo que sirve para leer una cadena y asignar una condicion, por ejemplo que empieze con V
        //         a.classList.add("azul");
        //     }
        // })
