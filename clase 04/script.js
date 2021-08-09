// b.addEventListener("click",adios)
// click, blur, mouseover, click, focus, change,


// Ejercicios de eventos

// Crear un botón que al hacerle click, muestre un saludo por alert.

    // document.write("<button id='saludar'>click para que te salude</button>")
    // let e= document.querySelector("#saludar")
    // let saludo=()=>alert("Hola a todos")

    // e.addEventListener("click",saludo)

// Crear un botón que al hacerle click, muestre un mensaje en el HTML.

    // document.write("<button class='saludar'>click para para que te muestre un mensaje en el html</button>")
    // document.write("<p class='forma'></p>")
    //     let e= document.querySelector(".saludar")
    //     let saludo=()=>document.querySelector(".forma").innerText="hola a todos"

    //     e.addEventListener("click",saludo)

// Crear un botón que al hacerle click cambie de color.

    // document.write("<button class='verde'>click para que este boton cambie de color</button>")

    // let e= document.querySelector(".verde")
    // let saludo=()=>document.querySelector(".verde").classList.replace("verde","rojo")

    // e.addEventListener("click",saludo)

// Crear 5 botones numerados del 1 al 5. Al hacer click en uno y mostrar un mensaje que diga “Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.

    // document.write("<button class='uno'>click</button><p><button class='dos'>click</button><p><button class='tres'>click</button><p><button class='cuatro'>click</button><p><button class='cinco'>click</button>")


    //     let e= document.querySelector(".uno")
    //     let saludo1=()=>document.querySelector(".uno").innerText="Clickleaste en el boton numero 1"
    //     e.addEventListener("click", saludo1)

    //     let b= document.querySelector(".dos")
    //     let saludo2=()=>document.querySelector(".dos").innerText="Clickleaste en el boton numero 2"
    //     b.addEventListener("click", saludo2)

    //     let c= document.querySelector(".tres")
    //     let saludo3=()=>document.querySelector(".tres").innerText="Clickleaste en el boton numero 3"
    //     c.addEventListener("click", saludo3)

    //     let d= document.querySelector(".cuatro")
    //     let saludo4=()=>document.querySelector(".cuatro").innerText="Clickleaste en el boton numero 4"
    //     d.addEventListener("click", saludo4)

    //     let f= document.querySelector(".cinco")
    //     let saludo5=()=>document.querySelector(".cinco").innerText="Clickleaste en el boton numero 5"
    //     f.addEventListener("click", saludo5)


// Crear un input y un botón. Dentro del input el usuario debe ingresar un color y al hacre click, el input se pone de ese color y se genera un mensaje indicando el color elegido.
    // let color;
    // document.write("<input type='text' id='color'><button>Ingrese un color entre Verde, Rojo y azul</button>")
    // document.write("<p id='forma'></p>")
    // let e= document.querySelector("button")
    // let saludo=()=>{
    //      color=document.querySelector("#color").value
    //     if (color=="rojo"){
    //         document.querySelector("#forma").innerText="hola a todos el color es el " + color
    //         document.querySelector("#color").classList.add("rojo")
    //     } if (color=="verde"){
    //         document.querySelector("#forma").innerText="hola a todos el color es el " + color
    //         document.querySelector("#color").classList.add("verde")}
    //     else{
    //         document.querySelector("#forma").innerText="hola a todos el color es el " + color
    //         document.querySelector("#color").classList.add("azul")}
        
    // }
    // e.addEventListener("click",saludo)
    

// Crear dos input tipo número y un botón.
// a) Al hacer foco en un input se debe poner azul.
// b) Al escribir, se debe poner violeta.
// c) Cuando se le saca el foco, se pone verde.
// d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos

    // document.write("<input type='number' class='uno'><input type='number' class='dos'><button class='tres'>Sumar</button>")
    // document.write("<p id='suma'></p>")

    //     let e= document.querySelector(".uno")
    //     let input= document.querySelector(".uno")
    //     let b= document.querySelector(".uno")
    //     let c= document.querySelector(".dos")
    //     let d= document.querySelector(".tres")

    //     let saludo=()=>document.querySelector(".uno").classList.add("azul")

    //     let validar=()=>{
    //         if (document.querySelector(".uno").value){
    //             document.querySelector(".uno").classList.add("violeta")}}

    //     let quitar=()=>{document.querySelector(".uno").classList.remove("violeta", "azul")
    //                     document.querySelector(".uno").classList.add("verde")}

    //     let suma=()=>{  numero1=parseInt(document.querySelector(".uno").value)
    //                     numero2=parseInt(document.querySelector(".dos").value)
    //                     if (numero1 && numero2!=null) {
    //                         document.querySelector("#suma").innerText=`La suma es igual a ${numero1 + numero2}`}}

    //     e.addEventListener("focus", saludo) 
    //     input.addEventListener('keyup', validar);
    //     b.addEventListener("blur",quitar)//validar que tenga un numero
    //     d.addEventListener("click",suma)


// Poner en un select tres (o más) opciones de superheroes. Dependiendo el que el usuario elija, se mostrará debajo una imagen que haga referencia al personaje. Cuando se le pase el mouse por encima, la imagen debe mostrar una foto de su identidad secreta en su lugar. (Por ejemplo en lugar de verse superman, se vera a Clark Kent).


// Investigar y elegir un evento que no hayamos visto en clase. Hacer una demo de cómo funciona.

    //el evento que investiga y llamo la atencion es el onresize, lo que hace este evento que cada vez que agrande o achiques la pantalla se saltara un alerta para notificarte de lo sucedido.

    // document.write("<p>Te saltara un aler que la pantalla se achico o se agrando segun tu funcion!!! probamos!!! crtl +(mas) para agrandar y crlt - (menos) para.</p>")

    // window.onresize = resize;

    // function resize()
    // {
    //  alert("Hemos detectado que quieres agrandar o achicar pantalla!!!");
    // }
