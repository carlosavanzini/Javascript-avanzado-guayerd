// Ejercicios ECMAScript 6

// Crear una función flecha que reciba un número y devuelva el doble del mismo.

    // let numero = a => a *2
    // alert(numero(5));

// Crear una función flecha que reciba dos números y muestre la suma de ellos.

    // let numero = (a,b) => a + b
    // alert(numero(5,10));
// Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola.
    // let num1=parseInt(prompt("Ingrese un numero: "));
    // let num2=parseInt(prompt("Ingrese otro numero: "));
    // let numero = (num1,num2) => num1 > num2? `El número mayor ${num1}`: `El numero mayor es ${num2}`
    // alert(numero(num1,num2));

// Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:
    //  let frutas = ["sandía","manzana","damasco","pelón","frambuesa","plátano"];
    //   let fruta=(element, index, array)=> {
    //     console.log("a[" + index + "] = " + element);
    // }
    // frutas.forEach(fruta);

// Mostrar por pantalla las raíces cuadradas de los números del siguiente array:
    // let numeros = [16,29,120,64,81]

    // let raices = numeros.map(Math.sqrt);

    // alert(raices)

// Solicitar al usuario su nombre y su signo del zodíaco y devolver un mensaje que devuelva esos mismos datos. Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.

    // let nombre = prompt("Ingrese su nombre: ");
    // let signo = prompt("Ingrese su signo: ");
    // alert(`Su nombre es ${nombre} y su signo es ${signo}`);

// Mostrar por pantalla los números mayores a 100 del siguiente array.
    //  let numeros = [160,23,120,60,1,-10,8,9483]

    //  let mayores = numeros.filter(numero => numero > 100);
    //  alert(mayores);

// Generar en base a un array, un nuevo array que tenga todos sus números consecutivos, y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En el array de consecutivos irá 9 , y en el array de precedentes irá 7). Al final mostrar por pantalla los tres array formados.
    //  let numeros = [15,28,32,40,11,-3,0,100]

    //  let consecutivos = numeros.map(numero => numero + 1);
    //  let anteriores= numeros.map(numero => numero - 1);
    //  console.log(`Los numeros consecutivos de ${numeros} son ${consecutivos}`);
    //  console.log(`Los numeros anteriores de ${numeros} son ${anteriores}`);

// Crear una función flecha que reciba un parámetro que indique el momento del día: “Mañana, tarde, noche” y en base a eso de un saludo personalizado. Ejemplo: “Buenos días, buenas tardes, buenas noches”.

        // let momentoDeldia=prompt("En que momento del dia estamos: ")
        
        // let saludo= (momentoDeldia) => console.log(`buenas ${momentoDeldia}`);
        // saludo(momentoDeldia);

// Mostrar del siguiente array los nombres que comiencen con “M”.
        // let personas = ["Mario","Santino","Clotilde","Margarita","Sebastian","Melchor","Macarena","Flavio"]

        // let nombres = personas.filter(nombre => nombre.substr(0,1) === "M");

        // alert(nombres);

// Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda:
// a) function despedir (nombre){
// console.log("Adios" + nombre) }
        //  let nombre = prompt("Ingrese su nombre: ");
        //  let despedir = a => console.log(`Adios ${a}`);
        //  despedir(nombre);

// b) function cobrar (monto,pago){
// return monto - pago;}
// console.log("Su vuelto es: " cobrar(monto,pago))

        // let monto = parseInt(prompt("Ingrese su monto: "));
        // let pago = parseInt(prompt("Ingrese su pago: "));

        // let cobrar = (monto,pago) =>console.log(`Su vuelto es ${monto -pago}`);
        // cobrar(monto,pago);
// c) function saludar () {
// console.log("Hola")}

        // let saludar = () => console.log("Hola");
        // saludar();
